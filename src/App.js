import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import PortfolioDetails from "./Components/PortfolioDetails/PortfolioDetails";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function App() {
	useEffect(() => {
		AOS.init({
			offset: 120,
			delay: 0,
			duration: 600,
			easing: "ease-in-out",
		});
		AOS.refresh();
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="home" element={<HomePage />} />
				<Route path="portfolioDetails" element={<PortfolioDetails />} />
			</Routes>
		</div>
	);
}

export default App;
