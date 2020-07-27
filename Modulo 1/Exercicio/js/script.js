// range slider
let red = document.querySelector("#red"),
  green = document.querySelector("#green"),
  blue = document.querySelector("#blue");

// saída range
let red_out = document.querySelector("#red_out"),
  green_out = document.querySelector("#green_out"),
  blue_out = document.querySelector("#blue_out");

// caixa de valor
let valueRed = document.querySelector("#valueRed"),
  valueGreen = document.querySelector("#valueGreen"),
  valueBlue = document.querySelector("#valueBlue");

// caixa de saída
let final = document.querySelector("#answer");

// eventos

function setColor() {
  let red_hex = parseInt(red.value, 10).toString(16),
    green_hex = parseInt(green.value, 10).toString(16),
    blue_hex = parseInt(blue.value, 10).toString(16),
    hex_answer = "#" + pad(red_hex) + pad(green_hex) + pad(blue_hex);

  final.style.background = hex_answer;
}

function pad(n) {
  return n.length < 2 ? "0" + n : n;
}

red.addEventListener("input", handleRangeChangeRed);
green.addEventListener("input", handleRangeChangeGreen);
blue.addEventListener("input", handleRangeChangeBlue);

// red.addEventListener("change", handleRangeChangeRed);
// green.addEventListener("change", handleRangeChangeGreen);
// blue.addEventListener("change", handleRangeChangeBlue);

function handleRangeChangeRed(event) {
  setColor();
  valueRed.value = event.target.value;
}

function handleRangeChangeGreen(event) {
  setColor();
  valueGreen.value = event.target.value;
}

function handleRangeChangeBlue(event) {
  setColor();
  valueBlue.value = event.target.value;
}
