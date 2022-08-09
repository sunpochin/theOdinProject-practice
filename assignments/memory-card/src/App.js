// import logo from './logo.svg';

// import './styles/forms.css';
import './styles/App.css';
import Card from './components/Card.js';

function App() {
	const cards = [
		<Card key='1' id='1' />,
		<Card key='2' id='2' />,
		<Card key='3' id='3' />,
		<Card key='4' id='4' />,
	];

	return (
		<div className='App'>
			<header className='App-header'>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<div className='card-holder'>{cards}</div>
			</header>
		</div>
	);
}

export default App;
