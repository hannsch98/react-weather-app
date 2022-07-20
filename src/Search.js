import React from "react";

export default function Search() {
	return (
		<div className="Search">
			<form id="search-form">
				<label htmlFor="search-input" id="search-label">
					Search for a city:
				</label>
				<input
					type="text"
					placeholder="Enter city here"
					className="form-control"
					id="search-input"
					autoComplete="off"
				/>
				<input type="Submit" value="Search" className="btn btn-primary" />
				<button id="current-location" className="btn btn-secondary">
					My location
				</button>
			</form>
		</div>
	);
}
