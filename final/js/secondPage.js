let open;
// let button = document.getElementById('button');
// let run = document.getElementById('run');
let tryFirst = document.getElementById('tryFirst');
let trySecond = document.getElementById('trySecond');
let i = 0;
let disZip;

function closeButtonClicked() {
  this.parentNode.style.display = 'none';
  i = i+1;
}
let textsize;
let opacity;
let itms = [];
let selectedItem = 1;
let textItms = [
  "candy1",
  "candy2",
  "umbrella",
  "umbrella",
  "umbrella"
];
let distance;

let raindrops = [];
let count = 50;
let backpackX;
let backpackY;
let zipX;
let throwBack;
let disBackpack;

let leftX;
let leftY;
let rightX;
let middleLeftX;
let middleLeftY;
let middleRightX;
let middleRightY;
let leftMiddleY;
let middleY;
let time = 1;

let umbrellaStart;


let getItm;

function setup() {
  let canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent("umbrella");

  const closeBtns = document.querySelectorAll(".close");
  for (let i=0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener('click', closeButtonClicked);
  }


leftX = -25;
leftY = 5;
rightX = 25;
middleLeftX = -10;
middleLeftY = 5;
leftMiddleY = 0;
middleRightX = 10;
middleRightY = 5;
middleY = 0;

followMouse = false;
textsize = 20;
open = false;
throwBack = false;
backpackX = width/2;
backpackY = height/2;
zipX = -40;

opacity = 100;
getItm = false;


for (let i = 0; i < 5; i++) {
  itms.push(new Itm());
}

for (let i = 0; i < count; i++) {
  raindrops.push(new Raindrop(random(width), random(height)));
}

}

function doubleClicked() {
  throwBack = true;
}

let startMouseX = 0;
let startMouseY = 0;

function mousePressed() {
  startMouseX = mouseX;
  startMouseY = mouseY;
}

function draw() {
  background("LightBlue");


    if(i>5){
      window.open("thirdPage.html","_parent");
    }


    if (itms.length < 5) {
      itms.push(new Itm());
    }

    for (let i = itms.length - 1; i >= 0; i--) {
      if (itms[i].isDone == true) {
        itms.splice(i, 1);
      }
    }

    for (let i = 0; i < count; i++) {
      raindrops[i].update();
      raindrops[i].display();
    }
    fill("white");


    disBackpack = dist(mouseX,mouseY,backpackX,backpackY+80);
    if (disBackpack < 60 && (selectedItem == null || selectedItem == 1)){
      cursor("grab");
      if(mouseIsPressed){
        cursor("grabbing");
      }
    }

    disZip = dist(mouseX,mouseY,zipX+backpackX,50+backpackY);
    if(mouseIsPressed && disZip <15){
      if(zipX>=-40 && zipX <= 40){
    zipX = mouseX-backpackX;
    }
    if(zipX<-40){
    zipX= -40;
    }
    if(zipX>40){
    zipX =40;
    }
    }

    if(zipX == 40){
    getItm = true;
  } else {
    getItm = false;
  }

      push();
      noStroke();
      translate(backpackX, backpackY);
      scale(2);
      fill("PeachPuff")
      beginShape();
      curveVertex(-20,-80);
      curveVertex(-20,-80);
      curveVertex(-10,-100);
      curveVertex(10,-100);
      curveVertex(20,-80);
      curveVertex(10,-80);
      curveVertex(5,-90);
      curveVertex(-5,-90);
      curveVertex(-10,-80);
      curveVertex(-10,-80);
      endShape(CLOSE);
      fill("lightCoral");
      beginShape();
      bezier(-50, -80, -70, -80, -70, 80, -50, 80);
      bezier(50, -80, 70, -80, 70, 80, 50, 80);
      bezier(-52, -79, -50, -90, 50, -90, 52, -79);
      bezier(-52, 79, -50, 90, 50, 90, 52, 79);
      endShape(CLOSE);
      rect(-50,-80,100,160);
      fill("PeachPuff");
      beginShape();
      bezier(-30, 10, -40, 10, -40, 75, -30, 75);
      bezier(-30, 75, -30, 80, 30, 80, 30, 75);
      bezier(30, 10, 40, 10, 40, 75, 30, 75);
      bezier(-30, 10, -30, 5, 30, 5, 30, 10);
      endShape(CLOSE);
      rect(-30,10,60,65);
      fill('lightCoral');
      bezier(-35, 20, -35, 25, 35, 25, 35, 20);
      fill("PeachPuff");
      rect(-35,-50,70,20);
      pop();


      noStroke();
      fill("lightCoral")
      rectMode(CENTER);
      rect(zipX+backpackX,50+backpackY,10,20);
      rectMode(CORNER);
      stroke("black");


      if(open){
        time = time+1;
      }
      if(open && time>190){
        push();
        rectMode(CENTER);
        opacity ++;
        body.style.backgroundColor = "rgb(55,1,0)";
        fill(255,0,0);
        push();
        noStroke();
        rect(width/2,height/2,width,height);
        pop();
        stroke("black");

        textsize +=1;
        textSize(textsize);
        textAlign(CENTER);
        fill("black");
        text("run",width/2,height/2+textsize/4);
        pop();
      }

      if(open && time>190){
        fill(0,0,0,200);
        noStroke();
        rectMode(CENTER);
        rect(width/2,height/2,width,height);
        rectMode(CORNER);
        stroke("black")
      }


      if (mouseIsPressed && getItm) {
        let dy = startMouseY - mouseY;

        if(dy>10){
        if(leftY>-10){
          leftX-=3*0.2;
          rightX+=3*0.2;
          leftY-=1*0.2;
          leftMiddleY -=1*0.2;
          middleY-=1*0.2;
        }
        if(middleLeftY>-10+4){
          middleLeftX-=1.5*0.2;
          middleRightX+=1.5*0.2;
          middleLeftY-=1*0.2;
          middleRightY-=1*0.2;
        }
      }

      }

      for (let i = 0; i < itms.length; i++) {
        if(getItm){
        itms[i].throw();
      }
        itms[i].display();
      }

}

