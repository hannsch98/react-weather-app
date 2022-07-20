import React from "react";
import { Grid } from "react-loader-spinner";

export default function Weather() {
	return (
		<div className="Weather">
			<p>Hello from Weather!</p>
			<Grid height="100" width="100" color="grey" ariaLabel="loading" />
		</div>
	);
}
