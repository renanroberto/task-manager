'use strict'

const http = require('http')
const app = require('../src/app')

const port = process.env.PORT || 8080

app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('error', onError)

console.log("Server started on port " + port)

function onError(error){
  if(error.syscall !== 'listen') throw error;

  const bind = "Port " + port;

  switch(error.code){
    case 'EACCES':
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}
