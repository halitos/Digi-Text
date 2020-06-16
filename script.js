const textArea = $(".entry");

// ---------------Larger Font ---------------

$("#largeFont").click(function () {
  textArea.css("fontSize", "1.5em");
});

//--------------------Smaller Font---------------

$("#smallFont").click(SmlFont);

function SmlFont() {
  textArea.css("fontSize", "0.8em");
}

//--------------------Random Font Color--------------------

$("#fontColor").on("click", changeColor);

function changeColor() {
  const randomColors = "#" + Math.floor(Math.random() * 16777215).toString(16);
  textArea.css("color", randomColors);
}

//-------------------Dark/Light Themes-----------------

$("#darkTheme").on("click", makeDark);

function makeDark() {
  textArea.css({ backgroundColor: "black", color: "white" });
}

$("#lightTheme").on("click", makeLight);

function makeLight() {
  textArea.css({ backgroundColor: "white", color: "black" });
}

//------------------Character counter--------------------

const counter = $("#result-characters-num");

const badWords = ["bug", "nested", "algorithm", "fouc", "error"];

textArea.on("keyup", textCounter);

function textCounter() {
  counter.text(`${textArea.val().length}`);
  badWords.forEach(function (word) {
    if (textArea.val().includes(word)) {
      alert("NOOO!!!");
    }
  });
}

/*
//---------------------Word counter---------------------

let counter2 = document.getElementById("result-words-num");

function wordCounter() {
  counter2.innerHTML = textArea.value.split(" ").length;
}
textArea.addEventListener("keyup", wordCounter);

//--------------------Space counter -----------------------

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
*/
