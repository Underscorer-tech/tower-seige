const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bw1, bw2, bw3, bw5, bw4, bw6, bw7, g1, g2;

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  bw1 = new bwalls(450, 250,35,60);
  bw2 = new bwalls(487, 250,35,60);
  bw3 = new bwalls(524, 250,35,60);
  bw4 = new bwalls(561, 250,35,60);
  bw5 = new bwalls(598, 250,35,60);
  bw6 = new bwalls(635, 250,35,60);
  bw7 = new bwalls(413, 250,35,60);
  g1 = new ground(524, 550, windowWidth, 20)

  Engine.run(engine);
}

function draw() {

  console.log(mouseX + " " + mouseY);
 
  rectMode(CENTER)
  Engine.update(engine);
  background("black");
  drawSprites();

  bw1.display();
  bw2.display();
  bw3.display();
  bw4.display();
  bw5.display();
  bw6.display();
  bw7.display();
  g1.display();
}
function mouseDragged(){

  g1.body.position.x=mouseX
   g1.body.position.y=mouseY

}


