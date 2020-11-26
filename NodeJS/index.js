const http=require('http');
const fs=require('fs');

const hostname='127.0.0.1';
const port=3000;

const home = fs.readFileSync('NodeJS/index.html')
const about = fs.readFileSync('NodeJS/about.html')

const server=http.createServer((req,res)=>{
    console.log(req.url)
    url = req.url;
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    if(url == '/'){
        res.end(home);
    }
    else  {
        res.end(about);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
