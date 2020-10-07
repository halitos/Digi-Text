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

textArea.on("input", textCounter);

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

textArea.on("input", wordCounter);

function wordCounter() {
  counter2.text(textArea.val().split(" ").length);
}

//--------------------Space counter -----------------------

let counter3 = $("#result-spaces-num");

textArea.on("input", spaceCounter);

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

$("#searchBtn").click(searchText);

function searchText(e) {
  let searchTerm = $("#searchInput").val().toLowerCase();
  if (searchTerm) {
    if (textArea.val().toLowerCase().indexOf(searchTerm) != -1) {
      alert("String Found. Search Complete");
      e.preventDefault();
    } else {
      alert("No such string found in Text Area");
      e.preventDefault();
    }
  } else {
    alert("Please enter a character to search");
  }
}

//---------------Pop-Up---------------------

$("#about").on("click", function () {
  $(".pop-outer").fadeIn("slow");
});

$("#close").on("click", function () {
  $(".pop-outer").fadeOut("slow");
});

//--------------Reset Btn---------------------

const resetBtn = $("#myreset");

resetBtn.on("click", resetCounters);

function resetCounters() {
  window.location.reload();
}
