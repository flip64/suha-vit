"use client";

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Autoplay } from "swiper/modules"; 
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPopup from "../../modals/VideoPopup"; 

const SingleProductArea = () => {
  const { slug } = useParams(); // ✅ گرفتن slug از لینک
  const [quantity, setQuantity] = useState(1);
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => quantity > 1 && setQuantity(quantity - 1);

  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  // ✅ محصول اصلی
  const [product, setProduct] = useState<any | null>(null);
  const [loadingProduct, setLoadingProduct] = useState(true);

  // ✅ محصولات مرتبط
  const [related, setRelated] = useState<any[]>([]);
  const [loadingRelated, setLoadingRelated] = useState(true);

  // فچ محصول اصلی بر اساس slug
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://backend.bazbia.ir/api/products/${slug}/`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("خطا در گرفتن محصول:", error);
      } finally {
        setLoadingProduct(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  // فچ محصولات مرتبط (فعلاً همه محصولات → بعداً می‌تونی فیلتر بزنی)
  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const res = await fetch("https://backend.bazbia.ir/api/products/");
        const data = await res.json();
        setRelated(data.results || data);
      } catch (error) {
        console.error("خطا در گرفتن محصولات مرتبط:", error);
      } finally {
        setLoadingRelated(false);
      }
    };

    fetchRelated();
  }, []);

  return (
    <>
      <div className="product-description pb-3">
        <div className="container">
          {loadingProduct ? (
            <p>در حال بارگذاری محصول...</p>
          ) : product ? (
            <>
              <h3>{product.name}</h3>
              <p>{product.description}</p>

              {product.images?.length > 0 && (
                <img
                  src={product.images[0].image}
                  alt={product.name}
                  style={{ maxWidth: "250px" }}
                />
              )}

              <p className="sale-price">{product.base_price} تومان</p>

              <div className="quantity-control d-flex align-items-center">
                <button className="btn btn-sm btn-outline-secondary" onClick={decrement}>-</button>
                <span className="px-2">{quantity}</span>
                <button className="btn btn-sm btn-outline-secondary" onClick={increment}>+</button>
              </div>
            </>
          ) : (
            <p>محصولی پیدا نشد.</p>
          )}
        </div>

        {/* بخش محصولات مرتبط */}
        <div className="related-product-wrapper bg-white py-3 mb-3">
          <div className="container">
            <div className="section-heading d-flex align-items-center justify-content-between rtl-flex-d-row-r">
              <h6>Related Products</h6>
              <Link className="btn btn-sm btn-secondary" to="/shop-grid">
                View all
              </Link>
            </div>

            {loadingRelated ? (
              <p>در حال بارگذاری محصولات مرتبط...</p>
            ) : (
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

                        {/* لینک‌ها بر اساس slug */}
                        <Link
                          className="product-thumbnail d-block"
                          to={`/single-product/${item.slug}`}
                        >
                          {item.images?.[0]?.image && (
                            <img
                              className="mb-2"
                              src={item.images[0].image}
                              alt={item.name}
                            />
                          )}
                        </Link>

                        <Link
                          className="product-title"
                          to={`/single-product/${item.slug}`}
                        >
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
            )}
          </div>
        </div>

        {/* بخش Reviews و Submit Form → همون کد اصلیت */}
        <div className="container">
          <h5>Reviews</h5>
          <p>بخش نظرات محصول اینجاست...</p>
        </div>
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
