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

		console.log(forecastData);

		setForecast(
			forecastData
			/* 			day: forecastData[0].dt,
			temp: Math.round(forecastData[0].temp.day),
			icon: `http://openweathermap.org/img/wn/${forecastData[0].weather[0].icon}@2x.png`,
			wind: forecastData[0].wind_speed,
			humidity: forecastData[0].humidity, */
		);

		//let forecastDay = formatDay(forecastData.dt);

		//array of forecast data
		/* 		let forecastData = response.data.daily;

		forecastData.forEach(function (forecastDay, index) {
			if (index < 5) {
				console.log(forecastData);
				setForecast({
					day: formatDay(forecastDay.dt),
					temp: Math.round(forecastDay.temp.day),
					icon: `http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png`,
					wind: Math.round(forecastDay.wind_speed),
					humidity: forecastDay.humidity,
				});
			}
		}); */
	}

	if (loaded) {
		//console.log(forecast);

		return (
			<div className="WeatherForecast" id="forecast">
				<WeatherForecastDay data={forecast[0]} />
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
