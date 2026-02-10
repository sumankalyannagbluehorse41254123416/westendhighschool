// import Image from "next/image";

// export default function ActivitySection() {
//   return (
//     <div className="activity">
//       <div className="site_title">
//         <h2>Activity</h2>
//       </div>

//       <ul className="activity_slider slick-initialized slick-slider">
//         <div className="slick-list draggable">
//           <div
//             className="slick-track"
//             style={{
//               opacity: 1,
//               width: "210px",
//               transform: "translate3d(0px, 0px, 0px)",
//             }}
//           >
//             <div
//               className="slick-slide slick-current slick-active"
//               data-slick-index="0"
//               aria-hidden="false"
//               style={{ width: "210px" }}
//             >
//               <div>
//                 <li style={{ width: "100%", display: "inline-block" }}>
//                   <Image
//                     src="/images/DSCN1198.jpg"
//                     alt="Activity"
//                     width={78}
//                     height={81}
//                   />
//                 </li>
//               </div>
//             </div>
//           </div>
//         </div>
//       </ul>
//     </div>
//   );
// }
'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ActivitySection() {
  return (
    <div className="container">
      <div className="activity">
        <div className="site_title">
          <h2>Activity</h2>
        </div>

        <div className="activity_slider">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={12}
            slidesPerView={1}           // changed from many → 1 (you can adjust)
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // navigation={true}        // uncomment if you want arrows
            // pagination={{ clickable: true }}  // uncomment if you want dots
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {/* Repeated same image – add as many as you want */}
            <SwiperSlide>
              <li style={{ width: '100%', display: 'inline-block' }}>
                <Image
                  src="/images/DSCN1198.jpg"
                  alt="Activity"
                  width={78}
                  height={81}
                />
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li style={{ width: '100%', display: 'inline-block' }}>
                <Image
                  src="/images/DSCN1198.jpg"
                  alt="Activity"
                  width={78}
                  height={81}
                />
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li style={{ width: '100%', display: 'inline-block' }}>
                <Image
                  src="/images/DSCN1198.jpg"
                  alt="Activity"
                  width={78}
                  height={81}
                />
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li style={{ width: '100%', display: 'inline-block' }}>
                <Image
                  src="/images/DSCN1198.jpg"
                  alt="Activity"
                  width={78}
                  height={81}
                />
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li style={{ width: '100%', display: 'inline-block' }}>
                <Image
                  src="/images/DSCN1198.jpg"
                  alt="Activity"
                  width={78}
                  height={81}
                />
              </li>
            </SwiperSlide>

            {/* You can keep adding more <SwiperSlide> with the same or different images */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}