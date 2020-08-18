
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, heli,  packageSprite,packageIMG;
var packageBody,ground,redbox,redbox2,redbox3
var world=World;

function preload()
{
	helicopterIMG=loadImage("pngfuel.com.png");
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	packageBody=new PackageBody(400,100,10,10);


	helicopterSprite=new HelicopterBody();
	heli=createSprite(400,100,10,10);
	heli.addImage(helicopterIMG);
	heli.scale=0.25

	ground=new Ground();
    redbox=new RedBox(400,660,200,30);
    redbox2=createSprite(300,620,30,100);
	redbox3=createSprite(500,620,30,100);
	redbox2.shapeColor="red";
	redbox3.shapeColor="red"

	

	Engine.run(engine);
	
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  drawSprites();
  helicopterSprite.display();
  ground.display();
  packageBody.display();
  redbox.display();
  
}

function keyPressed(){
	if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on
		 Matter.Body.setStatic(packageBody.body,false);
	 }
	
   }

