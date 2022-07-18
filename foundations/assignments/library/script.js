// https://www.theodinproject.com/lessons/node-path-javascript-library

const bookA = new Book('bookA');

let myLibrary = [bookA];

function Book(name) {
	// the constructor...
	this.name = name;
}

function addBookToLibrary(newBook) {
	// do stuff here
	// const bookB = new Book('bookB');
	// const bookC = new Book('bookC');
	// myLibrary.push(bookB);
	// myLibrary.push(bookC);
	myLibrary.push(newBook);
	console.log('addBookToLibrary: ', myLibrary);
}

function showBooks() {
	const bookshelf = document.getElementById('bookshelf');
	bookshelf.textContent = '';
	
	for (let i = 0; i < myLibrary.length; i++) {
		// console.log(myLibrary[i].name);
		const book = document.createElement('div');
		book.classList.add('onebook');
		book.innerHTML = myLibrary[i].name;
		bookshelf.appendChild(book);
	}
}

// function showForm() {
// 	const form = document.getElementById('newForm');
// 	form.style.display = 'block';
// }
// function confirm() {
// 	const form = document.getElementById('newForm');
// 	form.style.display = 'none';
// }

// document.getElementById('showform').addEventListener('click', showForm);
// document.getElementById('confirm').addEventListener('click', confirm);

function confirmAddBook() {
	console.log('confirmAddBook');
	const title = document.getElementById('title');
	const author = document.getElementById('author');
	const pages = document.getElementById('pages');
	const bookNew = new Book('bookB');
	bookNew.name = title.value;
	bookNew.author = author.value;
	bookNew.pages = pages.value;
	addBookToLibrary(bookNew);
	showBooks();

}
document.getElementById('confirm').addEventListener('click', confirmAddBook);

const bookB = new Book('bookB');
addBookToLibrary(bookB);
const bookC = new Book('bookC');
addBookToLibrary(bookC);

showBooks();
