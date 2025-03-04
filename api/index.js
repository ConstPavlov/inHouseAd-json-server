const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const config = require(path.join(__dirname, '../config.json')); 

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
