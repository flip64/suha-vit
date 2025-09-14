'use client';

import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {BASEURL} from "../config"



const OtpConfirm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const phone = params.get("phone") || "";
  const session_id = params.get("session_id") || "";

  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value.replace(/[^0-9]/g, '');
    if (value.length === 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

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

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length < 4) {
      setMessage("لطفاً کد کامل را وارد کنید");
      return;
    }
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(`${BASEURL}/api/customers/verify-otp/`, {
        phone,
        code,
        session_id
      });

      console.log("OTP verified:", res.data);

      // ذخیره توکن‌ها در localStorage
      if (res.data.tokens) {
        localStorage.setItem("accessToken", res.data.tokens.access);
        localStorage.setItem("refreshToken", res.data.tokens.refresh);
      }

      setMessage("کد تایید شد ✅");
      // هدایت به صفحه اصلی
      navigate("/home");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setMessage("کد اشتباه است ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-8">
            <div className="text-start rtl-text-right">
              <h5 className="mb-1 text-white">تایید شماره تلفن</h5>
              <p className="mb-4 text-white">
                وارد کردن کد ارسال شده به شماره
                <span className="mx-1">{phone}</span>
              </p>
            </div>

            <div className="otp-verify-form mt-5">
              <form onSubmit={handleVerifyOtp}>
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

                <button className="btn btn-warning btn-lg w-100" type="submit" disabled={loading}>
                  {loading ? "در حال بررسی..." : "Verify & Proceed"}
                </button>
              </form>
            </div>

            {message && (
              <div className="alert alert-info mt-3" role="alert">
                {message}
              </div>
            )}

            <div className="login-meta-data">
              <p className="mt-3 mb-0">
                دریافت کد جدید؟
                <span className="otp-sec mx-1 text-white" id="resendOTP"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpConfirm;

