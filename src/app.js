const express = require("express");

//Start a server instace
const app = express();

//Create a server
app.listen("1207",()=>{
    console.log("Server is listening on 1207");
});

//Tutorial 2: Request handlers
// app.get("/profile",(req,res)=>{
//     res.send({firstName:"Aditya",lastName:"Dhar"});
// });

// app.post("/profile",(req,res)=>{
//     res.send("Profile created successfully")
// });

// app.put("/profile",(req,res)=>{
//     res.send("Profile updated successfull")
// });

// app.delete("/profile",(req,res)=>{
//     res.send("Profile deleted successfully")
// });

// app.use("/",(req,res) =>{
//     res.send("This is from parent request handler");
// });

//Tutorial 3: Introdcution to sequence of route handlers and Next()
app.get("/profile",
    [(req,res,next)=>{
            console.log("Into GET Profile API");
        //    res.send({firstName:"Aditya",lastName:"Kulkarni"});
        next();
        
        },
        (req,res)=>{
            console.log("This is inside arrat 2nd route");
            res.send("This is inside array 2nd route");
        }
    ],
    (req,res,next)=>{
        console.log("Into second function outside array");
       res.send("This comes from second block");
       //next();
    }
);
