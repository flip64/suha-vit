import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {BASEURL} from "../config"

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      
      const url =`${BASEURL}/api/customers/register/`
      console.log(url)
      const response = await axios.post(url, formData);
      

  


      // فرض کنید موفقیت با status 201 مشخص می‌شود
      if (response.status === 201) {
        navigate("/otp", { state: { phone: formData.phone } }); // بعد از ثبت‌نام به OTP هدایت شود
      }
    } catch (err) {
      console.error(err);
      setError("مشکلی در ثبت‌نام رخ داده است. دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center text-center">
      <div className="background-shape"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-8">
            <img
              className="big-logo"
              src="/assets/img/core-img/logo-white.png"
              alt="لوگو"
            />

            <div className="register-form mt-5">
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="alert alert-danger">{error}</div>
                )}

                <div className="form-group text-start mb-4">
                  <span>نام کاربری</span>
                  <label htmlFor="username">
                    <i className="ti ti-user"></i>
                  </label>
                  <input
                    className="form-control"
                    id="username"
                    type="text"
                    name="username"
                    placeholder="نام کاربری خود را وارد کنید"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group text-start mb-4">
                  <span>ایمیل</span>
                  <label htmlFor="email">
                    <i className="ti ti-at"></i>
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="example@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group text-start mb-4">
                  <span>رمز عبور</span>
                  <label htmlFor="password">
                    <i className="ti ti-key"></i>
                  </label>
                  <input
                    className="input-psswd form-control"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="رمز عبور خود را وارد کنید"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group text-start mb-4">
                  <span>شماره تلفن</span>
                  <label htmlFor="phone">
                    <i className="ti ti-phone"></i>
                  </label>
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="مثال: 09123456789"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  className="btn btn-warning btn-lg w-100"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
                </button>
              </form>
            </div>

            <div className="login-meta-data mt-3">
              <p className="mb-0">
                حساب کاربری دارید؟
                <Link className="mx-1" to="/login">
                  ورود
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;




