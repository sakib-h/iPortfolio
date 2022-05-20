import React from "react";
import "./Services.css";
import "./Responsive.css";
import { BsBriefcase } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { BsBinoculars } from "react-icons/bs";
import { BsBrightnessHigh } from "react-icons/bs";
import { BsCalendar4Week } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Pagination, Autoplay } from "swiper";
import testimonial1 from "../../../Resources/img/testimonials/testimonials-1.jpg";
import testimonial2 from "../../../Resources/img/testimonials/testimonials-2.jpg";
import testimonial3 from "../../../Resources/img/testimonials/testimonials-3.jpg";
import testimonial4 from "../../../Resources/img/testimonials/testimonials-4.jpg";
import testimonial5 from "../../../Resources/img/testimonials/testimonials-5.jpg";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
const Services = () => {
	return (
		<div className="services">
			<section className=" p-3">
				<h2>Services</h2>
				<p>
					Magnam dolores commodi suscipit. Necessitatibus eius
					consequatur ex aliquid fuga eum quidem. Sit sint consectetur
					velit. Quisquam quos quisquam cupiditate. Et nemo qui
					impedit suscipit alias ea. Quia fugiat sit in iste officiis
					commodi quidem hic quas.{" "}
				</p>
				<div className="serviceArea row" data-aos="fade-up">
					<div className="service col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-4 d-flex justify-content-between">
						<div className="col-3 col-sm-3  col-md-3 col-lg-3 col-xl-3 col-xxl-3 mb-3 iconBg ">
							<BsBriefcase className="icon " />
						</div>
						<div className=" col-9 col-sm-9  col-md-9 col-lg-9 col-xl-9 col-xxl-9 mb-9">
							<h4>Lorem Ipsum</h4>
							<p>
								Voluptatum deleniti atque corrupti quos dolores
								et quas molestias excepturi sint occaecati
								cupiditate non provident{" "}
							</p>
						</div>
					</div>
					<div className="service col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-4 d-flex justify-content-between">
						<div className="col-3 col-sm-3  col-md-3 col-lg-3 col-xl-3 col-xxl-3 mb-3 iconBg ">
							<BsCardChecklist className="icon " />
						</div>
						<div className="col-9 col-sm-9  col-md-9 col-lg-9 col-xl-9 col-xxl-9 mb-9">
							<h4>Dolor Sitema</h4>
							<p>
								Minim veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo consequat
								tarad limino ata{" "}
							</p>
						</div>
					</div>
					<div className="service col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-4 d-flex justify-content-between">
						<div className="col-3 col-sm-3  col-md-3 col-lg-3 col-xl-3 col-xxl-3 mb-3 iconBg ">
							<GiNetworkBars className="icon " />
						</div>
						<div className="col-9 col-sm-9  col-md-9 col-lg-9 col-xl-9 col-xxl-9 mb-9">
							<h4>Sed ut perspiciatis</h4>
							<p>
								Duis aute irure dolor in reprehenderit in
								voluptate velit esse cillum dolore eu fugiat
								nulla pariatur{" "}
							</p>
						</div>
					</div>
					<div className="service col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-4 d-flex justify-content-between">
						<div className="col-3 col-sm-3  col-md-3 col-lg-3 col-xl-3 col-xxl-3 mb-3 iconBg ">
							<BsBinoculars className="icon " />
						</div>
						<div className="col-9 col-sm-9  col-md-9 col-lg-9 col-xl-9 col-xxl-9 mb-9">
							<h4>Magni Dolores</h4>
							<p>
								Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim
								id est laborum{" "}
							</p>
						</div>
					</div>
					<div className="service col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-4 d-flex justify-content-between">
						<div className="col-3 col-sm-3  col-md-3 col-lg-3 col-xl-3 col-xxl-3 mb-3 iconBg ">
							<BsBrightnessHigh className="icon " />
						</div>
						<div className="col-9 col-sm-9  col-md-9 col-lg-9 col-xl-9 col-xxl-9 mb-9">
							<h4>Nemo Enim</h4>
							<p>
								At vero eos et accusamus et iusto odio
								dignissimos ducimus qui blanditiis praesentium
								voluptatum deleniti atque{" "}
							</p>
						</div>
					</div>
					<div className="service col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-4 d-flex justify-content-between">
						<div className="col-3 col-sm-3  col-md-3 col-lg-3 col-xl-3 col-xxl-3 mb-3 iconBg ">
							<BsCalendar4Week className="icon " />
						</div>
						<div className="col-9 col-sm-9  col-md-9 col-lg-9 col-xl-9 col-xxl-9 mb-9">
							<h4>Eiusmod Tempor</h4>
							<p>
								Et harum quidem rerum facilis est et expedita
								distinctio. Nam libero tempore, cum soluta nobis
								est eligendi{" "}
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="testimonial">
				<div className="p-3">
					<h2>Testimonials</h2>
					<p>
						Magnam dolores commodi suscipit. Necessitatibus eius
						consequatur ex aliquid fuga eum quidem. Sit sint
						consectetur velit. Quisquam quos quisquam cupiditate. Et
						nemo qui impedit suscipit alias ea. Quia fugiat sit in
						iste officiis commodi quidem hic quas.
					</p>
				</div>

				<div className="slider " data-aos="fade-up">
					<Swiper
						slidesPerView={3}
						spaceBetween={30}
						pagination={{
							clickable: true,
						}}
						breakpoints={{
							200: {
								slidesPerView: 1,
								spaceBetween: 30,
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 30,
							},
						}}
						autoplay={{ delay: 3000 }}
						modules={[Pagination, Autoplay]}
						className="mySwiper"
						// loop={true}
						grabCursor={true}
						speed={800}
					>
						<SwiperSlide>
							<div className="quotes">
								<p className="text-center">
									<ImQuotesLeft className="quote quote-left" />
									Proin iaculis purus consequat sem cure digni
									ssim donec porttitora entum suscipit
									rhoncus. Accusantium quam, ultricies eget
									id, aliquam eget nibh et. Maecen aliquam,
									risus at semper.
									<ImQuotesRight className="quote quote-right" />
								</p>
							</div>
							<div className="info">
								<img
									src={testimonial1}
									alt=""
									className="avatar"
								/>
								<h3>Saul Goodman</h3>
								<h4>Ceo & FounderCeo & Founder</h4>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="quotes">
								<p className="text-center">
									<ImQuotesLeft className="quote quote-left" />
									Export tempor illum tamen malis malis eram
									quae irure esse labore quem cillum quid
									cillum eram malis quorum velit fore eram
									velit sunt aliqua noster fugiat irure amet
									legam anim culpa.
									<ImQuotesRight className="quote quote-right" />
								</p>
							</div>
							<div className="info">
								<img
									src={testimonial2}
									alt=""
									className="avatar"
								/>
								<h3>Sara Wilsson</h3>
								<h4>Designer</h4>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="quotes">
								<p className="text-center">
									<ImQuotesLeft className="quote quote-left" />
									Enim nisi quem export duis labore cillum
									quae magna enim sint quorum nulla quem
									veniam duis minim tempor labore quem eram
									duis noster aute amet eram fore quis sint
									minim.
									<ImQuotesRight className="quote quote-right" />
								</p>
							</div>
							<div className="info">
								<img
									src={testimonial3}
									alt=""
									className="avatar"
								/>
								<h3>Jena Karlis</h3>
								<h4>Store Owner</h4>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="quotes">
								<p className="text-center">
									<ImQuotesLeft className="quote quote-left" />
									Fugiat enim eram quae cillum dolore dolor
									amet nulla culpa multos export minim fugiat
									minim velit minim dolor enim duis veniam
									ipsum anim magna sunt elit fore quem dolore
									labore illum veniam.
									<ImQuotesRight className="quote quote-right" />
								</p>
							</div>
							<div className="info">
								<img
									src={testimonial4}
									alt=""
									className="avatar"
								/>
								<h3>Matt Brandon</h3>
								<h4>Freelancer</h4>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="quotes">
								<p className="text-center">
									<ImQuotesLeft className="quote quote-left" />
									Quis quorum aliqua sint quem legam fore sunt
									eram irure aliqua veniam tempor noster
									veniam enim culpa labore duis sunt culpa
									nulla illum cillum fugiat legam esse veniam
									culpa fore nisi cillum quid.
									<ImQuotesRight className="quote quote-right" />
								</p>
							</div>
							<div className="info">
								<img
									src={testimonial5}
									alt=""
									className="avatar"
								/>
								<h3>John Larson</h3>
								<h4>Entrepreneur</h4>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
		</div>
	);
};

export default Services;
