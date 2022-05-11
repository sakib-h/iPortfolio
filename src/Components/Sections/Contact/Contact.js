import React, { useRef } from "react";
import "./Contact.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import { BiMap } from "react-icons/bi";
import emailjs from "@emailjs/browser";
const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"sakibHasan",
				"sakbHasanPersonal",
				form.current,
				"d5_Gxhf4862YY543M"
			)
			.then(
				(result) => {
					alert("Message Send Successfully");
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const containerStyle = {
		width: "350px",
		height: "350px",
	};

	const center = {
		lat: 23.613727,
		lng: 90.51456,
	};
	return (
		<section className="contact p-3">
			<h2>Contact</h2>
			<p>
				{" "}
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur
				ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
				quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
				Quia fugiat sit in iste officiis commodi quidem hic quas.{" "}
			</p>
			<div className="d-flex justify-content-between">
				<div className="col-md-5 p-2 ">
					<div className="areaBg">
						<div className="contactText ">
							<div className="content d-flex align-items-start">
								<div className="iconArea pe-3">
									<div className="iconBg">
										<BiMap className="icon" />
									</div>
								</div>
								<div className="text">
									<h3>Location:</h3>
									<h6>
										278-3 H M Sen Road Bandar, Narayanganj,
										Dhaka - 1410
									</h6>
								</div>
							</div>
							<div className="content d-flex align-items-start">
								<div className="iconArea pe-3">
									<div className="iconBg">
										<BiMap className="icon" />
									</div>
								</div>
								<div className="text">
									<h3>Email:</h3>
									<h6>info.official365@gmail.com</h6>
								</div>
							</div>
							<div className="content d-flex align-items-start">
								<div className="iconArea pe-3">
									<div className="iconBg">
										<BiMap className="icon" />
									</div>
								</div>
								<div className="text">
									<h3>Call:</h3>
									<h6>+880 1303 909469</h6>
								</div>
							</div>
						</div>
						<div className="mapArea row justify-content-center">
							<LoadScript
								googleMapsApiKey="AIzaSyDNDxq2EvNOUmv2cbQXTk1iw9PDlcS19xQ"
								clickableIcons={true}
							>
								<GoogleMap
									mapContainerStyle={containerStyle}
									center={center}
									zoom={10}
								>
									{/* Child components, such as markers, info windows, etc. */}
									<></>
								</GoogleMap>
							</LoadScript>
						</div>
					</div>
				</div>
				<div className="col-md-7 p-2">
					<div className="areaBg">
						<h3 className="text-center pb-3">Contact Us</h3>
						<form ref={form} onSubmit={sendEmail}>
							<div className="d-flex justify-content-between">
								<div className="inputGroup">
									<label>Name</label>
									<input type="text" name="user_name" />
								</div>
								<div className="inputGroup">
									<label>Email</label>
									<input type="email" name="user_email" />
								</div>
							</div>
							<label>Message</label>
							<textarea name="message" />
							<div className="row justify-content-center">
								<input
									type="submit"
									className="submit"
									value="Send Message"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
