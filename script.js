/* 
const fontBtn = document.querySelector(
  "#box-container > div.fontBox.box1 > button"
);

const textArea = document.querySelector(".entry");

function lrgFont() {
  textArea.style.fontSize = "1.5em";
}

fontBtn.addEventListener("click", lrgFont);
*/

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
