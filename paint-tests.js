
// should fill the pixel at coordinates (0,0) when it paints (if the test applies)
var paintTests = {
  // Paints for older Opera versions (e.g. 12). 3pi to 1pi arc
  a3pi1piarc: function( context, style ) {
    context.beginPath();
    context.arc( 1, 1, 14, 3 * Math.PI, Math.PI, false );
    context.fillStyle = style;
    context.fill();
  },

  // Paints for all older non-iPad Chrome (>=30 to 34) and middle Opera versions (saw 16 and 17, unsure up to 12 and 22)
  // 2pi to -1pi arc
  a2pim1piarc: function( context, style ) {
    context.beginPath();
    context.arc( 1, 1, 14, 2 * Math.PI, -1 * Math.PI, false );
    context.fillStyle = style;
    context.fill();
  },

  // Paints for NOT IE/Opera 12
  a4pim4piarc: function( context, style ) {
    context.beginPath();
    context.arc( 1, 1, 14, 4 * Math.PI, -4 * Math.PI, false );
    context.fillStyle = style;
    context.fill();
  },

  // Paints if NOT Firefox on Win7
  zeroLengthLineJoin: function( context, style ) {
    context.beginPath();
    context.moveTo( -50, -15 );
    context.lineTo( -15, -15 );
    context.lineTo( -15, -15 );
    context.lineTo( -15, -50 );
    context.lineWidth = 40;
    context.strokeStyle = style;
    context.stroke();
  },

  // Paints if IE
  offZeroLineJoin: function( context, style ) {
    context.beginPath();
    context.moveTo( -50, -15 );
    context.lineTo( -15.001, -15 );
    context.lineTo( -15, -15.001 );
    context.lineTo( -15, -50 );
    context.lineWidth = 40;
    context.strokeStyle = style;
    context.stroke();
  },

  // Paints if NOT (OSX/iOS (Safari/FF) and Chrome on iPad)
  forwardAndBackQuadratic: function( context, style ) {
    context.beginPath();
    context.moveTo( -120, -120 );
    context.quadraticCurveTo( 15, 15, -5, -5 );
    context.lineWidth = 40;
    context.strokeStyle = style;
    context.stroke();
  },

  // Paints if IE, FF Linux/Win7
  cubicCusp: function( context, style ) {
    context.beginPath();

    context.save();
    context.translate( -20, -40 );
    context.scale( 0.05, 0.05 );
    context.moveTo( 102.6, 37.8 );
    context.bezierCurveTo( 773.0, 708.2, 102.6, 708.2, 773.0,37.8 );
    context.restore();

    context.lineWidth = 40;
    context.strokeStyle = style;
    context.stroke();
  },

  cubic4round: function( context, style ) {
    context.save();

    context.save();
    context.translate( 0, 0 );
    context.scale( 1, 1 );
    context.moveTo( 0, 0 );
    var smallNumber = 0.0000000001;
    context.bezierCurveTo( smallNumber, smallNumber, smallNumber, smallNumber, smallNumber, smallNumber );
    context.restore();

    context.lineWidth = 40;
    context.strokeStyle = style;
    context.lineCap = 'round';
    context.stroke();

    context.restore();
  },

  cubic4square: function( context, style ) {
    context.save();

    context.save();
    context.translate( 0, 0 );
    context.scale( 1, 1 );
    context.moveTo( 0, 0 );
    var smallNumber = 0.0000000001;
    context.bezierCurveTo( smallNumber, smallNumber, smallNumber, smallNumber, smallNumber, smallNumber );
    context.restore();

    context.lineWidth = 40;
    context.strokeStyle = style;
    context.lineCap = 'square';
    context.stroke();

    context.restore();
  },

  cubic4squareCorner: function( context, style ) {
    context.save();

    context.save();
    context.translate( -20, 0 );
    context.scale( 1, 1 );
    context.moveTo( 0, 0 );
    var smallNumber = 0.0000000001;
    context.bezierCurveTo( smallNumber, smallNumber, smallNumber, smallNumber, smallNumber, smallNumber );
    context.restore();

    context.lineWidth = 40;
    context.strokeStyle = style;
    context.lineCap = 'square';
    context.stroke();

    context.restore();
  },

  cubic8leftButt: function( context, style ) {
    context.save();

    context.save();
    context.translate( 6, 0 );
    context.scale( 1, 1 );
    context.moveTo( 0, 0 );
    context.bezierCurveTo( -1, 0, 1, 0, 0, 0.1 );
    context.restore();

    context.lineWidth = 40;
    context.strokeStyle = style;
    context.lineCap = 'butt';
    context.stroke();

    context.restore();
  },

  cubic8leftSquare: function( context, style ) {
    context.save();

    context.save();
    context.translate( 6, 0 );
    context.scale( 1, 1 );
    context.moveTo( 0, 0 );
    context.bezierCurveTo( -1, 0, 1, 0, 0, 0.1 );
    context.restore();

    context.lineWidth = 40;
    context.strokeStyle = style;
    context.lineCap = 'square';
    context.stroke();

    context.restore();
  },

  cubic10lowerRightButt: function( context, style ) {
    context.save();

    context.save();
    context.translate( -5, -5 );
    context.scale( 1, 1 );
    context.moveTo( 0, 0 );
    context.bezierCurveTo( 1, 1, 1, 1, 0, 0 );
    context.restore();

    context.lineWidth = 40;
    context.strokeStyle = style;
    context.lineCap = 'butt';
    context.stroke();

    context.restore();
  },

  cubic10topSquare: function( context, style ) {
    context.save();

    context.save();
    context.translate( 0, 10 );
    context.scale( 1, 1 );
    context.moveTo( 0, 0 );
    context.bezierCurveTo( 1, 1, 1, 1, 0, 0 );
    context.restore();

    context.lineWidth = 40;
    context.strokeStyle = style;
    context.lineCap = 'square';
    context.stroke();

    context.restore();
  },

  cubic10topButt: function( context, style ) {
    context.save();

    context.save();
    context.translate( 0, 10 );
    context.scale( 1, 1 );
    context.moveTo( 0, 0 );
    context.bezierCurveTo( 1, 1, 1, 1, 0, 0 );
    context.restore();

    context.lineWidth = 40;
    context.strokeStyle = style;
    context.lineCap = 'butt';
    context.stroke();

    context.restore();
  },

  miterLinesRight: function( context, style ) {
    context.save();

    context.save();
    context.miterLimit = 1000000;
    context.translate( -5, -5 );
    context.scale( 1, 1 );
    context.moveTo( 0, 0 );
    context.lineTo( 10, 0 );
    context.lineTo( 0, 5 );
    context.lineTo( Number.MAX_VALUE, 5 );
    context.restore();

    context.lineWidth = 40;
    context.strokeStyle = style;
    context.lineCap = 'butt';
    context.stroke();

    context.restore();
  },

  miterLinesUpperLeft: function( context, style ) {
    context.save();

    context.save();
    context.miterLimit = 1000000;
    context.translate( 30, 30 );
    context.scale( 1, 1 );
    context.moveTo( 0, 0 );
    context.lineTo( 10, 0 );
    context.lineTo( 0, 5 );
    context.lineTo( Number.MAX_VALUE, 5 );
    context.restore();

    context.lineWidth = 40;
    context.strokeStyle = style;
    context.lineCap = 'butt';
    context.stroke();

    context.restore();
  },

  arcSubpathPoints: function( context, style ) {
    var x = 5;
    var y = 20;
    var w = 50;
    var h = 20;
    var r = 50;

    context.lineWidth = 10;

    context.beginPath();

    context.moveTo(x + r, y);
    context.arcTo(x + w, y, x + w, y + r, r);
    context.arcTo(x + w, y + h, x + w - r, y + h, r);
    context.arcTo(x, y + h, x, y + h - r, r);
    context.arcTo(x, y, x + r, y, r);

    context.strokeStyle = style;
    context.stroke();
  }
};

