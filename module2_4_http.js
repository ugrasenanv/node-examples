// Module 2 Built in Modules
// HTTP Module

const http = require("http");

let server =  http.createServer((req, res) => {

   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello World\n');
});

server.listen(8081);

console.log('Server listening on port 8081');

