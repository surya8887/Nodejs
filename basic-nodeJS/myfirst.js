const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end('Hello World\n');
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

/*
nodejs basic-commands:
1. node myfirst.js  --> to run the file
2. ctrl + c        --> to stop the server
2. node --version = node -v  --> to check nodejs version
3. npm --version = npm -v   --> to check npm version

*/  

