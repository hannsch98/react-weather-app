import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
	function formatDay() {
		let date = new Date(props.data.dt * 1000);
		let day = date.getDay();
		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		return days[day];
	}

	function formatTemp() {
		let temp = Math.round(props.data.temp.day);

		return temp;
	}

	let forecast = {
		day: formatDay(),
		temp: formatTemp(),
		icon: `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`,
		wind: Math.round(props.data.wind_speed),
		humidity: props.data.humidity,
	};

	return (
		<div className="WeatherForecastDay">
			<div className="card">
				<h5 className="card-header forecast-day">{forecast.day}</h5>
				<ul className="list-group list-group-flush">
					<li className="list-group-item forecast-temp">
						<img src={forecast.icon} id="forecast-icon" alt="clear sky" />
						{forecast.temp} °C
					</li>
					<li className="list-group-item forecast-wind">
						Wind {forecast.wind} km/h
					</li>
					<li className="list-group-item forecast-humid">
						Humidity {forecast.humidity} %
					</li>
				</ul>
			</div>
		</div>
	);
}
