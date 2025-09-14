"use client";

import { Link } from "react-router-dom";
import HeaderTwo from "../layouts/HeaderTwo";
import top_product from "../data/top_product";
import Footer from "../layouts/Footer";
import{ useEffect } from "react";

// const MyTimer = React.lazy(() => import('../components/common/Timer'));

 

 


const VendorShop = () => { 

 
		useEffect(() => {
			if (typeof window !== 'undefined') {
				import('bootstrap/dist/js/bootstrap.bundle.min.js');
			}
		}, []);

		
 
	return (
		<>
			<HeaderTwo links="shop-grid" title="Vendors" />
			<div className="page-content-wrapper pb-3">
				<div
					className="vendor-details-wrap bg-img bg-overlay py-4"
					style={{ backgroundImage: `url(/assets/img/bg-img/15.jpg)` }}
				>
					<div className="container">
						<div className="d-flex align-items-start">
							<div className="vendor-profile shadow me-3">
								<figure className="m-0">
									<img src="/assets/img/core-img/logo-small.png" alt="" />
								</figure>
							</div>

							<div className="vendor-info">
								<h6 className="mb-1 vendor-title text-white">Suha</h6>
								<p className="mb-1 text-white">
									<i className="ti ti-map-pin me-1"></i>Dhaka, Bangladesh
								</p>
								<div className="ratings lh-1">
									<i className="ti ti-star-filled"></i>
									<i className="ti ti-star-filled"></i>
									<i className="ti ti-star-filled"></i>
									<i className="ti ti-star-filled"></i>
									<i className="ti ti-star-filled"></i>
									<span className="text-white">(99% Positive Seller)</span>
								</div>
							</div>
						</div>

						<div className="vendor-basic-info d-flex align-items-center justify-content-between mt-4">
							<div className="single-basic-info">
								<div className="icon">
									<i className="ti ti-shield-lock"></i>
								</div>
								<span>Trusted Seller</span>
							</div>
							<div className="single-basic-info">
								<div className="icon">
									<i className="ti ti-basket"></i>
								</div>
								<span>100+ Items</span>
							</div>
							<div className="single-basic-info">
								<div className="icon">
									<i className="ti ti-ship"></i>
								</div>
								<span>98% Ship On Time</span>
							</div>
						</div>
					</div>
				</div>

				<div className="vendor-tabs">
					<div className="container">
						<ul className="nav nav-tabs mb-3" id="vendorTab" role="tablist">
							<li className="nav-item" role="presentation">
								<button
									className="nav-link"
									id="home-tab"
									data-bs-toggle="tab"
									data-bs-target="#home"
									type="button"
									role="tab"
									aria-controls="home"
									aria-selected="true"
								>
									About
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button
									className="nav-link active"
									id="products-tab"
									data-bs-toggle="tab"
									data-bs-target="#products"
									type="button"
									role="tab"
									aria-controls="products"
									aria-selected="false"
								>
									Products
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button
									className="nav-link"
									id="reviews-tab"
									data-bs-toggle="tab"
									data-bs-target="#reviews"
									type="button"
									role="tab"
									aria-controls="reviews"
									aria-selected="false"
								>
									Reviews
								</button>
							</li>
						</ul>
					</div>
				</div>
				<div className="tab-content" id="vendorTabContent">
					<div
						className="tab-pane fade"
						id="home"
						role="tabpanel"
						aria-labelledby="home-tab"
					>
						<div className="container">
							<div className="card">
								<div className="card-body about-content-wrap dir-rtl">
									<h6>Welcome to our shop gallery.</h6>
									<p>
										A versatile e-commerce shop template. It is very nicely
										designed with modern features & coded with the latest
										technology.
									</p>
									<ul className="mb-3 ps-3">
										<li>
											<i className="ti ti-circle-check me-1"></i>Trusted Seller
										</li>
										<li>
											<i className="ti ti-circle-check me-1"></i>100+ Items
										</li>
										<li>
											<i className="ti ti-circle-check me-1"></i>98% Ship On
											Time
										</li>
									</ul>
									<p>
										It nicely views on all devices with smartphones, tablets,
										laptops & desktops.
									</p>
									<img
										className="mb-3 rounded"
										src="/assets/img/bg-img/16.jpg"
										alt=""
									/>
									<p>
										A versatile e-commerce shop template. It is very nicely
										designed with modern features & coded with the latest
										technology.
									</p>
									<p>
										It nicely views on all devices with smartphones, tablets,
										laptops & desktops.
									</p>
									<h6>Need Help?</h6>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Possimus sint reiciendis minima iusto ex beatae.
									</p>
									<div className="contact-btn-wrap text-center">
										<p className="mb-2">
											For more information, submit a request.
										</p>
										<Link className="btn btn-primary w-100" to="/contact">
											<i className="ti ti-lifebuoy me-1 h6"></i>Submit A Query
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="tab-pane fade show active"
						id="products"
						role="tabpanel"
						aria-labelledby="products-tab"
					>
						<div className="container">
							<div className="row g-2 rtl-flex-d-row-r">
								{top_product.map((item, i) => (
									<div key={i} className="col-6 col-md-4">
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
									</div>
								))}
							</div>
						</div>
					</div>
					<div
						className="tab-pane fade"
						id="reviews"
						role="tabpanel"
						aria-labelledby="reviews-tab"
					>
						<div className="rating-and-review-wrapper bg-white py-3 mb-3 dir-rtl">
							<div className="container">
								<div className="rating-review-content">
									<ul className="ps-0">
										<li className="single-user-review d-flex">
											<div className="user-thumbnail">
												<img src="/assets/img/bg-img/7.jpg" alt="" />
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
													Very good product. It is just amazing!
												</p>
												<span className="name-date">
													Designing World 12 Dec 2024
												</span>
												<a
													className="review-image mt-2 border rounded"
													href="img/product/3.png"
												>
													<img
														className="rounded-3"
														src="/assets/img/product/3.png"
														alt=""
													/>
												</a>
											</div>
										</li>

										<li className="single-user-review d-flex">
											<div className="user-thumbnail">
												<img src="/assets/img/bg-img/8.jpg" alt="" />
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
													Very excellent product. Love it.
												</p>
												<span className="name-date">
													Designing World 8 Dec 2024
												</span>
												<a
													className="review-image mt-2 border rounded"
													href="img/product/4.png"
												>
													<img
														className="rounded-3"
														src="/assets/img/product/4.png"
														alt=""
													/>
												</a>
												<a
													className="review-image mt-2 border rounded"
													href="img/product/6.png"
												>
													<img
														className="rounded-3"
														src="/assets/img/product/6.png"
														alt=""
													/>
												</a>
											</div>
										</li>

										<li className="single-user-review d-flex">
											<div className="user-thumbnail">
												<img src="/assets/img/bg-img/9.jpg" alt="" />
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
													What a nice product it is. I am looking it is.
												</p>
												<span className="name-date">
													Designing World 28 Nov 2024
												</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="ratings-submit-form bg-white py-3 dir-rtl">
							<div className="container">
								<h6>Submit A Review</h6>
								<form onSubmit={(e) => e.preventDefault()}>
									<div className="stars mb-3">
										<input
											className="star-1"
											type="radio"
											name="star"
											id="star1"
										/>
										<label className="star-1" htmlFor="star1"></label>
										<input
											className="star-2"
											type="radio"
											name="star"
											id="star2"
										/>
										<label className="star-2" htmlFor="star2"></label>
										<input
											className="star-3"
											type="radio"
											name="star"
											id="star3"
										/>
										<label className="star-3" htmlFor="star3"></label>
										<input
											className="star-4"
											type="radio"
											name="star"
											id="star4"
										/>
										<label className="star-4" htmlFor="star4"></label>
										<input
											className="star-5"
											type="radio"
											name="star"
											id="star5"
										/>
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
				</div>
			</div>

			<div className="internet-connection-status" id="internetStatus"></div>

			<Footer />
		</>
	);
};

export default VendorShop;
