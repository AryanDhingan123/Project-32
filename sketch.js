const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)
        background(backgroundImg);


    Engine.update(engine);


}

async function getBackgroundImg(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    

    if(hour>=04 && hour<=06){
        bg="sunrise1.png"
    }

    if(hour>=06 && hour<=08){
        bg="sunrise2.png"
    }

    if(hour>=08 && hour<=11){
        bg="sunrise3.png"
    }

    if(hour>=11 && hour<=13){
        bg="sunrise4.png"
    }

    if(hour>=13 && hour<=15){
        bg="sunrise5.png"
    }

    if(hour>=15 && hour<=17){
        bg="sunrise6.png"
    }

    if(hour>=17 && hour<=18){
        bg="sunset7.png"
    }

    if(hour>=18 && hour<=20){
        bg="sunset.png"
    }

    if(hour>=20 && hour<=23){
        bg="sunset9.png"
    }

    if(hour>=23 && hour==0){
        bg="sunset10.png"
    }

    if(hour==0 && hour<=03){
        bg="sunset11.png"
    }
    else{
        bg="sunset12.png"
    }




    backgroundImg = loadImage(bg);
}