var matchers = {};
(function() {
  function Matcher( yesArray, noArray ) {
    this.yes = yesArray;
    this.no = noArray;
  }
  Matcher.prototype = {
    constructor: Matcher,

    // 1x1 Canvas filled with solid black if we match, otherwise transparent.
    createAlphaMask: function() {
      var canvas = document.createElement( 'canvas' );
      canvas.width = 1;
      canvas.height = 1;
      canvas.style.width = '16px';
      canvas.style.height = '16px';
      var context = canvas.getContext( '2d' );

      var scratchCanvas = document.createElement( 'canvas' );
      scratchCanvas.width = 1;
      scratchCanvas.height = 1;
      var scratchContext = scratchCanvas.getContext( '2d' );

      context.fillStyle = '#000';
      context.fillRect( 0, 0, 1, 1 );

      // source-in for yes
      // destination-out for no
      // then destination-over with the "no" color?

      context.globalCompositeOperation = 'destination-out';
      for ( var i = 0; i < this.yes.length; i++ ) {
        scratchCanvas.width = 1;
        scratchCanvas.height = 1;

        scratchContext.globalCompositeOperation = 'source-over';
        this.yes[i]( scratchContext, '#000' );

        scratchContext.globalCompositeOperation = 'xor';
        scratchContext.fillStyle = '#000';
        scratchContext.fillRect( 0, 0, 1, 1 );

        context.drawImage( scratchCanvas, 0, 0 );
      }

      // we really should do this, but source-in fails for Opera / Chrome mobile (at least for detection)
      // context.globalCompositeOperation = 'source-in';
      // for ( var i = 0; i < this.yes.length; i++ ) {
      //   this.yes[i]( context, '#000' );
      // }

      context.globalCompositeOperation = 'destination-out';
      for ( var j = 0; j < this.no.length; j++ ) {
        this.no[j]( context, '#000' );
      }
      // context.globalCompositeOperation = 'destination-over';
      // context.fillStyle = '#fff';
      // context.fillRect( 0, 0, 1, 1 );
      context.globalCompositeOperation = 'source-over'; // back to default

      return canvas;
    },

    // assumes no Canvas transform is applied on the context passed in! (it would be nice to not have that!)
    paintIfMatches: function( canvas, context, paintFunction ) {
      var scratchCanvas = document.createElement( 'canvas' );
      scratchCanvas.width = canvas.width;
      scratchCanvas.height = canvas.height;
      var scratchContext = scratchCanvas.getContext( '2d' );

      scratchContext.save();
      paintFunction( scratchCanvas, scratchContext );
      scratchContext.restore();

      var alphaMaskCanvas = this.createAlphaMask();

      scratchContext.globalCompositeOperation = 'destination-in';
      scratchContext.drawImage( alphaMaskCanvas, 0, 0, canvas.width, canvas.height ); // map 1-by-1 to width-by-height

      context.drawImage( scratchCanvas, 0, 0 );
    }
  };

  /*
  IE: offZeroLineJoin
  FF: arcSubpathPoints && !IE
  Safari/ChromeiOS: !forwardAndBackQuadratic && !FF
  Chrome(?): !IE && !FF && !Safari

  Chrome-like (Blink): Chrome && !cubic10topSquare
  Chrome-like (Webkit): Chrome && cubic10topSquare
  IE9: arcSubpathPoints && IE
  IE10+: !arcSubpathPoints && IE
  FF-Linux: miterLinesUpperLeft && FF
  FF-Win/Android: !miterLinesRight && FF
  FF-OSX: !FF-Linux && !FF-Win && FF
  Safari7+: cubic8leftSquare && Safari
  Safari6-: !cubic8leftSquare && Safari
  */

  var tests = paintTests;

  matchers.IE = new Matcher( [tests.offZeroLineJoin], [] );
  matchers.FF = new Matcher( [tests.arcSubpathPoints], [tests.offZeroLineJoin] );
  matchers.Safari = new Matcher( [], [tests.offZeroLineJoin,tests.arcSubpathPoints,tests.forwardAndBackQuadratic] );
  matchers.Chrome = new Matcher( [tests.forwardAndBackQuadratic], [tests.offZeroLineJoin,tests.arcSubpathPoints] );

  matchers.ChromeBlink = new Matcher( [tests.forwardAndBackQuadratic,tests.cubic10topSquare], [tests.offZeroLineJoin,tests.arcSubpathPoints] );
  matchers.ChromeWebKit = new Matcher( [tests.forwardAndBackQuadratic], [tests.offZeroLineJoin,tests.arcSubpathPoints,tests.cubic10topSquare] );
  matchers.IE9 = new Matcher( [tests.offZeroLineJoin,tests.arcSubpathPoints], [] );
  matchers.IE10Plus = new Matcher( [tests.offZeroLineJoin], [tests.arcSubpathPoints] );
  matchers.FFLinux = new Matcher( [tests.arcSubpathPoints,tests.miterLinesUpperLeft], [tests.offZeroLineJoin] );
  matchers.FFWinAndroid = new Matcher( [tests.arcSubpathPoints], [tests.offZeroLineJoin,tests.miterLinesRight] );
  matchers.FFOSX = new Matcher( [tests.arcSubpathPoints,tests.miterLinesRight], [tests.offZeroLineJoin,tests.miterLinesUpperLeft] );
  matchers.Safari7Plus = new Matcher( [tests.cubic8leftSquare], [tests.offZeroLineJoin,tests.arcSubpathPoints,tests.forwardAndBackQuadratic] );
  matchers.Safari6Minus = new Matcher( [], [tests.offZeroLineJoin,tests.arcSubpathPoints,tests.forwardAndBackQuadratic,tests.cubic8leftSquare] );
} )();
