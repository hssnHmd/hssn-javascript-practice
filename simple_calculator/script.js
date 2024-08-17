const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

let calculation = [];
let accumalitiveValue;
function calculate(button) {
  const value = button.textContent;

  console.log(calculation);
  if (value === 'clear') {
    calculation = [];
    screen.textContent = '.';
  } else if (value === '=') {
    screen.textContent = eval(accumalitiveValue);
  } else {
    calculation.push(value);
    accumalitiveValue = calculation.join('');
    screen.textContent = accumalitiveValue;
  }
}
buttons.forEach((button) =>
  button.addEventListener('click', () => calculate(button))
);
