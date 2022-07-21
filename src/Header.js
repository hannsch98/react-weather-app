import React from "react";

export default function Header() {
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	//set date to current date
	let currentTime = new Date();
	let currentWeekDay = days[currentTime.getDay()];
	let currentDate = currentTime.getDate();
	let currentMonth = months[currentTime.getMonth()];
	let currentYear = currentTime.getFullYear();
	//set time to current time
	let currentHour = currentTime.getHours();
	let currentMinutes = currentTime.getMinutes();
	if (currentMinutes < 10) {
		currentMinutes = `0${currentMinutes}`;
	}

	return (
		<div className="Header">
			<h1>The Weather</h1>
			<p id="current-date">
				{currentWeekDay}, {currentDate}. {currentMonth} {currentYear},{" "}
				{currentHour}:{currentMinutes}
			</p>
		</div>
	);
}
