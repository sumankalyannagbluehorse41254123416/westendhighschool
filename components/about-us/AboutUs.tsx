import { fetchPageData } from "@/services/fetchBlog.service";
import { headers } from "next/headers";

/* ---------------- Types ---------------- */

interface BlogPost {
  title?: string;
  excerpt?: string;
}

export default async function AboutUs() {
  const rqHeaders = headers();
  const host = (await rqHeaders).get("host") || "localhost:3000";
  const headersObj = Object.fromEntries((await rqHeaders).entries());

  let siteData: any = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "1c7fdabc-5f10-464f-aed4-dfd66c01f37b"
    );
  } catch (error) {
    console.error("Blog fetch failed");
    return null;
  }

  const posts: BlogPost[] = siteData?.userSinglePostdata || [];

  if (!posts.length) {
    console.warn("No blog data found");
    return null;
  }

  const post = posts[0]; // ✅ index 0

  return (
    <div className="innermiddle about-text">
      <div className="clear"></div>

      <div className="header_img">
        {/* ✅ Dynamic Title */}
        <p className="wlcm_txt">{post.title}</p>
      </div>

      <div className="inner_con">
        {/* ✅ Dynamic Excerpt */}
        <div
          style={{ textAlign: "justify" }}
          dangerouslySetInnerHTML={{ __html: post.excerpt || "" }}
        />
      </div>
    </div>
  );
}
