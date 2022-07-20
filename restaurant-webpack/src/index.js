import { functionOne, functionTwo } from './myModule';
import menu from './menu';

function component() {
	const element = document.createElement('div');
	element.innerHTML = 'webpack ' + 'restuarant';
	element.innerHTML =
		'<h1>Webpack Restaurant</h1>\n' + "<p>It's a nice restaurant</p>";
	return element;
}

function hello() {
	const contentEl = document.getElementById('content');
	contentEl.innerHTML =
		'<h1>Webpack Restaurant</h1>\n' +
		"<p>It's a nice restaurant</p>\n" +
		'<button title="1">1</button>' +
		'<button title="2">2</button>' +
		'<button title="3">3</button>';
}

// document.body.appendChild(component());
// hello();
const home = document.querySelector('.home');
home.classList.add('selected');

const tabs = document.querySelectorAll('.tabs li');

const changeTab = (e) => {
	console.log('e: ', e.target);
	tabs.forEach((tab) => {
    console.log('tab: ', tab);
    tab.classList.remove('selected')
  });

	e.target.classList.add('selected');
	if (e.target.classList.contains('home')) {
		e.target.classList.add('selected');
    functionOne();
	} else if (e.target.classList.contains('menu')) {
		e.target.classList.add('selected');
    functionTwo();
    menu();
	} else if (e.target.classList.contains('contact')) {
		e.target.classList.add('selected');
	}
};

tabs.forEach((tab) => tab.addEventListener('click', (e) => changeTab(e)));
