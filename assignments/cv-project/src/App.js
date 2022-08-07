// import logo from './logo.svg';
import React, { useState } from 'react';
import GeneralSection from './components/GeneralSection';
import uniqid from 'uniqid';
import EducationSec from './components/EducationSec';
import ExperienceSec from './components/ExperienceSec';
import './styles/forms.css';
import './styles/App.css';

const App = () => {
	const [educationIds, setEducationIds] = useState([]);
	const [experienceIds, setExperienceIds] = useState([]);

	const handleClick = (type) => {
		console.log('type:', type);
		if ('experienceIds' === type) {
			console.log('type:', type);
			setExperienceIds((prevExperienceIds) => [...prevExperienceIds, uniqid()]);
		} else if ('educationIds' === type) {
			setEducationIds((prevEducationIds) => [...prevEducationIds, uniqid()]);
		}
	};

	const deleteItem = (type, id) => {
		console.log('type: ', type, ', id: ', id);
		if ('experienceIds' === type) {
			setExperienceIds((prevExperienceIds) => {
				return prevExperienceIds.filter((prev) => prev !== id);
			});
		} else {
			setEducationIds((prevEducationIds) => {
				return prevEducationIds.filter((prev) => prev !== id);
			});
		}
	};

	const eduComponents = educationIds.map((id) => (
		<EducationSec key={id} id={id} deleteItem={deleteItem} />
	));

	const expComponents = experienceIds.map((id) => (
		<ExperienceSec key={id} id={id} />
	));

	return (
		<>
			<div>
				<main>
					<h1 className='title'>CV-App React</h1>
					<h2 className='subTitle'>General Info.</h2>
					<GeneralSection />
					<div>
						<h2 className='subTitle'>Education Section</h2>
						{eduComponents}
						<button
							className='addBtn'
							onClick={() => handleClick('educationIds')}
						>
							Add
						</button>
					</div>
					<div>
						<h2 className='subTitle'>Experience Section</h2>
						{expComponents}
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
