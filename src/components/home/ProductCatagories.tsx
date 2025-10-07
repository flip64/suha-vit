import React, { useEffect, useState } from "react";
import { BASEURL } from "../../config";

const ProductCategories = () => {
  const [mainCategories, setMainCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${BASEURL}/api/products/categories/`);
        const data = await res.json();

        // 🔹 فقط دسته‌های اصلی (parent = null) را نگه می‌داریم
        const topLevel = data.filter(cat => !cat.parent);
        setMainCategories(topLevel);

      } catch (error) {
        console.error("خطا در دریافت دسته‌ها:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="product-categories-wrapper py-3">
      <div className="container">
        <div className="row g-2 rtl-flex-d-row-r">
          {mainCategories.map((item, i) => (
            <div key={i} className="col-3">
              <div className="card category-card">
                <div className="card-body px-2 text-center">
                  <a href={`/category/${item.slug}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid"
                    />
                    <span>{item.name}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {mainCategories.length === 0 && (
            <p className="text-center">در حال بارگذاری دسته‌ها...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
