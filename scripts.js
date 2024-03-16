function add(firstNum, secondNum) {
  return firstNum + secondNum;
}
function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}
function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}
function divide(firstNum, secondNum) {
  return firstNum / secondNum;
}

function operate(firstNumber, operator, secondNumber) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case document.querySelector(".multiply").innerHTML:
      return multiply(firstNumber, secondNumber);
    case document.querySelector(".divide").innerHTML:
      return divide(firstNumber, secondNumber);
    default:
      return "You did nothing";
  }
}

let displayValue = "";
let actualValue = "";
let inputValue = document.querySelector("#calcInput");
let actionBtns = document.querySelectorAll(".action");

function populateInput() {
  actionBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      displayValue += button.innerHTML;
      actualValue += button.innerHTML;
      inputValue.value = displayValue;
    });
  });
}
populateInput();

let clearBtn = document.querySelector(".clear");
function clearInput() {
  clearBtn.addEventListener("click", (e) => {
    inputValue.value = "";
    displayValue = "";
    actualValue = "";
    firstNum = "";
    operationSymbol = "";
    answer = "";
  });
}
clearInput();

let operationSymbol = "";
let firstNum = "";
function calculatorOperation() {
  let operationBtns = document.querySelectorAll(".operation");

  operationBtns.forEach((operationBtn) => {
    operationBtn.addEventListener("click", (e) => {
      evaluateMoreThanOneOperation(operationSymbol);
      operationSymbol = operationBtn.innerHTML;
      firstNum = displayValue;
      displayValue += operationSymbol;
      inputValue.value += operationSymbol;
      actualValue = "";
      console.log(`First numbersss: ${firstNum}`);
      console.log(`Operation symbol: ${operationSymbol}`);
      console.log(`Actual value:  ${actualValue}`);
      equalsOperation();
    });
  });
}
calculatorOperation();

let answer = "";
function equalsOperation() {
  let equalsBtn = document.querySelector(".equals");
  equalsBtn.addEventListener("click", (e) => {
    displayValue = "";
    inputValue.value = "";
    zeroDivideErrorOrEvaluateOperation(operationSymbol, actualValue);
    inputValue.value = answer;
    displayValue = answer;
  });
}

function evaluateMoreThanOneOperation(operation) {
  if (operation != "") {
    displayValue = "";
    inputValue.value = "";
    answer = operate(+firstNum, operationSymbol, +actualValue);
    inputValue.value = answer;
    displayValue = answer;
  }
}

function zeroDivideErrorOrEvaluateOperation(operator, number) {
  if (
    number == "0" &&
    operator == document.querySelector(".divide").innerHTML
  ) {
    answer = "You can't divide by zero";
  } else {
    answer = operate(+firstNum, operationSymbol, +actualValue);
  }
}
