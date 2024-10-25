import { login, register } from "../services/userServices.js";
import jwt from 'jsonwebtoken';


export const signUp = async (req,res) => {
  try{
    const data = req.body;
     const user = await register(data);
     if(user){
      res.status(200).json({Message:"User Registered Successfully"});
     }else{
      console.log("User register failed")
     }
  }catch(err){
    if( err.message === "User already exist"){
      res.status(400).send("User already exist");
    }else{
      console.log("something went wrong",err)
    }

  }
}


export const signIn = async (req,res) => {
  try{
    const data = req.body;
    const user = await login(data);

    if(user){
      const accessToken = jwt.sign({id : user._id},process.env.JWT_SECRET,{expiresIn:"15m"});
      const refreshToken = jwt.sign({id : user._id},process.env.REFRESH_TOKEN_SECRET,{expiresIn:"7d"});

      res.status(200).json({
        message:"Login successfull",
        accessToken,
        refreshToken
      })

    }else{
      res.status(400).json({message:"Invalid email or password"});
    }
  }catch(err){
    console.log("Login error",err);
    res.status(500).send("Something went wrong during login.")
  }
}