import React from "react";

export default function Forecast() {
	return (
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
				<div className="col-3">
					<div className="card">
						<h5 className="card-header forecast-day">Tue</h5>
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
				<div className="col-3">
					<div className="card">
						<h5 className="card-header forecast-day">Wed</h5>
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
				<div className="col-3">
					<div className="card">
						<h5 className="card-header forecast-day">Thu</h5>
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
				<div className="col-3">
					<div className="card">
						<h5 className="card-header forecast-day">Fri</h5>
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
	);
}
