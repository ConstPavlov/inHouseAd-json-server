const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('api/db.json');
const middlewares = jsonServer.defaults();
const config = require('../config.json');

server.use(middlewares);


server.use((req, res, next) => {
  setTimeout(next, config.delay || 0);
});

server.use(router);

const PORT = config.port || 3100;

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

module.exports = server;