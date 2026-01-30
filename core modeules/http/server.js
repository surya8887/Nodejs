const http = require('http');
const { json } = require('stream/consumers');

const server = http.createServer((req,res)=>{
    res.writeHead(200,'success',{
        'content-type':'application/json'
    }).end(JSON.stringify({
        name:'surya'
    }))
})

server.listen(4000,()=>{
    console.log(`server running at http://localhost:4000`);
    
})