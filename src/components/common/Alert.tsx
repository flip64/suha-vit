"use client";
import  { useEffect, useState } from "react";

const Alert = () => {
	const [show, setShow] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShow(false);
		}, 5000); // 5 seconds

		return () => clearTimeout(timer); // Cleanup the timer on unmount
	}, []);

	return (
		<div
			className={`toast pwa-install-alert shadow bg-white ${
				show ? "show" : "hide"
			}`}
			role="alert"
			aria-live="assertive"
			aria-atomic="true"
			data-bs-delay="5000"
			data-bs-autohide="true"
		>
			<div className="toast-body">
				<div className="content d-flex align-items-center mb-2">
					<img src="/assets/img/icons/icon-72x72.png" alt="" />
					<h6 className="mb-0">Add to Home Screen</h6>
					<button
						className="btn-close ms-auto"
						type="button"
						data-bs-dismiss="toast"
						aria-label="Close"
						onClick={() => setShow(false)}
					></button>
				</div>
				<span className="mb-0 d-block">
					Click the<strong className="mx-1">Add to Home Screen</strong>button &
					enjoy it like a regular app.
				</span>
			</div>
		</div>
	);
};

export default Alert;
