import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Layout from "./Layout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Post from "./Post";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./Pages/CreatePost";
import IndexPage from "./Pages/IndexPage";
import PostPage from "./Pages/PostPage";
import NoMatch from "./NoMatch";
import EditPost from "./Pages/EditPost";

const App = () => {
  return (
    <UserContextProvider>

    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<IndexPage/>}/>
      <Route path="/login" element={<Login/>} />
      {/* <Route path="/register" element={<Register/>} /> */}
      <Route path="/create" element={<CreatePost/>} />
      <Route path="/edit/:id" element={<EditPost/>} />
      <Route path="/post/:id" element={<PostPage/>} />
      <Route path="*" element={<NoMatch/>}/>
      </Route>
    </Routes>
    </UserContextProvider>
  );
};

export default App;
