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
  counter.text(textArea.val().length);
  badWords.forEach(function (word) {
    if (textArea.val().includes(word)) {
      alert("NOOO!!!");
    }
  });
}

//---------------------Word counter---------------------

const counter2 = $("#result-words-num");

textArea.on("keyup", wordCounter);

function wordCounter() {
  counter2.text(textArea.val().split(" ").length);
}

//--------------------Space counter -----------------------

let counter3 = $("#result-spaces-num");

textArea.on("keyup", spaceCounter);

function spaceCounter() {
  let regexp = /\s/g;
  counter3.text(textArea.val().match(regexp).length);
}

//-------------------------------Paste----------------------------------------

textArea.on("paste", alertPaste);

function alertPaste() {
  alert("Please continue typing to see the value of pasted text");
}

//-------------search function trials-------------------

const searchTerm = $("#serchText").val().toLowerCase();

$("#searchBtn").on("click", stringSearch);

function stringSearch() {
  if (
    searchTerm.length > 0 &&
    testArea.text().toLowerCase().indexOf(searchTerm) > -1
  ) {
    alert("String Found. Search Complete");
  } else {
    alert("No Data found in Text Area");
  }
}
