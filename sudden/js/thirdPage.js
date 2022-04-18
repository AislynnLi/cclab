let x;
let y;
let r;
let opacity;
let opacityOpen;
let firstPara = document.getElementById('firstPara');
let secondPara = document.getElementById('secondPara');
let thirdPara = document.getElementById('thirdPara');
let fourthPara = document.getElementById('fourthPara');

let firstInstruction = document.getElementById('firstInstruction');
let secondInstruction = document.getElementById('secondInstruction');
let thirdInstruction = document.getElementById('thirdInstruction');
let fourthInstruction = document.getElementById('fourthInstruction');
let fifthInstruction = document.getElementById('fifthInstruction');
let sixthInstruction = document.getElementById('sixthInstruction');
let lastInstruction = document.getElementById('lastInstruction');

let theScale;
let lineStart;

let mySound;
let close;
let shot;
let amplitude;
let startClose = 1;

let count = 0;

let runStart;

let clickRect = document.getElementById('clickRect');
  clickRect.addEventListener('click', doorIsKnocked);

function doorIsKnocked() {
  if(window.scrollY>1295){
    count++;
  }
}


function preload() {
  mySound = loadSound("asset/knockFirst.mp3");
  shot = loadSound("asset/shot.mp3");
  close = loadSound("asset/close.mp3");
}

const instructions = document.querySelectorAll(".instruction");
function setup() {
  let canvas = createCanvas(400,400);
  canvas.parent("con");
  canvas.mouseMoved(userStartAudio);

  //const instructions = document.querySelectorAll(".instruction");

  amplitude = new p5.Amplitude();

  x = 315;
  y = 80;
  g=0;
  b=0;
  r=0;
  opacity = 230;
  opacityOpen = 255;

  theScale = 1;
  lineStart = 20;
}

