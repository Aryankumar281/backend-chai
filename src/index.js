// require('dotenv').config({path:'./env'})
//^ not goo method so try this
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from "./app.js"
dotenv.config({
    path: './env'
})

connectDB()
.then(() =>{
    app.on("error",(e)=>{
        console.log("APP NOT ABLE TO TALK TO DATABASE",error);
        throw error
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO DB connection failed");
})







/*
import express from "express";
const app = express()

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(e)=>{
            console.log("APP NOT ABLE TO TALK TO DATABASE",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`APP IS LISTENING AT PORT ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ",error)
        throw error
    }
})()
*/