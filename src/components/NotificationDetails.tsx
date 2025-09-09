import Footer from "../layouts/Footer";
import HeaderTwo from "../layouts/HeaderTwo";

 

const NotificationDetails = () => {
	return (
		<>
			<HeaderTwo links="home" title="Notification Details" />

			<div className="page-content-wrapper">
				<div className="container">
					<div className="notification-area pt-3 pb-2">
						<div className="list-group-item d-flex py-3 bg-transparent">
							<span className="noti-icon">
								<i className="ti ti-check"></i>
							</span>
							<div className="noti-info">
								<h6>Suha just uploaded a new product!</h6>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Recusandae dolore maiores corrupti?
								</p>
								<a className="btn btn-light" href="#">
									Product Link
								</a>
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

export default NotificationDetails;
