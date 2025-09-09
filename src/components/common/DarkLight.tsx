"use client";

import useTheme from "../../hooks/useTheme";
 

const DarkLight = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<>
			<div className="container">
				<div className="dark-mode-wrapper mt-3 bg-img p-4 p-lg-5">
					<p className="text-white">
                       «می‌توانید نمایش خود را با فعال کردن حالت تاریک به پس‌زمینه تاریک تغییر دهید.»					</p>
					<div className="form-check form-switch mb-0">
						<label
							className="form-check-label text-white h6 mb-0"
							htmlFor="darkSwitch"
						>
							تغییر به حالت تاریک
						</label>

						<input
							className="form-check-input"
							id="darkSwitch"
							type="checkbox"
							checked={theme === "dark"}
							onChange={toggleTheme}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default DarkLight;


