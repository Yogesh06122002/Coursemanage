import mongoose, { Types } from "mongoose";

const userModel = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  phno:{
    type:Number
  }
});

const User = mongoose.model("User",userModel);
export default User;

