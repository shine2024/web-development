import bodyParser from "body-parser";
import express from "express";
import {dirname } from "path";
import { fileURLToPath } from "url";
const __dirname=dirname(fileURLToPath(import.meta.url))



const app=express();


app.get("/",(req,res)=>{
// console.log(req);
res.send("<h1>HELLO WORLD</h1>")
});

app.get("/shiny",(req,res)=>{
res.sendStatus(200);
});

// completed get practice now post practice
app.post("/shiny",(req,res)=>{
    res.sendStatus(201);
    });
    
app.use(bodyParser.urlencoded({extended:true}));
app.get("/register",(req,res)=>{
        res.sendFile(__dirname+"/public/index.html");
        });

app.post("/register",(req,res)=>{
     
    console.log(req.body);
    res.sendFile(__dirname+"/public/index.html");
        });


let port=8080;
app.listen(port,()=>{
    console.log("hello world");
});          