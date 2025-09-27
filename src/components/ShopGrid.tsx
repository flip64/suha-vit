"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { BASEURL } from "../config";

const PAGE_SIZE = 18;

const ShopGrid = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loader = useRef<HTMLDivElement>(null);

  const loadProducts = useCallback(async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const res = await fetch(`${BASEURL}/api/products/?page=${page}&page_size=${PAGE_SIZE}`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();

      if (Array.isArray(data.data)) {
        setProducts(prev => {
          const newItems = data.data.filter(item => !prev.some(p => p.id === item.id));
          return [...prev, ...newItems];
        });

        setPage(prev => prev + 1);
        if (!data.next) setHasMore(false);
      } else {
        console.error("داده‌ها آرایه نیستند:", data);
      }
    } catch (err) {
      console.error("خطا در دریافت محصولات:", err);
    } finally {
      setLoading(false);
    }
  }, [page, hasMore, loading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          loadProducts();
        }
      },
      { threshold: 1 }
    );

    if (loader.current) observer.observe(loader.current);

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [loadProducts]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  // Skeleton loader
  const renderSkeleton = () => (
    <div className="row g-2 rtl-flex-d-row-r">
      {Array.from({ length: PAGE_SIZE }).map((_, idx) => (
        <div key={idx} className="col-6 col-md-4">
          <div className="card product-card h-100 skeleton">
            <div className="card-body d-flex flex-column">
              <div className="skeleton-thumbnail mb-2"></div>
              <div className="skeleton-title mb-1"></div>
              <div className="skeleton-price"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="row g-2 rtl-flex-d-row-r">
        {products.map(item => (
          <div key={item.id} className="col-6 col-md-4">
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
                <Link className="product-thumbnail d-block" to={`/single-product/${item.slug}`}>
                  <img className="mb-2" src={item.thumb || "/placeholder.png"} alt={item.name} />
                </Link>
                <Link className="product-title mb-1" to={`/single-product/${item.slug}`}>
                  {item.name}
                </Link>
               
               <p className="sale-price">
                 {item.discount_price
                      ? (
                      <>
                 {Number(item.discount_price).toLocaleString("fa-IR")} تومان
                  <span className="original-price">
                   {Number(item.price).toLocaleString("fa-IR")} تومان
                  </span>
                   </>
                    ) : (
                  `${Number(item.price).toLocaleString("fa-IR")} تومان`
                      )
                      }
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

      {loading && renderSkeleton()}
      {!hasMore && products.length > 0 && (
        <p className="text-center mt-2 text-muted">پایان لیست محصولات</p>
      )}

      <div ref={loader}></div>
    </>
  );
};

export default ShopGrid;

