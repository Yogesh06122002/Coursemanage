import { create } from "../services/chapterService.js";

export const chapterCreate = async (req,res) => {
  try{
    const data = req.body;
    if(data){
      const chapter = await create(data);
      if(chapter){
        console.log("chapter created successfully");
      }

    }else{
      console.log("chapter not created");
    }
  }catch(err){
    console.log("error creating chapter",err);
  }
}