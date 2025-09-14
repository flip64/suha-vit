"use client";

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HeaderThree from "../layouts/HeaderThree";
import Footer from "../layouts/Footer";
import { BASEURL } from "../config";

const Category = () => {
  const { slug } = useParams(); // گرفتن slug دسته از url
  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // گرفتن دسته‌بندی‌ها از API
  useEffect(() => {
    fetch(`${BASEURL}/api/products/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  // گرفتن محصولات دسته بر اساس slug
  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    fetch(`${BASEURL}/api/products/categories/${slug}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [slug]);

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
            {loading ? (
              <p>Loading...</p>
            ) : products.length > 0 ? (
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
                          {Math.floor(item.base_price).toLocaleString() && <span> {Math.floor(item.base_price).toLocaleString()}</span>}
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
            ) : (
              <p className="text-center">هیچ محصولی در این دسته وجود ندارد.</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Category;


