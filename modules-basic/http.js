const http = require('http');

const port = 3000
http.createServer((req, res) => {
    res.writeHead(200, 'success', {
        'Content-Type': 'text/html'
    })
    res.end("<h1>Hello world </h1>")
}).listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);

})
