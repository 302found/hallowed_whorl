const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  url = require('url').parse(req.url, true)
  res.end(
        FirstFactorial( url.query.n) + '\n'
        );
});

function FirstFactorial(num)
{ 
  // code goes here  
  for (i=num-1; i>=2; i--)
    num *= i
  return num; 
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

