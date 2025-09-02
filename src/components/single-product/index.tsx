"use client";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import HeaderTwo from "../../layouts/HeaderTwo";
import ProductSlider from "./ProductSlider";
import SingleProductArea from "./SingleProductArea";
import Footer from "../../layouts/Footer";

const SingleProductIndex = () => {
  const { slug } = useParams(); // گرفتن slug از لینک
  const [product, setProduct] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://backend.bazbia.ir/api/products/${slug}/`);
        if (!res.ok) throw new Error("خطا در دریافت محصول");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  return (
    <>
      {/* هدر با عنوان محصول */}
      <HeaderTwo links="shop-grid" title={product?.name || "محصول"} />

      <div className="page-content-wrapper">
        {loading ? (
          <p className="p-4">در حال بارگذاری محصول...</p>
        ) : product ? (
          <>
            {/* پاس دادن محصول به اسلایدر */}
            <ProductSlider product={product} />

            {/* پاس دادن محصول به بخش توضیحات و جزئیات */}
            <SingleProductArea product={product} />
          </>
        ) : (
          <p className="p-4">محصولی پیدا نشد.</p>
        )}
      </div>

      {/* وضعیت اینترنت و فوتر */}
      <div className="internet-connection-status" id="internetStatus"></div>
      <Footer />
    </>
  );
};

export default SingleProductIndex;
