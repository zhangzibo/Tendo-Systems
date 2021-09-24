'use strict'

const express = require("express");
const path = require("path");
const app = express();

//setup static and middleware
app.use(express.static("./public"))


// app.get("/",(req,res)=>{
//   res.sendFile(path.resolve(__dirname,"./index.html"))
// })

// app.get("/about",(req,res)=>{
//   res.status(200).send("about page")
// })

// app.all("*",(req,res)=>{
//   res.status(404).send("<h1>resource not found</h1>")

// })

app.listen(5000, ()=>{
  console.log("server is listning on port 5000")
})
