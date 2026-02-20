import { fetchPageData } from "@/services/fetchBlog.service";
import { headers } from "next/headers";

interface BlogPost {
  title?: string;
  excerpt?: string;
}

export default async function SubjectContent() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: any = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "35a6b117-2680-4ec4-8a51-75bcf96208da"
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

  // ✅ Your API returns only 1 item
  const post = posts[0];

  return (
    <div className="container">
      <div className="innermiddle">
        <div className="clear"></div>

        <div className="inner_con general_info_con">
          <div
            style={{ textAlign: "justify" }}
            dangerouslySetInnerHTML={{
              __html: post?.excerpt || "",
            }}
          />
        </div>
      </div>
    </div>
  );
}
