const inputs = document.querySelectorAll('.inputs');
const nine = document.getElementById('nine');
const answer = document.getElementById('showMath');
let currentNumber = 0;
let saveNumber = 0;
let firstNumber = null;
let secondNumber = null;
let currentOperator = "add";
let wasEquals = false;

inputs.forEach(input => input.addEventListener('click', () => readInput(input)));

function readInput(input) {
  document.getElementById("clear").textContent = "C";
  (input.classList.contains('numbers')) ? isANumber(input) :
    (input.classList.contains('operators')) ? isAnOperator(input) :
      (input.classList.contains('negative')) ? toNegativePositive() :
        (input.classList.contains("percentage")) ? toPercentage() : clearCalculator();
}

function setAnswer(number) {
  answer.textContent = +parseFloat(number).toFixed(4);
}

function toPercentage() {
  if (currentNumber > 0) {
    currentNumber = currentNumber / 100;
    setAnswer(currentNumber);
  } else {
    currentNumber = saveNumber / 100
    answer.textContent = currentNumber;
    firstNumber = currentNumber;
  }
}

function toNegativePositive() {
  if (currentNumber > 0) {
    if (currentNumber.toString().includes("-")) {
      currentNumber = currentNumber.toString().slice(1);
    } else {
      currentNumber = "-" + currentNumber.toString();
    }
    setAnswer(currentNumber);
  } else {
    if (saveNumber.toString().includes("-")) {
      currentNumber = saveNumber.toString().slice(1);
    } else {
      currentNumber = "-" + saveNumber.toString();
    }
    firstNumber = currentNumber;
    setAnswer(currentNumber);
  }
}

function isANumber(input) {
  console.log(input.id);

  (input.textContent == "." && currentNumber.toString().includes(".")) ? null : currentNumber += input.textContent;
  if (currentNumber.toString().includes(".") == false && currentNumber.toString().charAt(0) == "0") {
    currentNumber = currentNumber.toString().slice(1);
  } else if (currentNumber.toString().includes("-") && currentNumber.toString().includes(".") == false && currentNumber.toString().charAt(1) == "0") {
    currentNumber = currentNumber.toString().slice(0, 1) + currentNumber.toString().slice(2);
  }
  setAnswer(currentNumber);
}

function isAnOperator(input) {

  if (firstNumber == null) {
    firstNumber = currentNumber;
    currentOperator = input.id;
  } else if (secondNumber == null) {
    secondNumber = currentNumber;
  }

  if (secondNumber != null && wasEquals == false) {
    firstNumber = calculate(currentOperator);
    setAnswer(firstNumber);

    if (input.id != "equals") {
      currentOperator = input.id;
      secondNumber = null;
    } else {
      wasEquals = true;
    }
  } else if (input.id != "equals") {
    secondNumber = null;
    wasEquals = false;
    currentOperator = input.id;
  } else {
    firstNumber = calculate(currentOperator);
    setAnswer(firstNumber);
  }

  saveNumber = firstNumber;
  currentNumber = 0;
}

function calculate(operator) {
  let answer = 0;

  switch (operator) {
    case "add":
      answer = Number(firstNumber) + Number(secondNumber);
      console.log("add");
      break;

    case "substract":
      answer = Number(firstNumber) - Number(secondNumber);
      console.log("substract");
      break;

    case "multiply":
      answer = Number(firstNumber) * Number(secondNumber);
      console.log("multiply");
      break;

    case "divide":
      answer = Number(firstNumber) / Number(secondNumber);
      console.log("divide");
      break;

    default:
      console.log("trouble");
      break;
  }
  return answer;
}

function clearCalculator() {
  document.getElementById("clear").textContent = "AC";
  console.log('clear');
  currentNumber = 0;
  currentAnswer = 0;
  saveNumber = 0;
  firstNumber = null;
  secondNumber = null;
  currentOperator = "add";
  answer.textContent = currentNumber;

}