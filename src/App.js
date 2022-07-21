import "./styles.css";
import Weather from "./Weather";
import Header from "./Header";
import Footer from "./Footer";

function App() {
	return (
		<div className="App">
			<div className="container">
				<Header />
				<Weather />
				<Footer />
			</div>
		</div>
	);
}

export default App;
