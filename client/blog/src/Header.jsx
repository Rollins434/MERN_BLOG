import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [username,setUserName] = useState(null)
  useEffect(() => {
    fetch("http://localhost:5000/profile", {
      credentials:"include"
    }).then((res) => {
      res.json().then((user) => {
        setUserName(user.username);
        
      })
    });
  }, []);

 async function logout() {
   const response = await fetch('http://localhost:5000/logout', {
      credentials: 'include',
      method: 'POST',
    });

    setUserName(null);
  }

  return (
    <header>
      <Link to={"/"} className="logo">
        Blog
      </Link>
      <nav>
      {username && (
          <>
            <Link to="/create">Create new post {username.toUpperCase()} </Link>
            <a onClick={logout} style={{cursor:"pointer"}}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
