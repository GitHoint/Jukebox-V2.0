const http = require('http');

const PORT = process.env.PORT || 3000;

const requestListener = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello from Jukebox server\n');
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});