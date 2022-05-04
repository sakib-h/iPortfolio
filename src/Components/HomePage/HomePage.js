import React from "react";
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
import Home from "../Sections/Home/Home";
import About from "../Sections/About/About";

const HomePage = () => {
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
									"/",
									"about",
									"resume",
									"portfolio",
									"services",
									"contact",
								]}
								offset={100}
								activeNavClass="is-active"
								scrollDuration="100"
								headerBackground="true"
							>
								<ul>
									<li>
										<a
											href="#/"
											className="is-active d-flex align-content-center"
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
				<div className="section">
					<Home />
					<section id="about">
						<About />
					</section>
					<section id="resume">
						<h3>Resume</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. At tempore blanditiis eius aliquid alias sunt
							debitis laudantium unde obcaecati quae nisi nobis
							quasi, fugit laborum, quis consequatur error minus
							tenetur! Quidem recusandae exercitationem, provident
							voluptate reiciendis veniam explicabo accusamus quam
							quos quis rerum esse ad soluta porro error. Odio ad
							distinctio ex corporis quasi quidem sapiente,
							voluptatum quibusdam. Aspernatur nemo laborum rerum
							nobis nostrum cum accusantium voluptas nulla non
							autem, veniam inventore eius accusamus architecto
							voluptatum obcaecati, ullam id! Quibusdam excepturi
							hic suscipit tempore aut provident? Distinctio,
							veniam recusandae? Obcaecati, nemo labore recusandae
							commodi vero sit architecto repellat quam facere
							quae ea quas esse temporibus magnam natus quis ut
							aut asperiores praesentium accusamus consequuntur
							ullam tempora magni assumenda. Quasi quod aperiam
							soluta minus cumque! Inventore aspernatur
							perferendis blanditiis. Aliquid placeat quo corporis
							officia necessitatibus tenetur eos repudiandae. Nam
							dignissimos aliquam maxime iure voluptates!
							Architecto quos, iste quidem velit optio libero
							dolor dolore eveniet tempora, odit minima
							consequuntur sapiente ut quaerat recusandae minus,
							quae soluta quas ipsa temporibus numquam ad?
							Pariatur quis praesentium saepe harum minus at cum
							repellat! Necessitatibus quo inventore ab, dolore
							odio eos minus facere? Accusamus magni quia quisquam
							consequatur ipsum quibusdam corporis qui aliquam in
							rerum amet tempore mollitia sapiente magnam non aut
							ex dolor, deserunt voluptatem perferendis ad. Amet
							et, quos quia doloremque ducimus quisquam animi
							voluptate id ipsa quibusdam? Quis odit nihil nobis
							unde commodi distinctio, est laboriosam voluptas,
							inventore perferendis excepturi repudiandae cumque.
							Quae reprehenderit voluptate quasi quam? Nisi
							adipisci eius nemo esse laboriosam vero neque
							corporis praesentium distinctio sint? Adipisci non
							molestias mollitia. Laudantium, nesciunt quisquam.
							Nemo facilis quod, est deleniti distinctio doloribus
							reprehenderit. Quos, deleniti nobis iure
							repellendus, fugit qui impedit sequi eius fuga id
							assumenda omnis saepe? Cum officiis facilis
							repellendus excepturi vero possimus, labore
							explicabo iusto dolor inventore. Asperiores,
							sapiente.
						</p>
					</section>
					<section id="portfolio">
						<h3>Portfolio</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. At tempore blanditiis eius aliquid alias sunt
							debitis laudantium unde obcaecati quae nisi nobis
							quasi, fugit laborum, quis consequatur error minus
							tenetur! Quidem recusandae exercitationem, provident
							voluptate reiciendis veniam explicabo accusamus quam
							quos quis rerum esse ad soluta porro error. Odio ad
							distinctio ex corporis quasi quidem sapiente,
							voluptatum quibusdam. Aspernatur nemo laborum rerum
							nobis nostrum cum accusantium voluptas nulla non
							autem, veniam inventore eius accusamus architecto
							voluptatum obcaecati, ullam id! Quibusdam excepturi
							hic suscipit tempore aut provident? Distinctio,
							veniam recusandae? Obcaecati, nemo labore recusandae
							commodi vero sit architecto repellat quam facere
							quae ea quas esse temporibus magnam natus quis ut
							aut asperiores praesentium accusamus consequuntur
							ullam tempora magni assumenda. Quasi quod aperiam
							soluta minus cumque! Inventore aspernatur
							perferendis blanditiis. Aliquid placeat quo corporis
							officia necessitatibus tenetur eos repudiandae. Nam
							dignissimos aliquam maxime iure voluptates!
							Architecto quos, iste quidem velit optio libero
							dolor dolore eveniet tempora, odit minima
							consequuntur sapiente ut quaerat recusandae minus,
							quae soluta quas ipsa temporibus numquam ad?
							Pariatur quis praesentium saepe harum minus at cum
							repellat! Necessitatibus quo inventore ab, dolore
							odio eos minus facere? Accusamus magni quia quisquam
							consequatur ipsum quibusdam corporis qui aliquam in
							rerum amet tempore mollitia sapiente magnam non aut
							ex dolor, deserunt voluptatem perferendis ad. Amet
							et, quos quia doloremque ducimus quisquam animi
							voluptate id ipsa quibusdam? Quis odit nihil nobis
							unde commodi distinctio, est laboriosam voluptas,
							inventore perferendis excepturi repudiandae cumque.
							Quae reprehenderit voluptate quasi quam? Nisi
							adipisci eius nemo esse laboriosam vero neque
							corporis praesentium distinctio sint? Adipisci non
							molestias mollitia. Laudantium, nesciunt quisquam.
							Nemo facilis quod, est deleniti distinctio doloribus
							reprehenderit. Quos, deleniti nobis iure
							repellendus, fugit qui impedit sequi eius fuga id
							assumenda omnis saepe? Cum officiis facilis
							repellendus excepturi vero possimus, labore
							explicabo iusto dolor inventore. Asperiores,
							sapiente.
						</p>
					</section>
					<section id="services">
						<h3>Services</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. At tempore blanditiis eius aliquid alias sunt
							debitis laudantium unde obcaecati quae nisi nobis
							quasi, fugit laborum, quis consequatur error minus
							tenetur! Quidem recusandae exercitationem, provident
							voluptate reiciendis veniam explicabo accusamus quam
							quos quis rerum esse ad soluta porro error. Odio ad
							distinctio ex corporis quasi quidem sapiente,
							voluptatum quibusdam. Aspernatur nemo laborum rerum
							nobis nostrum cum accusantium voluptas nulla non
							autem, veniam inventore eius accusamus architecto
							voluptatum obcaecati, ullam id! Quibusdam excepturi
							hic suscipit tempore aut provident? Distinctio,
							veniam recusandae? Obcaecati, nemo labore recusandae
							commodi vero sit architecto repellat quam facere
							quae ea quas esse temporibus magnam natus quis ut
							aut asperiores praesentium accusamus consequuntur
							ullam tempora magni assumenda. Quasi quod aperiam
							soluta minus cumque! Inventore aspernatur
							perferendis blanditiis. Aliquid placeat quo corporis
							officia necessitatibus tenetur eos repudiandae. Nam
							dignissimos aliquam maxime iure voluptates!
							Architecto quos, iste quidem velit optio libero
							dolor dolore eveniet tempora, odit minima
							consequuntur sapiente ut quaerat recusandae minus,
							quae soluta quas ipsa temporibus numquam ad?
							Pariatur quis praesentium saepe harum minus at cum
							repellat! Necessitatibus quo inventore ab, dolore
							odio eos minus facere? Accusamus magni quia quisquam
							consequatur ipsum quibusdam corporis qui aliquam in
							rerum amet tempore mollitia sapiente magnam non aut
							ex dolor, deserunt voluptatem perferendis ad. Amet
							et, quos quia doloremque ducimus quisquam animi
							voluptate id ipsa quibusdam? Quis odit nihil nobis
							unde commodi distinctio, est laboriosam voluptas,
							inventore perferendis excepturi repudiandae cumque.
							Quae reprehenderit voluptate quasi quam? Nisi
							adipisci eius nemo esse laboriosam vero neque
							corporis praesentium distinctio sint? Adipisci non
							molestias mollitia. Laudantium, nesciunt quisquam.
							Nemo facilis quod, est deleniti distinctio doloribus
							reprehenderit. Quos, deleniti nobis iure
							repellendus, fugit qui impedit sequi eius fuga id
							assumenda omnis saepe? Cum officiis facilis
							repellendus excepturi vero possimus, labore
							explicabo iusto dolor inventore. Asperiores,
							sapiente.
						</p>
					</section>
					<section id="contact">
						<h3>Contact</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. At tempore blanditiis eius aliquid alias sunt
							debitis laudantium unde obcaecati quae nisi nobis
							quasi, fugit laborum, quis consequatur error minus
							tenetur! Quidem recusandae exercitationem, provident
							voluptate reiciendis veniam explicabo accusamus quam
							quos quis rerum esse ad soluta porro error. Odio ad
							distinctio ex corporis quasi quidem sapiente,
							voluptatum quibusdam. Aspernatur nemo laborum rerum
							nobis nostrum cum accusantium voluptas nulla non
							autem, veniam inventore eius accusamus architecto
							voluptatum obcaecati, ullam id! Quibusdam excepturi
							hic suscipit tempore aut provident? Distinctio,
							veniam recusandae? Obcaecati, nemo labore recusandae
							commodi vero sit architecto repellat quam facere
							quae ea quas esse temporibus magnam natus quis ut
							aut asperiores praesentium accusamus consequuntur
							ullam tempora magni assumenda. Quasi quod aperiam
							soluta minus cumque! Inventore aspernatur
							perferendis blanditiis. Aliquid placeat quo corporis
							officia necessitatibus tenetur eos repudiandae. Nam
							dignissimos aliquam maxime iure voluptates!
							Architecto quos, iste quidem velit optio libero
							dolor dolore eveniet tempora, odit minima
							consequuntur sapiente ut quaerat recusandae minus,
							quae soluta quas ipsa temporibus numquam ad?
							Pariatur quis praesentium saepe harum minus at cum
							repellat! Necessitatibus quo inventore ab, dolore
							odio eos minus facere? Accusamus magni quia quisquam
							consequatur ipsum quibusdam corporis qui aliquam in
							rerum amet tempore mollitia sapiente magnam non aut
							ex dolor, deserunt voluptatem perferendis ad. Amet
							et, quos quia doloremque ducimus quisquam animi
							voluptate id ipsa quibusdam? Quis odit nihil nobis
							unde commodi distinctio, est laboriosam voluptas,
							inventore perferendis excepturi repudiandae cumque.
							Quae reprehenderit voluptate quasi quam? Nisi
							adipisci eius nemo esse laboriosam vero neque
							corporis praesentium distinctio sint? Adipisci non
							molestias mollitia. Laudantium, nesciunt quisquam.
							Nemo facilis quod, est deleniti distinctio doloribus
							reprehenderit. Quos, deleniti nobis iure
							repellendus, fugit qui impedit sequi eius fuga id
							assumenda omnis saepe? Cum officiis facilis
							repellendus excepturi vero possimus, labore
							explicabo iusto dolor inventore. Asperiores,
							sapiente.
						</p>
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
