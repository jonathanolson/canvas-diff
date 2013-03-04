
function diffToCanvas( diff ) {
  var canvas = document.createElement( 'canvas' );
  canvas.width = diff.width;
  canvas.height = diff.height;
  var context = canvas.getContext( '2d' );
  diff.draw( context );
  return canvas;
}

function demoPath( context, width, height, drawPath, dashes ) {
  context.save();
  context.fillStyle = '#000000';
  context.fillRect( 0, 0, width, height );
  context.restore();
  
  context.save();
  
  context.globalCompositeOperation = 'lighter';
  
  if ( dashes ) {
    // var dash = [ 2, 2 ];
    // var dash = [ 1, 20 ];
    // var dash = [ 0.1, 0.1 ];
    // var dash = [ 0.01, 0.01 ];
    if ( context.setLineDash ) {
      context.setLineDash( dashes );
    } else if ( context.mozDash !== undefined ) {
      context.mozDash = dashes;
    }
  }
  
  context.beginPath();
  context.lineWidth = 30;
  drawPath();
  
  context.lineCap = 'square';
  context.strokeStyle = 'rgba(0,0,255,1)';
  context.stroke();
  
  context.lineCap = 'round';
  context.strokeStyle = 'rgba(0,255,0,1)';
  context.stroke();
  
  context.lineCap = 'butt';
  context.strokeStyle = 'rgba(255,0,0,1)';
  context.stroke();
  
  context.globalCompositeOperation = 'source-over';
  
  context.fillStyle = 'rgba(127,127,127,0.5)';
  context.fill();
  
  context.lineWidth = 1;
  context.strokeStyle = '#ff0000';
  context.stroke();
  
  context.restore();
}

var browsers = [];
