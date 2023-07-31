import {
  operate,
  add,
  subtract,
  divide,
  multiply,
} from "./utility/operations.js";
let chosenOperation = add;
let firstNumber = 0;
let secondNumber = 0;

let answer = operate(chosenOperation, firstNumber, secondNumber);
