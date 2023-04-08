// import express from "express"
// import cors from "cors";
// import mongoose from "mongoose";
// import User from './models/User.js'
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import cookieParser from "cookie-parser";
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
var bcrypt = require('bcryptjs');
const User = require('./models/User')

const app =   express();
app.use(cookieParser())
app.use(cors({credentials:true,origin:'http://127.0.0.1:5173'}))
app.use(express.json())

const salt = bcrypt.genSaltSync(10);
const secret = "1w2e3r4";

 mongoose.connect('mongodb+srv://godeye8264:sZf2rQJSfbfDIdTy@cluster0.yypvic8.mongodb.net/?retryWrites=true&w=majority')

app.post("/register", async (req,res) =>{
const {username,password} = req.body;
try {
    const usercreated = await User.create({username,password:bcrypt.hashSync(password,salt)})
    res.json(usercreated)
   
} catch (error) {
    res.status(400).send(error)
}
})

app.post("/login" , async (req,res) => {
    const {username,password} = req.body;
    const userDoc =  await User.findOne({username});
    const passOK = bcrypt.compareSync(password,userDoc.password)

   if(passOK){
    jwt.sign({username,id:userDoc._id}, secret, {expiresIn:"2h",} ,(err,token) => {
    if (err) throw err;
    res.cookie("token",token,{
        httpOnly:true,
        secure:true,
        sameSite:'none'
       
    
    }).json("ok")
   
    })
   }
   else {
    res.status(400).json("wrong credentials")
   }
})

app.get("/profile", (req,res) =>{
  
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err,info) => {
      if (err) throw err;
      res.json(info);
    });
    // res.json(req.cookies)
})

app.post('/logout', (req,res) => {
  
    res.cookie("token",'',{
        httpOnly:true,
        secure:true,
        sameSite:'none'
       
    
    }).json("ok")
  });

app.listen(5000,() =>{console.log("server is up")})



// mongodb+srv://godeye8264:sZf2rQJSfbfDIdTy@cluster0.yypvic8.mongodb.net/?retryWrites=true&w=majority