import { useEffect, useState } from "react";
import { BASEURL } from "../../config";

interface Product {
  slug: string;
  thumb: string;
  name: string;
  discount_price: number | null;
  price: number;
  rating: number;
  review_text: number;
}

const WeeklyBestSellers = () => {
  const [bestSeller, setBestSeller] = useState<Product[]>([]);

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
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
  };

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
          {bestSeller.map((item, i) => (
            <div key={i} className="col-12">
              <div className="card horizontal-product-card">
                <div className="d-flex align-items-center">
                  <div className="product-thumbnail-side">
                    <a className="product-thumbnail d-block" href={`/single-product/${item.slug}`}>
                      <img src={item.thumb} alt={item.name} />
                    </a>
                    <a className="wishlist-btn" href="#">
                      <i className="ti ti-heart"></i>
                    </a>
                  </div>
                  <div className="product-description">
                    <a className="product-title d-block" href={`/single-product/${item.slug}`}>
                      {item.name}
                    </a>
                    <p className="sale-price">
                      {item.discount_price && item.discount_price > 0 ? (
                        <>
                          {formatPrice(item.discount_price)}
                          {item.price !== item.discount_price && (
                            <span
                              className="original-price ms-2"
                              style={{ textDecoration: "line-through", color: "#999" }}
                            >
                              {formatPrice(item.price)}
                            </span>
                          )}
                        </>
                      ) : (
                        formatPrice(item.price)
                      )}
                    </p>
                    <div className="product-rating">
                      <i className="ti ti-star-filled"></i> {item.rating}{" "}
                      <span className="ms-1">
                        ({item.review_text} {item.review_text > 1 ? "reviews" : "review"})
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
