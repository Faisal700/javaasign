var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images
  var bird = new image();
  var bg = new image();
  var bf = new image();
  var pipeNorth = new image();
  var pipeSouth = new image();

  bird.src = "images/bird.png";
  bg.src = "images/bg.png";
  bf.src = "images/bf.jpg";
  pipeNorth.src = "images/pipen.png";
  pipeSouth.src = "images/pipe.png";

  // draw image
  function draw(){

  	ctx.drawImage(bg,0,0);
  	ctx.drawImage(pipe,100,10);
  	ctx.drawImage(pipen,0,0);
  }
  draw();