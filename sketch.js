var canvas;
var music;

var box1,box2,box3,box4; 
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){

    canvas= createCanvas(800,600);

box1=createSprite(700,500,100,10);
box1.shapeColor="red";

box2=createSprite(500,500,100,10);
box2.shapeColor="blue";

box3=createSprite(300,500,100,10);
box3.shapeColor="green";

box4=createSprite(100,500,100,10);
box4.shapeColor="yellow";


ball=createSprite(400,300,30,30);
ball.shapeColor="white";
ball.velocityX=5;
    //create box sprite and give velocity

}

function draw() {
    background("grey");
    createEdgeSprites();
    ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    drawSprites();
}
