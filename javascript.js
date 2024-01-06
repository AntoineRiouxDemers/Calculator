const inputs = document.querySelectorAll('.inputs');
const nine = document.getElementById('nine');
const answer = document.getElementById('showMath');
let currentNumber = 0;
let firstNumber = null;
let secondNumber = null;
let currentAnswer = 0;
let currentOperator = "add";

inputs.forEach(input => input.addEventListener('click', () => readInput(input)));

function readInput(input) {
  (input.classList.contains('numbers')) ? isANumber(input) :
    (input.classList.contains('operators')) ? isAnOperator(input) : clearCalculator();
}

function isANumber(input) {
  console.log(input.id);
  (currentNumber == 0 && firstNumber == null || currentNumber == 0 && firstNumber!=null) ? currentNumber = input.textContent : currentNumber += input.textContent;
  answer.textContent = currentNumber;
}

function isAnOperator(input) {

  if(firstNumber == null) {
    firstNumber = currentNumber;
    currentOperator = input.id;
  } else {
    secondNumber = currentNumber;
    answer.textContent = "";
  }
  currentNumber = 0;
  
  if(secondNumber != null) {
    currentAnswer = calculate(currentOperator);
    answer.textContent = currentAnswer;

    firstNumber = currentAnswer;
    secondNumber = null;
  } 
}

function calculate(operator){
  let answer = 0;
  
  switch(operator){
    case "add" :
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