// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
// import Main from './components/Main';
import GeneralSection from './components/GeneralSection';

const App = () => {
  const handleClick = (type) => {
    console.log('type:', type);
  }

	return (
		<>
			<div>
				<main>
					<h1 className='title'>CV-App React</h1>
						<h2 className='subTitle'>General Info.</h2>
						<GeneralSection />
					<div>
							<h2 className='subTitle'>Education Section</h2>
							{/* {eduComponents} */}
						<button
							className='addBtn'
							onClick={() => handleClick('educationIds')}
						>
							Add
						</button>
					</div>
					<div>
							<h2 className='subTitle'>Experience Section</h2>
							{/* {expComponents} */}
						<button
							className='addBtn'
							onClick={() => handleClick('experienceIds')}
						>
							Add
						</button>
					</div>
					{/* <button
						onClick={() => {
							window.print();
						}}
						className='addBtn'
					>
						Print
					</button> */}
				</main>
			</div>
		</>
	);
};

export default App;