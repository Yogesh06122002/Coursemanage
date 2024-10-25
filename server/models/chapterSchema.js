import mongoose, { Types } from "mongoose";

const chapterSchema = mongoose.Schema({
  title:{
    type:String

  },
  topics:[
    {
      title:{
        type:String
      },
      content:{
        type:String
      }
    }
  ],

})

const Chapter = mongoose.model('Chapter',chapterSchema);

export default Chapter;