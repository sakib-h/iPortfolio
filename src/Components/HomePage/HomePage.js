import React, { useEffect, useState } from "react";
import "./HomePage.css";
import profileImage from "../../Resources/img/profile-img.jpg";
import { FiGithub } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import ScrollspyNav from "react-scrollspy-nav";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { IoDocumentOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { BiServer } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import Home from "../../Components/Sections/Home/Home";
import About from "../../Components/Sections/About/About";
import Resume from "../../Components/Sections/Resume/Resume";
import Portfolio from "../../Components/Sections/Portfolio/Portfolio";
import Services from "../../Components/Sections/Services/Services";
import Contact from "../../Components/Sections/Contact/Contact";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const HomePage = () => {
	const [className, setClassName] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const classToggler = (isActive) => {
		setIsActive(!isActive);
	};

	useEffect(() => {
		if (isActive) {
			setClassName("active");
		} else setClassName(" ");
	}, [isActive]);

	console.log(className);
	return (
		<div class="homePage">
			<div className="body d-flex justify-content-between">
				{/* toggler icon */}
				<div
					className="navbarToggler d-flex align-items-center justify-content-center"
					onClick={() => classToggler(isActive)}
				>
					{isActive ? (
						<AiOutlineClose
							className="icon"
							data-aos="zoom-in"
							data-aos-duration="400"
						/>
					) : (
						<AiOutlineMenu
							className="icon"
							data-aos="zoom-in"
							data-aos-duration="400"
						/>
					)}
				</div>

				<div className={"header  p-4 " + className}>
					<header className=" flex-column align-items-center">
						{/* Profile starts*/}

						<div className="profile">
							<img
								src={profileImage}
								alt="sakib hasan"
								className="img-fluid "
								title="Sakib Hasan"
							/>
							<h1 className="text-center">Sakib Hasan</h1>
							<div className="socialIcon d-flex justify-content-around">
								<a
									href="https://github.com/sakib-h"
									rel="noreferrer"
									target="_blank"
									title="github.com/sakib-h"
								>
									<div className="iconBg d-flex justify-content-center align-items-center">
										<FiGithub className="icon " />
									</div>
								</a>

								<a
									href="https://www.facebook.com/info.sakib.h"
									rel="noreferrer"
									target="_blank"
									title="@info.sakib.h"
								>
									<div className="iconBg d-flex justify-content-center align-items-center">
										<FaFacebookF className="icon" />
									</div>
								</a>

								<a
									href="https://www.instagram.com/__sakibhasan"
									rel="noreferrer"
									target="_blank"
									title="@__sakibhasan"
								>
									<div className="iconBg d-flex justify-content-center align-items-center">
										<FaInstagram className="icon" />
									</div>
								</a>

								<a
									href="https://twitter.com/Sakib_365"
									rel="noreferrer"
									target="_blank"
									title="@Sakib_365"
								>
									<div className="iconBg d-flex justify-content-center align-items-center">
										<BsTwitter className="icon" />
									</div>
								</a>

								<a
									href="https://www.linkedin.com/in/abdullah-al-sakib"
									rel="noreferrer"
									target="_blank"
									title="linkedin.com/in/abdullah-al-sakib"
								>
									<div className="iconBg d-flex justify-content-center align-items-center">
										<FaLinkedinIn className="icon" />
									</div>
								</a>
							</div>
						</div>
						{/* Profile end*/}

						{/* Nav bar starts */}
						<div className="navigation ">
							<ScrollspyNav
								scrollTargetIds={[
									"home",
									"about",
									"resume",
									"portfolio",
									"services",
									"contact",
								]}
								offset={250}
								activeNavClass="is-active"
								scrollDuration="100"
								headerBackground="true"
							>
								<ul>
									<li>
										<a
											href="#home"
											className=" d-flex align-content-center"
										>
											<AiOutlineHome className="icon me-3" />
											<span>Home</span>
										</a>
									</li>
									<li>
										<a
											href="#about"
											className=" d-flex align-content-center"
										>
											<IoPersonOutline className="icon me-3" />
											<span>About</span>
										</a>
									</li>
									<li>
										<a
											href="#resume"
											className=" d-flex align-content-center"
										>
											<IoDocumentOutline className="icon me-3" />
											<span>Resume</span>
										</a>
									</li>
									<li>
										<a
											href="#portfolio"
											className=" d-flex align-content-center"
										>
											<FaRegAddressCard className="icon me-3" />
											<span>Portfolio</span>
										</a>
									</li>
									<li className=" d-flex align-content-center">
										<a href="#services">
											<BiServer className="icon me-3" />
											<span>Services</span>
										</a>
									</li>
									<li>
										<a
											href="#contact"
											className=" d-flex align-content-center"
										>
											<AiOutlineMail className="icon me-3" />
											<span>Contact</span>
										</a>
									</li>
								</ul>
							</ScrollspyNav>
						</div>
					</header>
				</div>
				<div className="section" id="home">
					<Home />

					<section
						id="about"
						className="animate__animated animate__fadeInUpBig"
					>
						<About />
					</section>
					<section id="resume">
						<Resume />
					</section>
					<section id="portfolio">
						<Portfolio />
					</section>
					<section id="services">
						<Services />
					</section>
					<section id="contact">
						<Contact />
					</section>
				</div>
				<footer className={"footer " + className}>
					<h5> &copy; Copyright iPortfolio</h5>
					<h6>
						{" "}
						Developed by <span>Sakib Hasan</span>{" "}
					</h6>
				</footer>
			</div>
		</div>
	);
};

export default HomePage;
