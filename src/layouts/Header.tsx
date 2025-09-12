"use client";
import { useEffect, useState } from "react";
import Offcanvas from "../components/common/Offcanvas";
import {BASEURL} from "../config"


const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // گرفتن کاربر
  const fetchUser = async () => {
    try {
      const url = `${BASEURL}/api/customers/current/me/`;
      let token = localStorage.getItem("accessToken");

      console.log("📡 ارسال درخواست به:", url, "با توکن:", token);

     let res = await fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  },
  credentials: "same-origin", // یا "include" اگر بک روی پورت/دامنه متفاوت است
});

      console.log("📥 نتیجه fetchUser:", res.status);

      // اگر accessToken منقضی شده
      if (res.status === 401) {
        console.warn("⚠️ Access Token منقضی شده، تلاش برای رفرش...");
        const refreshed = await refreshToken();
        if (refreshed) {
          token = localStorage.getItem("accessToken");
          console.log("🔄 توکن جدید گرفته شد:", token);

          res = await fetch(url, {
            headers: {
              "Content-Type": "application/json",
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
          });

          console.log("📥 نتیجه بعد از رفرش:", res.status);
        }
      }

      if (res.ok) {
        const data = await res.json();
        console.log("✅ کاربر لاگین:", data);
        setUser(data);
      } else {
        console.warn("❌ کاربر لاگین نیست");
        setUser(null);
      }
    } catch (err) {
      console.error("🚨 خطا در گرفتن وضعیت لاگین:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // رفرش توکن
  const refreshToken = async () => {
    const refresh = localStorage.getItem("refreshToken");
    if (!refresh) {
      console.warn("❌ رفرش توکن وجود ندارد");
      return false;
    }

    try {
      console.log("📡 تلاش برای رفرش توکن...");
      const res = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh }),
      });

      console.log("📥 نتیجه refreshToken:", res.status);

      if (res.ok) {
        const data = await res.json();
        console.log("✅ رفرش موفق:", data);
        localStorage.setItem("accessToken", data.access);
        return true;
      } else {
        console.warn("❌ رفرش ناموفق");
        logoutUser();
        return false;
      }
    } catch (err) {
      console.error("🚨 خطا در رفرش توکن:", err);
      logoutUser();
      return false;
    }
  };

  // لاگ‌اوت
  const logoutUser = () => {
    console.log("👋 کاربر لاگ‌اوت شد");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <div className="header-area" id="headerArea">
        <div className="container h-100 d-flex align-items-center justify-content-between rtl-flex-d-row-r">
          <div className="logo-wrapper">
            <a href="/home">
              <img src="/assets/img/core-img/logo-small.png" alt="Logo" />
            </a>
          </div>

          <div className="navbar-logo-container d-flex align-items-center">
            {/* سبد خرید */}
            <div className="cart-icon-wrap">
              <a href="/cart">
                <i className="ti ti-basket-bolt"></i>
                <span>13</span>
              </a>
            </div>

            {/* پروفایل */}
            <div className="user-profile-icon ms-2">
              {loading ? (
                <span>...</span>
              ) : user ? (
                <a href="/profile">
                  <img
                    src={user.avatar || "/assets/img/bg-img/9.jpg"}
                    alt={user.username || "Profile"}
                    style={{ width: "36px", height: "36px", borderRadius: "50%" }}
                  />
                </a>
              ) : (
                <a href="/login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </a>
              )}
            </div>

            {/* منوی همبرگری */}
            <div className="suha-navbar-toggler ms-2">
              <div onClick={handleShow}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Offcanvas handleShow={handleShow} show={show} />
    </>
  );
};

export default Header;

