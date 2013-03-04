
var diffMap = {};
var diffs = [];

(function(){
  
  function addDiff( diff ) {
    diffMap[diff.id] = diff;
    diffs.push( diff );
  }
  
  addDiff( {
    id: 'zeroLengthLine',
    width: 32,
    height: 32,
    draw: function( context ) {
      context.beginPath();
      context.moveTo( 0, 16 );
      context.lineTo( 16, 16 );
      context.lineTo( 16, 16 );
      context.lineTo( 16, 0 );
      context.lineWidth = 20;
      context.strokeStyle = '#000000';
      context.stroke();
    }
  } );
  
})();
