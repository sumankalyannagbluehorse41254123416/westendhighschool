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
      "76e2f94f-55bb-4feb-8c1a-ea24319aa517"
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

  // ✅ Use index 4 (with safe fallback)
  const post = posts[4] || posts[0];

  return (
    <div className="inner_con">
      <div
        style={{
          textAlign: "justify",
          fontSize: "16px",
        }}
        dangerouslySetInnerHTML={{
          __html: post?.excerpt || "",
        }}
      />
    </div>
  );
}
