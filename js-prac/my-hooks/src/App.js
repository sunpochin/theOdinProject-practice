import React, { useState, useEffect } from 'react';

const App = () => {
	// const [count, setCount] = useState(0);

	// const incrementCount = () => {
	//   console.log('count: ', count);
	// 	setCount(count + 1);
	// };

	// return (
	// 	<div>
	// 		<div>{count}</div>
	// 		<button onClick={incrementCount}>Increment</button>
	// 	</div>
	// );
	const [heading, setHeading] = useState('Magnificent Monkeys');
	const clickHandler = () => {
		setHeading('radical rhinos');
	};

	const [color, setColor] = useState('black');

	useEffect(() => {
		const changeColorOnClick = () => {
			if (color === 'black') {
				setColor('red');
			} else {
				setColor('black');
			}
		};

		document.addEventListener('click', changeColorOnClick);

		return () => {
			document.removeEventListener('click', changeColorOnClick);
		};
	}, [color]);

	return (
		<>
			<button type='button' onClick={clickHandler}>
				Click Me
			</button>
			<h1>{heading}</h1>
			{/* <h2>Our First Test</h2> */}
		</>

		// <div>
		// 	<div
		// 		id='myDiv'
		// 		style={{
		// 			color: 'white',
		// 			width: '100px',
		// 			height: '100px',
		// 			position: 'absolute',
		// 			left: '50%',
		// 			top: '50%',
		// 			backgroundColor: color,
		// 		}}
		// 	>
		// 		This div can change color. Click on me!
		// 	</div>
		// 	<h1>Hello from App</h1>
		// </div>
	);
};

export default App;