function draw(){

  runStart = millis();
  // background(255);
  if(window.scrollY<1295){
  cursor("auto");
  background(255);
  fill("black");
  for(iy=0;iy<20;iy++){
  text("stairs",300,100+10*iy);
  }
  for(iy=0;iy<18;iy++){
  text("stairs",265,120+10*iy);
  }
  for(iy=0;iy<16;iy++){
  text("stairs",230,140+10*iy);
  }
  for(iy=0;iy<14;iy++){
  text("stairs",195,160+10*iy);
  }
  for(iy=0;iy<12;iy++){
  text("stairs",160,180+10*iy);
  }
  for(iy=0;iy<10;iy++){
  text("stairs",125,200+10*iy);
  }
  for(iy=0;iy<8;iy++){
  text("stairs",90,220+10*iy);
  }
  for(iy=0;iy<6;iy++){
  text("stairs",55,240+10*iy);
  }
  for(iy=0;iy<4;iy++){
  text("stairs",20,260+10*iy);
  }

  let speedX = map(window.scrollY,0,80,315,280);
  if(window.scrollY<80){
    x = speedX;
  }
  let speedY = map(window.scrollY,80,160,80,100);
  if(window.scrollY<160 && window.scrollY>80){
    y = speedY;
  }

  for(i=0; i<9;i++){
  speedX = map(window.scrollY,160+160*i,240+160*i,280-35*i,245-35*i);
  if(window.scrollY<240+160*i && window.scrollY>160+160*i ){
    x = speedX
    if(r<103){
      r+=20;
    }
    if(opacity<230){
      opacity++;
    }
  }
  }

  for(i=0; i<9;i++){
  speedY = map(window.scrollY,240+160*i,320+160*i,100+20*i,120+20*i);
  if(window.scrollY<320+160*i && window.scrollY>240+160*i){
    y = speedY;
    if(r>0){
      r-=20;
    }
    if(opacity>200){
      opacity--;
    }
  }
  }

  if(window.scrollY>5){
    opacityOpen = 0;
  }
  rectMode(CENTER);
  rect(x,y,20);
  fill(r,0,0,opacity);
  rect(width/2,height/2,width);
  fill(0,0,0,opacityOpen);
  rect(width/2,height/2,width);
}
if(window.scrollY>1295) {
  background(0);

  let volValue = amplitude.getLevel();
  volValue = constrain(volValue, 0.0, 1.0);
  theScale = map(volValue,0,1,1,1.2);

  if(mouseX>95 && mouseX<300 && mouseY>100){
    cursor("grabbing");
  } else {
    cursor("auto");
  }
  if(mouseIsPressed){
    if(lineStart<30){
      lineStart ++;
    }
  }else{
    lineStart = 20;
  }

  fill("Gold");
  push();
  translate(200,250);
  scale(theScale);
  strokeWeight(3);
  rectMode(CORNER);
  rect(-105,-155,210,310);
  rect(-100,-150,200,300);

  // up rect
  fill("Maroon");
  strokeWeight(3);
  rect(140-200,130-250,120,80);
  rect(140-200,240-250,120,30);
  rect(140-200,300-250,120,80);
  ellipse(120-200,255-250,20);
  pop();

  if(mouseIsPressed){
    push();
    translate(mouseX,mouseY);
    for(i=0; i<6; i++){
    rotate(radians(i*60+10));
    strokeWeight(3);
    line(lineStart,0,lineStart+15,0);
  }
    pop();
  }

  if(mouseIsPressed && mouseX>95 && mouseX<300 && mouseY>100){
    if (mySound.isPlaying() == false) {
    mySound.play();
   }
  }
}
  if (runStart > 25000 && runStart < 27000){
    if (shot.isPlaying() == false) {
    shot.play();
   }
  }

  if(window.scrollY>320 && window.scrollY<640){
    firstPara.style.visibility = "visible";
    secondPara.style.visibility = "hidden";
    thirdPara.style.visibility = "hidden";
    fourthPara.style.visibility = "hidden";
    firstPara.style.opacity = "100%";
    secondPara.style.opacity = "0%";
    thirdPara.style.opacity = "0%";
    fourthPara.style.opacity = "0%";
  }
  if(window.scrollY>640 && window.scrollY<960){
    firstPara.style.visibility = "hidden";
    secondPara.style.visibility = "visible";
    thirdPara.style.visibility = "hidden";
    fourthPara.style.visibility = "hidden";
    firstPara.style.opacity = "0%";
    secondPara.style.opacity = "100%";
    thirdPara.style.opacity = "0%";
    fourthPara.style.opacity = "0%";
  }
  if(window.scrollY>960 && window.scrollY<1280){
    firstPara.style.visibility = "hidden";
    secondPara.style.visibility = "hidden";
    thirdPara.style.visibility = "visible";
    fourthPara.style.visibility = "hidden";
    firstPara.style.opacity = "0%";
    secondPara.style.opacity = "0%";
    thirdPara.style.opacity = "100%";
    fourthPara.style.opacity = "0%";

  }

  if(window.scrollY>1285){
    firstPara.style.visibility = "hidden";
    secondPara.style.visibility = "hidden";
    thirdPara.style.visibility = "hidden";
    fourthPara.style.visibility = "visible";
    firstPara.style.opacity = "0%";
    secondPara.style.opacity = "0%";
    thirdPara.style.opacity = "0%";
    fourthPara.style.opacity = "100%";
    startClose ++;
  }

  if(startClose > 10 && startClose <80){
    if (close.isPlaying() == false) {
    close.play();
   }
  }

  if(count>13){
    window.open("fourthPage.html","_parent");
  }
  console.log(window.scrollY);

  if(window.scrollY>5){
    firstInstruction.style.visibility = "hidden";
    secondInstruction.style.visibility = "hidden";
    thirdInstruction.style.visibility = "hidden";
    fourthInstruction.style.visibility = "hidden";
    fifthInstruction.style.visibility = "hidden";
    sixthInstruction.style.visibility = "hidden";
  } else{
    firstInstruction.style.visibility = "visible";
    secondInstruction.style.visibility = "visible";
    thirdInstruction.style.visibility = "visible";
    fourthInstruction.style.visibility = "visible";
    fifthInstruction.style.visibility = "visible";
    sixthInstruction.style.visibility = "visible";
  }

  if(window.scrollY<5){
  if (runStart > 25000){
    lastInstruction.style.visibility = "visible";
  }
}

if(window.scrollY>5){
  lastInstruction.style.visibility = "hidden";
}

console.log(startClose)
}
