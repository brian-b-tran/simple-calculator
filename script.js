import {
  operate,
  add,
  subtract,
  divide,
  multiply,
} from "./utility/operations.js";
// i need a stack or something to keep track of numbers and operations
let chosenOperation;
let firstNumber = "";
let secondNumber = "";
let displayString = "";
let currentInputDiv = document.getElementById("current-input");
let lastInputDiv = document.getElementById("last-input");

let numbersArray = document.querySelectorAll(".number");
let clearBtn = document.getElementById("clear");
let negateBtn = document.getElementById("negate");
let dotBtn = document.getElementById("dot");
let addBtn = document.getElementById("add");
let subtractBtn = document.getElementById("subtract");
let multiplyBtn = document.getElementById("multiply");
let divideBtn = document.getElementById("divide");

numbersArray.forEach((numberBtn) => {
  numberBtn.addEventListener("click", (e) => {
    if (firstNumber.length < 15) {
      let btnNumberPressed = numberBtn.id;
      let accumulatedNumber = firstNumber;
      currentInputDiv.textContent = accumulatedNumber + btnNumberPressed;
      firstNumber = accumulatedNumber + btnNumberPressed;
    }
  });
});

clearBtn.addEventListener("click", (e) => {
  currentInputDiv.textContent = 0;
  lastInputDiv.textContent = 0;
  lastInputDiv.style.visibility = "hidden";
  firstNumber = "";
  secondNumber = "";
});

dotBtn.addEventListener("click", (e) => {
  if (firstNumber.length < 15 && !firstNumber.includes(".")) {
    if (firstNumber.length == 0) {
      firstNumber += "0";
    }
    firstNumber += ".";
    currentInputDiv.textContent = firstNumber;
  }
});

addBtn.addEventListener("click", (e) => {
  if (firstNumber.length > 0 && secondNumber.length == 0) {
    secondNumber = firstNumber;
    displayString = secondNumber + " + ";
    lastInputDiv.textContent = displayString;
    lastInputDiv.style.visibility = "visible";
    firstNumber = "";
    chosenOperation = add;
  } else {
  }
});
