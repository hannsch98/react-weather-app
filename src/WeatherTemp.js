import React, { useState } from "react";
import "./WeatherTemp.css";

export default function WeatherTemp(props) {
	const [unit, setUnit] = useState("celsius");

	let celsiusTemp = props.celsius;
	let fahrenheitTemp = Math.round((celsiusTemp * 9) / 5 + 32);

	function convertToFahrenheit(event) {
		event.preventDefault();
		setUnit("fahrenheit");
	}

	function convertToCelsius(event) {
		event.preventDefault();
		setUnit("celsius");
	}

	if (unit === "celsius") {
		return (
			<div className="WeatherTemp">
				<span id="current-temp">
					{celsiusTemp} <span className="unit">°C</span>
				</span>
				<br />
				<a href="/" onClick={convertToFahrenheit} className="convert-link">
					Convert to Fahrenheit
				</a>
			</div>
		);
	} else {
		return (
			<div className="WeatherTemp">
				<span id="current-temp">
					{fahrenheitTemp} <span className="unit">°F</span>
				</span>
				<br />
				<a href="/" onClick={convertToCelsius} className="convert-link">
					Convert to Celsius
				</a>
			</div>
		);
	}
}
