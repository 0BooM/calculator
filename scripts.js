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
      if (operationEqual) {
        firstNum = answer;
        displayValue = "";
        actualValue = "";
        operationEqual = false;
      }
      displayValue += button.innerHTML;
      actualValue += button.innerHTML;
      inputValue.value = displayValue;
    });
  });
}
populateInput();

function populateInputWithDot() {
  let dotBtn = document.querySelector(".dot");
  dotBtn.addEventListener("click", (e) => {
    if (!actualValue.includes(".")) {
      displayValue += ".";
      actualValue += ".";
      inputValue.value = displayValue;
    }
  });
}
populateInputWithDot();

let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", (e) => {
  clearInput();
});
function clearInput() {
  inputValue.value = "";
  displayValue = "";
  actualValue = "";
  firstNum = "";
  operationSymbol = "";
  answer = "";
}

let operationSymbol = "";
let firstNum = "";
function calculatorOperation() {
  let operationBtns = document.querySelectorAll(".operation");

  operationBtns.forEach((operationBtn) => {
    operationBtn.addEventListener("click", (e) => {
      evaluateMoreThanOneOperation(operationSymbol);
      operationSymbol = operationBtn.innerHTML;
      if (operationEqual) {
        firstNum = answer;
        displayValue = answer;
        operationEqual = false;
      } else firstNum = displayValue;
      displayValue += operationSymbol;
      inputValue.value += operationSymbol;
      actualValue = "";
      console.log(`First numbersss: ${firstNum}`);
      console.log(`Operation symbol: ${operationSymbol}`);
      console.log(`Actual value:  ${actualValue}`);
      zeroDivideErrorOrEvaluateOperation(operationSymbol, actualValue);
    });
  });
}
calculatorOperation();

let answer = "";
let operationEqual = false;
function equalsOperation() {
  let equalsBtn = document.querySelector(".equals");
  equalsBtn.addEventListener("click", (e) => {
    operationEqual = true;
    zeroDivideErrorOrEvaluateOperation(operationSymbol, actualValue);
    answer =
      Math.round(
        operate(+firstNum, operationSymbol, +actualValue) * 100000000
      ) / 100000000;
    inputValue.value = "";
    displayValue = "";
    // actualValue = "";
    operationSymbol = "";
    inputValue.value = answer;
    console.log(`Answer: ${answer}`);
    console.log(`Input value: ${inputValue.value}`);
    console.log(`First num: ${firstNum}`);
    console.log(`Operation: ${operationSymbol}`);
    console.log(`Actual value: ${actualValue}`);
  });
}
equalsOperation();

function evaluateMoreThanOneOperation(operation) {
  if (operation != "") {
    displayValue = "";
    inputValue.value = "";
    answer =
      Math.round(
        operate(+firstNum, operationSymbol, +actualValue) * 100000000
      ) / 100000000;
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

function deleteCharacter() {
  let deleteBtn = document.querySelector(".delete");
  deleteBtn.addEventListener("click", (e) => {
    let delLastCharAct = actualValue.slice(0, actualValue.length - 1);
    let delLastCharInp = displayValue.slice(0, displayValue.length - 1);
    actualValue = delLastCharAct;
    displayValue = delLastCharInp;
    inputValue.value = delLastCharInp;
  });
}
deleteCharacter();
