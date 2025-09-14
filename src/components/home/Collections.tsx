"use client";
 
import { Swiper, SwiperSlide } from "swiper/react";
import collections_products from "../../data/collections_products"; 

const Collections = () => {
	return (
		<>
			<div className="pb-3">
				<div className="container">
					<div className="section-heading d-flex align-items-center justify-content-between dir-rtl">
						<h6>Collections</h6>
						<a className="btn btn-sm btn-light" href="#">
							View all<i className="ms-1 ti ti-arrow-right"></i>
						</a>
					</div>

					<Swiper
						loop={true}
						slidesPerView={3}
						spaceBetween={10}
						className="collection-slide owl-carousel"
					>
						{collections_products.map((item, i) => (
							<SwiperSlide key={i} className="card collection-card">
								<a href="/single-product">
									<img src={item.img} alt="" />
								</a>
								<div className="collection-title">
									<span>{item.category}</span>
									<span className="badge bg-danger">{item.stock}</span>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default Collections;
