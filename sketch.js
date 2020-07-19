var cityImg;

function preload(){
  cityImg= loadImage("city.png");
}
function setup(){
  createCanvas(displayWidth-20,displayHeight-30);
  road1= new Road(500,500,100,20);
  road2= new Road()
}

function draw(){
  background(cityImg);

  road1.display();
  
}