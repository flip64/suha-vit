"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import VideoPopup from "../../modals/VideoPopup";

interface ProductSliderProps {
  product: any; // محصول شامل images و videoId
}

const ProductSlider = ({ product }: ProductSliderProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  if (!product || !product.images?.length) {
    return <p>در حال بارگذاری تصاویر...</p>;
  }

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
