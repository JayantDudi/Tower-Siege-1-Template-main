const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  stand2 = new Stand(700,195,180,10);
  //level1
  blocks1 = new Block(645,170,30,40);
  blocks2 = new Block(675,170,30,40);
  blocks3 = new Block(705,170,30,40);
  blocks4 = new Block(735,170,30,40);
  blocks5 = new Block(755,170,30,40);
  //level2
  blocks6 = new Block(669,125,30,40);
  blocks7 = new Block(699,125,30,40);
  blocks8 = new Block(729,125,30,40);
  //level3
  blocks9 = new Block(699,75,30,40);


  polygon1=new Polygon(1100,300,25);

  sling = new SlingShot(polygon1.body,{x:1100,y:300});
  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill("purple");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();

  fill("green");
  blocks6.display();
  blocks7.display();
  blocks8.display();

  fill("red");
  blocks9.display();

  polygon1.display();
  sling.display();

  detectCollision(polygon1,blocks1);
  detectCollision(polygon1,blocks2);
  detectCollision(polygon1,blocks3);
  detectCollision(polygon1,blocks4);
  detectCollision(polygon1,blocks5);
  detectCollision(polygon1,blocks6);
  detectCollision(polygon1,blocks7);
  detectCollision(polygon1,blocks8);
  detectCollision(polygon1,blocks9);
 

}

function mouseDragged() {
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
  sling.fly();
}

function detectCollision(polygon1Obj,blockObj){

var polygon1Pos = polygon1Obj.body.position;
var blockPos = blockObj.body.position;
var distance = dist(polygon1Pos.x,polygon1Pos.y,blockPos.x,blockPos.y);
if(distance <= polygon1Pos.r + blockObj.r){
  Matter.Body.setStatic(blockObj,false);
}
}




