import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";



const Profile = () => {
	return (
		<>
			<Header />

			<div className="page-content-wrapper">
				<div className="container">
					<div className="profile-wrapper-area py-3">
						<div className="card user-info-card">
							<div className="card-body p-4 d-flex align-items-center">
								<div className="user-profile me-3">
									<img src="/assets/img/bg-img/9.jpg" alt="" />
								</div>
								<div className="user-info">
									<p className="mb-0 text-white">@designing-world</p>
									<h5 className="mb-0 text-white">Suha Jannat</h5>
								</div>
							</div>
						</div>

						<div className="card user-data-card">
							<div className="card-body">
								<div className="single-profile-data d-flex align-items-center justify-content-between">
									<div className="title d-flex align-items-center">
										<i className="ti ti-at"></i>
										<span>Username</span>
									</div>
									<div className="data-content">@designing-world</div>
								</div>
								<div className="single-profile-data d-flex align-items-center justify-content-between">
									<div className="title d-flex align-items-center">
										<i className="ti ti-user"></i>
										<span>Full Name</span>
									</div>
									<div className="data-content">SUHA JANNAT</div>
								</div>
								<div className="single-profile-data d-flex align-items-center justify-content-between">
									<div className="title d-flex align-items-center">
										<i className="ti ti-phone"></i>
										<span>Phone</span>
									</div>
									<div className="data-content">+880 000 111 222</div>
								</div>
								<div className="single-profile-data d-flex align-items-center justify-content-between">
									<div className="title d-flex align-items-center">
										<i className="ti ti-mail"></i>
										<span>Email</span>
									</div>
									<div className="data-content">care@example.com </div>
								</div>
								<div className="single-profile-data d-flex align-items-center justify-content-between">
									<div className="title d-flex align-items-center">
										<i className="ti ti-location-pin"></i>
										<span>Shipping:</span>
									</div>
									<div className="data-content">28/C Green Road, BD</div>
								</div>
								<div className="single-profile-data d-flex align-items-center justify-content-between">
									<div className="title d-flex align-items-center">
										<i className="ti ti-star-filled"></i>
										<span>My Orders</span>
									</div>
									<div className="data-content">
										<Link className="btn btn-primary btn-sm" to="/my-order">
											View Status
										</Link>
									</div>
								</div>

								<div className="edit-profile-btn mt-3">
									<Link
										className="btn btn-primary btn-lg w-100"
										to="/edit-profile"
									>
										<i className="ti ti-pencil me-2"></i>Edit Profile
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

export default Profile;
