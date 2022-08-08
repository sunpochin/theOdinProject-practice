import React, { useState } from 'react';
import TextSection from './TextSection';

const ExperienceSec = (props) => {
	const { id, deleteItem} = props;
	const [editMode, setEditMode] = useState(true);
	const [expInfo, setExpInfo] = useState({
		companyName: '',
		positionTitle: '',
		from: '',
		to: '',
		tasks: '',
	});

	const handleChange = (e) => {
		console.log('change: ', e);
		const { name, value } = e.target;
		setExpInfo((prevInfo) => {
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
		deleteItem('experienceIds', id);
		setExpInfo((prevInfo) => {
			return { ...prevInfo };
		});
	};

	if (!editMode) {
		return (
			<>
				<TextSection
					handleEdit={handleSubmit}
					companyName={expInfo.companyName}
					positionTitle={expInfo.positionTitle}
					from={expInfo.from}
					to={expInfo.to}
				/>
				<br/>
			</>
		);
	}

	return (
		<>
			<section>
				<form className='section' action='' onSubmit={handleSubmit}>
					<label htmlFor='schoolName'>
						<p>School Name:</p>
						<input
							type='text'
							placeholder='School Name'
							name='companyName'
							id='companyName'
							onChange={handleChange}
							value={expInfo.companyName}
							required
						/>
					</label>
					<label>
						<p>Title of Study:</p>
						<input
							type='text'
							placeholder='Position Title'
							name='positionTitle'
							onChange={handleChange}
							value={expInfo.positionTitle}
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
							value={expInfo.from}
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
							value={expInfo.to}
							required
						/>
					</label>

					<label>
						<textarea
							name='tasks'
							className='tasks'
							placeholder='Main Tasks'
							onChange={handleChange}
							value={expInfo.tasks}
							required
						/>
					</label>

					<button className='formBtn'>Save</button>
					<button
						className='formBtn'
						type='button'
						onClick={() => handleDelete('experienceIds', id)}
					>
						Delete
					</button>
				</form>
			</section>
		</>
	);
};

export default ExperienceSec;
