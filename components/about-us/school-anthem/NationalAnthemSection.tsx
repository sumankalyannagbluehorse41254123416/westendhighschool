import { fetchPageData } from "@/services/fetchBlog.service";
import { headers } from "next/headers";

interface BlogPost {
  title?: string;
  excerpt?: string;
}

export default async function NationalAnthemSection() {
  // ✅ Correct way to use headers()
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: any = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "1d4fb14d-b40c-4e88-a570-56567b1f8986"
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

  // ✅ Your array has only 1 item → index 0
  const post = posts[0];

  return (
    <div className="inner_con">
      <div
        style={{
          textAlign: "center",
          fontFamily: "comic sans ms, sans-serif",
          fontSize: "large",
        }}
        dangerouslySetInnerHTML={{
          __html: post?.excerpt || "",
        }}
      />
    </div>
  );
}
