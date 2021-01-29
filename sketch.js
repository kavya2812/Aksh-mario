var coin;
var mario;
var ground;
var bg;
var score=0;
var gameState="play";


function preload() {
  coinS=loadSound("coin.mp3"); 
  coinI = loadImage("coin.gif");
  marioI=loadImage("mariostanding.png");
  mariomoverightI=loadImage("mariomovingright.gif");
  mariomoveleftI=loadImage("mariomovingleft.gif");
  bgI=loadImage("bg.jpg");
  b=loadImage("brick.png");
  w=loadImage("gameover.jpg");
  e=loadImage("enemy.gif");
}

function setup() {
  createCanvas(1000, 500);
  
  //enemy 
  
  e1=createSprite(1060,450,50,50);
  e1.addImage(e);
  e1.scale=0.1;
  e1.velocityX=5;
  
  e2=createSprite(450,450,50,50)
  e2.addImage(e);
  e2.scale=0.1;
  e2.velocityX=5;
  
  //ground
  
  ground=createSprite(50, 500, 10000000000000, 10);
  ground.visible=false;
  
  //coins
    
  coin = createSprite(40, 280, 60, 50);
  coin.addImage(coinI);
  coin.scale = 0.2;
  
  coin1=createSprite(100,280,60,50);
  coin1.addImage(coinI);
  coin1.scale = 0.2;
  
  coin2=createSprite(160,280,60,50);
  coin2.addImage(coinI);
  coin2.scale = 0.2;
    
  coin3=createSprite(220,280,60,50);
  coin3.addImage(coinI);
  coin3.scale = 0.2;
  
  coin4=createSprite(70,200,50,50);
  coin4.addImage(coinI);
  coin4.scale = 0.2;
  
  coin5=createSprite(200,200,50,50);
  coin5.addImage(coinI);
  coin5.scale = 0.2;
  
  coin6=createSprite(130,170,50,50);
  coin6.addImage(coinI);
  coin6.scale = 0.2;
  
  //platform
  p1=createSprite(40,340,50,50);
  p1.addImage(b)
  p1.scale=0.09;
  
  p2=createSprite(88,340,50,50);
  p2.addImage(b)
  p2.scale=0.09;
  
  p3=createSprite(135,340,50,50);
  p3.addImage(b)
  p3.scale=0.09;
  
  p4=createSprite(182,340,50,50);
  p4.addImage(b)
  p4.scale=0.09;
  
  p5=createSprite(230,340,50,50);
  p5.addImage(b)
  p5.scale=0.09;
  
  p6=createSprite(-115,340,50,50);
  p6.addImage(b)
  p6.scale=0.09;
  
  p7=createSprite(136,220,50,50);
  p7.addImage(b)
  p7.scale=0.09;
  
  p8=createSprite(400,450,10,50)
  p8.visible=false;
  
  //mario
  mario=createSprite(50, 400, 50, 50);
  mario.addImage(marioI);
  mario.scale=0.4;
  
  //pipes
  
  pipe1=createSprite(925,400,120,100);
  pipe2=createSprite(1190,400,120,200)
  
  //background Image
  bg=createSprite(100,230,50,50);
  bg1=createSprite(1590,230,50,50);
  bg1.scale=0.5
}

function draw() {

  mario.velocityX=0;
  camera.x=mario.x;
  background("black");
  bg.addImage(bgI);
  bg.scale=1.9;
  bg.depth=-10;
  
  
  
  if (mario.isTouching(coin)){
    
    score=score+1;
    coin.destroy();
  }
   if (mario.isTouching(coin1)){
    
    score=score+1;
    coin1.destroy();
  }
   if (mario.isTouching(coin2)){
    
    score=score+1;
    coin2.destroy();
  }
   if (mario.isTouching(coin3)){
    
    score=score+1;
    coin3.destroy();
  }
   if (mario.isTouching(coin4)){
    
    score=score+1;
    coin4.destroy();
  }
   if (mario.isTouching(coin5)){
    
    score=score+1;
    coin5.destroy();
  }
   if (mario.isTouching(coin6)){
    
    score=score+1;
    coin6.destroy();
  }
  
  if(keyDown(RIGHT_ARROW)){
  mario.addImage(mariomoverightI);
    mario.velocityX=10;
  }
  
  if(keyWentUp(RIGHT_ARROW)){
    mario.addImage(marioI)
  }
  
  if(keyDown(LEFT_ARROW)){
    mario.addImage(mariomoveleftI)
    mario.velocityX=-10;
  }
  if(keyWentUp(LEFT_ARROW)){
    mario.addImage(marioI)
  }
  
  if(keyDown(DOWN_ARROW)){
    mario.scale=0.2
  }
  
  if(keyWentUp(DOWN_ARROW)){
    mario.scale=0.4
  }
  if(keyWentDown(UP_ARROW)){
    mario.velocityY=-10;
  }
  console.log(mario.x)  
  mario.velocityY=mario.velocityY+0.5;
  if(mario.x===1590){
   bg1.addImage(w);
    mario.destroy();
  }
  mario.collide(ground);
  mario.collide(p1);
  mario.collide(p2);
  mario.collide(p3);
  mario.collide(p4);
  mario.collide(p5);
  mario.collide(p6); 
  mario.collide(p7);
  mario.collide(pipe1);
  mario.collide(pipe2);
  e1.bounceOff(pipe1);
  e1.bounceOff(pipe2);
  e2.bounceOff(p8);
  e2.bounceOff(pipe1)
  
  
 
  
  pipe1.visible=false;
  pipe2.visible=false;
  
  drawSprites();
  
  textSize(25);
  fill(0)
  text("Score : "+score,mario.x,50);
  
  if(mario.isTouching(e1)){
    gameState="over";
    mario.velovityY=0;
    e1.velocityX=0;
  } 
  
   if(mario.isTouching(e2)){
    gameState="over";
    mario.velovityY=0;
    e2.velocityX=0;
  }
  
  if (gameState==="over"){
    textSize(25)
    text("GAMEOVER",mario.x,100);
    mario.destroy();
  }
  
}