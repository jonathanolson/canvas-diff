
var http = require( 'http' );
var fs = require('fs');

var ip = '192.168.1.74';
var port = 8082;

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
    console.log( 'OPTIONS request' );
    res.writeHead( 200, headers );
    res.end( 'Success' );
    return;
  }
  
  var postdata = "";
  req.on( 'data', function( chunk ) {
    postdata += chunk;
  } );
  req.on( 'end', function () {
    var browser = decodeURIComponent( req.url.slice( 1 ) );
    console.log( browser );
    
    fs.writeFile( '../snapshots/' + browser + '.js', postdata, function( err ) {
      if( err ) {
        console.log( err );
        
        res.writeHead( 500, headers );
        res.end( 'Failure' );
      } else {
        console.log( "Saved:\n" + postdata );
        
        res.writeHead( 200, headers );
        res.end( 'Success' );
      }
    }); 
  });
} ).listen( port, ip );
console.log( 'ip: ' + ip );
console.log( 'port: ' + port );
