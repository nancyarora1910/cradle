const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

//Create multiple bobs, mulitple ropes varibale here
var ball;
var ball1;
var ball2;
var ball3;
var ball4;
var rope;
var rope1;
var rope2;
var rope3;
var rope4;

function setup() {
	createCanvas(600, 600);
	rectMode(CENTER);

    // created engine
	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:true
	}

	var rope_options = {
		pointA:{x:300,y:1},
		bodyB:ball,
		pointB:{x:0,y:50},
		length:1,
		stiffness:0.1
	  }

	  var rope1_options = {
		pointA:{x:350,y:20},
		bodyB:ball1,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  }

	  var rope2_options = {
		pointA:{x:397,y:20},
		bodyB:ball2,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  }

	  var rope3_options = {
		pointA:{x:450,y:20},
		bodyB:ball3,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  }

	  var rope4_options = {
		pointA:{x:500,y:20},
		bodyB:ball4,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  }



	  var roof_options = {
		  isStatic:true
	  }
	

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	ball = Bodies.circle(300,250,10,ball_options);
	World.add(world,ball);

	ball1 = Bodies.circle(350,250,10,ball_options);
	World.add(world,ball1);

	ball2 = Bodies.circle(400,250,10,ball_options);
	World.add(world,ball2);

	ball3 = Bodies.circle(450,250,10,ball_options);
	World.add(world,ball3);

	ball4 = Bodies.circle(500,250,10,ball_options);
	World.add(world,ball4);

	  rope = Matter.Constraint.create(rope_options);
	  
		  World.add(world,rope);

		  rope1 = Matter.Constraint.create(rope1_options);
	  
		  World.add(world,rope1);

		  rope2 = Matter.Constraint.create(rope2_options);
	  
		  World.add(world,rope2);

		  rope3 = Matter.Constraint.create(rope3_options);
	  
		  World.add(world,rope3);

		  rope4 = Matter.Constraint.create(rope4_options);
	  
		  World.add(world,rope4);

	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("skyblue");

  rect(roof.position.x,roof.position.y,230,20);
  
  //call display() to show ropes here

  //push();
  //strokeweight(2);
  //stroke(255);

  line(rope.pointA.x,rope.pointA.y,ball.position.x,ball.position.y);
  line(rope1.pointA.x,rope1.pointA.y,ball1.position.x,ball1.position.y);
  line(rope2.pointA.x,rope2.pointA.y,ball2.position.x,ball2.position.y);
  line(rope3.pointA.x,rope3.pointA.y,ball3.position.x,ball3.position.y);
  line(rope4.pointA.x,rope4.pointA.y,ball4.position.x,ball4.position.y);
//pop();

  //create ellipse shape for multiple bobs here
  
ellipse(ball.position.x,ball.position.y,10);
ellipse(ball1.position.x,ball1.position.y,10);
ellipse(ball2.position.x,ball2.position.y,10);
ellipse(ball3.position.x,ball3.position.y,10);
ellipse(ball4.position.x,ball4.position.y,10);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
	if(keyCode==UP_ARROW)
	{
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	}
}