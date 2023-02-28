const http=require('http');
const fs=require('fs/promises');
const { url } = require('inspector');
const port =5000

http.createServer(async(req,res)=>
{
    if(req.url==='/'||req.url==='/home')
    {
        res.statusCode=200
        res.statusMessage="all ok"
        res.setHeader("content-type","text/html")
        let data=await fs.readFile("./Hello.html","utf-8")
        res.end(data)
    }
    else if(req.url==='/style')
    {
        res.writeHead(200,"okay",{"content-type":"text/css"})
        let css=await fs.readFile("./hello.css","utf-8")
        res.end(css)
    }
    else if(req.url==='/video')
    {
        res.writeHead(200,"okay",{"content-type":"video/mp4"})
        let video=await fs.readFile("./Videos/Akhanda Trailer Roar Nandamuri Balakrishna Boyapati Srinu Thaman S Dwaraka Creations [TubeRipper.com].mp4")
        res.end(video)
    }
    else
    {
        res.writeHead(404,"something gone wrong",{"content-type":"text/html"})
        let pnf=await fs.readFile("./pagenotfound.html","utf-8")
        res.end(pnf)
    }
})
.listen(5000,(err)=>
{
    if(err)throw err;
    console.log('this server is running on port 5000... ',port);
})