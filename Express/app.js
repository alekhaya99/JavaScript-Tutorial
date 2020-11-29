const express=require("express")
const app=express();
const port=8000

app.get("/",(req,res)=>{
    res.status(200).send("THIS IS MY FIRST EXPRESS APP TUTORIAL")
});

app.get("/about",(req,res)=>{
    res.send("THIS IS MY FIRST EXPRESS APP TUTORIAL IN ABOUT")
})

app.post("/post",(req,res)=>{
    res.send("THIS IS MY FIRST EXPRESS APP TUTORIAL IN POST")
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})