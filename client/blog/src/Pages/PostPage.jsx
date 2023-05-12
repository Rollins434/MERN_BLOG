import { formatISO9075 } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../UserContext";
import {Link} from 'react-router-dom';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState("");

  const {userInfo} = useContext(UserContext)

  useEffect(() => {
    const getPost = async () => {
      const res = await fetch(`http://localhost:5000/post/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
    
      setPost(data);
    };
    getPost();
  }, []);

  return (
    <>
      <div className="postpage">
        <h1 className="postpage__title">{post?.title} </h1>

        <div className="author" style={{ textAlign: "center" }}>
          by @{post?.author?.username}
        
        </div>
     
       {
        userInfo?.id === post?.author?._id && (
          <div className="linkwrapper" >
          <Link className="link" to={`/edit/${post?._id}`}>
            
            Edit this post
          </Link>
        </div>
        )
       }

        <div className="postpage__image">
          <img src={`http://localhost:5000/${post?.cover}`} />
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: post?.content }}
          className="content"
        ></div>
      </div>
    </>
  );
};

export default PostPage;
