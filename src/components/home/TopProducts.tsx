import React, { useState, useEffect } from "react";
import {BASEURL} from "../../config"
// import top_product from "../../data/top_product"; // دیگه لازم نیست

const TopProducts = () => {
  const [top_product, setTopProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BASEURL}/api/products/?page=1&page_size=8`); // آدرس API
        const data = await res.json();
        
        setTopProduct(data.data);
      } catch (err) {
        console.error("خطا در دریافت محصولات:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="top-products-area py-3">
        <div className="container">
          <div className="section-heading d-flex align-items-center justify-content-between dir-rtl">
            <h6>محصولات ما</h6>
            <a className="btn btn-sm btn-light" href="/shop-grid">
              View all<i className="ms-1 ti ti-arrow-right"></i>
            </a>
          </div>
          <div className="row g-2">
            {top_product.map((item, i) => (
              <div key={i} className="col-6 col-md-4">
                <div className="card product-card">
                  <div className="card-body">
                    <span
                      className={`badge rounded-pill badge-${item.badge_color}`}
                    >
                      {item.badge_text}
                    </span>
                    <a className="wishlist-btn" href="#">
                      <i className="ti ti-heart"></i>
                    </a>
                    {/* لینک single-product اصلاح شد */}
                    <a
                      className="product-thumbnail d-block"
                      href={`/single-product/${item.slug}`}
                    >
                      <img className="mb-2" src={item.thumb} alt={item.name} />
                    </a>
                    <a
                      className="product-title"
                      href={`/single-product/${item.slug}`}
                    >
                      {item.name}
                    </a>

            <p className="sale-price">
             {/* قیمت با تخفیف ۵۰۰۰ تومان */}
              {Number(item.base_price) > 5000
              ? (Number(item.base_price) - 5000).toLocaleString("fa-IR")
              : Number(item.base_price).toLocaleString("fa-IR")}{" "}
              تومان
              <span className="original-price">
               {Number(item.base_price).toLocaleString("fa-IR")} تومان
              </span>
             </p>
                    
                    <div className="product-rating">
                      <i className="ti ti-star-filled">gh</i>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopProducts;








