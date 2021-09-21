const http = require('http');
const app = require('./lib/app.js');

const server = http.createServer(app);

server.listen(7899);
