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

operate(8, "+", 2);
