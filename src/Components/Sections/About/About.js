import React, { createRef, useRef, useState } from "react";
import image from "../../../Resources/img/profile-img.jpg";
import "./About.css";
import CountUp from "react-countup";
import { BsHexagonHalf } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { BsJournalRichtext } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { ProgressBar, Spinner } from "react-bootstrap";
import VisibilitySensor from "react-visibility-sensor";

const About = () => {
	return (
		<section className="aboutPage">
			{/* about area */}
			<div className="about p-3 ">
				<h2>About</h2>
				<p>
					Magnam dolores commodi suscipit. Necessitatibus eius
					consequatur ex aliquid fuga eum quidem. Sit sint consectetur
					velit. Quisquam quos quisquam cupiditate. Et nemo qui
					impedit suscipit alias ea. Quia fugiat sit in iste officiis
					commodi quidem hic quas.{" "}
				</p>

				<div className="bioData d-flex align-items-center">
					<div
						className="imageArea col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 pe-2"
						data-aos="fade-right"
					>
						<img
							src={image}
							alt="sakib hasan"
							className="img-fluid"
						/>
					</div>
					<div
						className="infoArea col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 ps-2"
						data-aos="fade-left"
					>
						<h3>UI/UX Designer & Web Developer</h3>
						<p>
							{" "}
							<i>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.{" "}
							</i>{" "}
						</p>
						<div className="data row align-items-center">
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-l col-xxl-6 mb-4">
								<BsHexagonHalf className="icon" />
								<span>
									{" "}
									<strong>Birthday:</strong> 1 May 1995
								</span>
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-l col-xxl-6 mb-4">
								<BsHexagonHalf className="icon" />
								<span>
									{" "}
									<strong>Age:</strong> 30
								</span>
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-l col-xxl-6 mb-4">
								<BsHexagonHalf className="icon" />
								<span>
									{" "}
									<strong>Website:</strong> www.example.com
								</span>
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-l col-xxl-6 mb-4">
								<BsHexagonHalf className="icon" />
								<span>
									{" "}
									<strong>Degree:</strong> Master
								</span>
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-l col-xxl-6 mb-4">
								<BsHexagonHalf className="icon" />
								<span>
									{" "}
									<strong>Phone:</strong> +123 456 7890
								</span>
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-l col-xxl-6 mb-4">
								<BsHexagonHalf className="icon" />
								<span>
									{" "}
									<strong>Email:</strong> email@email.com
								</span>
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-l col-xxl-6 mb-4">
								<BsHexagonHalf className="icon" />
								<span>
									{" "}
									<strong>City:</strong> New York, USA
								</span>
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-l col-xxl-6 mb-4">
								<BsHexagonHalf className="icon" />
								<span>
									{" "}
									<strong>Freelance:</strong> Available
								</span>
							</div>
						</div>
						<p>
							Officiis eligendi itaque labore et dolorum mollitia
							officiis optio vero. Quisquam sunt adipisci omnis et
							ut. Nulla accusantium dolor incidunt officia
							tempore. Et eius omnis. Cupiditate ut dicta maxime
							officiis quidem quia. Sed et consectetur qui quia
							repellendus itaque neque. Aliquid amet quidem ut
							quaerat cupiditate. Ab et eum qui repellendus omnis
							culpa magni laudantium dolores.{" "}
						</p>
					</div>
				</div>
			</div>
			{/* facts area */}

			<div className="facts p-3">
				<h2>Facts</h2>
				<p>
					{" "}
					Magnam dolores commodi suscipit. Necessitatibus eius
					consequatur ex aliquid fuga eum quidem. Sit sint consectetur
					velit. Quisquam quos quisquam cupiditate. Et nemo qui
					impedit suscipit alias ea. Quia fugiat sit in iste officiis
					commodi quidem hic quas.{" "}
				</p>

				<VisibilitySensor scrollCheck={true}>
					{({ isVisible }) => (
						<div>
							{isVisible ? (
								<div
									className="factsArea row align-items-center"
									data-aos="fade-up"
								>
									<div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex justify-content-center">
										<div className="iconContainer pe-2">
											<BsEmojiSmile className="factsIcon" />
										</div>
										<div className="textContainer">
											<CountUp
												start={0}
												end={232}
												duration={1}
											/>
											<h5>Happy Clients </h5>
											<h6>consequuntur quae</h6>
										</div>
									</div>

									<div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex justify-content-center">
										<div className="iconContainer pe-2">
											<BsJournalRichtext className="factsIcon" />
										</div>
										<div className="textContainer">
											<CountUp
												start={0}
												end={521}
												duration={1}
											/>
											<span id="counter" />
											<h5>Projects </h5>
											<h6>adipisci atque cum quia aut</h6>
										</div>
									</div>
									<div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex justify-content-center">
										<div className="iconContainer pe-2">
											<BiSupport className="factsIcon" />
										</div>
										<div className="textContainer">
											<CountUp
												start={0}
												end={1453}
												duration={1}
											/>
											<h5>Hours Of Support </h5>
											<h6>aut commodi quaerat </h6>
										</div>
									</div>
									<div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex justify-content-center">
										<div className="iconContainer pe-2">
											<BsPeople className="factsIcon" />
										</div>
										<div className="textContainer">
											<CountUp
												start={0}
												end={32}
												duration={1}
											/>
											<h5>Hard Workers </h5>
											<h6>rerum asperiores dolor </h6>
										</div>
									</div>
								</div>
							) : (
								<span></span>
							)}
						</div>
					)}
				</VisibilitySensor>
			</div>

			{/* Skills area */}
			<div className="skills">
				<div className="content p-3">
					<h2>Skills</h2>
					<p>
						{" "}
						Magnam dolores commodi suscipit. Necessitatibus eius
						consequatur ex aliquid fuga eum quidem. Sit sint
						consectetur velit. Quisquam quos quisquam cupiditate. Et
						nemo qui impedit suscipit alias ea. Quia fugiat sit in
						iste officiis commodi quidem hic quas.{" "}
					</p>

					<VisibilitySensor>
						{({ isVisible }) => (
							<div>
								{isVisible ? (
									<div
										className="skillBar row align-items-center"
										data-aos="zoom-in-right"
									>
										<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-l col-xxl-6 mb-4 pe-3">
											<div className="flex-column">
												<div className="text d-flex justify-content-between">
													<small>HTML</small>
													<small>90%</small>
												</div>
												<div className="bar">
													<ProgressBar now={90} />
												</div>
											</div>
										</div>
										<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-l col-xxl-6 mb-4 ps-3">
											<div className="flex-column">
												<div className="text d-flex justify-content-between">
													<small>CSS</small>
													<small>85%</small>
												</div>
												<div className="bar">
													<ProgressBar now={85} />
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-l col-xxl-6 mb-4 pe-3">
											<div className="flex-column">
												<div className="text d-flex justify-content-between">
													<small>BOOTSTRAP</small>
													<small>82%</small>
												</div>
												<div className="bar">
													<ProgressBar now={82} />
												</div>
											</div>
										</div>
										<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-l col-xxl-6 mb-4 ps-3">
											<div className="flex-column">
												<div className="text d-flex justify-content-between">
													<small>JAVA SCRIPT</small>
													<small>75%</small>
												</div>
												<div className="bar">
													<ProgressBar now={75} />
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-l col-xxl-6 mb-4 pe-3">
											<div className="flex-column">
												<div className="text d-flex justify-content-between">
													<small>REACT JS</small>
													<small>90%</small>
												</div>
												<div className="bar">
													<ProgressBar now={90} />
												</div>
											</div>
										</div>
										<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-l col-xxl-6 mb-4 ps-3">
											<div className="flex-column">
												<div className="text d-flex justify-content-between">
													<small>NODE JS</small>
													<small>70%</small>
												</div>
												<div className="bar">
													<ProgressBar now={70} />
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-l col-xxl-6 mb-4 pe-3">
											<div className="flex-column">
												<div className="text d-flex justify-content-between">
													<small>PHOTOSHOP</small>
													<small>80%</small>
												</div>
												<div className="bar">
													<ProgressBar now={80} />
												</div>
											</div>
										</div>
										<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-l col-xxl-6 mb-4 ps-3">
											<div className="flex-column">
												<div className="text d-flex justify-content-between">
													<small>ILLUSTRATOR</small>
													<small>90%</small>
												</div>
												<div className="bar">
													<ProgressBar now={90} />
												</div>
											</div>
										</div>
									</div>
								) : (
									<span className="opacity-0">Hi</span>
								)}
							</div>
						)}
					</VisibilitySensor>
				</div>
			</div>
		</section>
	);
};

export default About;
