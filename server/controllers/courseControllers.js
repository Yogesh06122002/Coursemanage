import { create } from "../services/courseService.js";


export const createCourse = async (req,res) => {
  try{
    const data = req.body;
    if(data){
      const course = await create(data);
      if(course){
        console.log("course create successfully")
      }
    }else{
      console.log("data is empty")
    }
  }catch(err){
    console.log("Course create failed",err);
  }
}

