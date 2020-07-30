const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var log6;
var slingshot;
var gamestate = "onSling"
function preload() {
  getBackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    //log6 = new Log(230,180,80,PI/2);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,100,50,50);
    
    slingshot = new Slingshot(bird.body,{x:200,y:100});
}
 
function draw(){
    if(backgroundImg){
        background("backgroundImg")
    }
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();
    
}
function mouseDragged()
{
    if(gamestate!== "launched"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
    }
}
function mouseReleased()
{
    slingshot.fly();
    gamestate = "launched";
}
function keyPressed()
{
 if (keyCode === 32){
    Matter.Body.setPosition(bird.body,{x:200,y:100});
     slingshot.attach(bird.body);
     bird.trajectory = [];
     gamestate = "onSling"
 }
}
async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responsejson = await response.json();
    var datetime = responsejson.datetime;
    var hour = datetime.slice(11,13);
    if(hour>=06&&hour<=17){
        bg = "bg.png";
    }
    else{
        bg = "bg2.png"
    }
    backgroundImg = loadImage(bg);
}