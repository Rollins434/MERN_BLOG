import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Layout from "./Layout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Post from "./Post";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Post/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      </Route>
    </Routes>
  );
};

export default App;
