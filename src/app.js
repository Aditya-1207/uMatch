const express = require("express");

//Start a server instace
const app = express();

//Create a server
app.listen("1207",()=>{
    console.log("Server is listening on 1207");
});

//Request handlers

app.use("/test",(req,res) => {
    res.send("from test api");
});

app.use("/hello",(req,res)=>{
    res.send("from hello API")
});

app.use("/",(req,res)=>{
    res.send("Hello Wor1ld!")
});