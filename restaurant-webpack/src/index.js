import { functionOne, functionTwo } from './myModule';
import home from './home';
import menu from './menu';
import contact from './contact';

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
const homeTab = document.querySelector('.home');
homeTab.classList.add('selected');

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
    home();
	} else if (e.target.classList.contains('menu')) {
		e.target.classList.add('selected');
    // functionTwo();
    menu();
	} else if (e.target.classList.contains('contact')) {
		e.target.classList.add('selected');
		contact();
	}
};

tabs.forEach((tab) => tab.addEventListener('click', (e) => changeTab(e)));
