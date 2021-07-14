var bg,bgImg;
var player,shooterImg;
var thanos,thanosImg;
var fireballImg,fireball;
var heart1,heart2,heart3;
var heart1Img , heart2Img , heart3Img;
var fireball = 100;



function preload(){
  bgImg = loadImage("assets/bg.jpg");
  shooterImg = loadImage("assets/shooter_1.png");
  shooter_shooting = loadImage("assets/shooter_2.png")
  thanosImg = loadImage("assets/thanos.png");
  fireballImg = loadImage("assets/fireball.png");
  heart1Img = loadImage("assets/heart_1.png");
  heart2Img = loadImage("assets/heart_2.png");
  heart3Img = loadImage("assets/heart_3.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale = 5.0;

  player = createSprite(displayWidth-1250,displayHeight-300,50,50);
  player.addImage(shooterImg);
  player.scale = 0.76;
  player.debug = true;
  player.setCollider("rectangle",0,0,300,300);

thanosGroup = new Group();
fireballGroup = new Group();

}

function draw(){
  background(0);

  
drawSprites();
}