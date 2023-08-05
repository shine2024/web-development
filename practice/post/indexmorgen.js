import express from "express";
import morgan  from "morgan";


const app=express();
const port=8000;
// app.use(morgan("tiny"));
// app.use(morgan("combined"));
app.use((req,res,next)=>{
    console.log(req.method);
    console.log(req.url);
next();})

app.get("/",(req,res)=>{
    res.send("hello world");
});
app.listen(port,()=>{
    console.log("server is started");
})

