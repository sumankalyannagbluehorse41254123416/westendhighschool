// import Image from "next/image";

// const Banneranthem = () => {
//   return (
//     <div className="banner_wrap">
//       <ul className="banner_slide slick-initialized slick-slider">
//         <div className="slick-list draggable" style={{ height: "732px" }}>
//           <div
//             className="slick-track"
//             style={{
//               opacity: 1,
//               width: "690px",
//               transform: "translate3d(0px, 0px, 0px)",
//             }}
//           >
//             <div
//               className="slick-slide slick-current slick-active"
//               data-slick-index="0"
//               aria-hidden="false"
//               style={{ width: "690px" }}
//             >
//               <div>
//                 <li
//                   className="clone"
//                   aria-hidden="true"
//                   style={{
//                     width: "100%",
//                     float: "left",
//                     display: "inline-block",
//                   }}
//                 >
//                   {/* Image container (required for next/image) */}
//                   <div
//                     style={{
//                       position: "relative",
//                       width: "100%",
//                       height: "732px",
//                     }}
//                   >
//                     <Image
//                       src="/images/DSCN1198.jpg"
//                       alt=""
//                       fill
//                       draggable={false}
//                       style={{ objectFit: "cover" }}
//                       priority
//                     />
//                   </div>

//                   <div className="banner_caption">
//                     <h2>LEARN TO LIVE</h2>
//                     <h3>LEARN TO GIVE</h3>
//                   </div>
//                 </li>
//               </div>
//             </div>
//           </div>
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default Banneranthem;
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banneranthem = () => {
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
        {/* Slide 1 */}
        <SwiperSlide>
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
                src="/images/DSCN1198.jpg"
                alt=""
                fill
                draggable={false}
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            <div className="banner_caption">
              <h2>LEARN TO LIVE</h2>
              <h3>LEARN TO GIVE</h3>
            </div>
          </li>
        </SwiperSlide>

        {/* Slide 2 (New Slide Added) */}
        <SwiperSlide>
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
                src="/images/DSCN1198.jpg"
                alt=""
                fill
                draggable={false}
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="banner_caption">
              <h2>EMBRACE THE JOURNEY</h2>
              <h3>SHARE THE LOVE</h3>
            </div>
          </li>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banneranthem;
