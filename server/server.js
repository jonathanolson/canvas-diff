
// just used for test case creation
var http = require( 'http' );
http.createServer( function( req, res ) {
  // see http://nodejs.org/api/http.html#http_request_method for docs
  
  var headers = {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST,OPTIONS'
  }
  
  // bail out quickly if it is just an OPTIONS request from CORS (we are on a different port)
  if ( req.method === 'OPTIONS' ) {
    res.writeHead( 200, headers );
    res.end( 'Success' );
    return;
  }
  
  var postdata = "";
  req.on( 'data', function( chunk ) {
    postdata += chunk;
  } );
  req.on( 'end', function () {
    console.log( 'POSTed: ' + postdata );
    res.writeHead( 200, headers );
    res.end( 'Success' );
  });
} ).listen( 8082, '127.0.0.1' );
console.log( 'Server running at http://127.0.0.1:8082/' );
