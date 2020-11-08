const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
var ground,groundSprite;
var paperSprite;
var zone1,zone1Sprite,zone2Sprite,zone3Sprite;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color("yellow");

	zone1Sprite = createSprite(990, 650,200,20);
	zone1Sprite.shapeColor = color(255);

	zone2Sprite = createSprite(890,590,20,100);
	zone2Sprite.shapeColor = color(255);

	zone3Sprite = createSprite(1085,590,20,100);
	zone3Sprite.shapeColor = color(255);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	Engine.run(engine);
  
	zone1 = Bodies.rectangle(width/2, 632,200,20, {isStatic:true} );
	World.add(world, zone1);

	paperSprite = new Paper(200,450,40);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  
  paperSprite.display();
  drawSprites();
}



