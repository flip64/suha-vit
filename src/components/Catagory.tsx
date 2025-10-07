"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import HeaderThree from "../layouts/HeaderThree";
import Footer from "../layouts/Footer";
import { BASEURL } from "../config";

const PAGE_SIZE = 18;

const Category = () => {
  const { slug } = useParams();
  const [subcategories, setSubcategories] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loader = useRef<HTMLDivElement>(null);

  // 🟩 دریافت محصولات و زیرمجموعه‌ها
  const loadProducts = useCallback(async () => {
    if (!slug || loading || !hasMore) return;

    setLoading(true);
    try {
      const res = await fetch(
        `${BASEURL}/api/products/categories/${slug}?page=${page}&page_size=${PAGE_SIZE}`
      );
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json();

      // ثبت زیرمجموعه‌ها فقط در اولین بار
      if (page === 1 && data.subcategories && Array.isArray(data.subcategories)) {
        setSubcategories(data.subcategories);
      }

      const newProducts = Array.isArray(data.data)
        ? data.data
        : data.results || [];

      if (newProducts.length > 0) {
        setProducts((prev) => [...prev, ...newProducts]);
        setPage((prev) => prev + 1);
        if (!data.next) setHasMore(false);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("خطا در دریافت محصولات:", err);
    } finally {
      setLoading(false);
    }
  }, [slug, page, hasMore, loading]);

  // 🔹 ریست هنگام تغییر دسته
  useEffect(() => {
    setProducts([]);
    setSubcategories([]);
    setPage(1);
    setHasMore(true);
  }, [slug]);

  // 🔹 اسکرول بی‌نهایت
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadProducts();
      },
      { threshold: 0.2 }
    );

    if (loader.current) observer.observe(loader.current);

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [loadProducts]);

  return (
    <>
      <HeaderThree
        links="home"
        title={slug ? slug.toUpperCase() : "CATEGORIES"}
      />

      <div className="page-content-wrapper">
        {/* 🔸 تصویر بالای صفحه */}
        <div className="pt-3">
          <div className="container">
            <div
              className="catagory-single-img"
              style={{
                backgroundImage: `url(/assets/img/bg-img/5.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "180px",
                borderRadius: "16px",
              }}
            ></div>
          </div>
        </div>

        {/* 🔹 زیرمجموعه‌ها */}
        {subcategories.length > 0 && (
          <div className="product-catagories-wrapper py-3">
            <div className="container">
              <div className="section-heading rtl-text-right">
                <h6>زیرمجموعه‌ها</h6>
              </div>
              <div className="product-catagory-wrap">
                <div className="row g-2 rtl-flex-d-row-r">
                  {subcategories.map((cat: any, i: number) => (
                    <div key={i} className="col-4 col-md-3">
                      <div className="card catagory-card">
                        <div className="card-body px-2 text-center">
                          <Link to={`/catagory/${cat.slug}`}>
                            {cat.image ? (
                              <img
                                src={cat.image}
                                alt={cat.name}
                                className="mb-2 rounded"
                                style={{
                                  width: "100%",
                                  height: "80px",
                                  objectFit: "cover",
                                }}
                              />
                            ) : (
                              <div
                                style={{
                                  background: "#f3f3f3",
                                  height: "80px",
                                  borderRadius: "8px",
                                }}
                              ></div>
                            )}
                            <span className="d-block mt-1">{cat.name}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 🔸 محصولات */}
        <div className="top-products-area pb-3">
          <div className="container">
            <div className="section-heading rtl-text-right">
              <h6>محصولات</h6>
            </div>
            <div className="row g-2 rtl-flex-d-row-r">
              {products.map((item: any, i: number) => (
                <div key={i} className="col-6 col-md-4">
                  <div className="card product-card">
                    <div className="card-body">
                      {/* بنر */}
                      {item.badge_text && (
                        <span
                          className={`badge rounded-pill badge-${
                            item.badge_color || "primary"
                          }`}
                        >
                          {item.badge_text}
                        </span>
                      )}

                      {/* دکمه علاقه‌مندی */}
                      <a className="wishlist-btn" href="#">
                        <i className="ti ti-heart"></i>
                      </a>

                      {/* تصویر */}
                      <Link
                        className="product-thumbnail d-block"
                        to={`/single-product/${item.slug}`}
                      >
                        <img
                          className="mb-2"
                          src={item.thumb || "/placeholder.png"}
                          alt={item.name}
                          style={{
                            width: "100%",
                            height: "160px",
                            objectFit: "contain",
                          }}
                        />
                      </Link>

                      {/* عنوان */}
                      <Link
                        className="product-title d-block mb-1"
                        to={`/single-product/${item.slug}`}
                      >
                        {item.name}
                      </Link>

                      {/* قیمت */}
                      <p className="sale-price mb-2">
                        {item.discount_price ? (
                          <>
                            {Number(item.discount_price).toLocaleString("fa-IR")}{" "}
                            تومان
                            <span className="original-price">
                              {Number(item.price || item.base_price).toLocaleString(
                                "fa-IR"
                              )}{" "}
                              تومان
                            </span>
                          </>
                        ) : (
                          `${Number(
                            item.price || item.base_price
                          ).toLocaleString("fa-IR")} تومان`
                        )}
                      </p>

                      {/* امتیاز */}
                      <div className="product-rating">
                        <i className="ti ti-star-filled"></i>
                        <i className="ti ti-star-filled"></i>
                        <i className="ti ti-star-filled"></i>
                        <i className="ti ti-star-filled"></i>
                        <i className="ti ti-star-filled"></i>
                      </div>

                      {/* دکمه افزودن به سبد */}
                      <a className="btn btn-primary btn-sm" href="#">
                        <i className="ti ti-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {loading && <p className="text-center mt-3">در حال بارگذاری...</p>}
            {!hasMore && products.length > 0 && (
              <p className="text-center mt-2 text-muted">
                پایان لیست محصولات
              </p>
            )}
            <div ref={loader}></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Category;
