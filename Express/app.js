const express=require("express");
const path=require("path");
const fs = require("fs");
const app=express();
const port=8000;

app.use('./static',express.static('static'));
app.use(express.urlencoded())

app.set('view engine','pug');
  
app.set('views',path.join(__dirname,'views'));

app.get("/",(req,res)=>{
    const conten="This is an example of a content page"
    const parameters= {'title':'I am Alek','content':conten};
    res.status(200).render('index.pug',parameters)
});
app.post('/', (req, res)=>{
    name = req.body.name
    date = req.body.date
    who = req.body.who
    address = req.body.address
    more = req.body.more
    let outputToWrite = `the name of the client is ${name}, ${date} is the date, ${who}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params);

})
// app.post("/",(req,res)=>{
//     console.log(req.body)
//     const parameters= {'message':'Your form has been submitted'};
//     res.status(200).render('index.pug',parameters)
// })

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