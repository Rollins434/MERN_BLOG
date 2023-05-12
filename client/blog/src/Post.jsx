import React from 'react'
import {formatISO9075} from "date-fns"
import { Link } from 'react-router-dom'

const Post = ({data}) => {
  
  return (
    <div className="post">
        <div className="image"> 
        <Link to={`post/${data._id}`}>
        <img
          src={`http://localhost:5000/${data?.cover}`}
         
          className="img"
        />
          </Link>
        </div>
       
     
        <div className="text">
          <Link to={`post/${data._id}`}>
          <h2>{data?.title}</h2>
          </Link>
          <a>{data?.author?.username}</a>
<span>{formatISO9075(new Date(data?.createdAt))}</span>
        
          <p>
           {data?.summary}
          </p>
        </div>
      </div>
  )
}

export default Post