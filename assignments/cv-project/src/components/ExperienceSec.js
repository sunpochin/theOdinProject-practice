import React, { useState } from 'react';
import TextSection from './TextSection';

const ExperienceSec = (props) => {
	const { id, deleteItem } = props;
	const [editMode, setEditMode] = useState(true);
	const [expInfo, setExpInfo] = useState({
		companyName: '',
		positionTitle: '',
		from: '',
		to: '',
		tasks: '',
	});
	const { companyName, position, from, to, tasks } = expInfo;

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
				<br />
			</>
		);
	}

	return (
		<>
			<section>
				<form action='' className='section xpSection' onSubmit={handleSubmit}>
					<label>
						<p>Company Name:</p>
						<input
							type='text'
							placeholder='Company Name'
							name='companyName'
							onChange={handleChange}
							value={companyName}
							required
						/>
					</label>
					<label>
						<p>Position Title:</p>
						<input
							type='text'
							placeholder='Position Title'
							name='position'
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
							value={to}
							required
						/>
					</label>
					<textarea
						name='tasks'
						className='tasks'
						placeholder='Main Tasks'
						onChange={handleChange}
						value={tasks}
						required
					/>
					<button className='formBtn'>Save</button>
					<button
						className='formBtn'
						type='button'
						onClick={() => handleDelete('experienceIds', id)}
					>
						Delete
					</button>{' '}
				</form>
			</section>
		</>
	);
};

export default ExperienceSec;
