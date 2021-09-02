var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage("background20.png"(backgroundImage));
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage("bow0.png"(bowImage)); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
  }
  
  var select_balloon = Math.round(random(1,1));

  if (World.frameCount % 100 == 0) {
    if (blue_ballon == 2) {
      blueBalloon();
    }
  }

  var green_balloon = Math.round(random(1,1));
   
  if (World.frameCount % 100 == 0) {
    if (green_ballon == 3) {
      greenBalloon();
    }
  }

  var pink_balloon = Math.round(random(1,1));

  if (World.frameCount % 100 == 0) {
    if (pink_balloon == 4) {
      pinkBalloon();
    }
  }


  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage("red_balloon0.png"(red_balloonImage));
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}
 
function blueBalloon() {
  var blue = createSprite(0,Math.round(random(50, 250)), 10, 10);
  blue.addImage("blue_balloon0.png"(blue_balloonImage));
  blue.velocityX = 4;
  blue.lifetime = 200;
  blue.scale = 0.2;

}


function greenBalloon() {
  var green = createSprite(0,Math.round(random(30, 140)), 10, 10);
  green.addImage("green_balloon0.png"(green_balloonImage));
  green.velocityX = 2;
  green.lifetime = 250;
  green.scale = 0.3;

}


function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 300)), 10, 10);
  pink.addImage("pink_balloon0.png"(pink_balloonImage));
  pink.velocityX = 5;
  pink.lifetime = 300;
  pink.scale = 0.4;

}
