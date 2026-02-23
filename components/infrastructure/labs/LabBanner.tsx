"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* ---------------- Types ---------------- */

interface Section {
  title?: string;
  shortDescription?: string;
  image?: string;
  subsections?: Section[];
}

interface Props {
  section?: Section;
}

/* ---------------- Helper ---------------- */

const stripHtml = (html?: string) =>
  html ? html.replace(/<[^>]*>/g, "") : "";

/* ---------------- Component ---------------- */

export default function LabBanner({ section }: Props) {
  const slides = section?.subsections || [];

  return (
    <div className="banner_wrap">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={false}
        pagination={false}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="banner_slide"
      >
        {slides.map((sub, index) => (
          <SwiperSlide key={index}>
            <li
              className="clone"
              style={{
                width: "100%",
                float: "left",
                display: "inline-block",
                listStyle: "none",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "732px",
                }}
              >
                <Image
                  src={sub.image || "/images/placeholder.jpg"}
                  alt={stripHtml(section?.title) || "banner"}
                  fill
                  draggable={false}
                  style={{ objectFit: "cover" }}
                  priority={index === 0}
                />
              </div>

              <div className="banner_caption">
                <h2>{stripHtml(section?.title)}</h2>
                <h3>{stripHtml(section?.shortDescription)}</h3>
              </div>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

