
var diffMap = {};
var diffs = [];

(function(){
  
  function addDiff( diff ) {
    diffMap[diff.id] = diff;
    diffs.push( diff );
  }
  
  addDiff( {
    id: 'zeroLengthLineJoin',
    name: 'Zero-length line join',
    width: 32,
    height: 32,
    draw: function( context ) {
      context.beginPath();
      context.moveTo( 0, 2 );
      context.lineTo( 2, 2 );
      context.lineTo( 2, 2 );
      context.lineTo( 2, 0 );
      context.lineWidth = 40;
      context.strokeStyle = '#000000';
      context.stroke();
    }
  } );
  
  addDiff( {
    id: 'zeroLengthArcJoin',
    name: 'Zero-length arc join',
    width: 32,
    height: 32,
    draw: function( context ) {
      context.beginPath();
      context.moveTo( 0, 2 );
      context.lineTo( 2, 2 );
      context.arc( 2, 2, 0, Math.PI, -Math.PI, true );
      context.lineTo( 2, 0 );
      context.lineWidth = 40;
      context.strokeStyle = '#000000';
      context.stroke();
    }
  } );
  
  addDiff( {
    id: 'zeroLengthQuadraticJoin',
    name: 'Zero-length quadratic join',
    width: 32,
    height: 32,
    draw: function( context ) {
      context.beginPath();
      context.moveTo( 0, 2 );
      context.lineTo( 2, 2 );
      context.quadraticCurveTo( 2, 2, 2, 2 );
      context.lineTo( 2, 0 );
      context.lineWidth = 40;
      context.strokeStyle = '#000000';
      context.stroke();
    }
  } );
  
  addDiff( {
    id: 'zeroLengthCubicJoin',
    name: 'Zero-length cubic join',
    width: 32,
    height: 32,
    draw: function( context ) {
      context.beginPath();
      context.moveTo( 0, 2 );
      context.lineTo( 2, 2 );
      context.bezierCurveTo( 2, 2, 2, 2, 2, 2 );
      context.lineTo( 2, 0 );
      context.lineWidth = 40;
      context.strokeStyle = '#000000';
      context.stroke();
    }
  } );
  
  addDiff( {
    id: 'sameAngleArcJoin',
    name: 'Same-angle arc join',
    width: 32,
    height: 32,
    draw: function( context ) {
      context.beginPath();
      context.moveTo( 0, 2 );
      context.lineTo( 2, 2 );
      context.arc( 1, 1, 1 * Math.sqrt( 2 ), Math.PI / 4, Math.PI / 4, false );
      context.lineTo( 2, 0 );
      context.lineWidth = 40;
      context.strokeStyle = '#000000';
      context.stroke();
    }
  } );
  
  addDiff( {
    id: 'offZeroLineJoin',
    name: 'Off-zero line join',
    width: 32,
    height: 32,
    draw: function( context ) {
      context.beginPath();
      context.moveTo( 0, 2 );
      context.lineTo( 1.99, 2 );
      context.lineTo( 2, 1.99 );
      context.lineTo( 2, 0 );
      context.lineWidth = 40;
      context.strokeStyle = '#000000';
      context.stroke();
    }
  } );
  
  addDiff( {
    id: 'offZeroArcJoin',
    name: 'Off-zero arc join',
    width: 32,
    height: 32,
    draw: function( context ) {
      context.beginPath();
      context.moveTo( 0, 2 );
      context.lineTo( 2, 2 );
      context.arc( 2, 2, 0.01, Math.PI, -Math.PI / 2, true );
      context.lineTo( 2, 0 );
      context.lineWidth = 40;
      context.strokeStyle = '#000000';
      context.stroke();
    }
  } );
  
  addDiff( {
    id: 'transformedClearRect',
    name: 'Transformed clearRect',
    width: 32,
    height: 32,
    draw: function( context ) {
      context.fillStyle = '#000000';
      context.fillRect( 0, 0, this.width, this.height );
      
      context.save();
      context.translate( 16, 8 );
      context.rotate( Math.PI / 4 );
      context.transform( 1, 0.5, 0, 1, 0, 0 );
      context.clearRect( 0, 0, 10, 10 );
      context.restore();
    }
  } );
  
  addDiff( {
    id: 'adaptiveBezierEndpoint',
    name: 'Adaptive Bezier Endpoint',
    width: 64,
    height: 48,
    draw: function( context ) {
      demoPath( context, this.width, this.height, function() {
        context.moveTo( -120, -120 );
        context.quadraticCurveTo( 40, 40, 40, 20 );
      } );
    }
  } );
  
})();
