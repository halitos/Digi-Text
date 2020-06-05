const fontBtn = document.querySelector(
  "#box-container > div.fontBox.box1 > button"
);

const textArea = document.querySelector(".entry");

function lrgFont() {
  textArea.style.fontSize = "1.5em";
}

fontBtn.addEventListener("click", lrgFont);
