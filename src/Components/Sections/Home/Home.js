import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
const Home = () => {
	return (
		<section className="home">
			<div className="bgContainer">
				<div className="textContainer">
					<h1>Sakib Hasan</h1>
					<div className="textEffect d-flex align-items-center">
						<p>I'm a &nbsp; </p>
						<Typewriter
							options={{
								strings: [
									"Developer",
									"Designer",
									"Freelancer",
								],
								autoStart: true,
								loop: true,
								pauseFor: 1000,
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
