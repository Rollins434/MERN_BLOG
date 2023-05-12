import React, { useEffect, useState } from 'react'
import Post from '../Post'

const IndexPage = () => {
    const [posts,setPosts] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/post',{
            method:'GET'
        }).then(response => {
            response.json().then(data =>{
                // console.log(data)
                setPosts(data)
            })
        })
    },[])
  return (
    <>
   {posts && posts.map((data) =>{
    return (
        <React.Fragment key={data?._id}>
            <Post data={data}/>
        </React.Fragment>
    )
   })}
    </>
  )
}

export default IndexPage