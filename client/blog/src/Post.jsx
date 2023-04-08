import React from 'react'

const Post = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
  return (
    <div className="post">
        <div className="image"> 
        <img
          src="https://images.unsplash.com/photo-1679588062232-e8eb7d31f3bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          alt="plant"
          className="img"
        /></div>
       
     
        <div className="text">
          <h2>this is a plant</h2>

          <span>{today.toDateString()}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            voluptatum qui pariatur, cum, vero corporis ullam ab asperiores
            quasi cupiditate repellendus velit adipisci labore voluptates
            distinctio sint saepe amet porro?
          </p>
        </div>
      </div>
  )
}

export default Post