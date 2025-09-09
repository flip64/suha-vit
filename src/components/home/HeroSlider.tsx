"use client";
 
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSlider = () => {
	return (
		<>
			<div className="hero-wrapper">
				<div className="container">
					<div className="pt-3">
						<Swiper
							loop={true}
							pagination={true}
							modules={[Pagination]}
							className="hero-slides owl-carousel"
						>
							<SwiperSlide
								className="single-hero-slide"
								style={{ backgroundImage: `url(/assets/img/bg-img/1.jpg)` }}
							>
								<div className="slide-content h-100 d-flex align-items-center">
									<div className="slide-text">
										<h4
											className="text-white mb-0"
											data-animation="fadeInUp"
											data-delay="100ms"
											data-duration="1000ms"
										>
											Amazon Echo
										</h4>
										<p
											className="text-white"
											data-animation="fadeInUp"
											data-delay="400ms"
											data-duration="1000ms"
										>
											3rd Generation, Charcoal
										</p>
										<a
											className="btn btn-primary"
											href="#"
											data-animation="fadeInUp"
											data-delay="800ms"
											data-duration="1000ms"
										>
											Buy Now
										</a>
									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide
								className="single-hero-slide"
								style={{ backgroundImage: `url(/assets/img/bg-img/2.jpg)` }}
							>
								<div className="slide-content h-100 d-flex align-items-center">
									<div className="slide-text">
										<h4
											className="text-white mb-0"
											data-animation="fadeInUp"
											data-delay="100ms"
											data-duration="1000ms"
										>
											Light Candle
										</h4>
										<p
											className="text-white"
											data-animation="fadeInUp"
											data-delay="400ms"
											data-duration="1000ms"
										>
											Now only $22
										</p>
										<a
											className="btn btn-primary"
											href="#"
											data-animation="fadeInUp"
											data-delay="500ms"
											data-duration="1000ms"
										>
											Buy Now
										</a>
									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide
								className="single-hero-slide"
								style={{ backgroundImage: `url(/assets/img/bg-img/3.jpg)` }}
							>
								<div className="slide-content h-100 d-flex align-items-center">
									<div className="slide-text">
										<h4
											className="text-white mb-0"
											data-animation="fadeInUp"
											data-delay="100ms"
											data-duration="1000ms"
										>
											Fancy Chair
										</h4>
										<p
											className="text-white"
											data-animation="fadeInUp"
											data-delay="400ms"
											data-duration="1000ms"
										>
											3 years warranty
										</p>
										<a
											className="btn btn-primary"
											href="#"
											data-animation="fadeInUp"
											data-delay="800ms"
											data-duration="1000ms"
										>
											Buy Now
										</a>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSlider;
