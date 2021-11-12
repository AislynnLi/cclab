let angle = 0;     // the starting angle
let radius = 100;  // distance to center

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  let centerX = width/2;  // rotating around the
  let centerY = height/2; // center of the screen

  // we use sin() and cos() to get how much
  // the ellipse is to the right (dx) and bottom
  // (dy) of the center based on the angle and
  // the radius you want
  let dx = cos(radians(angle)) * radius;
  let dy = sin(radians(angle)) * radius;

  // put center and offset together to get
  // screen coordinates
  let x = centerX + dx;
  let y = centerY + dy;

  // voila!
  console.log('ellipse is at ' + x + ', ' + y);
  color(255,0,0);
  ellipse(x, y, 10, 10);

  // here you can decide how fast your circle
  // should rotate
  angle++;
}






/*
let roundButtom = document.getElementById('roundButtom');
roundButtom.addEventListener('click',roundButtomClicked);

function roundButtomClicked {
  let rectElem = document.getElementById('rect');
  rectElem.style.borderRadius = '0px';
}

console.log('My file')

function say(what) {
  //alert(what);

  //step one: find the element we want to manipulate
  let elem = document.getElementById('lyrics');

  let newElem = document.createElement("p");

  newElem.innerHTML = what;

  elem.appendChild(newElem);


  elem = document.getElementById('heading');
  let rectElem = document.getElementById('rect');


  if (what == '🥺'){
  elem.style.backgroundColor = 'rgb(255,0,233)';
  rectElem.style.borderRadius = '0px';
} else {
  elem.style.backgroundColor = 'blue';
  rectElem.style.borderRadius = '50px';
}

  }
  */
