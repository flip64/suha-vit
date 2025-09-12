"use client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {BASEURL} from "../config"


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
  
    try {
      const url = `${BASEURL}/api/customers/login/`
      console.log("📡 ارسال درخواست لاگین:", username);
      console.log(url)
          
      const res = await axios.post(url, {
        username,
        password,
      });

      console.log("✅ لاگین موفق:", res.data);

      // ذخیره توکن‌ها
      localStorage.setItem("accessToken", res.data.tokens.access);
      localStorage.setItem("refreshToken", res.data.tokens.refresh);

      setMessage("ورود موفق ✅");
      navigate("/home");
    } catch (err: any) {
      console.error("❌ خطا در لاگین:", err.response?.data || err.message);
      setMessage("نام کاربری یا رمز عبور اشتباه است ❌");
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
              src="img/core-img/logo-white.png"
              alt="Logo"
            />

            <div className="register-form mt-5">
              <form onSubmit={handleSubmit}>
                <div className="form-group text-start mb-4">
                  <span>Username</span>
                  <label htmlFor="username">
                    <i className="ti ti-user"></i>
                  </label>
                  <input
                    className="form-control"
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="info@example.com"
                    required
                  />
                </div>

                <div className="form-group text-start mb-4">
                  <span>Password</span>
                  <label htmlFor="password">
                    <i className="ti ti-key"></i>
                  </label>
                  <input
                    className="form-control"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>

                <button
                  className="btn btn-warning btn-lg w-100"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "در حال ورود..." : "Log In"}
                </button>
              </form>
            </div>

            {message && (
              <div className="alert alert-info mt-3">{message}</div>
            )}

            <div className="login-meta-data">
              <Link
                className="forgot-password d-block mt-3 mb-1"
                to="/forget-password"
              >
                Forgot Password?
              </Link>
              <p className="mb-0">
                Didn’t have an account?
                <Link className="mx-1" to="/register">
                  Register Now
                </Link>
              </p>
            </div>

            <div className="view-as-guest mt-3">
              <Link className="btn btn-primary btn-sm" to="/home">
                View as guest<i className="ps-2 ti ti-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

