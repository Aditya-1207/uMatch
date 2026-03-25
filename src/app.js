const express = require("express");

//Start a server instace
const app = express();

//Create a server
app.listen("1207",()=>{
    console.log("Server is listening on 1207");
});

//Request handlers

app.get("/profile",(req,res)=>{
    res.send({firstName:"Aditya",lastName:"Dhar"});
});

app.post("/profile",(req,res)=>{
    res.send("Profile created successfully")
});

app.put("/profile",(req,res)=>{
    res.send("Profile updated successfull")
});

app.delete("/profile",(req,res)=>{
    res.send("Profile deleted successfully")
});

app.use("/",(req,res) =>{
    res.send("This is from parent request handler");
});
