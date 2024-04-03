import { getTemperature } from "./weather.js";

const location = document.querySelector("#location");
const condition = document.querySelector("#condition");
const temperature = document.querySelector("#temperature");
const conditionCtn = document.querySelector("#condition-ctn");

export async function displayWeather(value) {
	let forecastInfo = await getTemperature(value);
	updateTemp(forecastInfo);
}

function updateTemp(obj) {
	location.textContent = obj.location;
	condition.textContent = "Condition: " + obj.condition;
	conditionCtn.innerHTML = `<img src="${obj.conditionImage}" />`;
	temperature.textContent = obj.temperature + "\u00B0 f";
}
