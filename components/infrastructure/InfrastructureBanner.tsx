// import Image from "next/image";

// export default function AcademicBanner() {
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

"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AcademicBanner() {
  return (
    <div id="banner" role="banner" className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: "bg-white",
          bulletClass: "inline-block w-3 h-3 rounded-full bg-gray-400 mx-1 cursor-pointer",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="w-full"
        style={{ height: "732px" }}
      >
        {/* Original slide - unchanged */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/images/DSCN1198.jpg"
              alt="Academic banner - Learn to Live"
              fill
              className="object-cover"
              priority
            />
            <div className="banner_caption absolute inset-0 flex flex-col items-center justify-center text-white text-center pointer-events-none">
              <h2 className="text-5xl md:text-7xl font-bold drop-shadow-lg">LEARN TO LIVE</h2>
              <h3 className="text-4xl md:text-5xl mt-4 drop-shadow-lg">LEARN TO GIVE</h3>
            </div>
          </div>
        </SwiperSlide>

        {/* The one new slide you asked for */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/images/DSCN1200.jpg" 
              alt="Education banner slide 2"
              fill
              className="object-cover"
            />
            <div className="banner_caption absolute inset-0 flex flex-col items-center justify-center text-white text-center pointer-events-none">
              <h2 className="text-5xl md:text-7xl font-bold drop-shadow-lg">BUILD YOUR</h2>
              <h3 className="text-4xl md:text-5xl mt-4 drop-shadow-lg">FUTURE TODAY</h3>
            </div>
          </div>
        </SwiperSlide>

        {/* Custom navigation arrows - unchanged */}
      </Swiper>

      <div className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white text-4xl cursor-pointer after:content-['←'] after:shadow-lg" />
      <div className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white text-4xl cursor-pointer after:content-['→'] after:shadow-lg" />
    </div>
  );
}