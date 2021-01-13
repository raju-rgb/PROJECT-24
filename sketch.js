
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;
var ground1 , dustbin1 , paper1

function setup() {
	var canvas = createCanvas(1600,700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1=new Dustbin(1200,650);
	paper1=new Paper(200,450,30);
	ground1=new Ground(width/2,670,width,20);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  dustbin1.display();
  paper1.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position, {x:25,y:-20})
	}
}


