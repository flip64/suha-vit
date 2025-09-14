 
import { Link } from "react-router-dom";
import flash_sale from "../data/flash_sale";
import HeaderThree from "../layouts/HeaderThree";
import Footer from "../layouts/Footer";

const FlashSale = () => {
	return (
		<>
			<HeaderThree links="home" title="Flash Sale" />

			<div className="page-content-wrapper">
				<div className="top-products-area py-3">
					<div className="container">
						<div className="row g-2 rtl-flex-d-row-r">
							{flash_sale.map((item, i) => (
								<div key={i} className="col-4">
									<div className="card flash-sale-card">
										<div className="card-body">
											<Link to="/single-product">
												<img src={item.img} alt={item.title} />
												<span className="product-title">{item.title}</span>
												<p className="sale-price">
													${item.new_price}
													<span className="real-price">${item.old_price}</span>
												</p>
												<span className="progress-title">
													{item.discount}% {item.test}
												</span>

												<div className="progress">
													<div
														className={`progress-bar ${item.color}`}
														role="progressbar"
														style={{ width: `${item.discount}%` }}
														aria-valuenow={item.discount}
														aria-valuemin={0}
														aria-valuemax={100}
													></div>
												</div>
											</Link>
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

export default FlashSale;
