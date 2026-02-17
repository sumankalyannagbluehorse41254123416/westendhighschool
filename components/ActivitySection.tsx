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

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Section {
  title?: string;
  image?: string;
  subsections?: Section[];
}

interface Props {
  section?: Section;
}

export default function ActivitySection({ section }: Props) {
  if (!section) return null;

  return (
    <div className="container">
      <div className="activity">
        <div className="site_title">
          {/* ✅ Dynamic H2 */}
          <h2>{section.title}</h2>
        </div>

        <div className="activity_slider">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={12}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
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
            {/* ✅ Dynamic Subsection Images */}
            {section.subsections?.map((item, index) => (
              <SwiperSlide key={index}>
                <li style={{ width: '100%', display: 'inline-block' }}>
                  <Image
                    src={item.image || '/images/placeholder.jpg'}
                    alt={item.title || 'Activity'}
                    width={78}
                    height={81}
                  />
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
