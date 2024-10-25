import User from "../models/userModel.js";
import bcrypt from 'bcrypt';

export const register = async (data) => {
  const existUser = await User.findOne({email : data.email});
  if(existUser){
    throw new Error("User already exist");
  }else{

    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;

    const result = User.create(data);
    return result;
  } 
}

export const login = async (data) => {
  const user = await User.findOne({email : data.email});
  if(!user){
    throw new Error("user not found");
  }

  const isMatch = await bcrypt.compare(data.password , user.password);

  if(!isMatch){
    throw new Error("Invalid password");
  }

  return user;
  }



