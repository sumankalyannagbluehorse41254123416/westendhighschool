// import Image from "next/image";

// export default function SyllabusBanner() {
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

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SyllabusBanner() {
  return (
    <div id="banner" role="banner">
      <div className="flexslider">
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
              <Image
                src="/images/DSCN1198.jpg"
                alt=""
                width={600}
                height={702}
                style={{ width: "100%" }}
                draggable={false}
              />

              <div className="banner_caption">
                <h2>LEARN TO LIVE</h2>
                <h3>LEARN TO GIVE</h3>
              </div>
            </SwiperSlide>

            {/* Slide 2 (Added new slide) */}
            <SwiperSlide>
              <Image
                src="/images/DSCN1198.jpg"
                alt=""
                width={600}
                height={702}
                style={{ width: "100%" }}
                draggable={false}
              />

              <div className="banner_caption">
                <h2>BUILD YOUR FUTURE</h2>
                <h3>WITH CONFIDENCE</h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
