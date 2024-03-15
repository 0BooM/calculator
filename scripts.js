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

// let add = (firstNum, secondNum) => console.log(firstNum + secondNum);

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
  });
}
clearInput();

let operationSymbol = "";
let firstNum = "";
function calculatorOperation() {
  let operationBtns = document.querySelectorAll(".operation");

  operationBtns.forEach((operationBtn) => {
    operationBtn.addEventListener("click", (e) => {
      operationSymbol = operationBtn.innerHTML;
      firstNum = displayValue;
      displayValue += operationSymbol;
      inputValue.value += operationSymbol;
      actualValue = "";
      console.log(`First numbersss: ${firstNum}`);
      console.log(`Operation symbol: ${operationSymbol}`);
      equalsOperation();
    });
  });
}
calculatorOperation();

function equalsOperation() {
  let equalsBtn = document.querySelector(".equals");
  equalsBtn.addEventListener("click", (e) => {
    displayValue = "";
    inputValue.value = "";
    let answer = operate(+firstNum, operationSymbol, +actualValue);
    inputValue.value = answer;
  });
}
