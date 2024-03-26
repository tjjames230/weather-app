export { getTemperature };

async function getTemperature(location) {
	const JSONdata = await fetch(
		`https://api.weatherapi.com/v1/current.json?key=d6ac1037fd004fcaa83210810241303&q=${location}&aqi=no`,
		{ mode: "cors" }
	);
	const data = await JSONdata.json();
	const temperature = data.current.temp_f;
	console.log(temperature);
	return temperature;
}
