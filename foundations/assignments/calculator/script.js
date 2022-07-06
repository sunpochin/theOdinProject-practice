const add = (num1, num2) => {
	return num1 + num2;
};

const subtract = (num1, num2) => {
	return num1 - num2;
};

const multiply = (num1, num2) => {
	return num1 * num2;
};

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
let operand1 = null;
let operand2 = null;
// let newOperator = null;
let prevOperator = null;
display.innerText = parseInt(displayValue);

document.querySelectorAll('.num').forEach(function (button) {
	button.addEventListener('click', function (event) {
		let display = document.getElementById('display');
		displayValue += event.target.innerText;
		display.innerText = parseInt(displayValue);
		console.log(displayValue);
	});
});


document.querySelectorAll('.operator').forEach(function (button) {
	button.addEventListener('click', function (event) {
		// 1. run calculation using current operator, operand1, and operand2.
		// 2. set the new operator, new operand1, and new operand2.
		operand2 = parseInt(displayValue);
		console.log(
			'operand1: ',
			operand1,
			', operand2: ',
			operand2,
			', prevOperator:',
			prevOperator
		);
		if (null !== prevOperator && null !== operand1 && null !== operand2) {
			displayValue = operate(prevOperator, operand1, operand2);
			console.log(displayValue);
			display.innerText = parseInt(displayValue);
			operand1 = displayValue;
			operand2 = null;
		}

		if (operand1 === null) {
			operand1 = parseInt(displayValue);
			console.log('operand1: ', operand1, ', operand2: ', operand2);
		}

		let value = event.target.innerText;
		switch (value) {
			case '+':
				prevOperator = add;
				break;
			case '-':
				prevOperator = subtract;
				break;
			case '×':
				prevOperator = multiply;
				break;
			case '÷':
				prevOperator = divide;
				break;
      case '=':
        prevOperator = null;
        break;
		}
		displayValue = '0';
	});
});


document.getElementById('clear').addEventListener('click', function (event) {
  displayValue = '0';
  operand1 = null;
  operand2 = null;
  prevOperator = null;
  display.innerText = parseInt(displayValue);
});
