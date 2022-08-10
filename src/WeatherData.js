import React from "react";
import WeatherTemp from "./WeatherTemp";
import "./Weather.css";
import "./WeatherData.css";

export default function WeatherData(props) {
	return (
		<div className="WeatherData col-8">
			<p>Current weather in</p>
			<div className="row mb-4">
				<div className="col">
					<h2 id="current-city">{props.data.city}</h2>
					<div>
						<img
							src={props.data.icon}
							id="weather-icon"
							alt={props.data.description}
						/>
						<WeatherTemp celsius={props.data.temp} />
					</div>
				</div>
				<div className="col">
					<p id="weather-description">{props.data.description}</p>
					<p id="weather-wind">Wind {props.data.wind} km/h</p>
					<p id="weather-humid">Humidity {props.data.humidity} %</p>
				</div>
			</div>
		</div>
	);
}
