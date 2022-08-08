import React, { useState } from 'react';
import TextSection from './TextSection';

const EducationSec = (props) => {
	// console.log('props: ', props);
	const { id, deleteItem } = props;
	const [editMode, setEditMode] = useState(true);

	const [educationInfo, setEducationInfo] = useState({
		schoolName: '',
		study: '',
		from: '',
		to: '',
	});
	const { schoolName, study, from, to } = educationInfo;

	const handleChange = (e) => {
		console.log('change: ', e);
		const { name, value } = e.target;
		setEducationInfo((prevInfo) => {
			return { ...prevInfo, [name]: value };
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('submit');
		setEditMode((prevMode) => !prevMode);
	};

	const handleDelete = (e) => {
		console.log('first: ', e);
		deleteItem('educationIds', id);
		setEducationInfo((prevInfo) => {
			return { ...prevInfo };
		});
	};

	if (!editMode) {
		return (
			<>
				<TextSection
					handleEdit={handleSubmit}
					schoolName={schoolName}
					study={study}
					from={from}
					to={to}
				/>
				<br />
			</>
		);
	}

	return (
		<>
			{/* <div>EducationSec: {id}</div> */}
			{/* <p className='warning'>Fill in the form.</p> */}
			<section>
				<form className='section' action='' onSubmit={handleSubmit}>
					<label htmlFor='schoolName'>
						<p>School Name:</p>
						<input
							type='text'
							placeholder='School Name'
							name='schoolName'
							id='schoolName'
							onChange={handleChange}
							value={schoolName}
							required
						/>
					</label>
					<label>
						<p>Title of Study:</p>
						<input
							type='text'
							placeholder='Title of study'
							name='study'
							onChange={handleChange}
							value={study}
							required
						/>
					</label>
					<label>
						<p>From:</p>
						<input
							type='date'
							name='from'
							placeholder='From'
							onChange={handleChange}
							value={from}
							required
						/>
					</label>

					<label>
						<p>To:</p>
						<input
							type='date'
							name='to'
							placeholder='To'
							onChange={handleChange}
							value={to}
							required
						/>
					</label>
					<button className='formBtn'>Save</button>
					<button
						className='formBtn'
						type='button'
						onClick={() => handleDelete('educationIds', id)}
					>
						Delete
					</button>
				</form>
			</section>
		</>
	);
};

export default EducationSec;
