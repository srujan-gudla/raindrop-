const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;




var drop;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  drop1=new Drop(200,0,50,50);
}

function draw() {
  background(0);  
  Engine.update(engine);
  drop1.display();
}