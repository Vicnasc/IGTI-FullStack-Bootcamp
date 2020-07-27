window.addEventListener("load", () => {
  map();
  syncDiv();
});

function map() {
  let red = document.querySelector("#red"),
    green = document.querySelector("#green"),
    blue = document.querySelector("#blue");

  let valueRed = document.querySelector("#valueRed"),
    valueGreen = document.querySelector("#valueGreen"),
    valueBlue = document.querySelector("#valueBlue");

  let answer = document.querySelector("#answer");

  red.addEventListener("change", changeRange);
  green.addEventListener("change", changeRange);
  blue.addEventListener("change", changeRange);
}

function changeRange(event) {
  let value = event.target.value;

  valueRed.value = red.value;
  valueGreen.value = green.value;
  valueBlue.value = blue.value;

  answer.style.background = `rgb(${red.value}, ${green.value}, ${blue.value})`;
}
