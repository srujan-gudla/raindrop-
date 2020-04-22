const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;




var drop=[];
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
 
}

function draw() {
  background(255);  
  Engine.update(engine);
  if(frameCount%5===0){
    drop.push(new Drop(random(20,380),0,2,8));
  }
  for (var i =0;i <drop.length;i=i+1){
    drop[i].display();
  }
  
}
