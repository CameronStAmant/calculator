function add (a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate (a, b, operator) {
  switch(operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

let button = document.getElementById('buttons');
console.log(button);
let display = document.getElementById('display');
button.addEventListener('click', updateDisplay);

function updateDisplay(event) {
  display.value += event.target.id;
}