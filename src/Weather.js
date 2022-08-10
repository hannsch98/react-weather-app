import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather/build/ReactAnimatedWeather";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
	const apiKey = "c757ac92a5aa99c5c15eeb0f1937036f";

	let [city, setCity] = useState(props.defaultCity);
	let [loaded, setLoaded] = useState(false);
	let [weather, setWeather] = useState(null);

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function search() {
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

		axios.get(apiUrl).then(showWeather);
	}

	function updateInput(event) {
		event.preventDefault();
		setCity(event.target.value);
	}

	function showWeather(response) {
		setLoaded(true);

		// Set weather as an object
		setWeather({
			city: response.data.name,
			lat: response.data.coord.lat,
			lon: response.data.coord.lon,
			temp: Math.round(response.data.main.temp),
			description: response.data.weather[0].description,
			wind: Math.round(response.data.wind.speed),
			humidity: response.data.main.humidity,
			icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
		});
	}

	// geoLocation
	function showPosition(position) {
		let lat = position.coords.latitude;
		let lon = position.coords.longitude;

		let units = "metric";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

		axios.get(apiUrl).then(showWeather);
	}

	function getCurrentPosition(event) {
		event.preventDefault();
		navigator.geolocation.getCurrentPosition(showPosition);
	}

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
				autoFocus="on"
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

	if (loaded) {
		return (
			<div className="Weather">
				<div className="container">
					<div className="row">
						{/* Search Box */}
						<div className="col-4" id="search-box">
							{searchForm}
						</div>

						{/* Current weather */}
						<WeatherData data={weather} />

						<WeatherForecast coordinates={weather} />
					</div>
				</div>
			</div>
		);
	} else {
		search();
		return (
			<div className="text-center">
				<p>Loading...</p>

				<ReactAnimatedWeather
					icon="PARTLY_CLOUDY_DAY"
					color="#0071c3"
					size={64}
					animate={true}
				/>
			</div>
		);
	}
}
