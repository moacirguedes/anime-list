const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback')
const serveStatic = require("serve-static")

const app = express();

app.use(history({
  verbose: true
}))

app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 5000
app.listen(port);