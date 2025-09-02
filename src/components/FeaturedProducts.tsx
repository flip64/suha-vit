import { Link } from "react-router-dom";
import featured_products from "../data/featured_products";
import HeaderThree from "../layouts/HeaderThree";
import Footer from "../layouts/Footer";

 

const FeaturedProducts = () => {
	return (
		<>
			<HeaderThree links="home" title="Featured Products" />

			<div className="page-content-wrapper">
				<div className="py-3">
					<div className="container">
						<div className="row g-2 rtl-flex-d-row-r">
							{featured_products.map((item, i) => (
								<div key={i} className="col-4">
									<div className="card featured-product-card">
										<div className="card-body">
											<span className="badge badge-warning custom-badge">
												<i className="ti ti-star-filled"></i>
											</span>
											<div className="product-thumbnail-side">
												<Link
													className="product-thumbnail d-block"
													to="/single-product"
												>
													<img src={item.img} alt={item.title} />
												</Link>
											</div>
											<div className="product-description">
												<Link
													className="product-title d-block"
													to="/single-product"
												>
													{item.title}
												</Link>
												<p className="sale-price">
													${item.new_price}
													<span>${item.old_price}</span>
												</p>
											</div>
										</div>
									</div>
								</div>
							))}
							{featured_products.map((item, i) => (
								<div key={i} className="col-4">
									<div className="card featured-product-card">
										<div className="card-body">
											<span className="badge badge-warning custom-badge">
												<i className="ti ti-star-filled"></i>
											</span>
											<div className="product-thumbnail-side">
												<Link
													className="product-thumbnail d-block"
													to="/single-product"
												>
													<img src={item.img} alt={item.title} />
												</Link>
											</div>
											<div className="product-description">
												<Link
													className="product-title d-block"
													to="/single-product"
												>
													{item.title}
												</Link>
												<p className="sale-price">
													${item.new_price}
													<span>${item.old_price}</span>
												</p>
											</div>
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

export default FeaturedProducts;
