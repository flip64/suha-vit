import { Link } from "react-router-dom";
import vendors_data from "../data/vendors_data";
import HeaderTwo from "../layouts/HeaderTwo";
import Footer from "../layouts/Footer";

 

const Vendors = () => {
	return (
		<>
			<HeaderTwo links="shop-grid" title="Vendors" />

			<div className="page-content-wrapper py-3">
				<div className="container">
					<div className="row gy-3">
						{vendors_data.map((item, i) => (
							<div key={i} className="col-12">
								{/* <!-- Single Vendor --> */}
								<div
									className="single-vendor-wrap bg-img p-4 bg-overlay"
									style={{ backgroundImage: `url(${item.bg_img})` }}
								>
									<h6 className="vendor-title text-white">{item.title}</h6>
									<div className="vendor-info">
										<p className="mb-1 text-white">
											<i className="ti ti-map-pin me-1"></i>
											{item.title}
										</p>
										<div className="ratings lh-1">
											<i className="ti ti-star-filled"></i>
											<i className="ti ti-star-filled"></i>
											<i className="ti ti-star-filled"></i>
											<i className="ti ti-star-filled"></i>
											<i className="ti ti-star-filled"></i>
											<span className="text-white">
												{"("} {item.ratting_test} {")"}
											</span>
										</div>
									</div>
									<Link
										className="btn btn-primary btn-sm mt-3"
										to="/vendor-shop"
									>
										Go to store
										<i className="ti ti-arrow-right ms-1"></i>
									</Link>
									{/* <!-- Vendor Profile--> */}
									<div className="vendor-profile shadow">
										<figure className="m-0">
											<img src={item.profile_img} alt="" />
										</figure>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="internet-connection-status" id="internetStatus"></div>

			<Footer />
		</>
	);
};

export default Vendors;
