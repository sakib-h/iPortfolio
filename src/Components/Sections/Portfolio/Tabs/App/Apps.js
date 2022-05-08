import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiLink } from "react-icons/bi";
import ReactBnbGallery from "react-bnb-gallery";
import { useNavigate } from "react-router-dom";
const Apps = ({ appDesign, appDesigns }) => {
	// declaring states
	const [isOpen, setIsOpen] = useState(false);
	const [currentImage, setCurrentImage] = useState();

	const clickHandlerApp = (appDesign) => {
		setCurrentImage(appDesign.projectImg);
		setIsOpen(true);
	};

	// Navigation Handler
	const navigate = useNavigate();

	// --> For App Element
	const appImageArray = appDesigns.map((appDesign) => {
		return appDesign.projectImg;
	});

	const appImageIndex = appImageArray.indexOf(currentImage);

	const appElement = appImageArray.splice(appImageIndex, 1)[0];

	appImageArray.splice(0, 0, appElement);

	const navigationHandlerApp = (appDesign) => {
		sessionStorage.setItem("portfolioItem", JSON.stringify(appDesign));
		navigate("/portfolioDetails");
	};
	//  For App Element <--

	const closeHandler = () => {
		setIsOpen(false);
	};
	return (
		<div className="cardArea col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-4">
			<div className="cardContent">
				<img src={appDesign.projectImg} alt="" className="img-fluid" />
				<div className="links d-flex align-items-center">
					<div
						className="w-50 text-center bg border-end"
						onClick={() => clickHandlerApp(appDesign)}
					>
						<BiSearchAlt2 className="icon " />
					</div>
					<ReactBnbGallery
						show={isOpen}
						photos={appImageArray}
						onClose={closeHandler}
					/>

					<div
						className="w-50 text-center bg "
						onClick={() => navigationHandlerApp(appDesign)}
					>
						<BiLink className="icon" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Apps;
