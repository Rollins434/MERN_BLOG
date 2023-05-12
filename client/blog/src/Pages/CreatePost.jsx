import React, { useState } from "react";
import ReactQuill from "react-quill";
import { Navigate } from "react-router-dom";
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
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files,setFiles] = useState('')
  const [redirect,setRedirect] = useState(false)


  const data = new FormData();
  data.set('title',title);
  data.set('summary',summary);
  data.set('content',content);
  data.set('file',files[0]);

  const createPost = async(ev) =>{
ev.preventDefault();
  const response = await  fetch('http://localhost:5000/post',{
      method:'POST',
      body:data,
      credentials:'include'
    })
    if(response.ok){
      // console.log(response.ok)
      setRedirect(true)
    }
  }

  if(redirect){
   return <Navigate to={'/'} />
  }

  return (
    <>
      <form className="createpost" onSubmit={createPost} encType="multipart/form-data">
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
        <button style={{ marginTop: "1em" }}>Create Post</button>
      </form>
    </>
  );
};

export default CreatePost;
