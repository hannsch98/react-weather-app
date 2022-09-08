import React from "react";
import "./Header.css";

const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const months = [
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

function getCurrentTime() {
	const currentTime = new Date();
	const currentWeekDay = days[currentTime.getDay()];
	const currentMonth = months[currentTime.getMonth()];
	const currentYear = currentTime.getFullYear();
	let currentDate = currentTime.getDate();
	let currentHour = currentTime.getHours();
	let currentMinutes = currentTime.getMinutes();

	if (currentDate < 10) {
		currentDate = `0${currentDate}`;
	}

	if (currentHour < 10) {
		currentHour = `0${currentHour}`;
	}

	if (currentMinutes < 10) {
		currentMinutes = `0${currentMinutes}`;
	}

	return [
		currentWeekDay,
		currentDate,
		currentMonth,
		currentYear,
		currentHour,
		currentMinutes,
	];
}

export default function Header() {
	const [
		currentWeekDay,
		currentDate,
		currentMonth,
		currentYear,
		currentHour,
		currentMinutes,
	] = getCurrentTime();

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
