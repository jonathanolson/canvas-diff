
var diffMap = {};
var diffs = [];

(function(){
  
  function addDiff( diff ) {
    diffMap[diff.id] = diff;
    diffs.push( diff );
  }
  
  addDiff( {
    id: 'zeroLengthLineJoin',
    name: '0-length line join',
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
  
})();
