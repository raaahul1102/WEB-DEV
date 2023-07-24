let display = document.getElementById('result');
let currentExpression = '';

function appendValue(value) {
  currentExpression += value;
  display.value = currentExpression;
}

function calculate() {
  try {
    let result = eval(currentExpression);
    display.value = result;
    currentExpression = '';
  } catch (error) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  currentExpression = '';
  display.value = '';
}

function deleteDigit() {
  currentExpression = currentExpression.slice(0, -1);
  display.value = currentExpression;
}

function scientificFunction(func) {
  let value = parseFloat(currentExpression);

  switch (func) {
    case 'sqrt':
      if (value >= 0) {
        display.value = Math.sqrt(value);
      } else {
        display.value = 'Error';
      }
      break;
    case 'exp':
      display.value = Math.exp(value);
      break;
    case 'sin':
      display.value = Math.sin(value);
      break;
    case 'cos':
      display.value = Math.cos(value);
      break;
    case 'tan':
      display.value = Math.tan(value);
      break;
    case 'log':
      if (value > 0) {
        display.value = Math.log(value);
      } else {
        display.value = 'Error';
      }
      break;
    default:
      display.value = 'Error';
  }

  currentExpression = '';
}