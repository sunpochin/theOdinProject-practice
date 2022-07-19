// import { functionOne, functionTwo } from './myModule';

function component() {
	const element = document.createElement('div');
	element.innerHTML = 'webpack ' + 'restuarant';
  element.innerHTML = '<h1>Webpack Restaurant</h1>\n' +
    '<p>It\'s a nice restaurant</p>';
	return element;
}

function hello() {
  const contentEl = document.getElementById('content');
  contentEl.innerHTML = '<h1>Webpack Restaurant</h1>\n' + '<p>It\'s a nice restaurant</p>\n' + 
  '<button title="1">1</button>' + 
  '<button title="2">2</button>' +
  '<button title="3">3</button>'
  ;
}

// document.body.appendChild(component());
// hello();

const changeTab = (e) => {
  console.log('e: ', e.target);
}

const tabs = document.querySelectorAll('.tabs li');
tabs.forEach(tab => tab.addEventListener('click', (e) => changeTab(e)
));

