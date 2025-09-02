"use client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import VideoPopup from "../../modals/VideoPopup";

const ProductSlider = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<any | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    if (!slug) return;

    fetch(`https://backend.bazbia.ir/api/products/${slug}/`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [slug]);

  if (!product || !product.images?.length) return <p>در حال بارگذاری تصاویر...</p>;

  return (
    <>
      <div className="product-slide-wrapper">
        <Swiper
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="product-slides owl-carousel"
        >
          {product.images.map((img: any, index: number) => (
            <SwiperSlide
              key={index}
              className="single-product-slide"
              style={{
                backgroundImage: `url(${img.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px",
              }}
            />
          ))}
        </Swiper>

        <a
          className="video-btn shadow-sm"
          onClick={() => setIsVideoOpen(true)}
          style={{ cursor: "pointer" }}
        >
          <i className="ti ti-player-play"></i>
        </a>
      </div>

      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={product.videoId || "-hTVNidxg2s"}
      />
    </>
  );
};

export default ProductSlider;
