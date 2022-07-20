import "./styles.css";
import Weather from "./Weather";
import Header from "./Header";
import Footer from "./Footer";
import Forecast from "./Forecast";

function App() {
	return (
		<div className="App">
			<div className="container">
				<Header />
				<Weather />
				<Forecast />
				<Footer />
			</div>
		</div>
	);
}

export default App;
