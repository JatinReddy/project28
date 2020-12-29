
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
Constraint = Matter.Constraint;

var boy,boyImage;
var tree, treeImage;

function preload()
{
	boyImage = loadImage("boy.png");
	treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;
	
	tree = createSprite(700,370);
	tree.addImage(treeImage);
	tree.scale = 0.43;

	boy = createSprite(150,570);
	boy.addImage(boyImage);
	boy.scale = 0.1;
	
	
	

	//Create the Bodies Here.
	
	ground = new Ground(300,640,1500,30);
	mango1 = new Mango(600,290,40);
	mango2 = new Mango(885,325,40);
	mango3 = new Mango(670,260,40);
	mango4 = new Mango(730,200,40);
	mango5 = new Mango(710,320,40);
	stone1 = new Stone(98,515,40);
	launcher = new Launcher(stone1.body,{x:98,y:515});
	

	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background("grey");
  
  drawSprites();
  
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
  stone1.display();
  launcher.display();

  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango5);
  
  
  
}
function detectcollision(lstone,lmango){
	stoneBodyPosition = lstone.body.position;
	mangoBodyPosition = lmango.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.x);
	if (distance<= lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function mouseDragged (){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased (){
	launcher.fly();
}

function keyPressed (){
	if (keyCode === 32){
		launcher.attach(stone1.body);

	}
}