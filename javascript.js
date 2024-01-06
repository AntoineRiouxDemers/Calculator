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
  (input.classList.contains('numbers')) ? isANumber(input) :
    (input.classList.contains('operators')) ? isAnOperator(input) :
      (input.classList.contains('negative')) ? toNegativePositive() :
        (input.classList.contains("percentage")) ? toPercentage() : clearCalculator();
}

function toPercentage() {
  if (currentNumber > 0) {
    currentNumber = currentNumber / 100;
    answer.textContent = currentNumber;
  } else {
    currentNumber = saveNumber /100
    answer.textContent = currentNumber;
    firstNumber = currentNumber;
  }
}

function toNegativePositive() {
  if(currentNumber > 0) {
    if (currentNumber.toString().includes("-")) {
      currentNumber = currentNumber.toString().slice(1);
    } else {
      currentNumber = "-" + currentNumber.toString();
    }
    answer.textContent = currentNumber;
  } else {
    if (saveNumber.toString().includes("-")) {
      currentNumber = saveNumber.toString().slice(1);
    } else {
      currentNumber = "-" + saveNumber.toString();
    }
    firstNumber = currentNumber;
    answer.textContent = currentNumber;
  }
}

function isANumber(input) {
  console.log(input.id);
  currentNumber += input.textContent;
  if (currentNumber.toString().includes(".") == false && currentNumber.toString().charAt(0) == "0") {
    currentNumber = currentNumber.toString().slice(1);
  } else if (currentNumber.toString().includes("-") && currentNumber.toString().includes(".") == false && currentNumber.toString().charAt(1) == "0") {
    currentNumber = currentNumber.toString().slice(0, 1) + currentNumber.toString().slice(2);
  }
  answer.textContent = currentNumber;
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
    answer.textContent = firstNumber;

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
    answer.textContent = firstNumber;
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
  console.log('clear');
  currentNumber = 0;
  currentAnswer = 0;
  firstNumber = null;
  secondNumber = null;
  currentOperator = "add";
  answer.textContent = currentNumber;

}