// ---------------Larger Font ---------------

const textArea = document.querySelector(".entry");
const LargeFontBtn = document.querySelector("#largeFont");

function lrgFont() {
  textArea.style.fontSize = "1.5em";
}

LargeFontBtn.addEventListener("click", lrgFont);

//--------------------Smaller Font---------------

const SmallFontBtn = document.querySelector("#smallFont");

function SmlFont() {
  textArea.style.fontSize = "0.8em";
}

SmallFontBtn.addEventListener("click", SmlFont);

//--------------------Random Font Color--------------------

const colorBtn = document.getElementById("fontColor");

function buttonColors() {
  textArea.style.color =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
}

colorBtn.addEventListener("click", buttonColors);

//-------------------Dark/Light Themes-----------------

const darkButton = document.getElementById("darkTheme");

function makeDark() {
  textArea.style.backgroundColor = "black";
  textArea.style.color = "white";
}

darkButton.addEventListener("click", makeDark);

const lightButtton = document.getElementById("lightTheme");
function makeLight() {
  textArea.style.backgroundColor = "white";
  textArea.style.color = "black";
}
lightButtton.addEventListener("click", makeLight);

//------------------Character counter--------------------

const counter = document.getElementById("result-characters-num");

const badWords = ["bug", "nested", "algorithm", "fouc", "error"];

function textCounter() {
  counter.innerHTML = textArea.value.length;
  badWords.forEach(function (word) {
    if (textArea.value.includes(word)) {
      alert("NOOO!!!");
    }
  });
}
textArea.addEventListener("keyup", textCounter);

//---------------------Word counter---------------------

let counter2 = document.getElementById("result-words-num");

function wordCounter() {
  counter2.innerHTML = textArea.value.split(" ").length;
}
textArea.addEventListener("keyup", wordCounter);

//--------------------Space counter (need to sort out)-----------------------

let counter3 = document.getElementById("result-spaces-num");

function spaceCounter() {
  let regexp = /\s/g;
  counter3.innerText = textArea.value.match(regexp).length;
}
textArea.addEventListener("keyup", spaceCounter);

//-------------------------------Paste----------------------------------------

textArea.addEventListener("paste", alertPaste);

function alertPaste() {
  alert("Please continue typing to see the value of pasted text");
}
