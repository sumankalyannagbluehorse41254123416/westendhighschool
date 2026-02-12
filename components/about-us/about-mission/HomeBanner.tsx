// import Image from "next/image";

// export default function HomeBanner() {
//   return (
//     <div id="banner" role="banner">
//       <div className="flexslider">
//         <div className="banner_wrap">
//           <ul className="banner_slide slick-initialized slick-slider">
//             <div
//               className="slick-list draggable"
//               style={{ height: "732px" }}
//             >
//               <div
//                 className="slick-track"
//                 style={{
//                   opacity: 1,
//                   width: "690px",
//                   transform: "translate3d(0px, 0px, 0px)",
//                 }}
//               >
//                 <div
//                   className="slick-slide slick-current slick-active"
//                   data-slick-index="0"
//                   aria-hidden="false"
//                   style={{ width: "690px" }}
//                 >
//                   <div>
//                     <li
//                       className="clone"
//                       aria-hidden="true"
//                       style={{
//                         width: "100%",
//                         float: "left",
//                         display: "inline-block",
//                       }}
//                     >
//                       <Image
//                         src="/images/DSCN1198.jpg"
//                         alt=""
//                         width={690}
//                         height={732}
//                         style={{ width: "100%" }}
//                         draggable={false}
//                       />

//                       <div className="banner_caption">
//                         <h2>LEARN TO LIVE</h2>
//                         <h3>LEARN TO GIVE</h3>
//                       </div>
//                     </li>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </ul>
//         </div>

//         <ol className="flex-control-nav flex-control-paging">
//           <li>
//             <a className="">1</a>
//           </li>
//           <li>
//             <a className="">2</a>
//           </li>
//           <li>
//             <a className="flex-active">3</a>
//           </li>
//           <li>
//             <a className="">4</a>
//           </li>
//         </ol>

//         <ul className="flex-direction-nav">
//           <li>
//             <a className="flex-prev" href="#"></a>
//           </li>
//           <li>
//             <a className="flex-next" href="#"></a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HomeBanner() {
  const slides = [
    {
      image: "/images/DSCN1198.jpg",
      title: "LEARN TO LIVE",
      subtitle: "LEARN TO GIVE",
    },
    {
      image: "/images/DSCN1198.jpg",
      title: "EMPOWERING COMMUNITIES",
      subtitle: "BUILDING FUTURES",
    },
    {
      image: "/images/DSCN1198.jpg",
      title: "EDUCATION FOR ALL",
      subtitle: "HOPE FOR TOMORROW",
    },
    {
      image: "/images/DSCN1198.jpg",
      title: "MAKING A DIFFERENCE",
      subtitle: "TOGETHER WE CAN",
    },
  ];

  return (
    <div id="banner" role="banner">
      <div className="flexslider">
        <div className="banner_wrap">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              prevEl: ".flex-prev",
              nextEl: ".flex-next",
            }}
            pagination={{
              el: ".flex-control-nav",
              clickable: true,
              renderBullet: (index, className) => {
                return `<li><a class="${className}">${index + 1}</a></li>`;
              },
            }}
            autoplay={
              {
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="banner_slide"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="slide-content">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={690}
                    height={732}
                    style={{ width: "100%", height: "auto" }}
                    draggable={false}
                    priority={index === 0}
                  />

                  <div className="banner_caption">
                    <h2>{slide.title}</h2>
                    <h3>{slide.subtitle}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <ol className="flex-control-nav flex-control-paging"></ol>

          <ul className="flex-direction-nav">
            <li>
              <a className="flex-prev" role="button" aria-label="Previous slide"></a>
            </li>
            <li>
              <a className="flex-next" role="button" aria-label="Next slide"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}