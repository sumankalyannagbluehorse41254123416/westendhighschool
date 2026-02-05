"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function BannerSlider() {
  const slides = [
    {
      img: "/images/DSCN1198.jpg",
      title1: "LEARN TO LIVE",
      title2: "LEARN TO GIVE",
    },
    {
      img: "/images/DSCN1198.jpg",
      title1: "CREATE IMPACT",
      title2: "BUILD FUTURE",
    },
    {
      img: "/images/DSCN1198.jpg",
      title1: "INSPIRE CHANGE",
      title2: "SHAPE FUTURE",
    },
  ];

  return (
    <section id="banner" className="relative w-full h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        speed={1600}   // smoother transition
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        className="h-full banner_swiper"
      >

        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="h-full">
            <div className="relative w-full h-full">

              <Image
                src={slide.img}
                alt="Banner"
                fill
                priority
                className="object-cover slide_img"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 z-10"></div>

              {/* Caption */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20">
                <h2 className="text-5xl font-bold">
                  {slide.title1}
                </h2>
                <h3 className="text-3xl mt-4">
                  {slide.title2}
                </h3>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
