import { Link } from "react-router-dom";
import HeaderTwo from "../layouts/HeaderTwo";
import Footer from "../layouts/Footer";

 

const Aboutus = () => {
	return (
		<>
			<HeaderTwo links="home" title="About Us" />

			<div className="page-content-wrapper py-3">
				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="about-content-wrap dir-rtl">
								<img className="mb-3" src="/assets/img/bg-img/12.png" alt="" />
								<h5>
									We are here for your all needs. Lets together safer the world.
									Stay at home, stay safe.
								</h5>
								<p>
									A versatile e-commerce shop template. It is very nicely
									designed with modern features & coded with the latest
									technology.
								</p>
								<p>
									It nicely views on all devices with smartphones, tablets,
									laptops & desktops.
								</p>
								<ul className="mb-3 ps-3">
									<li>
										<i className="ti ti-check me-1"></i>Versatile e-commerce
										mobile template.
									</li>
									<li>
										<i className="ti ti-check me-1"></i>Nicely designed with
										modern features.
									</li>
									<li>
										<i className="ti ti-check me-1"></i>Coded with the latest
										technology.
									</li>
								</ul>
								<p>
									It nicely views on all devices with smartphones, tablets,
									laptops & desktops.
								</p>
								<div className="row g-2">
									<div className="col-6">
										<img
											className="mb-3 rounded"
											src="/assets/img/bg-img/12.jpg"
											alt=""
										/>
									</div>
									<div className="col-6">
										<img
											className="mb-3 rounded"
											src="/assets/img/bg-img/16.jpg"
											alt=""
										/>
									</div>
								</div>
								<p>
									A versatile e-commerce shop template. It is very nicely
									designed with modern features & coded with the latest
									technology.
								</p>
								<p>
									It nicely views on all devices with smartphones, tablets,
									laptops & desktops.
								</p>
								<h6>Authors Help</h6>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Molestiae suscipit blanditiis facilis, est modi, maxime
									dolorem voluptatibus ea deserunt voluptate minima eaque
									quidem?
								</p>
								<h6>Buyers Help</h6>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Possimus sint reiciendis minima iusto ex beatae. Odio ducimus
									eveniet excepturi quaerat optio totam repellat eligendi! Eaque
									veritatis omnis doloribus vitae dolore similique facere eos
									molestiae quibusdam perspiciatis.
								</p>
								<div className="contact-btn-wrap text-center">
									<p className="mb-2">
										For more information, submit a request.
									</p>
									<Link
										className="btn btn-primary btn-lg w-100"
										to="/contact"
									>
										<i className="ti ti-mail me-2"></i>Submit A Query
									</Link>
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

export default Aboutus;
