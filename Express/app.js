const express=require("express");
const path=require("path");
const app=express();
const port=8000

app.use('./static',express.static('static'));

app.set('view engine','pug');

app.set('views',path.join(__dirname,'views'));

app.get("/",(req,res)=>{
    const conten="This is an example of a content page"
    const parameters= {'title':'I am Alek','content':conten};
    res.status(200).render('index.pug',parameters)
});

// app.get("/demo",(req,res)=>{
//     res.status(200).render('demo',{title:'Hello',message:"Hello World"})
// });


// app.get("/",(req,res)=>{
//     res.status(200).send("THIS IS MY FIRST EXPRESS APP TUTORIAL")
// });

// app.get("/about",(req,res)=>{
//     res.send("THIS IS MY FIRST EXPRESS APP TUTORIAL IN ABOUT")
// })

// app.post("/post",(req,res)=>{
//     res.send("THIS IS MY FIRST EXPRESS APP TUTORIAL IN POST")
// })

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})