var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var red, blue, green;
var end = false;
//srry i had to delete pink cuz there was a glitch with it and ive literally tried everything to fix it and then i gave up ;-;

var score=0;

function preload(){
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0;
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

    if (keyWentDown("space") || mouseWentDown("leftButton")) {
      createArrow();
    }

  //creating continous enemies
 if(end == false) {
  var select_balloon = Math.round(random(1,4));
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
       redBalloon();
     } else if (select_balloon == 2) {
       console.log("creating green");
       greenBalloon();
     } else if (select_balloon == 3) {
       blueBalloon();
     } else {
     }
   }  
  }





    //console.log("red is "+red);
   if(red.x == 360) {
     //console.log("meow red");
     red.velocityX = 0;
     end = true;
     bow.visible = false;
     scene.visible = false;
     red.visible = false;
     blue.visible = false;
     textSize(60);
     textAlign(CENTER, TOP);
     textFont("Impact");
     fill("yellow");
     stroke("red");
     strokeWeight(5);
     text("You lose! Your score is:" +score, 0, 0, 400, 400);
   }
  
  


    //console.log("green is " + green);
    if(green.x == 360) {
      green.velocityX = 0;
     // console.log("meow green");
      end = true;
      bow.visible = false;
      scene.visible = false;
      red.visible = false;
      blue.visible = false;
      textSize(60);
      textAlign(CENTER, TOP);
      textFont("Impact");
      fill("yellow");
      stroke("red");
      strokeWeight(5);
      text("You lose! Your score is:" +score, 0, 0, 400, 400);
    }
   


    if(blue.x == 360) {
      blue.velocityX = 0;
      end = true;
      bow.visible = false;
      scene.visible = false;
      red.visible = false;
      blue.visible = false;
      textSize(60);
      textAlign(CENTER, TOP);
      textFont("Impact");
      fill("yellow");
      stroke("red");
      strokeWeight(5);
      text("You lose! Your score is:" +score, 0, 0, 400, 400);
    } 

    if(green.x > 0) {
      if(arrow !== null && arrow !== undefined) {
        if(green !== null && arrow !== undefined) {
          if (arrow.isTouching(green)) {     
            score = score + 1;
            console.log("score increase");
            green.destroy();
            arrow.destroy();
          }
        }
      }
    }

    if(blue.x > 0) {
    if(arrow !== null && arrow !== undefined) {
      console.log("blue is " + blue);
      if(blue !== null && arrow !== undefined) {
        if (arrow.isTouching(blue)) {
          score = score + 1;
          console.log("score increase");
          blue.destroy();
          arrow.destroy();
        }
      }
    }
  }

  if(red.x > 0) {
    if(arrow !== null && arrow !== undefined) {
      console.log("red is " + red);
      if(red !== null && arrow !== undefined) {
        if (arrow.isTouching(red)) {
          score = score + 1;
          console.log("score increase");
          red.destroy();
          arrow.destroy();
        }
      }
    }
  }

  drawSprites();


  console.log("Score: "+ score);
  fill("black");
  textSize(20);
  text("score: " +score,5,5,100,100);

}


// Creating  arrows for bow
 function createArrow() {
  arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  
}



 function redBalloon() {
   red = createSprite(0,Math.round(random(20, 370)), 10, 10);
   red.addImage(red_balloonImage);
   red.velocityX = 3;
   red.lifetime = 150;
   red.scale = 0.1;
 }


function blueBalloon() {
  blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function greenBalloon() {
  green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}


