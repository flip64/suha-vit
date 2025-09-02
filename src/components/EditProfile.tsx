"use client";

import Footer from "../layouts/Footer";
import HeaderTwo from "../layouts/HeaderTwo";

 
const EditProfile = () => {
	return (
		<>
			<HeaderTwo links="profile" title="Edit Profile" />

			<div className="page-content-wrapper">
				<div className="container">
					<div className="profile-wrapper-area py-3">
						<div className="card user-info-card">
							<div className="card-body p-4 d-flex align-items-center">
								<div className="user-profile me-3">
									<img src="/assets/img/bg-img/9.jpg" alt="" />
									<div className="change-user-thumb">
										<form onSubmit={(e) => e.preventDefault()}>
											<input className="form-control-file" type="file" />
											<button>
												<i className="ti ti-pencil"></i>
											</button>
										</form>
									</div>
								</div>
								<div className="user-info">
									<p className="mb-0 text-white">@designing-world</p>
									<h5 className="mb-0 text-white">Suha Jannat</h5>
								</div>
							</div>
						</div>

						<div className="card user-data-card">
							<div className="card-body">
								<form action="" method="">
									<div className="mb-3">
										<div className="title mb-2">
											<i className="ti ti-at"></i>
											<span>Username</span>
										</div>
										<input
											className="form-control"
											type="text"
											value="designing-world"
										/>
									</div>
									<div className="mb-3">
										<div className="title mb-2">
											<i className="ti ti-user"></i>
											<span>Full Name</span>
										</div>
										<input
											className="form-control"
											type="text"
											value="Suha Jannat"
											disabled
										/>
									</div>
									<div className="mb-3">
										<div className="title mb-2">
											<i className="ti ti-phone"></i>
											<span>Phone</span>
										</div>
										<input
											className="form-control"
											type="text"
											value="+880 000 111 222"
										/>
									</div>
									<div className="mb-3">
										<div className="title mb-2">
											<i className="ti ti-mail"></i>
											<span>Email Address</span>
										</div>
										<input
											className="form-control"
											type="email"
											value="care@example.com"
										/>
									</div>
									<div className="mb-3">
										<div className="title mb-2">
											<i className="ti ti-location"></i>
											<span>Shipping Address</span>
										</div>
										<input
											className="form-control"
											type="text"
											value="28/C Green Road, BD"
										/>
									</div>
									<button
										className="btn btn-primary btn-lg w-100"
										type="submit"
									>
										Save All Changes
									</button>
								</form>
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

export default EditProfile;
