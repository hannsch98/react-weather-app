import React from "react";

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
		wind: props.data.wind,
		humidity: props.data.humidity,
	};

	return (
		<div className="WeatherForecastDay">
			<h3>The next 5 days:</h3>
			<div className="row">
				<div className="col">
					<div className="card">
						<h5 className="card-header forecast-day">{forecast.day}</h5>
						<ul className="list-group list-group-flush">
							<li className="list-group-item forecast-temp">
								{forecast.temp} °C
								<img src={forecast.icon} id="forecast-icon" alt="clear sky" />
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
			</div>
		</div>
	);
}