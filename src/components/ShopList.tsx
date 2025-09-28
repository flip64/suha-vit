"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeaderTwo from "../layouts/HeaderTwo";
import NiceSelect from "../ui/NiceSelect";
import Footer from "../layouts/Footer";
import { BASEURL } from "../config";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  discount_price: number | null;
  rating?: number;
  review_text?: number;
  thumb: string;
  created_at: string;
  sales_count?: number;
}

const product_categories = [
  { image: "/assets/img/product/5.png", title: "Furniture" },
  { image: "/assets/img/product/9.png", title: "Shoes" },
  { image: "/assets/img/product/4.png", title: "Dress" },
  { image: "/assets/img/product/9.png", title: "Shoes" },
  { image: "/assets/img/product/5.png", title: "Furniture" },
  { image: "/assets/img/product/4.png", title: "Dress" },
];

const ShopListFullWidthFinal = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [sort, setSort] = useState("newest");
  const loaderRef = useRef<HTMLDivElement>(null);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("fa-IR").format(price) + " تومان";

  const fetchProducts = async (pageNum: number, sortType: string) => {
    try {
      const res = await fetch(
        `${BASEURL}/api/orders/weeklyBestSellers/?page=${pageNum}&page_size=10&sort=${sortType}`
      );
      const data = await res.json();
      if (!data.data || data.data.length === 0 || pageNum >= data.total_pages) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
      setProducts((prev) =>
        pageNum === 1 ? data.data : [...prev, ...data.data]
      );
    } catch (error) {
      console.error("Error fetching products:", error);
      setHasMore(false);
    }
  };

  useEffect(() => {
    setPage(1);
    fetchProducts(1, sort);
  }, [sort]);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore) {
        setPage((prev) => prev + 1);
      }
    },
    [hasMore]
  );

  useEffect(() => {
    const option = { root: null, rootMargin: "20px", threshold: 1.0 };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [handleObserver]);

  useEffect(() => {
    if (page > 1) fetchProducts(page, sort);
  }, [page]);

  const selectHandler = (selectedValue: string) => {
    setSort(selectedValue);
    setPage(1);
  };

  return (
    <>
      <HeaderTwo links="home" title="Shop List" />

      <div className="page-content-wrapper">
        <div className="py-3">
          <div className="container">

            {/* اسلایدر دسته‌بندی‌ها جدا از کارت‌ها */}
            <div className="row mb-3">
              <div className="col-12">
                <Swiper
                  loop={true}
                  slidesPerView={3.5}
                  spaceBetween={10}
                  className="product-catagories owl-carousel catagory-slides"
                >
                  {product_categories.map((item, i) => (
                    <SwiperSlide key={i}>
                      <a className="shadow-sm d-block text-center" href="#">
                        <img src={item.image} alt={item.title} />
                        <div>{item.title}</div>
                      </a>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* منوی مرتب‌سازی */}
            <div className="select-product-catagory mb-3">
              <NiceSelect
                className="filter-select right small border-0 d-flex align-items-center"
                options={[
                  { value: "newest", text: "Newest" },
                  { value: "popular", text: "Popular" },
                  { value: "rating", text: "Ratings" },
                ]}
                defaultCurrent={0}
                onChange={selectHandler}
                placeholder="Select an option"
                name="sortSelect"
              />
            </div>

            {/* کارت‌های محصولات تمام عرض */}
            <div className="row g-2">
              {products.map((item) => (
                <div key={item.id} className="col-12">
                  <div
                    className="card horizontal-product-card w-100"
                    style={{ minWidth: 0 }}
                  >
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
                      <div
                        className="product-description"
                        style={{ flex: 1, minWidth: 0 }}
                      >
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
                                  style={{
                                    textDecoration: "line-through",
                                    color: "#999",
                                  }}
                                >
                                  {formatPrice(item.price)}
                                </span>
                              )}
                            </>
                          ) : (
                            formatPrice(item.price)
                          )}
                        </p>

                        {item.rating && (
                          <div className="product-rating">
                            <i className="ti ti-star-filled"></i> {item.rating}{" "}
                            <span className="ms-1">
                              ({item.review_text || 0}{" "}
                              {item.review_text && item.review_text > 1
                                ? "reviews"
                                : "review"}
                              )
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* loader */}
            {hasMore && (
              <div
                ref={loaderRef}
                style={{ height: "50px", margin: "20px 0" }}
              >
                در حال بارگذاری...
              </div>
            )}
            {!hasMore && <p className="text-center">هیچ محصول جدیدی وجود ندارد</p>}
          </div>
        </div>
      </div>

      <div className="internet-connection-status" id="internetStatus"></div>
      <Footer />
    </>
  );
};

export default ShopListFullWidthFinal;
