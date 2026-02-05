import Menu from "@/components/Menu";
import BannerSlider from "@/components/BannerSlider";
import WelcomeSection from "@/components/WelcomeSection";
import ServiceSection from "@/components/ServiceSection";
import ActivitySection from "@/components/ActivitySection";

export default function Home() {
  return <>
  <Menu />
  <BannerSlider />  
  <WelcomeSection />  
  <ServiceSection />
  <ActivitySection />
  </>;
}