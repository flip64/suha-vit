"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules"; 
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPopup from "../../modals/VideoPopup"; 
import top_product from "../../data/top_product";
import reviews_data from "../../data/reviews_data";

const SingleProductArea = () => {
  const [quantity, setQuantity] = useState(3);
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => quantity > 1 && setQuantity(quantity - 1);

  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <div className="product-description pb-3">
        {/* … بقیه بخش‌های محصول همان کد اصلی … */}

        <div className="related-product-wrapper bg-white py-3 mb-3">
          <div className="container">
            <div className="section-heading d-flex align-items-center justify-content-between rtl-flex-d-row-r">
              <h6>Related Products</h6>
              <Link className="btn btn-sm btn-secondary" to="/shop-grid">
                View all
              </Link>
            </div>
            <Swiper
              loop={true}
              slidesPerView={2}
              spaceBetween={10}
              autoplay={true}
              modules={[Autoplay]}
              className="related-product-slide owl-carousel"
            >
              {top_product.map((item, i) => (
                <SwiperSlide key={i} className="col-6 col-md-4">
                  <div className="card product-card">
                    <div className="card-body">
                      <span className={`badge rounded-pill badge-${item.badge_color}`}>
                        {item.badge_text}
                      </span>
                      <a className="wishlist-btn" href="#">
                        <i className="ti ti-heart"></i>
                      </a>

                      {/* لینک‌ها بر اساس slug هر محصول */}
                      <Link
                        className="product-thumbnail d-block"
                        to={`/single-product/${item.slug}`}
                      >
                        <img className="mb-2" src={item.img} alt={item.title} />
                      </Link>

                      <Link
                        className="product-title"
                        to={`/single-product/${item.slug}`}
                      >
                        {item.title}
                      </Link>

                      <p className="sale-price">
                        $ {item.new_price}
                        <span>$ {item.old_price}</span>
                      </p>

                      <div className="product-rating">
                        <i className="ti ti-star-filled"></i>
                        <i className="ti ti-star-filled"></i>
                        <i className="ti ti-star-filled"></i>
                        <i className="ti ti-star-filled"></i>
                        <i className="ti ti-star-filled"></i>
                      </div>
                      <a className="btn btn-primary btn-sm" href="#">
                        <i className="ti ti-plus"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* … بقیه بخش‌های Reviews و Submit Form همان کد اصلی … */}
      </div>

      {/* video modal */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"-hTVNidxg2s"}
      />
    </>
  );
};

export default SingleProductArea;
