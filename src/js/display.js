export { displayWeather };
import { getTemperature } from "./weather.js";

const location = document.querySelector("#location");
const condition = document.querySelector("#condition");
const temperature = document.querySelector("#temperature");

async function displayWeather(value) {
	let forecastInfo = await getTemperature(value);
	updateTemp(forecastInfo);
}

function updateTemp(obj) {
	location.textContent = obj.location;
	condition.textContent = obj.condition;
	temperature.textContent = obj.temperature;
}
