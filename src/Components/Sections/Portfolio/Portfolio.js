import React from "react";
import "./Portfolio.css";
import "./Responsive.css";
import image1 from "../../../Resources/img/portfolio/portfolio-1.jpg";
import image2 from "../../../Resources/img/portfolio/portfolio-2.jpg";
import image3 from "../../../Resources/img/portfolio/portfolio-3.jpg";
import image4 from "../../../Resources/img/portfolio/portfolio-4.jpg";
import image5 from "../../../Resources/img/portfolio/portfolio-5.jpg";
import image6 from "../../../Resources/img/portfolio/portfolio-6.jpg";
import image7 from "../../../Resources/img/portfolio/portfolio-7.jpg";
import image8 from "../../../Resources/img/portfolio/portfolio-8.jpg";
import image9 from "../../../Resources/img/portfolio/portfolio-9.jpg";
import All from "./Tabs/All/All";
import Apps from "./Tabs/App/Apps";
import Card from "./Tabs/Card/Card";
import Web from "./Tabs/Web/Web";
const Portfolio = () => {
	const portfolioItems = [
		{
			_id: 1,
			name: "Web Design 1",
			Category: "Web Design",
			Client: "ASU Company",
			ProjectDate: "01 March, 2020",
			ProjectURL: "www.example.com",
			projectImg: image1,
		},
		{
			_id: 2,
			name: "Graphics Design 1",
			Category: "Card Design",
			Client: "ASU Company",
			ProjectDate: "01 March, 2020",
			ProjectURL: "www.example.com",
			projectImg: image2,
		},
		{
			_id: 3,
			name: "Web Design 2",
			Category: "Web Design",
			Client: "ASUS Company",
			ProjectDate: "01 March, 2020",
			ProjectURL: "www.example.com",
			projectImg: image3,
		},
		{
			_id: 4,
			name: "Graphics Design 2",
			Category: "Card Design",
			Client: "ASUS Company",
			ProjectDate: "01 March, 2020",
			ProjectURL: "www.example.com",
			projectImg: image4,
		},
		{
			_id: 5,
			name: "App Design 1",
			Category: "App Design",
			Client: "ASUS Company",
			ProjectDate: "01 March, 2020",
			ProjectURL: "www.example.com",
			projectImg: image5,
		},
		{
			_id: 6,
			name: "App Design 2",
			Category: "App Design",
			Client: "ASUS Company",
			ProjectDate: "01 March, 2020",
			ProjectURL: "www.example.com",
			projectImg: image6,
		},
		{
			_id: 7,
			name: "Web Design 3",
			Category: "Web Design",
			Client: "ASUS Company",
			ProjectDate: "01 March, 2020",
			ProjectURL: "www.example.com",
			projectImg: image7,
		},
		{
			_id: 8,
			name: "Card Design 3",
			Category: "Card Design",
			Client: "ASUS Company",
			ProjectDate: "01 March, 2020",
			ProjectURL: "www.example.com",
			projectImg: image8,
		},
		{
			_id: 9,
			name: "Web Design 4",
			Category: "Web Design",
			Client: "ASUS Company",
			ProjectDate: "01 March, 2020",
			ProjectURL: "www.example.com",
			projectImg: image9,
		},
	];

	// Filter elements from array
	const appDesigns = portfolioItems.filter(
		(portfolioItem) => portfolioItem.Category === "App Design"
	);

	const cardDesigns = portfolioItems.filter(
		(portfolioItem) => portfolioItem.Category === "Card Design"
	);

	const webDesigns = portfolioItems.filter(
		(portfolioItem) => portfolioItem.Category === "Web Design"
	);

	return (
		<section className="portfolio">
			<div className="content p-3">
				<h2>Portfolio</h2>
				<p>
					{" "}
					Magnam dolores commodi suscipit. Necessitatibus eius
					consequatur ex aliquid fuga eum quidem. Sit sint consectetur
					velit. Quisquam quos quisquam cupiditate. Et nemo qui
					impedit suscipit alias ea. Quia fugiat sit in iste officiis
					commodi quidem hic quas.{" "}
				</p>
				<div className="portfolioArea" data-aos="fade-up">
					<ul
						class="nav nav-pills mb-3 justify-content-center"
						id="pills-tab"
						role="tablist"
					>
						<li class="nav-item" role="presentation">
							<button
								class="nav-link active"
								id="pills-all-tab"
								data-bs-toggle="pill"
								data-bs-target="#pills-all"
								type="button"
								role="tab"
								aria-controls="pills-all"
								aria-selected="true"
							>
								All
							</button>
						</li>
						<li class="nav-item" role="presentation">
							<button
								class="nav-link"
								id="pills-app-tab"
								data-bs-toggle="pill"
								data-bs-target="#pills-app"
								type="button"
								role="tab"
								aria-controls="pills-app"
								aria-selected="false"
							>
								App
							</button>
						</li>
						<li class="nav-item" role="presentation">
							<button
								class="nav-link"
								id="pills-card-tab"
								data-bs-toggle="pill"
								data-bs-target="#pills-card"
								type="button"
								role="tab"
								aria-controls="pills-card"
								aria-selected="false"
							>
								Card
							</button>
						</li>
						<li class="nav-item" role="presentation">
							<button
								class="nav-link"
								id="pills-web-tab"
								data-bs-toggle="pill"
								data-bs-target="#pills-web"
								type="button"
								role="tab"
								aria-controls="pills-web"
								aria-selected="false"
							>
								Web
							</button>
						</li>
					</ul>
					<div class="tab-content" id="pills-tabContent">
						<div
							class="tab-pane fade show active"
							id="pills-all"
							role="tabpanel"
							aria-labelledby="pills-all-tab"
						>
							<div className="cardsArea row animate__animated animate__zoomIn">
								{portfolioItems.map((portfolioItem) => (
									<All
										portfolioItems={portfolioItems}
										portfolioItem={portfolioItem}
									/>
								))}
							</div>
						</div>
						<div
							class="tab-pane fade"
							id="pills-app"
							role="tabpanel"
							aria-labelledby="pills-app-tab"
						>
							<div className="cardsArea row animate__animated animate__zoomIn">
								{appDesigns.map((appDesign) => (
									<Apps
										appDesign={appDesign}
										appDesigns={appDesigns}
									/>
								))}
							</div>
						</div>
						<div
							class="tab-pane fade"
							id="pills-card"
							role="tabpanel"
							aria-labelledby="pills-card-tab"
						>
							<div className="cardsArea row animate__animated animate__zoomIn">
								{cardDesigns.map((cardDesign) => (
									<Card
										cardDesign={cardDesign}
										cardDesigns={cardDesigns}
									/>
								))}
							</div>
						</div>
						<div
							class="tab-pane fade"
							id="pills-web"
							role="tabpanel"
							aria-labelledby="pills-web-tab"
						>
							<div className="cardsArea row animate__animated animate__zoomIn">
								{webDesigns.map((webDesign) => (
									<Web
										webDesign={webDesign}
										webDesigns={webDesigns}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
