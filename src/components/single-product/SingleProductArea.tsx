"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules"; 
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPopup from "../../modals/VideoPopup";

interface Specification {
  name: string;
  value: string;
}

interface ProductImage {
  image: string;
  alt_text?: string | null;
  is_main?: boolean;
}

interface Product {
  id: number;
  slug: string;
  name: string;
  description?: string;
  base_price: string | number;
  category?: any;
  tags?: string[];
  specifications?: Specification[];
  variants?: any[];
  images?: ProductImage[];
  videos?: any[];
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
  is_special?: boolean;
  special_details?: any;
  videoId?: string;
}

interface SingleProductAreaProps {
  product: Product;
  related?: Product[];
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
          <p>{product.description || "توضیحی برای این محصول ثبت نشده است."}</p>

          <p className="sale-price">
            {Number(product.base_price).toLocaleString("fa-IR")} تومان
          </p>

          <div className="quantity-control d-flex align-items-center">
            <button className="btn btn-sm btn-outline-secondary" onClick={decrement}>-</button>
            <span className="px-2">{quantity}</span>
            <button className="btn btn-sm btn-outline-secondary" onClick={increment}>+</button>
          </div>
        </div>

        {/* مشخصات فنی */}
        ‌‌
        
{product.specifications && product.specifications.length > 0 && (
  <div className="container mt-4">
    <h5 className="mb-3">مشخصات فنی</h5>
    <div className="row g-2">
      {product.specifications.map((spec, index) => (
        <div key={index} className="col-6 col-md-4">
          <div className="p-3 bg-light rounded shadow-sm h-100">
            <p className="fw-bold mb-1 text-dark">{spec.name}</p>
            <p className="text-muted small mb-0">{spec.value}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
        

        {/* تگ‌ها */}
        {product.tags && product.tags.length > 0 && (
          <div className="container mt-3">
            <h6>برچسب‌ها:</h6>
            <div className="d-flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <Link 
                  key={index} 
                  to={`/search?tag=${encodeURIComponent(tag)}`} 
                  className="badge bg-light text-dark border"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        )}

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
                loop
                spaceBetween={10}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
                className="related-product-slide"
              >
                {related.map((item) => (
                  <SwiperSlide key={item.slug} className="col-6 col-md-4">
                    <div className="card product-card">
                      <div className="card-body">
                        <button className="wishlist-btn">
                          <i className="ti ti-heart"></i>
                        </button>

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

                        <p className="sale-price">
                          {Number(item.base_price).toLocaleString("fa-IR")} تومان
                        </p>

                        <div className="product-rating">
                          <i className="ti ti-star-filled"></i>
                          <i className="ti ti-star-filled"></i>
                          <i className="ti ti-star-filled"></i>
                          <i className="ti ti-star-filled"></i>
                          <i className="ti ti-star-filled"></i>
                        </div>
                        <button className="btn btn-primary btn-sm">
                          <i className="ti ti-plus"></i>
                        </button>
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

