//Synchronus or blocling
//Asynchronus or non-blocking

const fs=require("fs");
let text=fs.readFile("text.txt","utf-8",(err,data)=>{
    console.log(err,data);
});
console.log("This is a text")