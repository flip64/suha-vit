"use client";
 
import HeaderTwo from "../layouts/HeaderTwo";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer"; 

interface DataType {
	id: number;
	productName: string;
	price: number;
	quantity: number;
	imageUrl: string;
}

const cart_data:DataType[] = [
	{
		id: 1,
		productName: "Ciramic Pot Set",
		price: 12.1,
		quantity: 1,
		imageUrl: "/assets/img/product/11.png",
	},
	{
		id: 2,
		productName: "Bluetooth Speaker",
		price: 9.87,
		quantity: 2,
		imageUrl: "/assets/img/product/14.png",
	},
	{
		id: 3,
		productName: "Modern Gray Tops",
		price: 7.0,
		quantity: 1,
		imageUrl: "/assets/img/product/10.png",
	},
];


const Cart = () => {


	return (
		<>
			<HeaderTwo links="shop-grid" title="My Cart" />

			<div className="page-content-wrapper">
				<div className="container">
					<div className="cart-wrapper-area py-3">
						<div className="cart-table card mb-3">
							<div className="table-responsive card-body">
								<table className="table mb-0">
									<tbody>
										{cart_data.map((item, i) => (
											<tr key={i}>
												<th scope="row">
													<a className="remove-product" href="#">
														<i className="ti ti-x"></i>
													</a>
												</th>
												<td>
													<img className="rounded" src={item.imageUrl} alt="" />
												</td>
												<td>
													<Link
														className="product-title"
														to="/single-product"
													>
														{item.productName}
														<span className="mt-1">$ {item.price} × 1</span>
													</Link>
												</td>
												<td>


													<div className="quantity">
														<input
															className="qty-text"
															type="number"
															min="1"
															max="99"
															defaultValue="1"
														/>
													</div>

												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>

						<div className="card coupon-card mb-3">
							<div className="card-body">
								<div className="apply-coupon">
									<h6 className="mb-0">Have a coupon?</h6>
									<p className="mb-2">
										Enter your coupon code here & get awesome discounts!
									</p>
									<div className="coupon-form">
										<form onSubmit={(e) => e.preventDefault()}>
											<input
												className="form-control"
												type="text"
												placeholder="SUHA30"
											/>
											<button className="btn btn-primary" type="submit">
												Apply
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>

						<div className="card cart-amount-area">
							<div className="card-body d-flex align-items-center justify-content-between">
								<h5 className="total-price mb-0">
									$<span className="counter">38.84</span>
								</h5>
								<Link className="btn btn-primary" to="/checkout">
									Checkout Now
								</Link>
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

export default Cart;
