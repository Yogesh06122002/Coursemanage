import mongoose, { Types } from "mongoose";


const courseSchema = mongoose.Schema({
  name : {
    type:String,
    required:true
  },
  description : {
    type:String
    
  },
  category : {
    type:String
  },
  level : {
    type:String
    
  },
  chapters : [
    {
     type:mongoose.Schema.Types.ObjectId,
     ref:"Chapter"
    }

  ]

}
)

const Course =  mongoose.model("Course",courseSchema);

export default Course;