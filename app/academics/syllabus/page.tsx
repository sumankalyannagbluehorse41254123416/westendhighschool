import SyllabusBanner from "@/components/academics/syllabus/SyllabusBanner";
import SyllabusContent from "@/components/academics/syllabus/SyllabusContent";
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
export default async function SyllabusPage() {
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
    
  return (
    <>
      <SyllabusBanner section={bannerSection} />
      <SyllabusContent />
    </>
  );
}