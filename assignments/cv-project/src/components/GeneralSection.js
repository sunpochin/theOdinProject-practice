import React, { useState } from 'react';
import TextSection from './TextSection';

const GeneralSection = () => {
	const [editMode, setEditMode] = useState(true);
	const [generalInfo, setGeneralInfo] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
	});
	const { firstName, lastName, email, phone } = generalInfo;

	const handleChange = (e) => {
		console.log('change: ', e);
		const { name, value } = e.target;
		setGeneralInfo((prevInfo) => {
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
		// deleteItem('educationIds', id);
		// setEducationInfo((prevInfo) => {
		// 	return { ...prevInfo };
		// });
	};

	if (!editMode) {
		return (
			<>
				<TextSection
					handleEdit={handleSubmit}
					firstName={firstName}
					lastName={lastName}
					email={email}
					phone={phone}
				></TextSection>
				<br />
			</>
		);
	}

	return (
		<>
			<section>
				<form className='section' action='' onSubmit={handleSubmit}>
					<label htmlFor='firstName'>
						<p>First Name:</p>
						<input
							type='text'
							placeholder='First Name'
							name='firstName'
							id='firstName'
							onChange={handleChange}
							value={firstName}
							required
						/>
					</label>
					<label>
						<p>Last Name:</p>
						<input
							type='text'
							name='lastName'
							placeholder='Last Name'
							onChange={handleChange}
							value={lastName}
							required
						/>
					</label>
					<label>
						<p>Email:</p>
						<input
							type='email'
							name='email'
							placeholder='example@gmail.com'
							onChange={handleChange}
							value={email}
							required
						/>
					</label>

					<label>
						<p>Phone Number:</p>
						<input
							type='phone'
							name='phone'
							placeholder='123-456-789'
							onChange={handleChange}
							value={phone}
							required
						/>
					</label>
					<button className='formBtn generalBtn'>Save</button>
					{/* <button
						className='formBtn'
						type='button'
						onClick={() => handleDelete('educationIds', id)}
					>
						Delete
					</button> */}
				</form>
			</section>
		</>
	);
};

export default GeneralSection;
