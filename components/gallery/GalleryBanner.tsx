// import Image from "next/image";

// export default function GalleryBanner() {
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
'use client'; // ← important in Next.js App Router if using client-side interactivity

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function GalleryBanner() {
  return (
    <div id="banner" role="banner">
      <div className="flexslider"> {/* keeping class for possible existing CSS */}
        <div className="banner_wrap">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}                // enables infinite looping (like most sliders)
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={false}
            navigation={false}
            className="banner_slide"
          >
            {/* Slide 1 – original one */}
            <SwiperSlide>
              <div style={{ width: '100%' }}>
                <Image
                  src="/images/DSCN1198.jpg"
                  alt=""
                  width={690}
                  height={732}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  draggable={false}
                  priority // good for hero/banner images
                />

                <div className="banner_caption">
                  <h2>LEARN TO LIVE</h2>
                  <h3>LEARN TO GIVE</h3>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 – added one more slider as requested */}
            <SwiperSlide>
              <div style={{ width: '100%' }}>
                <Image
                  src="/images/DSCN1200.jpg" // ← change to your real second image
                  alt="Second banner image"
                  width={690}
                  height={732}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  draggable={false}
                  priority
                />

                <div className="banner_caption">
                  <h2>INSPIRE OTHERS</h2>
                  <h3>MAKE A DIFFERENCE</h3>
                </div>
              </div>
            </SwiperSlide>

            {/* You can keep adding more SwiperSlide blocks here */}
            {/* <SwiperSlide>...</SwiperSlide> */}
          </Swiper>
        </div>

        {/* Pagination – Swiper will fill these bullets automatically */}
        <div className="swiper-pagination flex-control-nav flex-control-paging" />

        {/* Navigation arrows – using the same classes as your original code */}
        <div className="swiper-button-prev flex-direction-nav flex-prev" />
        <div className="swiper-button-next flex-direction-nav flex-next" />
      </div>
    </div>
  );
}