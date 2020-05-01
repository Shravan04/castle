var rect1;
var rect2;
var triangle1;
var rect3;
var rect4;
var triangle2;
var rect5;
var rect6;
var triangle3;
var rect7;

function setup() {
  createCanvas(800,400);
  
  
}

function draw() {
  background(0);  
  drawSprites();
  rect1 =  rect(50,100,20,300);
  rect2 = rect(75,200,50,200);
  triangle1 = triangle(75,200,125,200,100,150);
  rect3 = rect(125,250,50,300);
  rect4 = rect(175,225,100,275);
  triangle2 = triangle(175,225,225,100,275,225);
  rect5 = rect(275,250,50,300);
  rect6 = rect(325,200,50,300);
  triangle3 = triangle(375,200,325,200,350,150);
  rect7 = rect(380,100,20,300);

  
}