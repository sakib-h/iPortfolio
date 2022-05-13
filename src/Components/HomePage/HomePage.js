import React, { useRef } from "react";
import "./HomePage.css";
import profileImage from "../../Resources/img/profile-img.jpg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
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

const HomePage = () => {
	const homeRef = useRef();
	const aboutRef = useRef();

	return (
		<div class="homePage">
			<div className="body d-flex justify-content-between">
				<div className="header  p-4">
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
								<div className="iconBg d-flex justify-content-center align-items-center">
									<FaTwitter className="icon " />
								</div>
								<div className="iconBg d-flex justify-content-center align-items-center">
									<FaFacebookF className="icon" />
								</div>
								<div className="iconBg d-flex justify-content-center align-items-center">
									<FaInstagram className="icon" />
								</div>
								<div className="iconBg d-flex justify-content-center align-items-center">
									<FaSkype className="icon" />
								</div>
								<div className="iconBg d-flex justify-content-center align-items-center">
									<FaLinkedinIn className="icon" />
								</div>
							</div>
						</div>
						{/* Profile end*/}

						{/* Nav bar starts */}
						<div className="navigation">
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
				<div className="section" id="home" ref={homeRef}>
					<Home />

					<section
						id="about"
						className="animate__animated animate__fadeInUpBig"
						ref={aboutRef}
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
				<footer>
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
