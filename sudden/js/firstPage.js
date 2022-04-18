let first;
let second;
let third;
let firstAnswer;
let secondAnswer;
let thirdAnswer;
let fourth;
let fourthAnswer;
let fifth;
let fifthAnswer;
let sixth;
let sixthAnswer;
let nextPage;

let nextQuestionGo;
let thirdQuestionGo;
let fourthQuestionGo;
let fifthQuestionGo;
let sixthQuestionGo;

let newText;
let newRealText = " ";
let newTextSecond;
let newRealTextSecond = " ";
let newTextThird;
let newRealTextThird = " ";
let newTextFourth;
let newRealTextFourth = " ";
//let answerInput;

// storge information
window.addEventListener("load", startuptext, false);

function startuptext() {
  newText = document.querySelector("#thefirstAnswer");
  newText.value = newRealText;
  newText.addEventListener("input", updateFirstText, false);
  newText.addEventListener("change", updateAllText, false);
  newText.select();
}

function updateFirstText(event) {
  newRealText = event.target.value;
}

function updateAllText(event) {
  newRealText = event.target.value;
}


// information2
window.addEventListener("load", startuptextSecond, false);

function startuptextSecond() {
  newTextSecond = document.querySelector("#thefifthAnswer");
  newTextSecond.value = newRealTextSecond;
  newTextSecond.addEventListener("input", updateFirstTextSecond, false);
  newTextSecond.addEventListener("change", updateAllTextSecond, false);
  newTextSecond.select();
}

function updateFirstTextSecond(event) {
  newRealTextSecond = event.target.value;
}

function updateAllTextSecond(event) {
  newRealTextSecond = event.target.value;
}

//information3
window.addEventListener("load", startuptextThird, false);

function startuptextThird() {
  newTextThird = document.querySelector("#thethirdAnswer");
  newTextThird.value = newRealTextThird;
  newTextThird.addEventListener("input", updateFirstTextThird, false);
  newTextThird.addEventListener("change", updateAllTextThird, false);
  newTextThird.select();
}

function updateFirstTextThird(event) {
  newRealTextThird = event.target.value;
}

function updateAllTextThird(event) {
  newRealTextThird = event.target.value;
}

//information 4
window.addEventListener("load", startuptextFourth, false);

function startuptextFourth() {
  newTextFourth = document.querySelector("#thesixthAnswer");
  newTextFourth.value = newRealTextFourth;
  newTextFourth.addEventListener("input", updateFirstTextFourth, false);
  newTextFourth.addEventListener("change", updateAllTextFourth, false);
  newTextFourth.select();
}

function updateFirstTextFourth(event) {
  newRealTextFourth = event.target.value;
}

function updateAllTextFourth(event) {
  newRealTextFourth = event.target.value;
}



first = document.getElementById('first');
second = document.getElementById('second');
third = document.getElementById('third');
fourth = document.getElementById('fourth');
fifth = document.getElementById('fifth');
sixth = document.getElementById('sixth');
firstAnswer = document.getElementById('firstAnswer');
secondAnswer = document.getElementById('secondAnswer');
thirdAnswer = document.getElementById('thirdAnswer');
fourthAnswer = document.getElementById('fourthAnswer');
fifthAnswer = document.getElementById('fifthAnswer');
sixthAnswer = document.getElementById('sixthAnswer');

sixthAnswer.addEventListener('click', goToNextPage);
firstAnswer.addEventListener('click', nextQuestion);
secondAnswer.addEventListener('click', nextQuestionSecond);
thirdAnswer.addEventListener('click', nextQuestionThird);
fourthAnswer.addEventListener('click', nextQuestionFourth);
fifthAnswer.addEventListener('click', nextQuestionFifth);

function goToNextPage(){
  nextPage = true;
}

function nextQuestion(){
nextQuestionGo = true;
}

function nextQuestionSecond(){
thirdQuestionGo = true;
}

function nextQuestionThird(){
fourthQuestionGo = true;
}

function nextQuestionFourth(){
fifthQuestionGo = true;
}

function nextQuestionFifth(){
sixthQuestionGo = true;
}

function setup() {
  nextQuestionGo = false;
  thirdQuestionGo = false;
  fourthQuestionGo = false;
  fifthQuestionGo = false;
  sixthQuestionGo = false;
  nextPage = false;
  //createCanvas(400, 400);
}

function keyPressed() {
  if (keyCode === ENTER && nextPage) {
    window.open("secondPage.html","_parent")
  }
}

function draw() {

  localStorage.setItem("thefirstAnswerHa",newRealText);
  localStorage.setItem("thesecondAnswerHa",newRealTextSecond);
  localStorage.setItem("thethirdAnswerHa",newRealTextThird);
  localStorage.setItem("thefourthAnswerHa",newRealTextFourth);

  if (window.scrollY>530){
    first.style.opacity = '100%';
    first.style.left = '40px';
  }
  if (window.scrollY>650){
    firstAnswer.style.opacity = '100%';
    firstAnswer.style.right = '40px';
  }
  if (window.scrollY>1300 && nextQuestionGo){
    second.style.opacity = '100%';
    second.style.left = '40px';

  }
  if (window.scrollY>1420 && nextQuestionGo){
    secondAnswer.style.opacity = '100%';
    secondAnswer.style.right = '40px';
  }
  if (window.scrollY>2000 && thirdQuestionGo ){
    third.style.opacity = '100%';
    third.style.left = '40px';
  }
  if (window.scrollY>2100 && thirdQuestionGo ){
    thirdAnswer.style.opacity = '100%';
    thirdAnswer.style.right = '40px';
  }
  if (window.scrollY>2800 && fourthQuestionGo ){
    fourth.style.opacity = '100%';
    fourth.style.left = '40px';
  }
  if (window.scrollY>2900 && fourthQuestionGo ){
    fourthAnswer.style.opacity = '100%';
    fourthAnswer.style.right = '40px';
  }
  if (window.scrollY>3600 && fifthQuestionGo ){
    fifth.style.opacity = '100%';
    fifth.style.left = '40px';
  }
  if (window.scrollY>3700 && fifthQuestionGo ){
    fifthAnswer.style.opacity = '100%';
    fifthAnswer.style.right = '40px';
  }
  if (window.scrollY>4400 && sixthQuestionGo ){
    sixth.style.opacity = '100%';
    sixth.style.left = '40px';
  }
  if (window.scrollY>4500 && sixthQuestionGo ){
    sixthAnswer.style.opacity = '100%';
    sixthAnswer.style.right = '40px';
  }
}
