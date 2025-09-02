import Footer from "../layouts/Footer";
import HeaderTwo from "../layouts/HeaderTwo";

const language_data = [
	"English",
	"Afrikaans",
	"Albanian",
	"Arabic",
	"Azerbaijani",
	"Belarusian",
	"Bengali",
	"Bulgarian",
	"Catalan",
	"Cebuano",
	"Chichewa",
	"Dutch",
	"Filipino",
	"French",
	"German",
	"Hebrew",
	"Hindi",
	"Indonesian",
	"Italian",
	"Latvian",
	"Malayalam",
];

const Language = () => {
	return (
		<>
			<HeaderTwo links="settings" title="Choose Language" />
			<div className="page-content-wrapper">
				<div className="container">
					<div className="language-area-wrapper py-3">
						<ul>
							{language_data.map((item, i) => (
								<li key={i}>
									<input
										id={item}
										type="radio"
										name="selector"
										defaultChecked={i === 0}
									/>
									<label htmlFor={item}>{item}</label>
									<div className="check"></div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			<div className="internet-connection-status" id="internetStatus"></div>

			<Footer />
		</>
	);
};

export default Language;
