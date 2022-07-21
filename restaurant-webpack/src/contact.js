export default function contact() {
	const contentEl = document.querySelector('#content');
	contentEl.innerHTML = '';

	const intro = document.createElement('div');
	intro.setAttribute('id', 'intro');

	const heading = document.createElement('h2');
	heading.innerHTML = 'Contact';

	intro.append(heading);
	contentEl.appendChild(intro);
}
