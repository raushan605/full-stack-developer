var os=require('os');
var os=require('fs');
var http=require('http');

console.log(os.platform());
console.log(os.arch());

os.writeFileSync('abc.txt','Welcome to edureka');
http.createServer(function (req,res)){
res.writeHead(200,{'Content-type':'text/plain'});
res.write('Hello');
res.end();

}).listen(2000);