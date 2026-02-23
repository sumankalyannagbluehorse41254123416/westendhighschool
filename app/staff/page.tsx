import StaffBanner from "@/components/staff/StaffBanner";
import Team from "@/components/staff/Team";
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

export default async function Staff() {
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

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  const bannerSection: Section | undefined = sections[0];

  // 👉 Index 8 section for Team
  const teamSection: Section | undefined = sections[8];

  return (
    <>
      <StaffBanner section={bannerSection} />
      <Team subsections={teamSection?.subsections || []} />
    </>
  );
}
