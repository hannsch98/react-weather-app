import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";

export default function Weather() {
	let [searchInput, setSearchInput] = useState("");
	let [loaded, setLoaded] = useState(false);
	let [weather, setWeather] = useState(null);
	//let [forecast, setForecast] = useState(null);

	function handleSubmit(event) {
		event.preventDefault();

		let apiKey = "c757ac92a5aa99c5c15eeb0f1937036f";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=${apiKey}`;

		axios.get(apiUrl).then(showWeather);
	}

	function updateInput(event) {
		event.preventDefault();
		setSearchInput(event.target.value);
	}

	function showWeather(response) {
		setLoaded(true);
		console.log(response.data);

		// Set weather as an object
		setWeather({
			city: response.data.name,
			temp: Math.round(response.data.main.temp),
			description: response.data.weather[0].description,
			wind: Math.round(response.data.wind.speed),
			humidity: response.data.main.humidity,
			icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
		});

		//getForecast(response.data.coord);
	}

	// geoLocation
	function showPosition(position) {
		let lat = position.coords.latitude;
		let lon = position.coords.longitude;

		let units = "metric";
		let apiKey = "c757ac92a5aa99c5c15eeb0f1937036f";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

		axios.get(apiUrl).then(showWeather);
	}

	function getCurrentPosition(event) {
		event.preventDefault();
		navigator.geolocation.getCurrentPosition(showPosition);
	}

	/*
	//Forecast
	//get Forecast data from API
	function getForecast(coordinates) {
		let lat = coordinates.lat;
		let lon = coordinates.lon;
		let units = "metric";
		let apiKey = "c757ac92a5aa99c5c15eeb0f1937036f";
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=hourly,minutely&appid=${apiKey}`;

		axios.get(apiUrl).then(showForecast);
	}

	 function formatDay(timestamp) {
		let date = new Date(timestamp * 1000);
		let day = date.getDay();
		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		return days[day];
	}

	function showForecast(response) {
		//array of forecast data
		let forecastData = response.data.daily;

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
		});
	} 
	
	let defaultForecast = (
		<div className="Forecast" id="forecast">
			<p>The next 5 days:</p>
			<div className="row">
				<div className="col-3">
					<div className="card">
						<h5 className="card-header forecast-day">Mon</h5>
						<ul className="list-group list-group-flush">
							<li className="list-group-item forecast-temp">
								31 °C
								<img
									src="http://openweathermap.org/img/wn/01d@2x.png"
									id="forecast-icon"
									alt="clear sky"
								/>
							</li>
							<li className="list-group-item forecast-wind">Wind 5 km/h</li>
							<li className="list-group-item forecast-humid">Humidity 35 %</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	); */

	let searchForm = (
		<form id="search-form">
			<label htmlFor="search-input" id="search-label">
				Search for a city:
			</label>
			<input
				type="search"
				placeholder="Enter city here"
				className="form-control"
				id="search-input"
				autoComplete="off"
				onChange={updateInput}
			/>
			<button
				type="Submit"
				value="Search"
				onClick={handleSubmit}
				className="btn btn-primary"
			>
				Search
			</button>
			<button
				onClick={getCurrentPosition}
				id="current-location"
				className="btn btn-secondary"
			>
				My location
			</button>
		</form>
	);

	let defaultWeather = (
		<div className="col-8">
			<p>Current weather in</p>
			<div className="row">
				<div className="col-6">
					<h2 id="current-city">Vienna</h2>
					<p>
						<span id="current-temp">XX °C</span>
						<img
							src="http://openweathermap.org/img/wn/01d@2x.png"
							id="weather-icon"
							alt="clear sky"
						/>
					</p>
				</div>
				<div className="col-6">
					<p id="weather-description">Sunny</p>
					<p id="weather-wind">Wind XX km/h</p>
					<p id="weather-humid">Humidity XX %</p>
				</div>
			</div>
		</div>
	);

	if (loaded) {
		return (
			<div className="container">
				<div className="row">
					{/* Current weather */}
					<div className="col-8">
						<p>Current weather in</p>
						<div className="row">
							<div className="col-6">
								<h2 id="current-city">{weather.city}</h2>
								<p>
									<span id="current-temp">{weather.temp} °C</span>
									<img
										src={weather.icon}
										id="weather-icon"
										alt="Weather Icon"
									/>
								</p>
							</div>
							<div className="col-6">
								<p id="weather-description">{weather.description}</p>
								<p id="weather-wind">Wind {weather.wind} km/h</p>
								<p id="weather-humid">Humidity {weather.humidity} %</p>
							</div>
						</div>
					</div>

					{/* Search Box */}
					<div className="col-4" id="search-box">
						{searchForm}
					</div>
				</div>
				<Forecast />
			</div>
		);
	} else {
		return (
			<div className="container">
				<div className="row">
					{/* Current weather */}
					{defaultWeather}

					{/* Search Box */}
					<div className="col-4" id="search-box">
						{searchForm}
					</div>
				</div>
				<Forecast />
			</div>
		);
	}
}
