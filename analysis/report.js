
var fs = require('fs');
var pngjs = require( 'node-pngjs' );
var _ = require( 'lodash' );
var streamifier = require( 'streamifier' );

var browsers = [];

var prefix = '../snapshots/';

var snapshotFiles = fs.readdirSync( prefix );

_.each( snapshotFiles, function( filename ) {
  if ( filename.slice( -3 ) === '.js' ) {
    eval( '' + fs.readFileSync( prefix + filename ) );
  }
} );

var count = 0;

var snapshotNames = [];

_.each( browsers, function( browser ) {
  browser.data = {};
  // console.log( browser.id );
  // console.log( browser.name );
  _.each( browser.snapshots, function( snapshotURL, snapshotName ) {
    snapshotNames.push( snapshotName );

    var buffer = new Buffer( snapshotURL.match( /^data:.+base64,(.*)$/ )[1], 'base64' );
    var readStream = streamifier.createReadStream( buffer );
    var png = new pngjs.PNG( {
      filterType: -1 // autodetect
    } );

    count += 1;
    png.on( 'parsed', function() {
      browser.data[snapshotName] = {
        rgba: png.data,
        width: png.width,
        height: png.height
      };
      //console.log( browser.id + ' ' + snapshotName + ' ' + png.width + 'x' + png.height );

      count -= 1;

      if ( count === 0 ) {
        afterDataWritten();
      }
    } );

    readStream.pipe( png );
  } );
} );

// returns average absolute difference
function compareData( a, b ) {
  var width = a.width;
  var height = a.height;
  if ( width !== b.width || height !== b.height ) {
    throw new Error( 'Bad dimensions: ' + a.toString() + ' ' + b.toString() );
  }

  var differenceSum = 0;

  for ( var y = 0; y < height; y++ ) {
    for ( var x = 0; x < width; x++ ) {
      var idx = ( width * y + x ) << 2;
      var rgbDiff = Math.abs( a.rgba[idx] - b.rgba[idx] ) +
                    Math.abs( a.rgba[idx + 1] - b.rgba[idx + 1] ) +
                    Math.abs( a.rgba[idx + 2] - b.rgba[idx + 2] );
      var alphaDiff = Math.abs( a.rgba[idx + 3] - b.rgba[idx + 3] );
      var averageAlphaFloat = ( a.rgba[idx + 3] + b.rgba[idx + 3] ) / ( 2 * 255 );

      var alphaRatio = alphaDiff / 255;

      differenceSum += 255 * alphaRatio + ( rgbDiff / 3 ) * averageAlphaFloat * ( 1 - alphaRatio );
    }
  }

  // console.log( differenceSum );

  return differenceSum / ( width * height );
}

function afterDataWritten() {
  snapshotNames = _.unique( snapshotNames );

  //console.log( 'done' );

  var clusterMap = {};

  _.each( snapshotNames, function( snapshotName ) {
    var clusters = [];

    _.each( browsers, function( browser ) {
      if ( browser.data[snapshotName] ) {
        // most naive clustering possible
        for ( var i = 0; i < clusters.length; i++ ) {
          var diff = compareData( browser.data[snapshotName], clusters[i][0].data[snapshotName] );
          // if ( snapshotName === 'a3pi1piarc' ) {
          //   console.log( diff + ' ' + browser.id + ' to ' + clusters[i][0].id );
          //   // console.log( browser.data[snapshotName] );
          //   // console.log( clusters[i][0].data[snapshotName] );
          // }
          if ( diff < 2 ) {
            clusters[i].push( browser );
            return;
          }
        }
        // no matching cluster, create one
        clusters.push( [browser] );
      }
    } );

    //console.log( snapshotName );
    _.each( clusters, function( cluster ) {
      //console.log( cluster[0] );
    } );

    clusterMap[snapshotName] = clusters;
  } );

  // output
  var includeAllFromCluster = false;

  var str = '';

  str += 'var browserData = {\n';
  _.each( browsers, function( browser ) {
    // TODO: escaping!
    str += '  "' + browser.id + '": {\n';
    str += '    name: "' + browser.name + '",\n';
    str += '    userAgent: "' + browser.userAgent + '",\n';
    str += '    appVersion: "' + browser.appVersion + '",\n';
    str += '    platform: "' + browser.platform + '"\n';
    str += '  },\n';
  } );
  str += '};\n';

  str += 'var snapshots = {\n';
  _.each( snapshotNames, function( snapshotName ) {
    str += '  "' + snapshotName + '": {\n';
    str += '    width: ' + clusterMap[snapshotName][0][0].data[snapshotName].width + ',\n';
    str += '    height: ' + clusterMap[snapshotName][0][0].data[snapshotName].height + ',\n';
    str += '    clusters: [\n';
    _.each( clusterMap[snapshotName], function( cluster ) {
      str += '      {\n';
      str += '        exemplarImage: "' + cluster[0].snapshots[snapshotName] + '",\n';
      str += '        browsers: [\n';
      str += _.map( cluster, function( browser ) {
        return '          { id: "' + browser.id + '"' + ( includeAllFromCluster ? ( ', image: "' + browser.snapshots[snapshotName] + '"' ) : '' ) + ' }';
      } ).join( ',\n ' );
      str += '\n        ]\n';
      str += '      },\n';
    } );
    str += '    ]\n';
    str += '  },\n';
  } );
  str += '};\n';

  console.log( str );
}
