var Play= 1;
var End =0;
var gameState = Play;

var road,bomb,gameOver;
var tank,tank1,tank2,tank3,bullet;
var tankimg,tank1img,tank2img,tank3img,bulletimg;
var roadimg,bombimg,gameOverimg;
var first_opponent,sec_opponent,third_opponent, bombs,bullet;


var score= 0;


function preload(){
roadimg = loadImage("Road.png");
bombimg = loadImage("bomb.png");
gameOverimg = loadImage("gameOver.png");
tankimg = loadImage("tank.png");
tank1img = loadImage("tank1.png");
tank2img = loadImage("tank2.png");
//tank3img = loadImage("tank3.png");
bulletimg = loadImage("bullet.png");
}

function setup() {
 createCanvas(1200,900);
  
 road = createSprite(100,450);
road.addImage(roadimg);
road.velocityX= -3;
  
  tank = createSprite(100,450);
  tank.addImage(tankimg);
  tank.scale=0.5;
  tank.setCollider("rectangle",0,0,500,300);
  
  
  gameOver = createSprite(600,450);
  gameOver.addImage(gameOverimg);
  gameOver.visible= false;
  
first_opponent = new Group();
  sec_opponent = new Group();
 // third_opponent = new Group();
  bombs = new Group();
  bullets = new Group();
  
}

function draw() {
 background("white");
  
  drawSprites();
  
  textSize(20);
fill("255");
  text("score="+score,1000,70);
  
  
  
  
  
  if(gameState===Play){
    
  tank.y = World.mouseY;
    
  edges = createEdgeSprites();
    tank.collide(edges);
    
    
   
    if(road.x < 0 ){
  road.x = width/2;
      
  }
 bombs_1(); 
    
    var select_oppPlayer = Math.round(random(1,2));
  
 if (World.frameCount % 150 == 0) {
  if (select_oppPlayer == 1) {
      tanks_1();
    } else if (select_oppPlayer == 2) {
     tanks_2();
  }
 } 
    if(keyDown("r")){
  bullets_1();
} 
    if(bullets.isTouching(first_opponent)){
      score= score+1;
      first_opponent.destroyEach();
      bullets.destroyEach();
    }
    if(bullets.isTouching(sec_opponent)){
      score= score+2;
      sec_opponent.destroyEach();
      bullets.destroyEach();
    }
    if(bullets.isTouching(bombs)){
      gameState = End;
      bombs.destroyEach();
    }
    if(tank.isTouching(first_opponent)){
      gameState = End;
    }
     if(tank.isTouching(sec_opponent)){
      gameState = End;
    }
     if(tank.isTouching(bombs)){
      gameState = End;
    }
   
    } 
else if(gameState===End){
  gameOver.visible= true;
  road.velocityX= 0;
  tank.velocityY=0;
  
    first_opponent.destroyEach();
    sec_opponent.destroyEach();
    //third_opponent.destroyEach();
    bullets.destroyEach();
  bombs.setVelocityXEach(0);
    
    
    
  }

}
function tanks_1(){
   tank1 = createSprite(1100,Math.round(random(50,850)));
  tank1.addImage(tank1img);
  tank1.velocityX= -(6);
  tank1.setLifetime=200;
  tank1.setCollider("rectangle",0,0,300,300);
  
  first_opponent.add(tank1);
  tank1.scale=0.7;
  
  
}
function tanks_2(){
   tank2 = createSprite(1100,Math.round(random(50,850)));
  tank2.addImage(tank2img);
  tank2.scale=0.3;
  tank2.velocityX= -(6);
  tank2.setLifetime=200;
  sec_opponent.add(tank2);
  
  
}
function tanks_3(){
   tank3 = createSprite(1100,Math.round(random(50,850)));
  tank3.addImage(tank3img);
  tank3.velocityX= -(6);
  tank3.setLifetime=200;
  third_opponent.add(tank3);
  
  
}
function bombs_1(){
  if (World.frameCount % 150 == 0) {bomb = createSprite(1100,Math.round(random(50,850)));
  bomb.addImage(bombimg);
  bomb.scale=0.25;
  bomb.velocityX= -(6);
  
  bomb.setLifetime=200;
  bomb.setCollider("rectangle",0,0,bomb.width,bomb.height);
  bombs.add(bomb);}
  
  
}
function bullets_1(){
   bullet = createSprite(100,600,200,200);
  bullet.addImage(bulletimg);
  bullet.velocityX= 7;
  bullet.y= tank.y;
  bullet.scale=0.05;
 bullet.lifetime= 400;
 
  bullets.add(bullet);
  
  
}