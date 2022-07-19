import _ from 'lodash';
import myName from './myName';
import { functionOne, functionTwo } from './myModule';

function component() {
	const element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	// Lodash, now imported by this script
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	// use your function!
	element.textContent = myName('Cody ') + functionOne();

	return element;
}

document.body.appendChild(component());

