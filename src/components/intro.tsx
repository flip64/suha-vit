import { Link } from "react-router-dom";



const Intro = () => {
  return (
    <>
      <div className="intro-wrapper d-flex align-items-center justify-content-center text-center">
        <div className="container">
          <img
            className="big-logo"
            src="/assets/img/core-img/logo-white.png"
            alt=""
          />
        </div>
      </div>
      <div className="get-started-btn">
        <Link className="btn btn-warning btn-lg w-100" to="/login">
          Get Started
        </Link>
      </div>
    </>
  );
};

export default Intro;