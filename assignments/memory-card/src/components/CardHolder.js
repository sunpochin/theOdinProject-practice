import React, { useEffect, useState } from 'react';
import Card from './Card';
// import '../styles/App.css';

const CardHolder = () => {
	const [cardIds, setCardIds] = useState([]);

	function randomArrayShuffle(array) {
		var currentIndex = array.length,
			temporaryValue,
			randomIndex;
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}

	var alphabet = ['a', 'b', 'c', 'd', 'e'];
	useEffect(() => {
		setCardIds(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
		randomArrayShuffle(alphabet);
		// console.log(cardIds);
		console.log(alphabet);
	}, []);

	console.log(cardIds);

	const clickCard = (id) => {
		console.log('click card holder: ', id);
		setCardIds((prevCardIds) => {
			return prevCardIds.filter((prev) => prev !== id);
		});
	};

	// const cards = [
	// 	<Card key='1' id='1' clickCard={clickCard} />,
	// 	<Card key='2' id='2' clickCard={clickCard} />,
	// 	<Card key='3' id='3' clickCard={clickCard} />,
	// 	<Card key='4' id='4' clickCard={clickCard} />,
	// ];
	const cards = cardIds.map((id) => (
		<Card key={id} id={id} clickCard={clickCard} />
	));

	return (
		<div>
			<div className='card-holder'>{cards}</div>
		</div>
	);
};

export default CardHolder;
