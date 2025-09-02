 

import best_seller from "../../data/best_seller";

const WeeklyBestSellers = () => {
	return (
		<>
			<div className="weekly-best-seller-area py-3">
				<div className="container">
					<div className="section-heading d-flex align-items-center justify-content-between dir-rtl">
						<h6>Weekly Best Sellers</h6>
						<a className="btn btn-sm btn-light" href="/shop-list">
							View all<i className="ms-1 ti ti-arrow-right"></i>
						</a>
					</div>
					<div className="row g-2">
						{best_seller.map((item, i) => (
							<div key={i} className="col-12">
								<div className="card horizontal-product-card">
									<div className="d-flex align-items-center">
										<div className="product-thumbnail-side">
											<a
												className="product-thumbnail d-block"
												href="/single-product"
											>
												<img src={item.img} alt="" />
											</a>
											<a className="wishlist-btn" href="#">
												<i className="ti ti-heart"></i>
											</a>
										</div>
										<div className="product-description">
											<a
												className="product-title d-block"
												href="/single-product"
											>
												{item.title}
											</a>

											<p className="sale-price">
												<i className="ti ti-currency-dollar"></i>${" "}
												{item.new_price}
												<span>$ {item.old_price}</span>
											</p>

											<div className="product-rating">
												<i className="ti ti-star-filled"></i> {item.ratting}{" "}
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
					</div>
				</div>
			</div>
		</>
	);
};

export default WeeklyBestSellers;
