import React, { useEffect, useState } from "react";
import { getProductCategories } from "../../data/api/product_categoris";


const ProductCatagories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProductCategories();
      setCategories(data);
    }
    fetchData();
  }, []);

  return (
    <div className="product-catagories-wrapper py-3">
      <div className="container">
        <div className="row g-2 rtl-flex-d-row-r">
          {categories.map((item, i) => (
            <div key={i} className="col-3">
              <div className={`card catagory-card ${i === 7 ? "active" : ""}`}>
                <div className="card-body px-2">
                  <a href="/catagory">
                    <img src={item.img} alt="" />
                    <span>{item.title}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCatagories;

