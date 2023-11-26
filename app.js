console.log("Hello World");

let inputEl1 = document.getElementById("input1");
let inputEl2 = document.getElementById("input2");

let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let multiplyBtn = document.getElementById("multiply");
let segmentationBtn = document.getElementById("segmentation");

let submitEl = document.getElementById("submit");
let resultEl = document.getElementById("result");
let operator;

plusBtn.onclick = function () {
  operator = "+";
};
minusBtn.onclick = function () {
  operator = "-";
};
multiplyBtn.onclick = function () {
  operator = "*";
};
segmentationBtn.onclick = function () {
  operator = "/";
};

submitEl.onclick = function () {
  let x = Number(inputEl1.value);
  let y = Number(inputEl2.value);
  let result = 0;
  if (operator === "+") {
    result = x + y;
  }
  if (operator === "-") {
    result = x - y;
  }
  if (operator === "*") {
    result = x * y;
  }
  if (operator === "/") {
    result = x / y;
  }
  resultEl.textContent = result;
};
