function add (a, b) {
  return parseInt(a) + parseInt(b);
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
let num1 = '';
let num2 = '';
let operator = '';
let equalRun = '';

function updateDisplay(event) {
  if (event.target.id == '=') {
    console.log(operator);
    if (operator != '') {
      if (operator == '+') {
        console.log(num1);
        console.log(num2);
        console.log(operator);
        operator = '';
        display.value = add(num1,num2);
        num1 = display.value;
      }
    }
  }
  
  if (operator != '') {
    if (operator == '+') {
      num2 = event.target.id;
      display.value = num2;
    // } else if (operator == '-') {
    //   num2 = event.target.id;
    //   operator = '';
    //   display.value = subtract(num1,num2);
    //   num1 = display.value;
    // } else if (operator == '*') {
    //   num2 = event.target.id;
    //   operator = '';
    //   display.value = multiply(num1,num2);
    //   num1 = display.value;
    // } else if (operator == '/') {
    //   num2 = event.target.id;
    //   operator = '';
    //   display.value = divide(num1,num2);
    //   num1 = display.value;
    // } else if (operator == '=') {
    //   num2 = event.target.id;
    //   operator = '';
    //   display.value = divide(num1,num2);
    //   num1 = display.value;
    }
  }
  if (operator == '') {
    if (event.target.id == 'clear') {
      display.value = '';
    } else if (event.target.id == '+') {
      operator = '+';
      display.value = operator;
    } else if (event.target.id == '-') {
      operator = '-';
      display.value = operator;
    } else if (event.target.id == '*') {
      operator = '*';
      display.value = operator;
    } else if (event.target.id == '/') {
      operator = '/';
      display.value = operator;
    } else {
      num1 = event.target.id;
      if (event.target.id == '=') {
        
      } else {
      display.value += event.target.id;
      }
    }
  }
}