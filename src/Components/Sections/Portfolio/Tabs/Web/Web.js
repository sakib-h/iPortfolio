import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiLink } from "react-icons/bi";
import ReactBnbGallery from "react-bnb-gallery";
import { useNavigate } from "react-router-dom";
const Web = ({ webDesign, webDesigns }) => {
	// declaring states
	const [isOpen, setIsOpen] = useState(false);
	const [currentImage, setCurrentImage] = useState();
	const navigate = useNavigate();

	// --> For Web Element
	const webImageArray = webDesigns.map((webDesign) => {
		return webDesign.projectImg;
	});

	const clickHandlerWeb = (webDesign) => {
		setCurrentImage(webDesign.projectImg);
		setIsOpen(true);
	};

	const webImageIndex = webImageArray.indexOf(currentImage);

	const webElement = webImageArray.splice(webImageIndex, 1)[0];

	webImageArray.splice(0, 0, webElement);

	const navigationHandlerWeb = (webDesign) => {
		sessionStorage.setItem("portfolioItem", JSON.stringify(webDesign));
		navigate("/portfolioDetails");
	};
	//  For Web Element <--

	const closeHandler = () => {
		setIsOpen(false);
	};
	return (
		<div className="cardArea col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-4">
			<div className="cardContent">
				<img src={webDesign.projectImg} alt="" className="img-fluid" />
				<div className="links d-flex align-items-center">
					<div
						className="w-50 text-center bg border-end"
						onClick={() => clickHandlerWeb(webDesign)}
					>
						<BiSearchAlt2 className="icon " />
					</div>
					<ReactBnbGallery
						show={isOpen}
						photos={webImageArray}
						onClose={closeHandler}
					/>

					<div
						className="w-50 text-center bg "
						onClick={() => navigationHandlerWeb(webDesign)}
					>
						<BiLink className="icon" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Web;
