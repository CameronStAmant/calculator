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
button.addEventListener('click', operate);
let num1 = '';
let num2 = '';
let operator = '';
let equalRun = '';

function operate(event) {
  num1 = num1.replace(/\D/g,'');
  if (event.target.id == 'clear') {
    display.value = '';
    num1 = '';
    num2 = '';
    return;
  }
  if (event.target.id == '=' || ((operator != '' && num1 != '' && num2 != '') && (event.target.id == '+' || event.target.id == '-' || event.target.id == '*' || event.target.id == '/'))) {
    console.log(num1);
    console.log(num2);
    console.log(operator);
    if (operator == '+') {
      display.value = add(num1,num2);
    } else if (operator == '-') {
      display.value = subtract(num1,num2);
    } else if (operator == '*') {
      display.value = multiply(num1,num2);
    } else if (operator == '/') {
      display.value = divide(num1,num2);
    }
    if (event.target.id == '+' || event.target.id == '-' || event.target.id == '*' || event.target.id == '/') {
        operator = event.target.id;
    } else {
      operator = '';
    }
    num1 = display.value;
    num2 = '';
    return;
  }
  if (operator != '') {
    // if (operator == '+') {
      // if (event.target.id == '+' && event.target.id == '-' && event.target.id == '*' && event.target.id == '/') {
      //   operator = event.target.id;
      //   return;
      // }
      if (num2 != '') {
        num2 +=event.target.id;
      } else {
        num2 = event.target.id
      }
      display.value = num2;
      return;
    // } else if (operator == '-') {
    //   num2 = event.target.id;
    //   display.value = num2;
    // } else if (operator == '*') {
    //   num2 = event.target.id;
    //   display.value = num2;
    // } else if (operator == '/') {
    //   num2 = event.target.id;
    //   display.value = num2;
    // }
  }
  if (operator == '') {
    if (event.target.id == '+') {
      operator = '+';
    } else if (event.target.id == '-') {
      operator = '-';
    } else if (event.target.id == '*') {
      operator = '*';
    } else if (event.target.id == '/') {
      operator = '/';
    } else if (num1 == '') {
      num1 = event.target.id;
      display.value = event.target.id
    } else {
      display.value += event.target.id;
      num1 = display.value;
    }
    return;
  }
}