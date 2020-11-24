const fs=require("fs");
const text=fs.readFileSync("text.txt","utf-8");
txt=text.replace("Hello","Alek");
console.log("The file is");
console.log(txt);
fs.writeFileSync("alek.txt",txt);