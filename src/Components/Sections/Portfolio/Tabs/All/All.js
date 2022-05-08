import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiLink } from "react-icons/bi";
import ReactBnbGallery from "react-bnb-gallery";

const All = ({ portfolioItem, portfolioItems }) => {
	// declaring states
	const [isOpen, setIsOpen] = useState(false);
	const [currentImage, setCurrentImage] = useState();

	// image click handler
	const clickHandlerAll = (portfolioItem) => {
		setIsOpen(true);
		setCurrentImage(portfolioItem.projectImg);
	};

	// ! Change the index number of current image
	const imageArray = portfolioItems.map((portfolioItem) => {
		return portfolioItem.projectImg;
	});

	// get the index of current image
	const currentImageIndex = imageArray.indexOf(currentImage);

	// remove the element from array
	const element = imageArray.splice(currentImageIndex, 1)[0];

	// insert the removed element at index 0
	imageArray.splice(0, 0, element);

	// navigation handler
	const navigate = useNavigate();

	const navigationHandlerAll = (portfolioItem) => {
		sessionStorage.setItem("portfolioItem", JSON.stringify(portfolioItem));
		navigate("/portfolioDetails");
	};

	// close handler
	const closeHandler = () => {
		setIsOpen(false);
	};
	return (
		<div className="all cardArea col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-4">
			<div className="cardContent">
				<img
					src={portfolioItem.projectImg}
					alt=""
					className="img-fluid"
				/>

				<div className="links d-flex align-items-center">
					<div
						className="w-50 text-center bg border-end"
						onClick={() => clickHandlerAll(portfolioItem)}
					>
						<BiSearchAlt2 className="icon " />
					</div>
					<ReactBnbGallery
						show={isOpen}
						photos={imageArray}
						onClose={closeHandler}
					/>

					<div
						className="w-50 text-center bg "
						onClick={() => navigationHandlerAll(portfolioItem)}
					>
						<BiLink className="icon" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default All;
