
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gs='ready'
var score=0 

function preload()
{
	
}

function setup() {
	createCanvas(800,500);


	engine = Engine.create();
	world = engine.world;
	b1=new Box(500,350,200,20)
	bx1=new blocks(455,320)
	bx2=new blocks(485,320)
	bx3=new blocks(515,320)
	bx4=new blocks(545,320)
	bx5=new blocks(470,290)
	bx6=new blocks(500,290)
	bx7=new blocks(530,290)
	bx8=new blocks(500,260)
	p=new hex(100,400)

	slingshot = new sling(p.body,{x:100,y:400});
	
	Engine.run(engine);
  
}


function draw() {
  background(0);
  fill('white')
  textSize(35)
  text('score:'+score,50,50)
  b1.display()
  bx1.display()
  bx2.display()
  bx3.display()
  bx4.display()
  bx5.display()
  bx6.display()
  bx7.display()
  bx8.display()
  p.display()
  slingshot.display()
}

function mouseDragged(){
    if (gs!=="launched"){
        Matter.Body.setPosition(p.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gs = "launched";
}

function keyPressed(){
    if(keyCode === 32){
	slingshot.attach(p.body);
	gs='ready'
    }
}




