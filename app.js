const http = require('http');
const fs = require('fs');
const port = 090;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  console.log("Server is running at port " + port);
  
  fs.readFile('index.html', (err, data) => {
      res.write("Hi " + data);
      res.end();
  });
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
