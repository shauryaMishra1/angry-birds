const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var backgroundimage,bg="bg2.jpg",bgimg
var engine, world;
var ground, ball,score=0;
var birdsound,pigsound,birds=[]
function preload(){
    getbackgroundImage();
bgimg=loadImage(bg)
    birdsound=loadSound("bird_flying.mp3")
pigsound=loadSound("pig_snort.mp3")}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

  ground=new Ground(600,height,1200,20);  
  platform=new Ground(150,305,300,170);  
box1=new Box(700,320,70,70);
box2=new Box(920,320,70,70);
    bird=new Bird(200,50)
    bird2=new Bird(150,170)
    bird3=new Bird(100,170)
    bird4=new Bird(50,170)
    birds.push(bird4)
    birds.push(bird3)
    birds.push(bird2)
    birds.push(bird)
log1=new Log(810,260,300,PI/2)
box3= new Box(700,240,70,70)
box4= new Box(920,240,70,70)
log2=new Log(810,180,300,PI/2)
box5=new Box(810,160,70,70)
log3=new Log(720,120,150,PI/7)
log4=new Log(870,120,150,-PI/7)
pig1=new Pig(810,350)
pig2=new Pig(810,220)
    /*var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);
*/

string=new String(bird.body,{x:200,y:50})
}

function draw(){
   if(backgroundimage){
    background(backgroundimage);
    rectMode(CENTER);
    textSize(25)
    text("Score "+score,width-300,50)
   }else{
    background(bgimg);
    rectMode(CENTER);
    textSize(25)
    text("Score "+score,width-300,50) 
   }
   Engine.update(engine);
    ground.display()
box1.display()
box2.display()
bird.display()
log1.display() 
box3.display() 
box4.display() 
log2.display() 
box5.display() 
log3.display() 
log4.display() 
pig1.display()
pig2.display()
pig1.score()
pig2.score()
string.display()
platform.display()
bird2.display()
bird3.display()
bird4.display()
//ellipseMode(RADIUS);
    //ellipse(ball.position.x, ball.position.y, 20, 20);
}
function mouseDragged(){
    Matter.Body.setPosition(birds[birds.length-1].body,{x:mouseX,y:mouseY})
    Matter.Body.applyForce(birds[birds.length-1].body,birds[birds.length-1].body.position,{x:5,y:-5})
}
function mouseReleased(){
    string.fly()
birdsound.play();
birds.pop()}
function keyPressed(){
    if(keyCode==32){
     if(birds.length>0){

     
        string.attach(birds[birds.length-1].body)
     Matter.Body.setPosition(birds[birds.length-1].body,{x:200,y:50})   
    }
}}
async function getbackgroundImage(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON=await response.json()
    var datetime=responseJSON.datetime
    var hour=datetime.slice(11,13)
    if(hour>=06&&hour<=19){
        bg="bg.png"
    }else{
        bg="bg2.jpg"
    }backgroundimage=loadImage(bg)
}