let trigger = false;
document.addEventListener('mousedown', function () {
	trigger = true;
});

document.addEventListener('mouseup', function () {
	trigger = false;
});

const container = document.getElementById('container');
const theWidth = 40;
container.style.width = `${(theWidth + 2) * 8}px`;
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
for (let i = 0; i < 8 * 10; i++) {
	const div = document.createElement('div');
	// div.style = 'width: 100px; height: 100px; background-color: #' + Math.floor(Math.random() * 16777215).toString(16);
	div.style = `width: ${theWidth}px; height: ${theWidth}px;`;
	// div.style.borderRadius = '20px';
	// div.style.margin = '10px';
	div.style.border = '1px solid black';
	div.style.backgroundColor = '#DDDDDD';
	div.classList.add('box');
	div.addEventListener('mouseover', function () {
		if (trigger === true) {
			this.style.backgroundColor = '#AAAAAA';
		}
	});

	container.appendChild(div);
}
