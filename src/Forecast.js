import React from "react";

export default function Forecast() {
	return (
		<div className="Forecast" id="forecast">
			<p>The next 5 days:</p>
			<div class="row">
				<div class="col-3">
					<div class="card">
						<h5 class="card-header forecast-day">Mon</h5>
						<ul class="list-group list-group-flush">
							<li class="list-group-item forecast-temp">
								31 °C
								<img
									src="http://openweathermap.org/img/wn/01d@2x.png"
									id="forecast-icon"
									alt="clear sky"
								/>
							</li>
							<li class="list-group-item forecast-wind">Wind 5 km/h</li>
							<li class="list-group-item forecast-humid">Humidity 35 %</li>
						</ul>
					</div>
				</div>
				<div class="col-3">
					<div class="card">
						<h5 class="card-header forecast-day">Tue</h5>
						<ul class="list-group list-group-flush">
							<li class="list-group-item forecast-temp">
								31 °C
								<img
									src="http://openweathermap.org/img/wn/01d@2x.png"
									id="forecast-icon"
									alt="clear sky"
								/>
							</li>
							<li class="list-group-item forecast-wind">Wind 5 km/h</li>
							<li class="list-group-item forecast-humid">Humidity 35 %</li>
						</ul>
					</div>
				</div>
				<div class="col-3">
					<div class="card">
						<h5 class="card-header forecast-day">Wed</h5>
						<ul class="list-group list-group-flush">
							<li class="list-group-item forecast-temp">
								31 °C
								<img
									src="http://openweathermap.org/img/wn/01d@2x.png"
									id="forecast-icon"
									alt="clear sky"
								/>
							</li>
							<li class="list-group-item forecast-wind">Wind 5 km/h</li>
							<li class="list-group-item forecast-humid">Humidity 35 %</li>
						</ul>
					</div>
				</div>
				<div class="col-3">
					<div class="card">
						<h5 class="card-header forecast-day">Thu</h5>
						<ul class="list-group list-group-flush">
							<li class="list-group-item forecast-temp">
								31 °C
								<img
									src="http://openweathermap.org/img/wn/01d@2x.png"
									id="forecast-icon"
									alt="clear sky"
								/>
							</li>
							<li class="list-group-item forecast-wind">Wind 5 km/h</li>
							<li class="list-group-item forecast-humid">Humidity 35 %</li>
						</ul>
					</div>
				</div>
				<div class="col-3">
					<div class="card">
						<h5 class="card-header forecast-day">Fri</h5>
						<ul class="list-group list-group-flush">
							<li class="list-group-item forecast-temp">
								31 °C
								<img
									src="http://openweathermap.org/img/wn/01d@2x.png"
									id="forecast-icon"
									alt="clear sky"
								/>
							</li>
							<li class="list-group-item forecast-wind">Wind 5 km/h</li>
							<li class="list-group-item forecast-humid">Humidity 35 %</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
