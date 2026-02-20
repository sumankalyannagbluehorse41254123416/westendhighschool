import { fetchPageData } from "@/services/fetchBlog.service";
import { headers } from "next/headers";

interface BlogPost {
  title?: string;
  excerpt?: string;
}

export default async function SyllabusContent() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: any = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "b4a4a908-dfcd-4197-981c-e74a2ef47d22"
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
