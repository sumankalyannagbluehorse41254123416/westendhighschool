"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

/* ---------------- Types ---------------- */

interface Section {
  title?: string;
  shortDescription?: string;
  image?: string;
  bannerImage?: string;
  [key: string]: unknown;
}

interface BannerSliderProps {
  sections: Section[];
}

/* ---------------- Component ---------------- */

export default function BannerSlider({ sections }: BannerSliderProps) {
  if (!sections || sections.length === 0) return null;

  // ✅ Using array index 0
  const banner = sections[0];

  const imageUrl =
    banner.bannerImage || banner.image || "/images/default-banner.jpg";

  const title1 = banner.title ? banner.title.replace(/<[^>]*>/g, "") : "";

  const title2 = banner.shortDescription
    ? banner.shortDescription.replace(/<[^>]*>/g, "")
    : "";

  return (
    <section id="banner" className="relative w-full h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        loop
        effect="fade"
        speed={1600}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation
        pagination={{ clickable: true }}
        className="h-full banner_swiper"
      >
        <SwiperSlide className="h-full">
          <div className="relative w-full h-full">
            {/* Image */}
            <Image
              src={imageUrl}
              alt={title1 || "Banner"}
              fill
              priority
              className="object-cover slide_img"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Caption */}
            <div className="banner_caption">
              <h2>{banner.title}</h2>
              <h3>{banner.shortDescription}</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
