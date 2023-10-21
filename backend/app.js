require('dotenv').config();
const express=require("express");
const connectToDb=require("./config/db")
const app=express()

const PORT=process.env.PORT || 7000

connectToDb();


app.listen(PORT,()=>{
    console.log(`port no listening on ${PORT}`)
})