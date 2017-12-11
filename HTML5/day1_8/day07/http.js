/**
 * Created by web-01 on 2017/10/24.
 */
"use strict";
var http = require('http');
var server = http.createServer();
server.on('request',function(req,res){
   res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World\n');
});
server.listen('80');
console.log('Server running');