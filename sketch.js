
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof
var bob1, bob2, bob3, bob4, bob5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 80, 700, 50);
	bob1 = new Bob(130, 100, 70);
	bob2 = new Bob(270,100,70);
	bob3 = new Bob(410,100,70);
	bob4 = new Bob(550,100,70);
	bob5 = new Bob(690,100,70);
	rope1 = new Rope(bob1.body, roof.body, -280);
	rope2 = new Rope(bob2.body, roof.body, -140);
	rope3 = new Rope(bob3.body, roof.body, 0);
	rope4 = new Rope(bob4.body, roof.body, 140);
	rope5 = new Rope(bob5.body, roof.body, 280);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}



