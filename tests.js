
var diffMap = {};
var diffs = [];

(function(){
  
  function addDiff( diff ) {
    diffMap[diff.id] = diff;
    diffs.push( diff );
  }
  
  addDiff( {
    id: 'a3pi1piarc',
    name: '3\u03C0 to 1\u03C0 arc',
    width: 32,
    height: 32,
    draw: function( context ) {
      context.beginPath();
      context.arc( 16, 16, 14, 3 * Math.PI, 1 * Math.PI, false );
      context.fillStyle = '#000000';
      context.fill();
    }
  } );
  
  addDiff( {
    id: 'a2pim1piarc',
    name: '2\u03C0 to -1\u03C0 arc',
    width: 32,
    height: 32,
    draw: function( context ) {
      context.beginPath();
      context.arc( 16, 16, 14, 2 * Math.PI, -1 * Math.PI, false );
      context.fillStyle = '#000000';
      context.fill();
    }
  } );
  
  addDiff( {
    id: 'a4pim4piarc',
    name: '4\u03C0 to -4\u03C0 arc',
    width: 32,
    height: 32,
    draw: function( context ) {
      context.beginPath();
      context.arc( 16, 16, 14, 4 * Math.PI, -4 * Math.PI, false );
      context.fillStyle = '#000000';
      context.fill();
    }
  } );
  
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
  
  addDiff( {
    id: 'forwardAndBackQuadratic',
    name: 'Forward and Back Quadratic',
    width: 48,
    height: 48,
    draw: function( context ) {
      demoPath( context, this.width, this.height, function() {
        context.moveTo( -120, -120 );
        context.quadraticCurveTo( 40, 40, 20, 20 );
      } );
    }
  } );
  
  addDiff( {
    id: 'cubic1',
    name: 'Cubic 1',
    width: 44,
    height: 44,
    draw: function( context ) {
      demoPath( context, this.width, this.height, function() {
        context.translate( 20, 20 );
        context.moveTo( 0, 0 );
        context.bezierCurveTo( 2, 0, 2, 2, 4, 2 );
      } );
    }
  } );
  
  addDiff( {
    id: 'miterLimit',
    name: 'Miter Limit',
    width: 44,
    height: 44,
    draw: function( context ) {
      demoPath( context, this.width, this.height, function() {
        var halfAngle = 7 * Math.PI / 180;
        context.moveTo( 10, 20 );
        context.lineTo( 10 + Math.cos( halfAngle ), 20 + Math.sin( halfAngle ) );
        context.lineTo( 10, 20 + 2 * Math.sin( halfAngle ) );
      } );
    }
  } );
  
  addDiff( {
    id: 'cubicCusp',
    name: 'Cubic Cusp',
    width: 84,
    height: 72,
    draw: function( context ) {
      demoPath( context, this.width, this.height, function() {
        context.save();
        context.translate( 20, 20 );
        context.scale( 0.05, 0.05 );
        context.moveTo( 102.6, 37.8 );
        context.bezierCurveTo( 773.0, 708.2, 102.6, 708.2, 773.0,37.8 );
        context.restore();
      } );
    }
  } );
  
  addDiff( {
    id: 'cubic2',
    name: 'Cubic 2',
    width: 48,
    height: 48,
    draw: function( context ) {
      demoPath( context, this.width, this.height, function() {
        context.save();
        context.translate( 24, 24 );
        context.scale( 1, 1 );
        context.moveTo( 0, 0 );
        context.bezierCurveTo( 1, 0, 0, 1, 1, 1 );
        context.restore();
      } );
    }
  } );
  
  addDiff( {
    id: 'cubic3',
    name: 'Cubic 3',
    width: 88,
    height: 48,
    draw: function( context ) {
      demoPath( context, this.width, this.height, function() {
        context.save();
        context.translate( 24, 24 );
        context.scale( 1, 1 );
        context.moveTo( 0, 0 );
        context.bezierCurveTo( 40, 0, 41, 0, 41, 1 );
        context.restore();
      } );
    }
  } );
  
  addDiff( {
    id: 'cubic4',
    name: 'Cubic 4',
    width: 48,
    height: 48,
    draw: function( context ) {
      demoPath( context, this.width, this.height, function() {
        context.save();
        context.translate( 24, 24 );
        context.scale( 1, 1 );
        context.moveTo( 0, 0 );
        var smallNumber = 0.0000000001;
        context.bezierCurveTo( smallNumber, smallNumber, smallNumber, smallNumber, smallNumber, smallNumber );
        context.restore();
      } );
    }
  } );
  
  addDiff( {
    id: 'cubic5',
    name: 'Cubic 5',
    width: 64,
    height: 48,
    draw: function( context ) {
      demoPath( context, this.width, this.height, function() {
        context.save();
        context.translate( 24, 24 );
        context.scale( 1, 1 );
        context.moveTo( 0, 0 );
        context.bezierCurveTo( 10, 0, 11, 0, 11, 1 );
        context.restore();
      } );
    }
  } );
  
  addDiff( {
    id: 'cubic6',
    name: 'Cubic 6',
    width: 48,
    height: 48,
    draw: function( context ) {
      demoPath( context, this.width, this.height, function() {
        context.save();
        context.translate( 24, 24 );
        context.scale( 1, 1 );
        context.moveTo( 0, 0 );
        context.bezierCurveTo( 1, 0, 1, 1, 0, 0.5 );
        context.restore();
      } );
    }
  } );
  
  addDiff( {
    id: 'cubic7',
    name: 'Cubic 7',
    width: 48,
    height: 48,
    draw: function( context ) {
      demoPath( context, this.width, this.height, function() {
        context.save();
        context.translate( 24, 24 );
        context.scale( 1, 1 );
        context.moveTo( 0, 0 );
        context.bezierCurveTo( -1, 0, 1, 0, 0, 0 );
        context.restore();
      } );
    }
  } );
  
  addDiff( {
    id: 'cubic8',
    name: 'Cubic 8',
    width: 48,
    height: 48,
    draw: function( context ) {
      demoPath( context, this.width, this.height, function() {
        context.save();
        context.translate( 24, 24 );
        context.scale( 1, 1 );
        context.moveTo( 0, 0 );
        context.bezierCurveTo( -1, 0, 1, 0, 0, 0.1 );
        context.restore();
      } );
    }
  } );
  
  addDiff( {
    id: 'cubic9',
    name: 'Cubic 9',
    width: 48,
    height: 48,
    draw: function( context ) {
      demoPath( context, this.width, this.height, function() {
        context.save();
        context.translate( 24, 24 );
        context.scale( 1, 1 );
        context.moveTo( 0, 0 );
        context.bezierCurveTo( -1, 0, 1, 0, 0.1, 0 );
        context.restore();
      } );
    }
  } );
  
  addDiff( {
    id: 'cubic10',
    name: 'Cubic 10',
    width: 48,
    height: 48,
    draw: function( context ) {
      demoPath( context, this.width, this.height, function() {
        context.save();
        context.translate( 24, 24 );
        context.scale( 1, 1 );
        context.moveTo( 0, 0 );
        context.bezierCurveTo( 1, 1, 1, 1, 0, 0 );
        context.restore();
      } );
    }
  } );
  
  addDiff( {
    id: 'lines1',
    name: 'Lines 1',
    width: 48,
    height: 64,
    draw: function( context ) {
      demoPath( context, this.width, this.height, function() {
        context.save();
        context.translate( 24, 24 );
        context.scale( 1, 1 );
        context.moveTo( 0, 0 );
        context.lineTo( 0, 10 );
        context.lineTo( 10, 10 );
        context.clip();
        context.lineTo( 0, 15 );
        context.restore();
      } );
    }
  } );
  
  addDiff( {
    id: 'miterLines',
    name: 'Miter Lines',
    width: 48,
    height: 64,
    draw: function( context ) {
      demoPath( context, this.width, this.height, function() {
        context.save();
        context.miterLimit = 1000000;
        context.translate( 24, 24 );
        context.scale( 1, 1 );
        context.moveTo( 0, 0 );
        context.lineTo( 10, 0 );
        context.lineTo( 0, 5 );
        context.lineTo( Number.MAX_VALUE, 5 );
        context.restore();
      } );
    }
  } );
  
  addDiff( {
    id: 'zigZagAntialiasing',
    name: 'Zig-Zag Antialiasing',
    width: 240,
    height: 110,
    draw: function( context ) {
      context.fillStyle = '#000000';
      context.fillRect( 0, 0, this.width, this.height );
      context.translate( -40, 0 );
      zig( context, 50, 0, 10, 100, 1, 10 );
      zig( context, 60, 0, 10, 100, 1, 5 );
      zig( context, 70, 0, 10, 100, 2, 5 );
      zig( context, 90, 0, 10, 50, 2, 5 );
      zig( context, 110, 0, 10, 100, 2.5, 10 );
      zig( context, 135, 0, 10, 100, 2.5, 10 );
      zig( context, 160, 0, 20, 100, Math.PI, 10 );
      zag( context, 230, 0, 10, 100, 1, 10 );
      zag( context, 240, 0, 10, 100, 1, 5 );
      zag( context, 250, 0, 10, 100, 2, 5 );
    }
  } );
  
  addDiff( {
    id: 'textShear',
    name: 'Text Shear',
    width: 32,
    height: 128,
    draw: function( context ) {
      context.fillStyle = '#000000';
      context.fillRect( 0, 0, this.width, this.height );
      for ( var i = 0; i < 20; i++ ) {
        context.save();
        context.translate( 0, -250 );
        context.font = '20px Arial';
        context.fillStyle = '#ffffff';
        context.translate( i, 200 );
        context.transform( 1, 50 + i^2, 0, 1, 0, 0 );
        context.fillText( 'G', 0, 0 );
        context.fillText( 'G', 0, 0 );
        context.fillText( 'G', 0, 0 );
        context.restore();
      }
    }
  } );
  
  addDiff( {
    id: 'shadowDrawImage',
    name: 'Shadow drawImage',
    width: 100,
    height: 100,
    draw: function( context ) {
      var scratchCanvas = document.createElement( 'canvas' );
      scratchCanvas.width = 50;
      scratchCanvas.height = 50;
      var scratchContext = scratchCanvas.getContext( '2d' );
      
      scratchContext.beginPath();
      scratchContext.arc( 25, 25, 25, 0, 2 * Math.PI, false );
      scratchContext.closePath();
      scratchContext.fillStyle = '#0000ff';
      scratchContext.fill();
      
      context.shadowOffsetX = 10;
      context.shadowOffsetY = 10;
      context.shadowBlur = 60;
      context.shadowColor = '#000000';
      context.drawImage( scratchCanvas, 0, 0 );
    }
  } );
  
})();
