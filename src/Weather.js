import React from "react";
import Search from "./Search";

export default function Weather() {
	return (
		<div className="Weather">
			<div className="row">
				<div className="col-8">
					<p>Current weather in</p>
					<div className="row">
						<div className="col-6">
							<h2 id="current-city">Vienna</h2>
							<p>
								<span id="current-temp">25 °C</span>
								<img
									src="http://openweathermap.org/img/wn/01d@2x.png"
									id="weather-icon"
									alt="clear sky"
								/>
							</p>
						</div>
						<div className="col-6">
							<p id="weather-description">Sunny</p>
							<p id="weather-wind">Wind 5 km/h</p>
							<p id="weather-humid">Humidity 35 %</p>
						</div>
					</div>
				</div>
				<div className="col-4" id="search-box">
					<Search />
				</div>
			</div>
		</div>
	);
}
