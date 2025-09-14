"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // یادت نره
import "swiper/css/navigation";
import "swiper/css/pagination";



const BASE_URL = "https://backend.bazbia.ir/api/"


const FlashSale = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // آدرس API خودت رو اینجا بذار
    fetch(`${BASE_URL}products/specialproduct/`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching flash sale:", err);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="flash-sale-wrapper">
        <div className="container">
          <p>در حال بارگذاری پیشنهادها...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flash-sale-wrapper">
      <div className="container">
        <div className="section-heading d-flex align-items-center justify-content-between rtl-flex-d-row-r">
          <h6 className="d-flex align-items-center rtl-flex-d-row-r">
            <i className="ti ti-bolt-lightning me-1 text-danger lni-flashing-effect"></i>
            پیشنهاد داغ
          </h6>
        </div>

        <Swiper
          loop={true}
          spaceBetween={10}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="flash-sale-slide"
        >
          {products.map((item: any, i: number) => (
            <SwiperSlide key={i} className="card flash-sale-card">
              <div className="card-body">
                <a href={item.link ?? "/single-product"}>
                  <img src={item.thumb} alt={item.name} />
                  <span className="product-title">{item.name}</span>
                  <p className="sale-price">
                     {item.base_price- 5000}تومان
                    <span className="real-price">{item.base_price }تومان</span>
                  </p>
                  <span className="progress-title">
                    {item.discount}% فروش رفته
                  </span>
                  <div className="progress">
                    <div
                      className={`progress-bar ${item.color}`}
                      role="progressbar"
                      style={{ width: `${item.discount}%` }}
                      aria-valuenow={item.discount}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FlashSale;
