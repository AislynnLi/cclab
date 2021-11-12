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
