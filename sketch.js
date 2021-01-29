const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world,obj1;
var rect2;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  var obj1opt = {
    isStatic: true
  }

var rect2opt={
 restitution:1,
 friction:0.3,
 density: 0.7
}


  obj1 = Bodies.rectangle(0,390,800,50,obj1opt);
  World.add(world,obj1);
  console.log(obj1);

rect2=Bodies.rectangle(300,100,50,50,rect2opt);
World.add(world,rect2);
console.log(rect2);
}

function draw() {
  background("lightBlue"); 
  Engine.update(engine); 
  rect (obj1.position.x,obj1.position.y,800,10);
  rect (rect2.position.x,rect2.position.y,50,50);
  
}