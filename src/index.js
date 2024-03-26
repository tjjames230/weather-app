import { displayWeather } from "./js/display.js";
import "./js/display.js";
import "./scss/styles.scss";

const search = document.querySelector("#search");
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const searchValue = search.value;
	displayWeather(searchValue);
	document.querySelector("main").id = "main-ctn";
});
