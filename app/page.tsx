import BannerSlider from "@/components/BannerSlider";
import WelcomeSection from "@/components/WelcomeSection";
import ServiceSection from "@/components/ServiceSection";
import ActivitySection from "@/components/ActivitySection";
import { fetchPageData } from "@/services/fetchData.service";
import { headers } from "next/headers";

// Helper: remove HTML tags
const stripHtml = (html: string) => (html ? html.replace(/<[^>]*>/g, "") : "");

// ✅ Define a lightweight type for your CMS structure
interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
  [key: string]: unknown; // safer than `any`
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}
export default async function Home() {
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "3653c9cc-72b4-434f-b3f1-823bbf55f6cf",
    );
  } catch (error) {
    console.error("Fetch error:", error);
  }
  console.log("SITE DATA:", siteData);

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];
  return (
    <>
      <BannerSlider sections={sections} />
      <WelcomeSection section={sections[1]} />
      <ServiceSection section={sections[2]} newsSection={sections[3]} />

 <ActivitySection section={sections[4]} />

    </>
  );
}
