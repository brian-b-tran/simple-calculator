function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    return "Can't divide by zero!";
  }
  return a / b;
}

function operate(operation, a, b) {
  let answer = operation(a, b);
  if (!isNaN(answer)) {
    return parseFloat(answer.toFixed(6));
  }
  return answer;
}
export { operate, add, subtract, multiply, divide };
// module.exports = { operate, add, subtract, multiply, divide };
