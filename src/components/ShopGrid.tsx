"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShopGrid = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://backend.bazbia.ir/api/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.results || data); // چون بعضی API ها pagination دارن
        setLoading(false);
      })
      .catch((err) => {
        console.error("خطا در دریافت محصولات:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-3">در حال بارگذاری...</p>;
  }

  return (
    <div className="row g-2 rtl-flex-d-row-r">
      {products.map((item, i) => (
        <div key={i} className="col-6 col-md-4">
          <div className="card product-card h-100">
            <div className="card-body d-flex flex-column">
              {item.badge_text && (
                <span className={`badge rounded-pill badge-${item.badge_color}`}>
                  {item.badge_text}
                </span>
              )}

              <button className="wishlist-btn">
                <i className="ti ti-heart"></i>
              </button>

              <Link
                className="product-thumbnail d-block"
                to={`/single-product/${item.slug}`}
              >
                <img
                  className="mb-2"
                  src={item.thumb || "/placeholder.png"}
                  alt={item.name}
                />
              </Link>

              <Link
                className="product-title mb-1"
                to={`/single-product/${item.slug}`}
              >
                {item.name}
              </Link>

              <p className="sale-price">
                {Number(item.base_price).toLocaleString("fa-IR")} تومان
              </p>

              <div className="product-rating mb-2">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <i key={idx} className="ti ti-star-filled"></i>
                ))}
              </div>

              <button className="btn btn-primary btn-sm mt-auto">
                <i className="ti ti-plus"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopGrid;

