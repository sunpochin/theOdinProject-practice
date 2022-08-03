// https://www.theodinproject.com/lessons/node-path-javascript-weather-app

async function getWeather() {
	// do stuff here
	let cityname = 'taipei';
	let address = '';
	let response;
	let lat = '25.105497';
	let lon = '121.597366';
	let weatherData;
	let xx = '48017ab2e468af17b4c9fcca0c5e2fda';
	address =
		`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=${xx}`;

	response = await fetch(address, { mode: 'cors' });
	weatherData = await response.json();
	console.log(weatherData);

	const temp = document.getElementById('temp');
	// temp.innerText = weatherData.weather[0].main;
	temp.innerText = weatherData.main.temp;

	const apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${xx}`;

	response = await fetch(address, { mode: 'cors' });
	weatherData = await response.json();
	console.log('weatherData:', weatherData);

}

getWeather();
