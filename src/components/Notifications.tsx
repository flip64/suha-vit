import { Link } from "react-router-dom";
import HeaderTwo from "../layouts/HeaderTwo";
import Footer from "../layouts/Footer";

 
const Notifications = () => {
	return (
		<>
			<HeaderTwo links="home" title="Notifications" />

			<div className="page-content-wrapper">
				<div className="container">
					<div className="section-heading d-flex align-items-center pt-3 justify-content-between rtl-flex-d-row-r">
						<h6>Notification(s)</h6>
						<a className="notification-clear-all text-secondary" href="#">
							Clear All
						</a>
					</div>

					<div className="notification-area pb-2">
						<div className="list-group">
							<Link
								className="list-group-item d-flex align-items-center border-0"
								to="/notification-details"
							>
								<span className="noti-icon">
									<i className="ti ti-bell-ringing"></i>
								</span>
								<div className="noti-info">
									<h6 className="mb-1">Suha just uploaded a new product!</h6>
									<span>12 min ago</span>
								</div>
							</Link>
							<Link
								className="list-group-item d-flex align-items-center border-0"
								to="/notification-details"
							>
								<span className="noti-icon">
									<i className="ti ti-gift"></i>
								</span>
								<div className="noti-info">
									<h6 className="mb-1">Black Friday Deals in One Place</h6>
									<span>49 min ago</span>
								</div>
							</Link>
							<Link
								className="list-group-item d-flex align-items-center border-0"
								to="/notification-details"
							>
								<span className="noti-icon">
									<i className="ti ti-message-circle"></i>
								</span>
								<div className="noti-info">
									<h6 className="mb-1">Share your experience, it is matters!</h6>
									<span>58 min ago</span>
								</div>
							</Link>
							<Link
								className="list-group-item readed d-flex align-items-center border-0"
								to="/notification-details"
							>
								<span className="noti-icon">
									<i className="ti ti-ship"></i>
								</span>
								<div className="noti-info">
									<h6 className="mb-1">Your order has been delivered.</h6>
									<span>Yesterday</span>
								</div>
							</Link>
							<Link
								className="list-group-item readed d-flex align-items-center border-0"
								to="/notification-details"
							>
								<span className="noti-icon">
									<i className="ti ti-heart"></i>
								</span>
								<div className="noti-info">
									<h6 className="mb-1">Your wishlist is updated.</h6>
									<span>2 days ago</span>
								</div>
							</Link>
							<Link
								className="list-group-item readed d-flex align-items-center border-0"
								to="/notification-details"
							>
								<span className="noti-icon">
									<i className="ti ti-bolt"></i>
								</span>
								<div className="noti-info">
									<h6 className="mb-1">11% Price drop! Hurry up.</h6>
									<span>2 days ago</span>
								</div>
							</Link>
							<Link
								className="list-group-item readed d-flex align-items-center border-0"
								to="/notification-details"
							>
								<span className="noti-icon">
									<i className="ti ti-percentage"></i>
								</span>
								<div className="noti-info">
									<h6 className="mb-1">Use 30% Discount Code</h6>
									<span>3 days ago</span>
								</div>
							</Link>
							<Link
								className="list-group-item readed d-flex align-items-center border-0"
								to="/notification-details"
							>
								<span className="noti-icon">
									<i className="ti ti-ship"></i>
								</span>
								<div className="noti-info">
									<h6 className="mb-1">Your order has been delivered.</h6>
									<span>Yesterday</span>
								</div>
							</Link>
							<Link
								className="list-group-item readed d-flex align-items-center border-0"
								to="/notification-details"
							>
								<span className="noti-icon">
									<i className="ti ti-heart"></i>
								</span>
								<div className="noti-info">
									<h6 className="mb-1">Your wishlist is updated.</h6>
									<span>2 days ago</span>
								</div>
							</Link>
							<Link
								className="list-group-item readed d-flex align-items-center border-0"
								to="/notification-details"
							>
								<span className="noti-icon">
									<i className="ti ti-bolt"></i>
								</span>
								<div className="noti-info">
									<h6 className="mb-1">11% Price drop! Hurry up.</h6>
									<span>2 days ago</span>
								</div>
							</Link>
							<Link
								className="list-group-item readed d-flex align-items-center border-0"
								to="/notification-details"
							>
								<span className="noti-icon">
									<i className="ti ti-percentage"></i>
								</span>
								<div className="noti-info">
									<h6 className="mb-1">Use 30% Discount Code</h6>
									<span>3 days ago</span>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="internet-connection-status" id="internetStatus"></div>

			<Footer />
		</>
	);
};

export default Notifications;
