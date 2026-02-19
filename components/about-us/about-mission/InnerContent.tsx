import { fetchPageData } from "@/services/fetchBlog.service";
import { headers } from "next/headers";

interface BlogPost {
  title?: string;
  excerpt?: string;
}

export default async function InnerContent() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: any = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "5e921fa8-d698-4596-9310-d5617dff5944"
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

  // ⚠️ Based on your API response, only index 0 exists
  const post = posts[0];

  return (
    <div className="inner_con">
      <div
        style={{
          textAlign: "justify",
        }}
        dangerouslySetInnerHTML={{
          __html: post?.excerpt || "",
        }}
      />
    </div>
  );
}
