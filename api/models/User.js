// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema({
//     username: { type: String, required: true ,unique:true,min:4},
//     password: { type: String, required: true, },

// })

// const User = mongoose.model('User',UserSchema)

// export default User;

const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
  username: {type: String, required: true, min: 4, unique: true},
  password: {type: String, required: true},
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;