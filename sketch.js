



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1350, 595);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
wall1d = createSprite(1000,494,250,15)
wall1d.shapeColor="blue"

wall2 = createSprite(872,427,15,150)
wall2.shapeColor="blue"

wall3 = createSprite(1132,427,15,150)
wall3.shapeColor="blue"

ball1=new ball (200,100,15,15)

var ground_options ={
  isStatic: true
}

ground = Bodies.rectangle(1350/2,509,1350,15,ground_options);
World.add(world,ground);

var wall_options ={
    isStatic: true
}

wall1 = Bodies.rectangle(1000,494,250,15,wall_options);
World.add(world,wall1);

wall2= Bodies.rectangle(872,427,15,150,wall_options);
World.add(world,wall2);

wall3 = Bodies.rectangle(1132,427,15,150,wall_options);
World.add(world,wall3);





	Engine.run(engine);
    
}



function draw() {
  rectMode(CENTER);
  background(0);

   rect(wall1.position.x,wall1.position.y,250,15);
  rect(wall2.position.x,wall2.position.y,15,190-7);
  rect(wall3.position.x,wall3.position.y,15,200-17);
  rect(ground.position.x,ground.position.y,1350,15);
  ball1.display();
  keyPressed();
  drawSprites();
}


  function keyPressed(){ 
    if(keyCode === UP_ARROW){
       Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85}); 
      } 
    }



