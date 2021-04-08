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

  bw1 = new bwalls(450, 250);
  bw2 = new bwalls(487, 250);
  bw3 = new bwalls(524, 250);
  bw4 = new bwalls(561, 250);
  bw5 = new bwalls(598, 250);
  bw6 = new bwalls(635, 250);
  bw7 = new bwalls(413, 250);
  g1 = new ground(524, 550, 300, 20)

  Engine.run(engine);
}

function draw() {

  console.log(mouseX + " " + mouseY);
  // bw1.body.position.x=mouseX
  // bw1.body.position.y=mouseY

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

