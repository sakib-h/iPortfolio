import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
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
				<div className="portfolioArea">
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
							All
						</div>
						<div
							class="tab-pane fade"
							id="pills-app"
							role="tabpanel"
							aria-labelledby="pills-app-tab"
						>
							App
						</div>
						<div
							class="tab-pane fade"
							id="pills-card"
							role="tabpanel"
							aria-labelledby="pills-card-tab"
						>
							Card
						</div>
						<div
							class="tab-pane fade"
							id="pills-web"
							role="tabpanel"
							aria-labelledby="pills-web-tab"
						>
							Web
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
