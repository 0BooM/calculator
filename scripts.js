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
let inputValue = document.querySelector("#calcInput");
let buttons = document.querySelectorAll("button");

function populateInput() {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      displayValue += e.target.id;
      inputValue.value = displayValue;
    });
  });
}
populateInput();
