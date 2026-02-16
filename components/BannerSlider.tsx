// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

// /* ---------------- Types ---------------- */

// interface Section {
//   title?: string;
//   shortDescription?: string;
//   image?: string;
//   bannerImage?: string;
//   [key: string]: unknown;
// }

// interface BannerSliderProps {
//   sections: Section[];
// }

// /* ---------------- Component ---------------- */

// export default function BannerSlider({ sections }: BannerSliderProps) {
//   if (!sections || sections.length === 0) return null;

//   // ✅ Using array index 0
//   const banner = sections[0];

//   const imageUrl =
//     banner.bannerImage || banner.image || "/images/default-banner.jpg";
    

//   const title1 = banner.title ? banner.title.replace(/<[^>]*>/g, "") : "";

//   const title2 = banner.shortDescription
//     ? banner.shortDescription.replace(/<[^>]*>/g, "")
//     : "";

//   return (
//     <section id="banner" className="relative w-full h-[600px]">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay, EffectFade]}
//         slidesPerView={1}
//         loop
//         effect="fade"
//         speed={1600}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         navigation
//         pagination={{ clickable: true }}
//         className="h-full banner_swiper"
//       >
//         <SwiperSlide className="h-full">
//           <div className="relative w-full h-full">
//             {/* Image */}
//             <Image
//               src={imageUrl}
//               alt={title1 || "Banner"}
//               fill
//               priority
//               className="object-cover slide_img"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/40 z-10"></div>

//             {/* Caption */}
//             <div className="banner_caption">
//               <h2>{banner.title}</h2>
//               <h3>{banner.shortDescription}</h3>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SubSection {
  title?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
}

interface Section {
  subsections?: SubSection[];
}

interface BannerSliderProps {
  sections: Section[];
}

/* ---------------- Helper ---------------- */

const stripHtml = (html?: string) => {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").trim();
};

/* ---------------- Component ---------------- */

export default function BannerSlider({ sections }: BannerSliderProps) {
  if (!sections || sections.length === 0) return null;

  // ✅ Take subsections from first section
  const bannerSubsections = sections[0]?.subsections || [];

  if (bannerSubsections.length === 0) return null;

  return (
    <section id="banner" className="relative w-full h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={false}
        pagination={false}
        className="h-full banner_swiper"
      >
        {bannerSubsections.map((item, index) => {
          const imageUrl =
            item.bannerImage ||
            item.image ||
            "/images/default-banner.jpg";

          const cleanTitle = stripHtml(item.title);
          const cleanDescription = stripHtml(item.description);

          return (
            <SwiperSlide key={index} className="h-full">
              <div className="relative w-full h-full">
                {/* Image */}
                <Image
                  src={imageUrl}
                  alt={cleanTitle || `Banner ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover slide_img"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>

                {/* Caption */}
                <div className="banner_caption relative z-20 text-white text-center">
                  {cleanTitle && <h2>{cleanTitle}</h2>}
                  {cleanDescription && <h3>{cleanDescription}</h3>}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

