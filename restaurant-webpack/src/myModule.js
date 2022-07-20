// a file called myModule.js
const functionOne = () => {
  console.log('functionOne');
	const contentEl = document.getElementById('content');
	contentEl.innerHTML = 'functionOne';
};
const functionTwo = () => {
	console.log('functionTwo');
	const contentEl = document.getElementById('content');
	contentEl.innerHTML = 'functionTwo';
};

export { functionOne, functionTwo };
