"use client";

import React from "react";   
import { useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules"; 
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPopup from "../../modals/VideoPopup"; 
import top_product from "../../data/top_product";
import reviews_data from "../../data/reviews_data";
 
 
 
// const MyTimer = React.lazy(() => import('../common/Timer'));


const SingleProductArea = () => {
	const [quantity, setQuantity] = useState(3);
	const increment = () => {
		setQuantity(quantity + 1);
	};

	const decrement = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

 

	return (
		<>
			<div className="product-description pb-3">
				<div className="product-title-meta-data bg-white mb-3 py-3">
					<div className="container d-flex justify-content-between rtl-flex-d-row-r">
						<div className="p-title-price">
							<h5 className="mb-1">Flower Ceramic Pots</h5>
							<p className="sale-price mb-0 lh-1">
								$38<span>$41</span>
							</p>
						</div>
						<div className="p-wishlist-share">
							<Link to="/wishlist-grid">
								<i className="ti ti-heart"></i>
							</Link>
						</div>
					</div>

					<div className="product-ratings">
						<div className="container d-flex align-items-center justify-content-between rtl-flex-d-row-r">
							<div className="ratings">
								<i className="ti ti-star-filled"></i>
								<i className="ti ti-star-filled"></i>
								<i className="ti ti-star-filled"></i>
								<i className="ti ti-star-filled"></i>
								<i className="ti ti-star-filled"></i>
								<span className="ps-1">3 ratings</span>
							</div>
							<div className="total-result-of-ratings">
								<span>5.0</span>
								<span>Very Good </span>
							</div>
						</div>
					</div>
				</div>

				<div className="flash-sale-panel bg-white mb-3 py-3">
					<div className="container">
						<div className="sales-offer-content d-flex align-items-end justify-content-between">
							<div className="sales-end">
								<p className="mb-1 font-weight-bold">
									<i className="ti ti-bolt-lightning lni-flashing-effect text-danger"></i>
									Flash sale end in
								</p>

								{/* <ul className="sales-end-timer ps-0 d-flex align-items-center">
									<MyTimer />
								</ul> */}
							</div>

							<div className="sales-volume text-end">
								<p className="mb-1 font-weight-bold">82% Sold Out</p>
								<div className="progress" style={{ height: "0.375rem" }}>
									<div
										className="progress-bar bg-warning"
										role="progressbar"
										style={{ width: "82%" }}
										aria-valuenow={82}
										aria-valuemin={0}
										aria-valuemax={100}
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="selection-panel bg-white mb-3 py-3">
					<div className="container d-flex align-items-center justify-content-between">
						<div className="choose-color-wrapper">
							<p className="mb-1 font-weight-bold">Color</p>
							<div className="choose-color-radio d-flex align-items-center">
								<div className="form-check mb-0">
									<input
										className="form-check-input blue"
										id="colorRadio1"
										type="radio"
										name="colorRadio"
										defaultChecked
									/>
									<label
										className="form-check-label"
										htmlFor="colorRadio1"
									></label>
								</div>

								<div className="form-check mb-0">
									<input
										className="form-check-input yellow"
										id="colorRadio2"
										type="radio"
										name="colorRadio"
									/>
									<label
										className="form-check-label"
										htmlFor="colorRadio2"
									></label>
								</div>

								<div className="form-check mb-0">
									<input
										className="form-check-input green"
										id="colorRadio3"
										type="radio"
										name="colorRadio"
									/>
									<label
										className="form-check-label"
										htmlFor="colorRadio3"
									></label>
								</div>

								<div className="form-check mb-0">
									<input
										className="form-check-input purple"
										id="colorRadio4"
										type="radio"
										name="colorRadio"
									/>
									<label
										className="form-check-label"
										htmlFor="colorRadio4"
									></label>
								</div>
							</div>
						</div>

						<div className="choose-size-wrapper text-end">
							<p className="mb-1 font-weight-bold">Size</p>
							<div className="choose-size-radio d-flex align-items-center">
								<div className="form-check mb-0 me-2">
									<input
										className="form-check-input"
										id="sizeRadio1"
										type="radio"
										name="sizeRadio"
									/>
									<label className="form-check-label" htmlFor="sizeRadio1">
										S
									</label>
								</div>

								<div className="form-check mb-0 me-2">
									<input
										className="form-check-input"
										id="sizeRadio2"
										type="radio"
										name="sizeRadio"
										defaultChecked
									/>
									<label className="form-check-label" htmlFor="sizeRadio2">
										M
									</label>
								</div>

								<div className="form-check mb-0 me-2">
									<input
										className="form-check-input"
										id="sizeRadio3"
										type="radio"
										name="sizeRadio"
									/>
									<label className="form-check-label" htmlFor="sizeRadio3">
										L
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="cart-form-wrapper bg-white mb-3 py-3">
					<div className="container">
						<form className="cart-form" onSubmit={(e) => e.preventDefault()}>
							<div className="order-plus-minus d-flex align-items-center">
								<div className="quantity-button-handler" onClick={decrement}>
									-
								</div>
								<input
									className="form-control cart-quantity-input"
									type="text"
									step="1"
									name="quantity"
									value={quantity}
								/>
								<div className="quantity-button-handler" onClick={increment}>
									+
								</div>
							</div>
							<button className="btn btn-primary ms-3" type="submit">
								Add To Cart
							</button>
						</form>
					</div>
				</div>

				<div className="p-specification bg-white mb-3 py-3">
					<div className="container">
						<h6>Specifications</h6>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
							eum? Id, culpa? At officia quisquam laudantium nisi mollitia
							nesciunt, qui porro asperiores cum voluptates placeat similique
							recusandae in facere quos vitae?
						</p>
						<ul className="mb-3 ps-3">
							<li>
								<i className="ti ti-check me-1"></i> 100% Good Reviews
							</li>
							<li>
								<i className="ti ti-check me-1"></i> 7 Days Returns
							</li>
							<li>
								{" "}
								<i className="ti ti-check me-1"></i> Warranty not Aplicable
							</li>
							<li>
								{" "}
								<i className="ti ti-check me-1"></i> 100% Brand New Product
							</li>
						</ul>
						<p className="mb-0">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
							eum? Id, culpa? At officia quisquam laudantium nisi mollitia
							nesciunt, qui porro asperiores cum voluptates placeat similique
							recusandae in facere quos vitae?
						</p>
					</div>
				</div>

				<div
					className="bg-img"
					style={{ backgroundImage: `url(/assets/img/product/18.jpg)` }}
				>
					<div className="container">
						<div className="video-cta-content d-flex align-items-center justify-content-center">
							<div className="video-text text-center">
								<h4 className="mb-4">Summer Clothing</h4>
								<a
									className="btn btn-primary rounded-circle"
									id="videoButton"
									onClick={() => setIsVideoOpen(true)}
									style={{ cursor: "pointer" }}
								>
									<i className="ti ti-player-play"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="pb-3"></div>

				<div className="related-product-wrapper bg-white py-3 mb-3">
					<div className="container">
						<div className="section-heading d-flex align-items-center justify-content-between rtl-flex-d-row-r">
							<h6>Related Products</h6>
							<Link className="btn btn-sm btn-secondary" to="/shop-grid">
								View all
							</Link>
						</div>
						<Swiper
							loop={true}
							slidesPerView={2}
							spaceBetween={10}
							autoplay={true}
							modules={[Autoplay]}
							className="related-product-slide owl-carousel"
						>
							{top_product.map((item, i) => (
								<SwiperSlide key={i} className="col-6 col-md-4">
									<div className="card product-card">
										<div className="card-body">
											<span
												className={`badge rounded-pill badge-${item.badge_color}`}
											>
												{item.badge_text}
											</span>
											<a className="wishlist-btn" href="#">
												<i className="ti ti-heart"></i>
											</a>
											<Link
												className="product-thumbnail d-block"
												to="/single-product"
											>
												<img className="mb-2" src={item.img} alt="" />
												{/* {i === 0 || i === 3 ? (
													<ul className="offer-countdown-timer d-flex align-items-center shadow-sm">
														<MyTimer />
													</ul>
												) : null} */}
											</Link>

											<Link className="product-title" to="/single-product">
												{item.title}
											</Link>

											<p className="sale-price">
												$ {item.new_price}
												<span>$ {item.old_price}</span>
											</p>

											<div className="product-rating">
												<i className="ti ti-star-filled"></i>
												<i className="ti ti-star-filled"></i>
												<i className="ti ti-star-filled"></i>
												<i className="ti ti-star-filled"></i>
												<i className="ti ti-star-filled"></i>
											</div>
											<a className="btn btn-primary btn-sm" href="#">
												<i className="ti ti-plus"></i>
											</a>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>

				<div className="rating-and-review-wrapper bg-white py-3 mb-3 dir-rtl">
					<div className="container">
						<h6>Ratings & Reviews</h6>
						<div className="rating-review-content">
							<ul className="ps-0">

								{reviews_data.map((item, i) => (
									<li key={i} className="single-user-review d-flex">
										<div className="user-thumbnail">
											<img src={item.img} alt="" />
										</div>
										<div className="rating-comment">
											<div className="rating">
												<i className="ti ti-star-filled"></i>
												<i className="ti ti-star-filled"></i>
												<i className="ti ti-star-filled"></i>
												<i className="ti ti-star-filled"></i>
												<i className="ti ti-star-filled"></i>
											</div>
											<p className="comment mb-0">
												{item.title}
											</p>
											<span className="name-date">
												{item.date}
											</span>

												
													{item.images.map((image, index) => (
														<a key={index}
															className="review-image mt-2 border rounded"
															style={{ cursor: "pointer" }}
															// onClick={() => handleImagePopup(index)}
														>
															<img
																className="rounded-3"
																src={image.img}
																alt=""
															/>
														</a>
													))}
												


										</div>
									</li>
								))} 

							</ul>
						</div>
					</div>
				</div>

				<div className="ratings-submit-form bg-white py-3 dir-rtl">
					<div className="container">
						<h6>Submit A Review</h6>
						<form onSubmit={(e) => e.preventDefault()}>
							<div className="stars mb-3">
								<input className="star-1" type="radio" name="star" id="star1" />
								<label className="star-1" htmlFor="star1"></label>
								<input className="star-2" type="radio" name="star" id="star2" />
								<label className="star-2" htmlFor="star2"></label>
								<input className="star-3" type="radio" name="star" id="star3" />
								<label className="star-3" htmlFor="star3"></label>
								<input className="star-4" type="radio" name="star" id="star4" />
								<label className="star-4" htmlFor="star4"></label>
								<input className="star-5" type="radio" name="star" id="star5" />
								<label className="star-5" htmlFor="star5"></label>
								<span></span>
							</div>
							<textarea
								className="form-control mb-3"
								id="comments"
								name="comment"
								cols={30}
								rows={10}
								data-max-length="200"
								placeholder="Write your review..."
							></textarea>
							<button className="btn btn-primary" type="submit">
								Save Review
							</button>
						</form>
					</div>
				</div>
			</div>

			{/* video modal start */}
			<VideoPopup
				isVideoOpen={isVideoOpen}
				setIsVideoOpen={setIsVideoOpen}
				videoId={"-hTVNidxg2s"}
			/>
			{/* video modal end */}


			{/* image light box start */}
			{/* {isOpen && (
				<ImagePopup
					images={image}
					setIsOpen={setIsOpen}
					photoIndex={photoIndex}
					setPhotoIndex={setPhotoIndex}
				/>
			)} */}
			{/* image light box end */}
		</>
	);
};

export default SingleProductArea;
