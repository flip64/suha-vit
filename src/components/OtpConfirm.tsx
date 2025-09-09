
'use client';

import { useState, ChangeEvent, KeyboardEvent } from 'react';

const OtpConfirm = () => {


	const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));

	const handleChange = (element: HTMLInputElement, index: number) => {
		const value = element.value.replace(/[^0-9]/g, ''); // Ensure only numbers are entered

		if (value.length === 1) {
			const newOtp = [...otp];
			newOtp[index] = value;
			setOtp(newOtp);

			// Move to next input field if current one is filled
			if (index < otp.length - 1) {
				const nextElement = document.getElementById(`otp-input-${index + 1}`) as HTMLInputElement;
				nextElement?.focus();
			}
		}
	};

	const handleBackspace = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
		if (e.key === 'Backspace' && otp[index] === "") {
			if (index > 0) {
				const prevElement = document.getElementById(`otp-input-${index - 1}`) as HTMLInputElement;
				prevElement?.focus();
			}
		}
	};

	return (
		<>
			<div className="login-wrapper d-flex align-items-center justify-content-center text-center">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-10 col-lg-8">
							<div className="text-start rtl-text-right">
								<h5 className="mb-1 text-white">Verify Phone Number</h5>
								<p className="mb-4 text-white">
									Enter the OTP code sent to
									<span className="mx-1">0123 456 7890</span>
								</p>
							</div>

							<div className="otp-verify-form mt-5">
								<form action="/home" onSubmit={(e) => e.preventDefault()}> 

									<div className="d-flex justify-content-between mb-5 rtl-flex-d-row-r">
										{otp.map((data, index) => (
											<input
												key={index}
												id={`otp-input-${index}`}
												className="single-otp-input form-control"
												type="text"
												value={data}
												placeholder="-"
												maxLength={1}
												onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target, index)}
												onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleBackspace(e, index)}
											/>
										))}
									</div>



									<button
										className="btn btn-warning btn-lg w-100"
										type="submit"
									>
										Verify & Proceed
									</button>
								</form>
							</div>

							<div className="login-meta-data">
								<p className="mt-3 mb-0">
									Dont received the OTP?
									<span
										className="otp-sec mx-1 text-white"
										id="resendOTP"
									></span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OtpConfirm;
