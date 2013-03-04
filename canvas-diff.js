
function diffToCanvas( diff ) {
  var canvas = document.createElement( 'canvas' );
  canvas.width = diff.width;
  canvas.height = diff.height;
  var context = canvas.getContext( '2d' );
  diff.draw( context );
  return canvas;
}

var snapshots = [];
