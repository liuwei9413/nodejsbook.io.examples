var http = require('http');

http.createServer(function (req, res) {
  console.log(req);
  res.writeHead(501, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello World\n');
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');

