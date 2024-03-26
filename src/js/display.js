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
	condition.textContent = "Condition: " + obj.condition;
	temperature.textContent = obj.temperature + "\u00B0 f";
}
