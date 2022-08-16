<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<p>{card.name}</p>
		<div>
			<img src={card.src} alt='pokemon card' />
		</div>
	</div>
</template>

<script>

export default {
	name: 'CardIns',
	props: {
		msg: String,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
