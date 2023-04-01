for (let i = 0; i < 9; i++) {
  let box = document.createElement("div");
  box.classList.add("box");
  document.querySelector(".container").appendChild(box);
}
let btn = document.querySelector(".btn");
let randomColors = document.querySelectorAll(".box");

function randomHexColor() {
  var chars = "0123456789abcdef";
  var colorLength = 6;
  var color = "";

  for (let i = 0; i < colorLength; i++) {
    let randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor + 1);
  }
  return `#` + color;
}
function addColor() {
  randomColors.forEach((e) => {
    let newColor = randomHexColor();
    e.style.backgroundColor = newColor;
    e.innerHTML = newColor;
  });
}
window.onload = function () {
  addColor();
};
