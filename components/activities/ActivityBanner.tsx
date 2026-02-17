// import Image from "next/image";

// export default function ActivityBanner() {
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

'use client'; // ← important if using Next.js App Router

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// If you want autoplay
// import 'swiper/css/autoplay';

export default function ActivityBanner() {
  return (
    <div id="banner" role="banner" className="activity-banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={
          false
        }
        navigation={{
          prevEl: '.banner-prev',
          nextEl: '.banner-next',
        }}
        
        className="banner-swiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="slide-content">
            <Image
              src="/images/DSCN1198.jpg"
              alt="Banner image 1"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="banner_caption">
              <h2>LEARN TO LIVE</h2>
              <h3>LEARN TO GIVE</h3>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 – example (add your real images) */}
        <SwiperSlide>
          <div className="slide-content">
            <Image
              src="/images/banner-2.jpg"
              alt="Banner image 2"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="banner_caption">
              <h2>HELP & SUPPORT</h2>
              <h3>MAKE A DIFFERENCE</h3>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="slide-content">
            <Image
              src="/images/banner-3.jpg"
              alt="Banner image 3"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="banner_caption">
              <h2>EDUCATION FOR ALL</h2>
              <h3>BUILD THE FUTURE</h3>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 – you can add more */}
        <SwiperSlide>
          <div className="slide-content">
            <Image
              src="/images/banner-4.jpg"
              alt="Banner image 4"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="banner_caption">
              <h2>TOGETHER WE CAN</h2>
              <h3>CHANGE LIVES</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom navigation buttons (styled like flexslider) */}
      <div className="flex-direction-nav">
        <button className="banner-prev flex-prev" aria-label="Previous slide">
          ←
        </button>
        <button className="banner-next flex-next" aria-label="Next slide">
          →
        </button>
      </div>
    </div>
  );
}