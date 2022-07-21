export default function home() {
	console.log('home');
	const contentEl = document.querySelector('#content');
	contentEl.innerHTML = '';

	const intro = document.createElement('div');
	intro.setAttribute('id', 'intro');

	const heading = document.createElement('h2');
	heading.innerHTML = 'Delicious Food <br/> <span class="highlight">24/7</span>';

	const image = document.createElement('img');
	image.setAttribute(
		'src',
		'https://gourmetfood.com.au/wp-content/uploads/2020/05/homepage-crackers.png'
	);
	intro.append(image, heading);
	contentEl.appendChild(intro);
}
