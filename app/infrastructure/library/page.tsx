import LibraryBanner from "@/components/infrastructure/library/LibraryBanner";
import LibraryPage from "@/components/infrastructure/library/LibraryPage";

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

export default async function Library() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "3653c9cc-72b4-434f-b3f1-823bbf55f6cf"
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

  // ✅ index 5 section for Library content
  const librarySection: Section | undefined = sections[5];

  return (
    <>
      <LibraryBanner section={bannerSection} />
      <LibraryPage section={librarySection} />
    </>
  );
}
