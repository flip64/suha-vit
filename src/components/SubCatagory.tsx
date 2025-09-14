"use client";

import { Link } from "react-router-dom";
import top_product from "../data/top_product";
import HeaderThree from "../layouts/HeaderThree"; 
import Footer from "../layouts/Footer";

// const MyTimer = React.lazy(() => import('../components/common/Timer'));


const SubCatagory = () => {
	return (
		<>
			<HeaderThree links="catagory" title="Clothing" />
			<div className="page-content-wrapper">
				<div className="pt-3">
					<div className="container">
						<div
							className="catagory-single-img"
							style={{ backgroundImage: `url(/assets/img/bg-img/5.jpg)` }}
						></div>
					</div>
				</div>

				<div className="top-products-area py-3">
					<div className="container">
						<div className="section-heading rtl-text-right">
							<h6>Sub Catagory Products</h6>
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
			</div>

			<div className="internet-connection-status" id="internetStatus"></div>
			<Footer />
		</>
	);
};

export default SubCatagory;
