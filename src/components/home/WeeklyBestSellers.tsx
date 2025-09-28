import { useEffect, useState } from "react";
import {BASEURL} from "../../config"
const WeeklyBestSellers = () => {
   


  
  
  
  
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const res = await fetch(`${BASEURL}/api/orders/weeklyBestSellers/?page=1&page_size=4`);
        const data = await res.json();
        setBestSeller(data.data);
      } catch (error) {
        console.error("Error fetching best sellers:", error);
        
      }
    };

    fetchBestSellers();
  }, [BASEURL]);

  return (
    <div className="weekly-best-seller-area py-3">
      <div className="container">
        <div className="section-heading d-flex align-items-center justify-content-between dir-rtl">
          <h6>پرفروش ترینهای هفته</h6>
          <a className="btn btn-sm btn-light" href="/shop-list">
            View all<i className="ms-1 ti ti-arrow-right"></i>
          </a>
        </div>
        <div className="row g-2">
          {bestSeller.map((item: any, i: number) => (
            <div key={i} className="col-12">
              <div className="card horizontal-product-card">
                <div className="d-flex align-items-center">
                  <div className="product-thumbnail-side">
                    <a
                      className="product-thumbnail d-block"
                      href={`/single-product/${item.slug}`}
                    >
                      <img src={item.thumb} alt={item.name} />
                    </a>
                    <a className="wishlist-btn" href="#">
                      <i className="ti ti-heart"></i>
                    </a>
                  </div>
                  <div className="product-description">
                    <a
                      className="product-title d-block"
                      href={`${BASEURL}/single-product/${item.slug}`}
                    >
                      {item.name}
                    </a>
                    <p className="sale-price">
                      <i className="ti ti-currency-dollar"></i> ${item.discount_price}
                      <span>$ {item.pricr}</span>
                    </p>
                    <div className="product-rating">
                      <i className="ti ti-star-filled"></i> {item.rating}{" "}
                      <span className="ms-1">
                        ({item.review_text}{" "}
                        {item.review_text > 1 ? "reviews" : "review"})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyBestSellers;














