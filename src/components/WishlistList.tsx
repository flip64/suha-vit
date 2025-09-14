 

import { Link } from "react-router-dom";
import HeaderTwo from "../layouts/HeaderTwo";
import best_seller from "../data/best_seller";
import Footer from "../layouts/Footer";

const WishlistList = () => {
	return (
		<>
			<HeaderTwo links="home" title="Wishlist" />

			<div className="page-content-wrapper">
				<div className="py-3">
					<div className="container">
						<div className="section-heading d-flex align-items-center justify-content-between rtl-flex-d-row-r">
							<h6>Wishlist Items</h6>

							<div className="layout-options">
								<Link to="/wishlist-grid">
									<i className="ti ti-border-all"></i>
								</Link>
								<Link className="active" to="/wishlist-list">
									<i className="ti ti-list-check"></i>
								</Link>
							</div>
						</div>
						<div className="row g-2">
							{best_seller.map((item, i) => (
								<div key={i} className="col-12">
									<div className="card horizontal-product-card">
										<div className="d-flex align-items-center">
											<div className="product-thumbnail-side">
												<Link
													className="product-thumbnail d-block"
													to="/single-product"
												>
													<img src={item.img} alt="" />
												</Link>
												<a className="delete-btn" href="#">
													<i className="ti ti-trash"></i>
												</a>
											</div>
											<div className="product-description">
												<Link
													className="product-title d-block"
													to="/single-product"
												>
													{item.title}
												</Link>
												<p className="sale-price">
													<i className="ti ti-currency-dollar"></i>${" "}
													{item.new_price}
													<span>$ {item.old_price}</span>
												</p>
												<div className="product-rating">
													<i className="ti ti-star-filled"></i>
													{item.ratting}
													<span className="ms-1">
														{"("} {item.review_text}{" "}
														{item.review_text > 1 ? "reviews" : "review"} {")"}
													</span>
												</div>
											</div>
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
			<div className="internet-connection-status" id="internetStatus"></div>

			<Footer />
		</>
	);
};

export default WishlistList;
