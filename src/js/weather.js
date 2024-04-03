export async function getTemperature(location) {
	try {
		const JSONdata = await fetch(
			`https://api.weatherapi.com/v1/current.json?key=d6ac1037fd004fcaa83210810241303&q=${location}&aqi=no`,
			{ mode: "cors" }
		);

		const data = await JSONdata.json();

		const forecastInfo = {
			location: `${data.location.name}, ${data.location.region}`,
			condition: data.current.condition.text,
			conditionImage: data.current.condition.icon,
			temperature: parseInt(data.current.temp_f),
		};

		return forecastInfo;
	} catch (error) {
		alert("ERROR! Please enter a correct city.");
	}
}
