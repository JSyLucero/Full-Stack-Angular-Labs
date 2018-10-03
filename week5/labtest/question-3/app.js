const http = require('http');
const osinfo = require('./osinfo');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  if (req.url == '/') {
    res.end(JSON.stringify('No data found'));
  }
  
  else if (req.url == '/api/systeminfo') {
    let systeminfo = osinfo.systeminfo;
    res.end(JSON.stringify(systeminfo.getSystemInfo()));
  }

  else if (req.url == '/api/userinfo') {
    let systeminfo = osinfo.systeminfo;
    res.end(JSON.stringify(systeminfo.getUserInfo()));
  }

  else if (req.url == '/api/firewall') {
    let firewall = osinfo.firewall;
    res.end(JSON.stringify(firewall.getStatuses()));
  }

  else {
    res.statusCode = 404;
    res.end(JSON.stringify('Error'));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});