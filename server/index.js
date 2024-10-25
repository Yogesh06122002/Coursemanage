import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js' 
import cors from 'cors';
import courseRoutes  from './routes/courseRoutes.js'
import chapterRoutes from './routes/chapterRoutes.js'
 
dotenv.config();


const app = express();
app.use(cors());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB');  
}).catch((err)=>{
console.log("Mongodb connection error",err)
}); 
const PORT = process.env.PORT;
app.use(express.json());  

app.use('/api/user',userRoutes);
app.use('/api/course',courseRoutes);
app.use('/api/chapter',chapterRoutes);


app.listen(PORT,() => {
  console.log(`Server running on PORT ${PORT}`); 
})


