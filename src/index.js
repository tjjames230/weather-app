import { getTemperature } from "./js/weather.js";
import "./scss/styles.scss";

const search = document.querySelector("#search");
const searchBtn = document.querySelector("#search-btn");
let searchValue = "Minneapolis";

searchBtn.addEventListener("click", (e) => {
	e.preventDefault();
	searchValue = search.value;
	getTemperature(searchValue);
});
