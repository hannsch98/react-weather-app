import axios from "axios";
import React, { useEffect, useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	//if coordinates change
	// set loaded to false
	useEffect(() => {
		setLoaded(false);
	}, [props.coordinates]);

	function showForecast(response) {
		setLoaded(true);

		let forecastData = response.data.daily;
		setForecast(forecastData);
	}

	function getForecast() {
		//get Forecast data from API
		let lat = props.coordinates.lat;
		let lon = props.coordinates.lon;
		let units = "metric";
		let apiKey = "c757ac92a5aa99c5c15eeb0f1937036f";
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=hourly,minutely&appid=${apiKey}`;

		axios.get(apiUrl).then(showForecast);
	}

	if (loaded) {
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
						} else {
							return null;
						}
					})}
				</div>
			</div>
		);
	} else {
		getForecast();
		return null;
	}
}
