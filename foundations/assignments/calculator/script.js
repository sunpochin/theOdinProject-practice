


const add = (num1, num2) => {
  return num1 + num2;
}

const subtract = (num1, num2) => {
  return num1 - num2;
}

const multiply = (num1, num2) => {
  return num1 * num2;
}

const divide = (num1, num2) => {
	return num1 / num2;
};

function operate(func, num1, num2) {
  result = func(num1, num2);
  return result;
}

// console.log('add(5, 2):', add(5, 2));
// console.log(operate(add, 5, 2) );
// console.log(operate(subtract, 5, 2) );
// console.log(operate(multiply, 5, 2) );

// initialize the calculator
let displayValue = '0';

document.querySelectorAll('.num').forEach(function(button) {
  button.addEventListener('click', function(event) {
    let display = document.getElementById('display');
    displayValue += event.target.innerText;
    console.log(displayValue);
    display.innerText = parseInt(displayValue);
  });
});
