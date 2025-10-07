import React, { useEffect, useState } from "react";
import { BASEURL } from "../../config";

const ProductCatagories = () => {
const [categories, setCategories] = useState([]);

useEffect(() => {
async function fetchData() {
try {
const res = await fetch(`${BASEURL}/api/products/categories/`);
const data = await res.json();
setCategories(data);
} catch (error) {
console.error("Error fetching categories:", error);

// fallback آرایه هاردکد قبلی  
    setCategories([  
      { img: "/assets/img/core-img/woman-clothes.png", name: "Womens Fashion" },  
      { img: "/assets/img/core-img/grocery.png", name: "Groceries & Pets" },  
      { img: "/assets/img/core-img/shampoo.png", name: "Health & Beauty" },  
      { img: "/assets/img/core-img/rowboat.png", name: "Sports & Outdoors" },  
      { img: "/assets/img/core-img/tv-table.png", name: "Home Appliance" },  
      { img: "/assets/img/core-img/beach.png", name: "Tour & Travels" },  
      { img: "/assets/img/core-img/baby-products.png", name: "Mother & Baby" },  
      { img: "/assets/img/core-img/price-tag.png", name: "Clearance Sale" },  
    ]);  
  }  
}  
fetchData();

}, []);

return (
<div className="product-catagories-wrapper py-3">
<div className="container">
<div className="row g-2 rtl-flex-d-row-r">
{categories.map((item, i) => (
<div key={i} className="col-3">
<div className={card catagory-card ${i === 7 ? "active" : ""}}>
<div className="card-body px-2">
<a href={/catagory/${item.slug}}>
<img src={item.img || item.image} alt={item.name} />

<span>{item.name}</span>  
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


