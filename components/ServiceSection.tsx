"use client";

import Image from "next/image";
import Link from "next/link";

interface Section {
  title?: string;
  description?: string;
  image?: string;
  subsections?: Section[];
}

interface Props {
  section?: Section;
  newsSection?: Section;
}

// Clean description (remove &nbsp;, html, extra space)
const cleanText = (html?: string) => {
  if (!html) return "";

  return html
    .replace(/&nbsp;/g, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

export default function ServiceSection({ section, newsSection }: Props) {
  const subsection0 = section?.subsections?.[0];
  const subsection1 = section?.subsections?.[1];

  const newsSubsections = newsSection?.subsections || [];

  return (
    <div className="service_section03 container">
      
      {/* LEFT SIDE */}
      <div className="service_left">
        
        {/* Transport */}
        <div className="">
          <Link href="/infrastructure/transport">
            <div className="service_box">
              <div className="icon_img">
                <Image
                  src="/images/bus02.png"
                  alt="Transport Icon"
                  width={60}
                  height={60}
                />
              </div>

              <h3>{subsection0?.title}</h3>

              <div className="serv_img">
                {subsection0?.image && (
                  <Image
                    src={subsection0.image}
                    alt={subsection0.title || "Transport"}
                    width={300}
                    height={200}
                  />
                )}
              </div>

              <p>
                {cleanText(subsection0?.description).slice(0, 140)}...
              </p>
            </div>
          </Link>
        </div>

        {/* Hostel */}
        <div className="">
          <Link href="/infrastructure/hostel">
            <div className="service_box">
              <div className="icon_img">
                <Image
                  src="/images/service_img02.png"
                  alt="Hostel Icon"
                  width={60}
                  height={60}
                />
              </div>

              <h3>{subsection1?.title}</h3>

              <div className="serv_img">
                {subsection1?.image && (
                  <Image
                    src={subsection1.image}
                    alt={subsection1.title || "Hostel"}
                    width={300}
                    height={200}
                  />
                )}
              </div>

              <p>
                {cleanText(subsection1?.description).slice(0, 140)}...
              </p>
            </div>
          </Link>
        </div>
      
      </div>

      {/* RIGHT SIDE */}
      <div className="col-lg-5 col-md-5">
        <div className="news_box">
          
          {/* Title from array index 3 */}
          <h3>{newsSection?.title}</h3>

          <ul>
            <li>
              <Link
                href="/news_today/admission-is-going-on/"
                style={{ color: "#333333" }}
              >
                {newsSubsections?.[0]?.title}
              </Link>
            </li>

            <li>
              <Link
                href="/news_today/post-for-assistant-teachers/"
                style={{ color: "#333333" }}
              >
                {newsSubsections?.[1]?.title}
              </Link>
            </li>

            <li>
              <Link
                href="/news_today/admission-is-going-on-for-nursery/"
                style={{ color: "#333333" }}
              >
                {newsSubsections?.[2]?.title}
              </Link>
            </li>

            <li>
              <Link
                href="/news_today/time-table-for-annual-examination/"
                style={{ color: "#333333" }}
              >
                {newsSubsections?.[3]?.title}
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
