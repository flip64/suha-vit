"use client";

import { Link } from "react-router-dom";
import HeaderTwo from "../layouts/HeaderTwo";
import top_product from "../data/top_product";
import React from "react";
import Footer from "../layouts/Footer";

// const MyTimer = React.lazy(() => import('../components/common/Timer'));


// import top_product from "@/data/top_product";
// import Footer from "@/layouts/Footer";
// import HeaderTwo from "@/layouts/HeaderTwo";
// import Link from "next/link";
// import React from "react";

// import dynamic from "next/dynamic";
// const MyTimer = dynamic(() => import("./common/Timer"), { ssr: false });

const WishlistGrid = () => {
	return (
		<>
			<HeaderTwo links="home" title="Wishlist" />

			<div className="page-content-wrapper">
				<div className="py-3">
					<div className="container">
						<div className="section-heading d-flex align-items-center justify-content-between rtl-flex-d-row-r">
							<h6>Wishlist Items</h6>

							<div className="layout-options">
								<Link className="active" to="/wishlist-grid">
									<i className="ti ti-border-all"></i>
								</Link>
								<Link to="/wishlist-list">
									<i className="ti ti-list-check"></i>
								</Link>
							</div>
						</div>

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
											<a className="delete-btn" href="#">
												<i className="ti ti-trash"></i>
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

							<div className="col-12">
								<div className="select-all-products-btn mt-2">
									<a className="btn btn-primary btn-lg w-100" href="#">
										<i className="ti ti-circle-check me-1 h6"></i>
										Add all items to cart
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default WishlistGrid;
