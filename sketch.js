
function setup() {
  createCanvas(800,400);
 
  

}

function draw() {
  background(0);  
angleMode(DEGREES);

var hr = hour();
  textSize(10);
  fill("white")
  text('Current hour:\n' + hr , 600,50);
  scAngle = map(hr,0,60,0,360);
  push();
  rotate(scAngle);
  translate(0,0);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,150,0);
  pop();

  var mn = minute();
  textSize(10);
  fill("white")
  text('Current minute :\n' +mn, 600,100);
  scAngle = map(mn,0,60,0,360);
  push();
  rotate(scAngle);
  translate(0,0)
  stroke("pink");
  strokeWeight(7);
  line(0,0,150,0);
  pop();

  var sc = second();
  textSize(10);
  fill("white")
  text('Current second :\n' + sc,600,150);
  scAngle = map(sc,0,60,0,360);
  push();
  rotate(scAngle);
  translate(0,0);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,150,0);
  pop();


  drawSprites();
}

function hour(){
push();
rotate(scAngle);
translate(0,0);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();
}

function minute(){

push();
rotate(scAngle);
translate(0,0);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();

}

function second(){

push();
rotate(scAngle);
translate(0,0);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();

}