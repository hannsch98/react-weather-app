import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	function showForecast(response) {
		setLoaded(true);

		let forecastData = response.data.daily;

		setForecast(forecastData);
		console.log(forecastData);
	}

	if (loaded) {
		//console.log(forecast);

		return (
			<div className="WeatherForecast">
				<h3>The next 5 days:</h3>
				<div className="row">
					{forecast.map(function (dailyForecast, index) {
						if (index < 5) {
							return (
								<div className="col" key={index}>
									<WeatherForecastDay data={dailyForecast} />
								</div>
							);
						}
					})}
				</div>
			</div>
		);
	} else {
		//get Forecast data from API
		let lat = props.coordinates.lat;
		let lon = props.coordinates.lon;
		let units = "metric";
		let apiKey = "c757ac92a5aa99c5c15eeb0f1937036f";
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=hourly,minutely&appid=${apiKey}`;

		axios.get(apiUrl).then(showForecast);

		return null;
	}
}
