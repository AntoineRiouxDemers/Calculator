const inputs = document.querySelectorAll('.inputs');
const nine = document.getElementById('nine');
const answer = document.getElementById('showMath');
let currentNumber = 0;
let currentAnswer = 0;

inputs.forEach(input => input.addEventListener('click', () => readInput(input)));

function readInput(input) {
  (input.classList.contains('numbers')) ? isANumber(input) :
    (input.classList.contains('operators')) ? isAnOperator(input) : clearCalculator(); 
}

function isANumber(input){
  console.log(input.id);
  (currentNumber == 0) ? currentNumber = input.textContent : currentNumber += input.textContent;
  console.log(currentNumber);
  answer.textContent = currentNumber;
}

function isAnOperator(input){
    
}

function clearCalculator(){
  console.log('clear');
  currentNumber = 0;
  currentAnswer = 0;
  answer.textContent = currentNumber;
  
}