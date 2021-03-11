
/***********************************************************************************
  Catch the Wooloo
  by Sherry Lam
  
  This is a fun clickable animation of a Wooloo. Catch the wooloo before time runs up

***********************************************************************************/


var sheepButton;

var sheepImage;

//sheep texts
var sheepString = [];
var index = 0;

var sheepTimer;
var click = false;

//move animation by 20 pixels
var move = 20;

var bgImg;

//size of font
var size = 40;
var opacity = 255;

// load images
function preload(){
  bgImg = loadImage('assets/bliss.jpg');
  sheepImage = loadImage('assets/wooloo.png');
}

function setup() {
  createCanvas(1000,800);

  textSize(size);

  loadSheepText();

  makeSheepButton();

  sheepTimer = new Timer(5000);
  sheepTimer.start();
}

function draw() {
  background(bgImg);
  
  text(sheepString[index], width/2, 100);

  sheepButton.draw();

  // button animation
  sheepButton.x += move;
  if(sheepButton.x > 1000) {
    sheepButton.x = 0;
  }

  updateTimer();
}

function makeSheepButton() {
  // Create the wooloo button
  sheepButton = new Clickable();
  
  // set the image to be wooloo.png
  sheepButton.image = sheepImage;
  sheepButton.text = "";

  // transparent background and border
  sheepButton.color = "#00000000";
  sheepButton.stroke = "#00000000";

  // width + height to image size
  sheepButton.width = sheepImage.width;
  sheepButton.height = sheepImage.height;

  // move the button
  sheepButton.locate( 0 , height/1.5 - sheepButton.height/2 );

  // Clickable callback functions, defined below
  sheepButton.onPress = sheepButtonPressed;
}

// when sheepButton is pressed
sheepButtonPressed = function () {
  move = 0;

  textSize(size);
  fill(0);
  index = 3;

  click = true;
  opacity = 0;
}

// array of texts
function loadSheepText() {
  sheepString[0] = "Catch the Wooloo.";
  sheepString[1] = "Hurry!!!";
  sheepString[2] = "Come on! You couldn't catch the Wooloo??";
  sheepString[3] = "Yay, the Wooloo is now your best buddy.";
}

function updateTimer() {
  //time up
  if( sheepTimer.expired() ) {
    textSize(size);
    fill(0);
    index = 2;
    move = 0;
    sheepButton.y = 10000;
  }
  //when the remaining time is less than 3 secs
  else if(Math.round(sheepTimer.getRemainingTime()/1000) < 3) {
    textSize(size);
    fill(255, 0, 0, opacity)
    text(sheepString[1], width/2, 150);
    if (click == true) {
        noLoop();
    }
  }
  else {
    textSize(size);
    fill(0);
    index = 0;
    text(Math.round(sheepTimer.getRemainingTime()/1000))
    if (click == true) {
        noLoop();
    }
  }
}
