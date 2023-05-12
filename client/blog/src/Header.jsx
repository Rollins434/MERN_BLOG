import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const Header = () => {
  // const [username,setUserName] = useState(null)
  const {userInfo,setUserInfo} = useContext(UserContext)


  useEffect(() => {
    fetch("http://localhost:5000/profile", {
      credentials:"include"
    }).then((res) => {
      res.json().then((user) => {
        
        setUserInfo(user)
      })
    });
    

  }, []);


 async function logout() {
   const response = await fetch('http://localhost:5000/logout', {
      credentials: 'include',
      method: 'POST',
    });

    setUserInfo(null)
  }

  return (
    <header>
      <Link to={"/"} className="logo">
        Blog
      </Link>
      <nav>
      {userInfo?.username && (
          <>
            <Link to="/create" className="linknewpost">Create new post  </Link>
            <a onClick={logout} style={{cursor:"pointer"}}className="linknewpost" >Logout</a>
          </>
        )}
        {!userInfo?.username && (
          <>
            <Link to="/login" className="loginlink">Login</Link>
            {/* <Link to="/register" className="registerlink">Register</Link> */}
          </>
        )} 
      </nav>
    </header>
  );
};

export default Header;
