//done
var p1, p2, p1Image, p2Image;
//done
var health, healthpack, healthpackImage;
//done
var backgroundImage, Bg;
//done
var healthGroup, obstaclesGroup ;
//do
var boss, bossImage, obstacles, oi1, oi2;


function preload(){

  p1Image = loadImage("player1.png");
  p2Image = loadImage("Player2.png");
  
  healthpackImage = loadImage("healthpack.png");
  
  bossImage = loadImage("Boss.png");
  henchmenSmallImage = loadImage("evil_small.png");
  henchmenBigImage = loadImage("evil_medium.png");
  
  
  backgroundImage = loadImage("Background.jpg");
  
  oi1 = loadImage("evil_small.png");
  oi2 = loadImage("evil_medium.png");
  
}

function setup(){
  createCanvas(400,400);
  
  bg = createSprite(200,200,50,50);
  bg.addImage(backgroundImage);
  bg.scale = 2.6
  
  p1 = createSprite(50,300,10,10);
  p1.addImage(p1Image);
  p1.scale = 0.3;

  
  p2 = createSprite(350,300,10,10);
  p2.addImage(p2Image);
  p2.scale = 0.105;

  
  obstaclesGroup = new Group();
  healthGroup = new Group();
  
  health = 0;
  
}

function draw(){
  background(2,255,255);
  
  p1.velocityX = 0
  p1.velocityY = 0
  p2.velocityX = 0
  p2.velocityY = 0
  
  if(keyWentDown(LEFT)){
    p2.velocityX = -20
  }
  if(keyWentDown("right")){
    p2.velocityX = 20
  }
  if(keyWentDown("up")){
    p2.velocityY = -20
  }
  if(keyWentDown("down")){
    p2.velocityY = 20;
  }
  if(keyWentDown("a")){
    p1.velocityX = -20
  }
  if(keyWentDown("d")){
    p1.velocityX = 20
  }
  if(keyWentDown("w")){
    p1.velocityY = -20
  }
  if(keyWentDown("s")){
    p1.velocityY = 20;
  }
  
  if(p1.isTouching(healthGroup) || p2.isTouching(healthGroup)){
    health = health + 10
  }
  
  if(obstaclesGroup.isTouching(p1) || obstaclesGroup.isTouching(p2)){
    health = health -10;
  }
     
  spwanObstacle()
  Spawnhealth()
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("health = " + health, 100,50);
}
function Spawnhealth(){
  if(frameCount%300===0){
    healthpack = createSprite(200,200,10,10);
    healthpack.x = Math.round(random(100,300));
    healthpack.y = Math.round(random(100,300));
    healthpack.addImage(healthpackImage);
    healthpack.scale = 0.07
    healthpack.lifetime = 15;
  
    
    healthGroup.add(healthpack)
  }
  
}
function spwanObstacle(){
  if(frameCount%60===0){
    obstacles = createSprite(200,200,10,10);
    obstacles.x = Math.round(random(100,300));
    obstacles.y = Math.round(random(100,300));
    r=Math.round(random(1,2))
    if(r===1){
      obstacles.addImage(henchmenSmallImage);
      obstacles.scale = 0.2
    }
    if(r===2){
      obstacles.addImage(henchmenBigImage);
      obstacles.scale = 0.1
      
    }
    obstacles.lifetime = 50;
    obstaclesGroup.add(obstacles);
  }
  
}

