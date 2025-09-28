"use client"; 

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeaderTwo from "../layouts/HeaderTwo";
import NiceSelect from "../ui/NiceSelect";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
import { BASEURL } from "../config";

const product_categories = [
  { image: "/assets/img/product/5.png", title: "Furniture" },
  { image: "/assets/img/product/9.png", title: "Shoes" },
  { image: "/assets/img/product/4.png", title: "Dress" },
  { image: "/assets/img/product/9.png", title: "Shoes" },
  { image: "/assets/img/product/5.png", title: "Furniture" },
  { image: "/assets/img/product/4.png", title: "Dress" },
];

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  discount_price: number | null;
  category: string;
  thumb: string;
}

const ShopList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const selectHandler = () => {};

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("fa-IR").format(price) + " تومان";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BASEURL}/api/orders/weeklyBestSellers/?page=1&page_size=20`);
        const data = await res.json();
        setProducts(data.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <HeaderTwo links="home" title="Shop List" />
      <div className="page-content-wrapper">
        <div className="py-3">
          <div className="container">
            <div className="row g-1 align-items-center rtl-flex-d-row-r">
              <div className="col-8" style={{ marginTop: "-15px" }}>
                <Swiper
                  loop={true}
                  slidesPerView={2.5}
                  spaceBetween={5}
                  className="product-catagories owl-carousel catagory-slides"
                >
                  {product_categories.map((item, i) => (
                    <SwiperSlide key={i}>
                      <a className="shadow-sm" href="#">
                        <img src={item.image} alt="" />
                        {item.title}
                      </a>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="col-4">
                <div className="select-product-catagory">
                  <NiceSelect
                    className="filter-select right small border-0 d-flex align-items-center"
                    options={[
                      { value: "00", text: "Short by" },
                      { value: "01", text: "Newest" },
                      { value: "02", text: "Popular" },
                      { value: "04", text: "Ratings" },
                    ]}
                    defaultCurrent={0}
                    onChange={selectHandler}
                    placeholder="Select an option"
                    name="myNiceSelect"
                  />
                </div>
              </div>
            </div>

            <div className="mb-3"></div>
            <div className="row g-2">
              {products.length > 0 ? (
                products.map((item) => (
                  <div key={item.id} className="col-12">
                    <div className="card horizontal-product-card">
                      <div className="d-flex align-items-center">
                        <div className="product-thumbnail-side">
                          <Link
                            className="product-thumbnail d-block"
                            to={`/single-product/${item.slug}`}
                          >
                            <img src={item.thumb} alt={item.name} />
                          </Link>
                          <a className="wishlist-btn" href="#">
                            <i className="ti ti-heart"></i>
                          </a>
                        </div>
                        <div className="product-description">
                          <Link
                            className="product-title d-block"
                            to={`/single-product/${item.slug}`}
                          >
                            {item.name}
                          </Link>

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
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>در حال بارگذاری محصولات...</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="internet-connection-status" id="internetStatus"></div>
      <Footer />
    </>
  );
};

export default ShopList;
