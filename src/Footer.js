import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<div className="Footer">
			<footer>
				<a
					href="https://github.com/hannsch98/react-weather-app"
					target="_blank"
					rel="noreferrer"
				>
					Open source code
				</a>{" "}
				by{" "}
				<a
					href="https://www.linkedin.com/in/hanna-schimek-998b561a7/"
					target="_blank"
					rel="noreferrer"
				>
					Hanna Schimek
				</a>
			</footer>
		</div>
	);
}
