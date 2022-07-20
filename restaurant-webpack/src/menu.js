export default function menu() {
	console.log('functionOne');
	// const contentEl = document.getElementById('content');

	const contentEl = document.querySelector('#content');
	contentEl.innerHTML = '';

	const intro = document.createElement('div');
	intro.setAttribute('id', 'intro');

	const heading = document.createElement('h2');
	// heading.html = 'Delicious Food <span class="highlight">24/7</span>'
	heading.innerHTML = 'Delicious Food <br/> <span class="highlight">24/7</span>';

	const image = document.createElement('img');
	// image.setAttribute(
	// 	'src',
	// 	// '../img/anna-pelzer-IGfIGP5ONV0-unsplash.jpg'
  //   '../img/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg'
	// );
	image.setAttribute(
		'src',
		'https://gourmetfood.com.au/wp-content/uploads/2020/05/homepage-crackers.png'
	);
	intro.append(image, heading);
	contentEl.appendChild(intro);
}
