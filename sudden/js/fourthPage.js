let chars = ["👁", "❗️", "👣","🆘","✖️","❌","🚫","❓","⛔️"];

let img;
let cam;

let gridSizeNumber;

let clickRect = document.getElementById('clickRect');
  clickRect.addEventListener('click', iWantMemory);

let firstMemory = document.getElementById('firstMemory');
let secondMemory = document.getElementById('secondMemory');
let thirdMemory = document.getElementById('thirdMemory');
let body = document.getElementById('body');

let memory = 0;

let instruction = document.getElementById('instruction');


function setup() {
  //let createCanvas(640, 480);
  let canvas = createCanvas(640,480);
  canvas.parent("canvas");

  cam = createCapture(VIDEO);
  cam.hide();
  img = createImage(width, height);
  gridSizeNumber = 17;
}

function iWantMemory() {
  if(mouseX<width && mouseX>0 && mouseY<height && mouseY>0 && gridSizeNumber>5){
    gridSizeNumber-=3;
  }

  memory ++;
}

function draw() {

  document.getElementById("firstMemory").innerHTML = localStorage.getItem("thefirstAnswerHa");
  document.getElementById("secondMemory").innerHTML = localStorage.getItem("thesecondAnswerHa");
  document.getElementById("thirdMemory").innerHTML = localStorage.getItem("thethirdAnswerHa");
  document.getElementById("fourthMemory").innerHTML = localStorage.getItem("thefourthAnswerHa");

  background(0);

  cam.loadPixels();
  img.loadPixels();

  let gridSize = ((frameCount) % 3) + gridSizeNumber;

  noStroke();
  if(gridSizeNumber>5){
  for (let y = 0; y < img.height; y += gridSize) {
    for (let x = 0; x < img.width; x += gridSize) {
      let index = (x + y * img.width) * 4;

      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      let avg = (r + g + b) / 3;

      let cIndex = floor(
        constrain(map(avg, 0, 255, 0, chars.length), 0, chars.length - 1)
      );
      fill(255,0,0);
      text(chars[cIndex], x, y);
    }
  }
  }

    if(gridSizeNumber<=5){
    for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let idxMode2 = (x + y * img.width) * 4;
      img.pixels[idxMode2] = cam.pixels[idxMode2];
      img.pixels[idxMode2 + 1] = cam.pixels[idxMode2 + 1];
      img.pixels[idxMode2 + 2] = cam.pixels[idxMode2 + 2];
      img.pixels[idxMode2 + 3] = cam.pixels[idxMode2 + 3];
      }
    }

  img.updatePixels();
  image(img, 0, 0);
  }

  console.log(memory)

  if(memory == 1){
    firstMemory.style.visibility = "visible";
    firstMemory.style.animation =  "8s slidein 0s linear infinite running";
    document.getElementById("instruction").innerHTML = "It seems that there's no place to hide. It's the time to face it...";
  }

  if(memory == 2){
    firstMemory.style.visibility = "visible";
    secondMemory.style.visibility = "visible";
    secondMemory.style.animation =  "8s slidein 0s linear infinite running";
    document.getElementById("instruction").innerHTML = "You are drowned in memories. Only good memories.";
  }

  if(memory == 3){
    firstMemory.style.visibility = "visible";
    secondMemory.style.visibility = "visible";
    thirdMemory.style.visibility = "visible";
    thirdMemory.style.animation =  "8s slidein 0s linear infinite running";
    document.getElementById("instruction").innerHTML = "It seems that you are so satisfied with your life. <br> It has been so perfect that even if it stops now, you have no complaints.";
  }

  if(memory>= 4){
    firstMemory.style.visibility = "visible";
    secondMemory.style.visibility = "visible";
    thirdMemory.style.visibility = "visible";
    fourthMemory.style.visibility = "visible";
    fourthMemory.style.animation =  "8s slidein 0s linear infinite running";
    body.style.backgroundImage = "linear-gradient(to right, lightCoral,LightSalmon,LemonChiffon,LightGreen,MediumTurquoise,LightSkyBlue,Thistle)"
    firstMemory.style.fontFamily =  "'Bebas Neue', cursive";
    document.getElementById("instruction").innerHTML = "You accept death.";
  }
}
