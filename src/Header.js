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

	//set date & time to current one
	let currentTime = new Date();
	let currentWeekDay = days[currentTime.getDay()];

	let currentDate = currentTime.getDate();
	//ternary if-statement:
	currentDate < 10 ? (currentDate = `0${currentDate}`) : currentDate;

	let currentMonth = months[currentTime.getMonth()];
	let currentYear = currentTime.getFullYear();

	let currentHour = currentTime.getHours();
	currentHour < 10 ? (currentHour = `0${currentHour}`) : currentHour;

	let currentMinutes = currentTime.getMinutes();
	if (currentMinutes < 10) {
		currentMinutes = `0${currentMinutes}`;
	}
	//currentMinutes<10?currentMinutes=`0${currentMinutes}`:currentMinutes;

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
