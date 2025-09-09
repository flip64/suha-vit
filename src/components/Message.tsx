"use client";

import HeaderTwo from "../layouts/HeaderTwo";

 
const Message = () => {
	return (
		<>
			<HeaderTwo links="home" title="Live Chat" />

			<div className="page-content-wrapper">
				<div className="live-chat-intro mb-3">
					<p>Start a conversation</p>
					<img src="/assets/img/bg-img/9.jpg" alt="" />
					<div className="status online">We are online</div>
				</div>

				<div className="support-wrapper py-3">
					<div className="container">
						<div className="live-chat-wrapper">
							<div className="agent-message-content d-flex align-items-start">
								<div className="agent-thumbnail me-2 mt-2">
									<img src="/assets/img/bg-img/9.jpg" alt="" />
								</div>

								<div className="agent-message-text">
									<div className="d-block">
										<p>
											Hi there! You can start asking your question below. I am
											ready to help.
										</p>
									</div>
									<div className="d-block">
										<p>How can I help you with?</p>
									</div>
									<span>12:00</span>
								</div>
							</div>

							<div className="user-message-content">
								<div className="user-message-text">
									<div className="d-block">
										<p>I liked your template.</p>
									</div>
									<span>12:18</span>
								</div>
							</div>

							<div className="agent-message-content d-flex align-items-start">
								<div className="agent-thumbnail me-2 mt-2">
									<img src="/assets/img/bg-img/9.jpg" alt="" />
								</div>

								<div className="agent-message-text">
									<div className="d-block">
										<p>Thank you.</p>
									</div>
									<span>12:36</span>
								</div>
							</div>

							<div className="user-message-content">
								<div className="user-message-text">
									<div className="d-block">
										<p>How can I buy this?</p>
									</div>
									<span>12:42</span>
								</div>
							</div>

							<div className="agent-message-content d-flex align-items-start">
								<div className="agent-thumbnail me-2 mt-2">
									<img src="/assets/img/bg-img/9.jpg" alt="" />
								</div>

								<div className="agent-message-text">
									<div className="d-block">
										<div className="writing-mode">
											<span className="dot"></span>
											<span className="dot"></span>
											<span className="dot"></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="type-text-form">
				<form onSubmit={(e) => e.preventDefault()}>
					<div className="form-group file-upload mb-0">
						<input type="file" />
						<i className="ti ti-plus"></i>
					</div>
					<textarea
						className="form-control"
						name="message"
						cols={30}
						rows={10}
						placeholder="Type your message"
					></textarea>
					<button type="submit">
						<svg
							className="bi bi-arrow-right"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
							></path>
						</svg>
					</button>
				</form>
			</div>
		</>
	);
};

export default Message;
