const inputs = document.querySelectorAll('.inputs');
const nine = document.getElementById('nine');

inputs.forEach(input => input.addEventListener('click', () => readInput(input)));

function readInput(input) {
  switch (input.id) {
    case 'nine':
      console.log('nine');
      break;
  }
}
