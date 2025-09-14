import { Link } from "react-router-dom";
import HeaderTwo from "../layouts/HeaderTwo";
import Footer from "../layouts/Footer";

 
const Offline = () => {
	return (
		<>
			<HeaderTwo links="home" title="Offline Detected" />

			<div className="page-content-wrapper">
				<div className="container">
					<div className="offline-area-wrapper py-3 d-flex align-items-center justify-content-center">
						<div className="offline-text text-center">
							<img
								className="mb-4 px-4"
								src="/assets/img/bg-img/no-internet.png"
								alt=""
							/>
							<h5>No Internet Connection!</h5>
							<p>
								Seems like you are offline, please check your internet
								connection. This page does not support when you offline!
							</p>
							<Link className="btn btn-primary btn-lg" to="/home">
								Back Home
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

export default Offline;
