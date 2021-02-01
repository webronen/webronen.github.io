const http = require( 'http' );
const path = require( 'path' );
const fs = require( 'fs' );

const hostname = '127.0.0.1';
const port = 8080;

const mime = [];
mime[0] = [ '.html','text/html' ];
mime[1] = [ '.css','text/css' ];
mime[2] = [ '.js', 'text/javascript' ];

const server = http.createServer( ( req, res ) => {
  
  res.statusCode = 200;
  res.setHeader( 'Content-Type', 'text/plain' );
  res.end( 'Hello World!' );
  
} );

server.listen(port, hostname, () => {
  
  console.log( `Server running at http://${hostname}:${port}/` );
  
} );