import InnerContent from "@/components/about-us/about-mission/InnerContent";
import PrincipalBanner from "@/components/about-us/principal-message/PrincipalBanner";
import WhychooseBanner from "@/components/about-us/why-choose-us/WhychooseBanner";
import AboutSection from "@/components/about-us/why-choose-us/AboutSection";
import { fetchPageData } from "@/services/fetchData.service";
import { headers } from "next/headers";

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
export default async function PrincipalMessage() {
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
  
    /* ---------------- Extract Sections ---------------- */
  
    const sections =
      siteData.pageItemdataWithSubsection ||
      siteData.data?.pageItemdataWithSubsection ||
      [];
  
    const bannerSection: Section | undefined = sections[0];

  return <>
  <PrincipalBanner section={bannerSection} />
  <InnerContent />
  </>
  ;
}