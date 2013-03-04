
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
  
})();
