import TransportBanner from "@/components/infrastructure/transport/TransportBanner";
import Transport from "@/components/infrastructure/transport/Transport";
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
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function Transportpage() {
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

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  const bannerSection = sections[0];
  const transportSection = sections[11]; // ✅ All LI from here

  return (
    <>
      <TransportBanner section={bannerSection} />
      <Transport section={transportSection} />
    </>
  );
}
