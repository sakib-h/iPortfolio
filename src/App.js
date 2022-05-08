import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import PortfolioDetails from "./Components/PortfolioDetails/PortfolioDetails";

function App() {
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
