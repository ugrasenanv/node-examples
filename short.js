/**
 *  * @file short
 *  * Start: node short.js
 *  * @authoer Ugrasenan
 *   */
var os = require('os');
var http = require('http');

var server = http
  .createServer(function (req, res) {
    console.log(req.connection.remoteAddress + ':' + req.connection.remotePort);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
    res.destroy(); // destroy immediately
  })
  .listen(8124);
//server.setTimeout(1000); //1 second

console.log('start ' + os.hostname() + ':8124');
