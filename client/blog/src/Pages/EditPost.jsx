import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { Navigate, useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";

const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
const EditPost = () => {
    
    const {id} = useParams()

    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [files,setFiles] = useState('')
    const [redirect,setRedirect] = useState(false)
  
    useEffect(() => {
        fetch('http://localhost:5000/post/'+id)
          .then(response => {
            response.json().then(postInfo => {
              setTitle(postInfo.title);
              setContent(postInfo.content);
              setSummary(postInfo.summary);
            });
          });
      }, []);

      async function updatePost(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);
        if (files?.[0]) {
          data.set('file', files?.[0]);
        }
        const response = await fetch('http://localhost:5000/post', {
          method: 'PUT',
          body: data,
          credentials: 'include',
        });
        if (response.ok) {
          // setRedirect(true);
        }
      }
    
      if (redirect) {
        return <Navigate to={'/post/'+id} />
      }
     
  return (
    <>
      <form className="createpost" onSubmit={updatePost} encType="multipart/form-data">
        <input
          type="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="summary"
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <input type="file"   onChange={ev => setFiles(ev.target.files)}/>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={newValue => setContent(newValue)}
          modules={modules}
        />
        <button style={{ marginTop: "1em" }}>Edit Post</button>
      </form>
    </>
  )
}

export default EditPost