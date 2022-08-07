import React from 'react';

const TextSection = (props) => {
	const { schoolName, study, from, to } = props;

	if (props.firstName) {
		return (
			<div className='textSection'>
				{/* <NoPrint single>
					<span className='material-icons editIcon' onClick={props.handleEdit}>
						create
					</span>
				</NoPrint> */}
				<span className='material-icons editIcon' onClick={props.handleEdit}>
					create
				</span>
				<p>
					<span className='categoryText'>First Name:</span> {props.firstName}
				</p>
				<p>
					<span className='categoryText'>Last Name:</span> {props.lastName}
				</p>
				<p>
					<span className='categoryText'>Email:</span> {props.email}
				</p>
				<p>
					<span className='categoryText'>Phone:</span> {props.phone}
				</p>
			</div>
		);
	} else if (props.companyName) {
		return (
			<div className='textSection'>
				{/* <NoPrint single>
				</NoPrint> */}
				<span className='material-icons editIcon' onClick={props.handleEdit}>
					create
				</span>
				<p>
					<span className='categoryText'>Company Name:</span>{' '}
					{props.companyName}
				</p>
				<p>
					<span className='categoryText'>Position:</span>
					{props.position}
				</p>
				<p>
					<span className='categoryText'>From:</span> {props.from}
				</p>
				<p>
					<span className='categoryText'>To:</span> {props.to}
				</p>
				<p>
					<span className='categoryText'>Main Task/s:</span> {props.tasks}
				</p>
			</div>
		);	
  } else {
		return (
			<div className='textSection'>
				{/* <NoPrint single>
				</NoPrint> */}
				<span className='material-icons editIcon' onClick={props.handleEdit}>
					create
				</span>
				<p>
					<span className='categoryText'>School Name:</span> {props.schoolName}
				</p>
				<p>
					<span className='categoryText'>Study:</span> {props.study}
				</p>
				<p>
					<span className='categoryText'>From: </span>
					{props.from}
				</p>
				<p>
					<span className='categoryText'>To:</span> {props.to}
				</p>
			</div>
		);
	}

	// return (
	// 	<>
	// 		<div className='section'>
	// 			<p>{schoolName}</p>
	// 			schoolName: {schoolName}, <br />
	// 			study: {study}, <br />
	// 			from: {from}, <br />
	// 			to: {to}
	// 		</div>
	// 		<br />
	// 	</>
	// );
};

export default TextSection;
