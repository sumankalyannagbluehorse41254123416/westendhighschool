import Image from "next/image";
import { fetchPageData } from "@/services/fetchBanner.service";
import { headers } from "next/headers";

/* ---------------- Helper ---------------- */

const stripHtml = (html?: string) =>
  html ? html.replace(/<[^>]*>/g, "") : "";

/* ---------------- Types ---------------- */

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
  [key: string]: unknown;
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

/* ---------------- Server Component ---------------- */

export default async function BannerSection() {
  // 1️⃣ Read request headers
  const rqHeaders = headers();
  const host = (await rqHeaders).get("host") || "localhost:3000";
  const headersObj = Object.fromEntries((await rqHeaders).entries());

  // 2️⃣ Fetch banner data
  let siteData: any = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "ec136779-28a8-43b8-b180-7c36440fe58f" // ✅ Banner ID
    );
    // console.log("SITE DATA:", siteData);
  } catch (error) {
    console.error("Banner fetch failed");
    return null;
  }
  

  // 3️⃣ Normalize response
  const sections = siteData.singlebannerData
  ;

  if (!sections.length) {
    console.warn("No banner data found");
    return null;
  }

  // 4️⃣ Banner index = 0
  const banner = sections[0];

  const imageUrl =
    banner.desktopImage ||
    "/images/default-banner.jpg";

  const title = stripHtml(banner.title);
  const subtitle = stripHtml(banner.description);

  /* ---------------- JSX ---------------- */

  return (
    <div id="banner" role="banner">
      ok
      <div className="flexslider">
        <div className="banner_wrap">
          <ul className="banner_slide">
            <li
              style={{
                width: "100%",
                float: "left",
                display: "inline-block",
              }}
            >
              {/* -------- Banner Image -------- */}
              <Image
                src={imageUrl}
                alt={title || "Banner"}
                width={690}
                height={732}
                style={{ width: "100%", height: "auto" }}
                draggable={false}
                priority
              />

              {/* -------- Banner Caption -------- */}
              <div className="banner_caption">
                {title && <h2>{title}</h2>}
                {subtitle && <h3>{subtitle}</h3>}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
