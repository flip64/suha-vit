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

interface Variant {
  id: number;
  sku?: string;
  price?: string | number;
  discount_price?: string | number;
  stock?: number;
  [key: string]: any;
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
  variants?: Variant[];
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
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  // ✅ موجودی و قیمت از واریانت اصلی (اولین واریانت)
  const mainVariant = product.variants && product.variants.length > 0 ? product.variants[0] : null;
  const stock = mainVariant?.stock ?? 0;
  const price = mainVariant?.discount_price || mainVariant?.price || product.base_price;
  const isAvailable = stock > 0;

  return (
    <>
      <div className="product-description pb-3">
        <div className="container">
          <h3>{product.name}</h3>
          <p>{product.description || "توضیحی برای این محصول ثبت نشده است."}</p>

          {/* ✅ نمایش قیمت فقط اگر موجودی > 0 */}
          {isAvailable ? (
            <p className="sale-price">
              {Number(price).toLocaleString("fa-IR")} تومان
            </p>
          ) : (
            <p className="text-danger fw-bold">عدم موجودی</p>
          )}

          {/* ✅ کنترل تعداد فقط وقتی موجود باشد */}
          {isAvailable && (
            <div className="quantity-control d-flex align-items-center">
              <button className="btn btn-sm btn-outline-secondary" onClick={decrement}>-</button>
              <span className="px-2">{quantity}</span>
              <button className="btn btn-sm btn-outline-secondary" onClick={increment}>+</button>
            </div>
          )}

          {/* ✅ دکمه افزودن یا پیام عدم موجودی */}
          <div className="mt-3">
            {isAvailable ? (
              <button className="btn btn-primary btn-sm">
                افزودن به سبد خرید
              </button>
            ) : (
              <button className="btn btn-secondary btn-sm" disabled>
                عدم موجودی
              </button>
            )}
          </div>
        </div>

        {/* مشخصات فنی */}
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
