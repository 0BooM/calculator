function add(firstNum, secondNum) {
  console.log(firstNum + secondNum);
}
function subtract(firstNum, secondNum) {
  console.log(firstNum - secondNum);
}
function multiply(firstNum, secondNum) {
  console.log(firstNum * secondNum);
}
function divide(firstNum, secondNum) {
  console.log(firstNum / secondNum);
}

// let add = (firstNum, secondNum) => console.log(firstNum + secondNum);

function operate(firstNumber, operator, secondNumber) {
  switch (operator) {
    case "+":
      add(firstNumber, secondNumber);
      break;
    case "-":
      subtract(firstNumber, secondNumber);
      break;
    case "*":
      multiply(firstNumber, secondNumber);
      break;
    case "/":
      divide(firstNumber, secondNumber);
      break;
    default:
      console.log("You did nothing");
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
  });
}
clearInput();

function calculatorOperation() {
  let operationBtns = document.querySelectorAll(".operation");
  let operationSymbol = "";
  let firstNum = "";
  let secondNum = "";

  operationBtns.forEach((operationBtn) => {
    operationBtn.addEventListener("click", (e) => {
      operationSymbol = operationBtn.innerHTML;
      firstNum = displayValue;
      displayValue += operationSymbol;
      inputValue.value += operationSymbol;
      actualValue = "";
      console.log(`First numbersss: ${firstNum}`);
      console.log(`Operation symbol: ${operationSymbol}`);
    });
  });
}
calculatorOperation();

function equalsOperation() {
  let equalsBtn = document.querySelector(".equals");
  equalsBtn.addEventListener("click", (e) => {
    inputValue.value = "";
    console.log(`Actual value: ${actualValue}`);
  });
}
equalsOperation();
