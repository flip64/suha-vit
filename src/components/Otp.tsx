'use client'
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NiceSelect from "../ui/NiceSelect";
import axios from "axios";
import {BASEURL} from "../config"
 

const Otp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const selectHandler = () => {};

  // وقتی صفحه لود شد، شماره تلفن از state صفحه قبل گرفته شود
  useEffect(() => {
    if (location.state?.phone) {
      setPhone(location.state.phone);
    }
  }, [location.state]);

  // تابع ارسال شماره برای دریافت OTP
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      setMessage("لطفا شماره تلفن را وارد کنید");
      return;
    }
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        `${BASEURL}/api/customers/send-otp/`,
        { phone }
      );
      console.log("OTP sent:", res.data);

      // بعد از موفقیت، هدایت به صفحه تایید کد با شماره تلفن و session_id
      navigate(`/otp-confirm?phone=${phone}&session_id=${res.data.session_id}`);
    } catch (error) {
      console.error("Error sending OTP:", error);
      setMessage("خطا در ارسال کد تایید ❌");
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
                ما برای شما یک کد تایید می‌فرستیم.
              </p>
            </div>

            <div className="otp-form mt-5">
              <form onSubmit={handleSendOtp}>
                <div className="mb-4 d-flex rtl-flex-d-row-r">
                  <NiceSelect
                    className="filter-select right small border-0 d-flex align-items-center"
                    options={[{ value: "00", text: "+98" }]}
                    defaultCurrent={0}
                    onChange={selectHandler}
                    placeholder="Select an option"
                    name="myNiceSelect"
                  />

                  <input
                    className="form-control ps-0"
                    id="phone_number"
                    type="tel"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => {
                      const onlyNumbers = e.target.value.replace(/\D/g, "");
                      setPhone(onlyNumbers);
                    }}
                  />
                </div>

                <button
                  className="btn btn-warning btn-lg w-100"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "در حال ارسال..." : "Send OTP"}
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
                با وارد کردن شماره تلفن خود، شما موافقت می‌کنید با
                <a className="mx-1" href="#">
                  شرایط استفاده
                </a>
                و
                <a className="mx-1" href="#">
                  سیاست حفظ حریم خصوصی.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;

