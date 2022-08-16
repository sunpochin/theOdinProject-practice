<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
	</div>
	<CardIns />
	<ul>
		<div class="card-holder">
			<div class="card" v-for="card in cards" :key="card.id">
				{{ card.name }}
				<!-- <button @click="removeTodo(todo)">X</button> -->
			</div>
		</div>
	</ul>
</template>

<script>
import CardIns from './CardIns.vue';
import { Pokedex } from 'pokeapi-js-wrapper';
const pokedex = new Pokedex();
let someArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const fetchCardsImgs = (cards) =>
	Promise.all(
		cards.map(
			({ src }) =>
				new Promise((resolve) => {
					const img = new Image();
					img.src = src;
					img.onload = () => resolve(src);
				})
		)
	);

const getCards = async (ids) => {
	const cards = await fetchPokemonApi(ids);
	console.log('fetchPokemonApi cards: ', cards);
	const brief = cards.map((card) => ({
		id: card.id,
		name: card.name,
		// src: card.sprites.other['official-artwork'].front_default,
		// src: card.sprites.back_default,
		src: card.sprites.front_default,
	}));
	await fetchCardsImgs(brief);
	// setIsLoading(false);
	// console.log('cards: ', cards);
	console.log('brief: ', brief);
	return brief;
};

const randomArrayShuffle = (array) => {
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
};

// const updateCards = async (ids) => {
// 	const newCards = await getCards(ids);
// 	this.setCards(newCards);
// 	// console.log('newCards: ', newCards);
// 	// setIsLoading(false);
// };

const fetchPokemonApi = (ids) => {
	console.log('ids: ', ids);
	const pro = Promise.all(ids.map((id) => pokedex.getPokemonByName(id)));
	return pro;
};

export default {
	name: 'CardHolder',

	data() {
		return {
			cards: [],
		};
	},
	methods: {
		async updateCards(ids) {
			const newCards = await getCards(ids);
			this.setCards(newCards);
			// console.log('newCards: ', newCards);
			// setIsLoading(false);
		},
		setCards(newCards) {
			this.cards = newCards;
			console.log('this.cards: ', this.cards);
		},
		addTodo() {
			// ...
			this.newTodo = '';
		},
	},

	mounted() {
		// component is now mounted.
    randomArrayShuffle(someArray);
		this.updateCards(someArray);
	},
	components: {
		CardIns,
	},
	props: {
		msg: String,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}

.card {
	width: 100px;
	height: 150px;
	margin: 10px;
	/* text-align: center; */
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;

	background-color: #5555f5;
	border-radius: 5px;
	box-shadow: 5px 5px #888;

	cursor: pointer;
}

.card-holder {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	justify-content: center;
	align-items: center;
}
</style>
