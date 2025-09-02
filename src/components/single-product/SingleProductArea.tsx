"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules"; 
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPopup from "../../modals/VideoPopup";

interface SingleProductAreaProps {
  product: any; // محصول شامل images, name, description, base_price و غیره
  related?: any[]; // اختیاری: می‌تونی لیست محصولات مرتبط هم پاس بدی
}

const SingleProductArea = ({ product, related = [] }: SingleProductAreaProps) => {
  const [quantity, setQuantity] = useState(1);
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => quantity > 1 && setQuantity(quantity - 1);

  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <div className="product-description pb-3">
        <div className="container">
          <h3>{product.name}</h3>
          <p>{product.description}</p>

          

          <p className="sale-price">{product.base_price} تومان</p>

          <div className="quantity-control d-flex align-items-center">
            <button className="btn btn-sm btn-outline-secondary" onClick={decrement}>-</button>
            <span className="px-2">{quantity}</span>
            <button className="btn btn-sm btn-outline-secondary" onClick={increment}>+</button>
          </div>
        </div>

        {/* محصولات مرتبط */}
        {related.length > 0 && (
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
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="related-product-slide owl-carousel"
              >
                {related.map((item: any) => (
                  <SwiperSlide key={item.slug} className="col-6 col-md-4">
                    <div className="card product-card">
                      <div className="card-body">
                        <a className="wishlist-btn" href="#">
                          <i className="ti ti-heart"></i>
                        </a>

                        <Link className="product-thumbnail d-block" to={`/single-product/${item.slug}`}>
                          {item.images?.[0]?.image && (
                            <img
                              className="mb-2"
                              src={item.images[0].image}
                              alt={item.name}
                            />
                          )}
                        </Link>

                        <Link className="product-title" to={`/single-product/${item.slug}`}>
                          {item.name}
                        </Link>

                        <p className="sale-price">{item.base_price} تومان</p>

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
        )}

        {/* بخش Reviews */}
        <div className="container">
          <h5>Reviews</h5>
          <p>بخش نظرات محصول اینجاست...</p>
        </div>
      </div>

      {/* Video modal */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={product.videoId || "-hTVNidxg2s"}
      />
    </>
  );
};

export default SingleProductArea;
