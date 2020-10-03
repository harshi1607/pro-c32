
var block1,block2,block3,block4,block5,block6,block7,block8,
    block9,block10,block11,block12,block13,block14,block15,
    stand,polygon,polygonImg,backgroundImg;
    
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies  
const Constraint = Matter.Constraint
var score = 0;

function preload(){
  getTime()
}

function setup() {
  createCanvas(800,400);
  engine= Engine.create();
  world= engine.world;
  polygon= new Polygon(50,200,100)
  //polygon.addImage("download",polygonImg)
  stand= new Stand(390,300,400,20)

  block1= new Box(300,255,50,50)
  block2= new Box(350,255,50,50)
  block3= new Box(400,255,50,50)
  block4= new Box(450,255,50,50)
  block5= new Box(500,255,50,50)
  block6= new Box(320,205,50,50)
  block7= new Box(370,205,50,50)
  block8= new Box(420,205,50,50)
  block9= new Box(470,205,50,50)
  block10= new Box(345,155,50,50)
  block11= new Box(395,155,50,50)
  block12= new Box(445,155,50,50)
  block13= new Box(370,105,50,50)
  block14= new Box(420,105,50,50)
  block15= new Box(395,55,50,50)

  slingshot= new SlingShot(polygon.body,{x:100,y:220});
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
    noStroke();
    textSize(35)
    fill("white")
    text("SCORE:" + score,600,100)

}
  Engine.update(engine);
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  polygon.display();
  slingshot.display();


  block1.getscore();
  block2.getscore();
  block3.getscore();
  block4.getscore();
  block5.getscore();
  block6.getscore();
  block7.getscore();
  block8.getscore();
  block9.getscore();
  block10.getscore();
  block11.getscore();
  block12.getscore();
  block13.getscore();
  block14.getscore();
  block15.getscore();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode ===32){
    slingshot.attach(this.polygon)
  }
}
function keyPressed(){
  if(keyCode===32){
      slingshot.attach(polygon.body)
  }
}
async function getTime(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata")
  var responsejson=await response.json()
  console.log(responsejson)
var time=responsejson.datetime
var hour=time.slice(11,13)
if(hour>06&&hour<18){
  bg="bg.png"
}
else{
  bg="bg2.jpg"
}
backgroundImg=loadImage(bg)

}