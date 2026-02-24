import ContactBanner from "@/components/contact-us/ContactBanner";
import ContactPage from "@/components/contact-us/ContactPage";
import { fetchPageData } from "@/services/fetchData.service";
import { fetchFormFields } from "@/services/fetchFormFields";
import { headers } from "next/headers";

interface Section {
  title?: string;
  bannerImage?: string;
  [key: string]: unknown;
  
}


interface SiteData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function Contact() {
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      { host },
      "3653c9cc-72b4-434f-b3f1-823bbf55f6cf"
    );
  } catch (error) {
    console.error("CMS Fetch error:", error);
  }

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  const bannerSection = sections[0];

  let form = null;
  let fields: any[] = [];

  try {
    const formRes = await fetchFormFields(
      { host },
      process.env.FROM_UID || process.env.NEXT_PUBLIC_FROM_UID
    );

    form = formRes?.form || null;
    fields = formRes?.fields || [];
  } catch (err) {
    console.error("Form fetch error:", err);
  }

  return (
    <>
      <ContactBanner section={bannerSection} />
      <ContactPage fields={fields} />
    </>
  );
}
