import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiLink } from "react-icons/bi";
import ReactBnbGallery from "react-bnb-gallery";
import { useNavigate } from "react-router-dom";

const Card = ({ cardDesign, cardDesigns }) => {
	// declaring states
	const [isOpen, setIsOpen] = useState(false);
	const [currentImage, setCurrentImage] = useState();

	// --> For Card Element
	const cardImageArray = cardDesigns.map((cardDesign) => {
		return cardDesign.projectImg;
	});

	const clickHandlerCard = (cardDesign) => {
		setCurrentImage(cardDesign.projectImg);
		setIsOpen(true);
	};

	const cardImageIndex = cardImageArray.indexOf(currentImage);

	const cardElement = cardImageArray.splice(cardImageIndex, 1)[0];

	cardImageArray.splice(0, 0, cardElement);
	// Navigation Handler
	const navigate = useNavigate();

	const navigationHandlerCard = (cardDesign) => {
		sessionStorage.setItem("portfolioItem", JSON.stringify(cardDesign));
		navigate("/portfolioDetails");
	};
	//  For Card Element <--

	const closeHandler = () => {
		setIsOpen(false);
	};
	return (
		<div className="cardArea col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-4">
			<div className="cardContent">
				<img src={cardDesign.projectImg} alt="" className="img-fluid" />
				<div className="links d-flex align-items-center">
					<div
						className="w-50 text-center bg border-end"
						onClick={() => clickHandlerCard(cardDesign)}
					>
						<BiSearchAlt2 className="icon " />
					</div>
					<ReactBnbGallery
						show={isOpen}
						photos={cardImageArray}
						onClose={closeHandler}
					/>

					<div
						className="w-50 text-center bg "
						onClick={() => navigationHandlerCard(cardDesign)}
					>
						<BiLink className="icon" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
