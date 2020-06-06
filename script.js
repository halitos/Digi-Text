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

//--------------------Font Color--------------------

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

//------------------counter--------------------

let counter = document.getElementById("result-characters-num");

function textCounter() {
  counter.innerHTML = textArea.value.length;
  if (textArea.value.includes("bug")) {
    alert("naughty!");
  }
}

textArea.addEventListener("keyup", textCounter);

let counter2 = document.getElementById("result-words-num");

function wordCounter() {
  counter2.innerHTML = textArea.value.split(" ").length;
}

textArea.addEventListener("keyup", wordCounter);
