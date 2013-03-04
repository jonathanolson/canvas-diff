
// just used for test case creation
var http = require( 'http' );
http.createServer( function( req, res ) {
  var headers = {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST,OPTIONS'
  }
  
  if ( req.method === 'OPTIONS' ) {
    res.writeHead( 200, headers );
    res.end( 'Success' );
    return;
  }
  
  var body = "";
  req.on( 'data', function( chunk ) {
    body += chunk;
  } );
  req.on( 'end', function () {
    console.log( 'POSTed: ' + body );
    res.writeHead( 200, headers );
    res.end( 'Success' );
  });
} ).listen( 8082, '127.0.0.1' );
console.log( 'Server running at http://127.0.0.1:8082/' );
