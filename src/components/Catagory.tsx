"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import HeaderThree from "../layouts/HeaderThree";
import Footer from "../layouts/Footer";
import { BASEURL } from "../config";

const PAGE_SIZE = 18;

const Category = () => {
  const { slug } = useParams(); // گرفتن slug دسته از url
  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loader = useRef<HTMLDivElement>(null);

  // گرفتن دسته‌بندی‌ها از API
  useEffect(() => {
    fetch(`${BASEURL}/api/products/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  // بارگذاری محصولات دسته‌بندی‌شده با صفحه‌بندی
  const loadProducts = useCallback(async () => {
    if (!slug || !hasMore || loading) return;

    setLoading(true);
    try {
      const res = await fetch(
        `${BASEURL}/api/products/categories/${slug}?page=${page}&page_size=${PAGE_SIZE}`
      );
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();

      // اگر API شما pagination داره، احتمالا data.results هست
      const newProducts = Array.isArray(data.data) ? data.data : data.results;

      if (newProducts && newProducts.length > 0) {
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

  // ریست کردن وقتی دسته تغییر کنه
  useEffect(() => {
    setProducts([]);
    setPage(1);
    setHasMore(true);
  }, [slug]);

  // intersection observer برای infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadProducts();
        }
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
      <HeaderThree links="home" title={slug ? slug.toUpperCase() : "Categories"} />

      <div className="page-content-wrapper">
        {/* تصویر هدر */}
        <div className="pt-3">
          <div className="container">
            <div
              className="catagory-single-img"
              style={{ backgroundImage: `url(/assets/img/bg-img/5.jpg)` }}
            ></div>
          </div>
        </div>

        {/* لیست دسته‌بندی‌ها */}
        <div className="product-catagories-wrapper py-3">
          <div className="container">
            <div className="section-heading rtl-text-right">
              <h6> زیر مجموعه</h6>
            </div>
            <div className="product-catagory-wrap">
              <div className="row g-2 rtl-flex-d-row-r">
                {categories.length > 0 ? (
                  categories.map((cat: any, i: number) => (
                    <div key={i} className="col-3">
                      <div className="card catagory-card">
                        <div className="card-body px-2">
                          <Link to={`/catagory/${cat.slug}`}>
                            <img src={cat.image} alt={cat.name} />
                            <span>{cat.name}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center">هیچ دسته‌ای یافت نشد.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* محصولات */}
        <div className="top-products-area pb-3">
          <div className="container">
            <div className="section-heading rtl-text-right">
              <h6>Products</h6>
            </div>
            <div className="row g-2 rtl-flex-d-row-r">
              {products.map((item: any, i: number) => (
                <div key={i} className="col-6 col-md-4">
                  <div className="card product-card">
                    <div className="card-body">
                      {item.badge_text && (
                        <span className={`badge rounded-pill badge-${item.badge_color}`}>
                          {item.badge_text}
                        </span>
                      )}

                      <a className="wishlist-btn" href="#">
                        <i className="ti ti-heart"></i>
                      </a>

                      <Link className="product-thumbnail d-block" to={`/single-product/${item.slug}`}>
                        <img className="mb-2" src={item.thumb} alt={item.name} />
                      </Link>

                      <Link className="product-title" to={`/product/${item.slug}`}>
                        {item.name}
                      </Link>

                      <p className="sale-price">
                        {Math.floor(item.base_price).toLocaleString()} تومان
                      </p>

                      <div className="product-rating">
                        {[...Array(5)].map((_, idx) => (
                          <i key={idx} className="ti ti-star-filled"></i>
                        ))}
                      </div>
                      <a className="btn btn-primary btn-sm" href="#">
                        <i className="ti ti-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {loading && <p className="text-center">Loading...</p>}
            {!hasMore && products.length > 0 && (
              <p className="text-center mt-2 text-muted">پایان لیست محصولات</p>
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

