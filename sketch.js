const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper,dustbin4,dustbin4Img;

function preload()
{
	dustbin4Img=loadImage("dustbin.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

ground = new Ground(400,590,800,20);
wall1=new Ground(815,350,10,700);
wall2=new Ground(-15,350,10,700);
paper = new Paper(130,580,45);

dustbin1=new Dustbin(580,480,1,160);
dustbin2=new Dustbin(700,480,1,160);
dustbin3=new Dustbin(625,590,169,20);

dustbin4=createSprite(625,480,169,20);
dustbin4.addImage("dustbin4",dustbin4Img);
dustbin4.scale=0.5;

 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(137, 209, 254);
  
  drawSprites();
  paper.display();
  ground.display();
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-150});

  }
  if(keyCode===DOWN_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:-150,y:150});

  }
}


