import React from "react";

export default function WeatherData(props) {
	return (
		<div className="WeatherData col-8">
			<p>Current weather in</p>
			<div className="row">
				<div className="col-6">
					<h2 id="current-city">{props.data.city}</h2>
					<p>
						<span id="current-temp">{props.data.temp} °C</span>
						<img
							src={props.data.icon}
							id="weather-icon"
							alt={props.data.description}
						/>
					</p>
				</div>
				<div className="col-6">
					<p id="weather-description">{props.data.description}</p>
					<p id="weather-wind">Wind {props.data.wind} km/h</p>
					<p id="weather-humid">Humidity {props.data.humidity} %</p>
				</div>
			</div>
		</div>
	);
}
