const http = require('http');
http.createServer(function(req,res){
res.end('Hello World');
}).listen(8888);
console.log('Server Running');