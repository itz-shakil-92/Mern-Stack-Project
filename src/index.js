import dotenv from 'dotenv'
import mongoose from "mongoose"
import {DB_NAME} from "../src/constants.js";
import connectDB from "../db/index.js";
import {app} from "../src/app.js";

dotenv.config({
    path: './.env' // Ensure the file is correctly named and located
  });
  
//DataBase connected
connectDB() 
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
     console.log(`Server is running at port : ${process.env.PORT}`);
  })
})
.catch((err)=>{
  console.log("MONGO DB CONNECTION FAILED !!!",err);
})  














/*
import express from 'express'
const app=express()

//ifis
;(async ()=>{
try{
  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
app.on("error",(error)=>{
    console.log("Error: ",error);
    throw error
})

app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${process.env.PORT}`);
})
}
catch(error){
   console.error("Error: ",error)
   throw error
}
})

*/