import { fetchPageData } from "@/services/fetchBlog.service";
import { headers } from "next/headers";

interface BlogPost {
  title?: string;
  excerpt?: string;
}

export default async function BusChangePage() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: any = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "f2fdccaf-fe7d-4993-8f7f-2fe1a3452077"
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
          fontSize: "large",
          fontFamily: "book antiqua, palatino",
        }}
        dangerouslySetInnerHTML={{
          __html: post?.excerpt || "",
        }}
      />
    </div>
  );
}
