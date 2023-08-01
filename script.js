import {
  operate,
  add,
  subtract,
  divide,
  multiply,
} from "./utility/operations.js";
// A better way to do this is to use a stack or something to keep track of numbers and operations

let currentOperand = "";
let savedOperand = "";
let equationString = "";
let chosenOperation = null;
let isEqualBtnPressed = false;
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
let equateBtn = document.getElementById("equal");

//accumulates the number being inputted by the numpad and saves it as an operand
function numberEventListener(event) {
  if (isEqualBtnPressed) {
    lastInputDiv.textContent = 0;
    lastInputDiv.style.visibility = "hidden";
    currentOperand = "";
    savedOperand = "";
    isEqualBtnPressed = false;
  }
  if (currentOperand.length < 15) {
    currentInputDiv.textContent = currentOperand + event.target.id;
    currentOperand = currentOperand + event.target.id;
  }
}

//determines the operation to be used next, if both operands have already been determined, it performs the already chosen operation first.
function operatorEventListener(operation, operationSymbol) {
  if (isEqualBtnPressed) {
    isEqualBtnPressed = false;
    currentOperand = "";
    lastInputDiv.textContent =
      equationString = `${savedOperand} ${operationSymbol} `;
  }
  if (currentOperand.length > 0 && savedOperand.length == 0) {
    savedOperand = currentOperand;
    equationString = `${savedOperand} ${operationSymbol} `;
    lastInputDiv.textContent = equationString;
    lastInputDiv.style.visibility = "visible";
    currentOperand = "";
    chosenOperation = operation;
  } else if (savedOperand.length != 0) {
    //this is currently evaluating the operation immediately and ignoring the rule of order of operations
    performOperation(chosenOperation, operationSymbol);
    chosenOperation = operation;
  }
}

//performs the operation on operands
function performOperation(operation, operationSymbol) {
  if (savedOperand != "" && currentOperand != "") {
    let answer = operate(operation, savedOperand, currentOperand);
    equationString = ` (${equationString} ${currentOperand}) ${operationSymbol} `;
    lastInputDiv.textContent = equationString;
    savedOperand = answer;
    currentInputDiv.textContent = answer;
    currentOperand = "";
  }
}

//hook up the numpad buttons
numbersArray.forEach((numberBtn) => {
  numberBtn.addEventListener("click", (event) => {
    numberEventListener(event);
  });
});

//hook up the operator pad buttons
addBtn.addEventListener("click", (e) => {
  operatorEventListener(add, "+");
});

subtractBtn.addEventListener("click", (e) => {
  console.log("subtracting");
  operatorEventListener(subtract, "-");
});

multiplyBtn.addEventListener("click", (e) => {
  operatorEventListener(multiply, "x");
});

divideBtn.addEventListener("click", (e) => {
  operatorEventListener(divide, "/");
});

clearBtn.addEventListener("click", (e) => {
  currentInputDiv.textContent = 0;
  lastInputDiv.textContent = 0;
  lastInputDiv.style.visibility = "hidden";
  currentOperand = "";
  savedOperand = "";
  isEqualBtnPressed = false;
});

dotBtn.addEventListener("click", (e) => {
  console.log(".");
  if (currentOperand.length < 15 && !currentOperand.includes(".")) {
    if (currentOperand.length == 0) {
      currentOperand += "0";
    }
    currentOperand += ".";
    currentInputDiv.textContent = currentOperand;
  }
});

equateBtn.addEventListener("click", (e) => {
  if (savedOperand != "") {
    performOperation(chosenOperation, "=");
    isEqualBtnPressed = true;
  }
});