class Itm {
  constructor() {
    this.x1 = random(backpackX-40, backpackX+20);
    this.y1 = random(backpackY, backpackY+140);

    // capture
    this.capture = false;

    // throw
    this.dis = false;
    this.dm = 1;
    this.k = false;

    // text
    this.randomIndex = floor(random(textItms.length));
    this.randomitms = textItms[this.randomIndex];

    this.color = "red";
    this.angle = 0;
  }

  throw () {
    if (selectedItem == null) {
      this.dis = false;
    }

    this.dm = dist(mouseX, mouseY, this.x1, this.y1);

    if (this.dm < 15) {
      this.dis = true;
    }

    if (
      this.dis &&
      mouseIsPressed &&
      (selectedItem == 1 || selectedItem == this || selectedItem == null)
    ) {
      this.dis = true;
      selectedItem = this;
      this.capture = true;
    }

    if (this.capture && time<180) {
      umbrellaStart = frameCount;
      this.x1 = mouseX;
      this.y1 = mouseY;
      cursor("grabbing");
    }

    if (
      disBackpack < 60 &&
      throwBack == true &&
      this.dis == true &&
      this.randomitms != "umbrella"
    ) {
      this.isDone = true;
      selectedItem = null;
      cursor("grab");
      throwBack = false;
    }
  }

  display() {
    textAlign(CENTER);
    if (this.randomitms == "umbrella" && this.capture && leftY == -10) {
      open = true;
      tryFirst.style.visibility = "visible"
      tryFirst.style.transform = "scale(80%)"
      trySecond.style.visibility = "visible"
      trySecond.style.transform = "scale(80%)"
      tryThird.style.visibility = "visible"
      tryThird.style.transform = "scale(80%)"
      try4.style.visibility = "visible"
      try4.style.transform = "scale(50%)"
      try5.style.visibility = "visible"
      try5.style.transform = "scale(80%)"
      try6.style.visibility = "visible"
      try6.style.transform = "scale(50%)"
    }

    if(time>180 && open && this.randomitms == "umbrella"){
    this.y1+=3;
  }

    if(getItm){
    if (this.randomitms == "umbrella" && this.capture) {
      push();
      translate(this.x1, this.y1);
      if(time>180 && open && this.randomitms == "umbrella"){
      rotate((frameCount-umbrellaStart)*0.01);
    }

      scale(2);
      fill("Orange");
      beginShape();
      curveVertex(-3, -25);
      curveVertex(-3, -25);
      curveVertex(-3, 27);
      curveVertex(10, 27);
      curveVertex(10, 22);
      curveVertex(3, 22);
      curveVertex(3, -25);
      curveVertex(3, -25);
      endShape();

      beginShape();
      curveVertex(middleLeftX, middleLeftY);
      curveVertex(middleLeftX, middleLeftY);
      curveVertex(leftX * 0.67, leftMiddleY);
      curveVertex(leftX * 0.9, leftMiddleY);
      curveVertex(leftX, leftY);
      curveVertex(0, -55);
      curveVertex(middleLeftX, middleLeftY);
      curveVertex(middleLeftX, middleLeftY);
      endShape();

      beginShape();
      curveVertex(middleRightX, middleRightY);
      curveVertex(middleRightX, middleRightY);
      curveVertex(rightX * 0.67, leftMiddleY);
      curveVertex(rightX * 0.9, leftMiddleY);
      curveVertex(rightX, leftY);
      curveVertex(0, -55);
      curveVertex(middleRightX, middleRightY);
      curveVertex(middleRightX, middleRightY);
      endShape();

      beginShape();
      curveVertex(0, -55);
      curveVertex(0, -55);
      curveVertex(middleLeftX, middleLeftY - 2);
      curveVertex(-5, middleY);
      curveVertex(0, middleY - 1);
      curveVertex(5, middleY);
      curveVertex(middleRightX, middleRightY - 2);
      curveVertex(0, -55);
      curveVertex(0, -55);
      endShape();
      pop();
    } else {
      if(this.randomitms != "umbrella" && this.capture){
      fill("pink")
      ellipse(this.x1,this.y1, 10);
      triangle(this.x1-5,this.y1,this.x1-10,this.y1-5,this.x1-10,this.y1+5);
      triangle(this.x1+5,this.y1,this.x1+10,this.y1-5,this.x1+10,this.y1+5);
  }
    }
  }
}
}
class Raindrop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.scale = random(1, 2);
    this.speedY = random(2, 5);
    this.speedX = random(0, 1);
    this.angle = random(5, 20);
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    if (this.y > height && open == false) {
      this.y = 0;
    }

    if (this.x > width && open == false) {
      this.x = 0;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    scale(this.scale);
    fill(255);
    noStroke();
    rotate(radians(-this.angle));
    for (let i = 0; i < 5; i++) {
      ellipse(0, i * 3, 16 * (i + 1) * 0.2);
    }
    pop();
  }
}
