import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import portfolioDetails1 from "../../Resources/img/portfolio/portfolio-details-1.jpg";
import portfolioDetails2 from "../../Resources/img/portfolio/portfolio-details-2.jpg";
import portfolioDetails3 from "../../Resources/img/portfolio/portfolio-details-3.jpg";

import "./PortfolioDetails.css";
const PortfolioDetails = () => {
	const info = JSON.parse(sessionStorage.getItem("portfolioItem"));
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	return (
		<div className="portfolioDetails">
			<header className="header">
				<div className="d-flex align-items-center justify-content-between">
					<h4>Portfolio Details</h4>
					<Link to="/">Home</Link>
				</div>
			</header>
			<section className="row ">
				<div className="w-75 pe-3">
					<Carousel
						activeIndex={index}
						onSelect={handleSelect}
						variant="dark"
						interval={3000}
						fade
					>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={portfolioDetails1}
								alt="First slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={portfolioDetails2}
								alt="Second slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={portfolioDetails3}
								alt="Third slide"
							/>
						</Carousel.Item>
					</Carousel>
				</div>
				<div className="w-25 ps-3">
					<div className="projeCtInfo">
						<h3>Project information</h3>
						<h6>
							<strong>Category: </strong> {info.Category}
						</h6>
						<h6>
							<strong>Client: </strong> {info.Client}
						</h6>
						<h6>
							<strong>Project Date: </strong> {info.ProjectDate}
						</h6>
						<h6>
							<strong>Project Url: </strong> {info.ProjectURL}
						</h6>
					</div>

					<div className="projeCtInfo">
						<h2>This is an example of portfolio detail</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Asperiores tempore culpa hic nesciunt harum
							quod assumenda praesentium officia, sint, libero,
							temporibus magni iste minus cumque nam blanditiis
							ipsam! Ad, quos!
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PortfolioDetails;
