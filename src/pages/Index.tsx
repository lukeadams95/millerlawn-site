import SiteLayout from "@/components/SiteLayout";
import Hero from "@/components/Hero";
import HolidayPromo from "@/components/HolidayPromo";
import Services from "@/components/Services";
import RecentWork from "@/components/RecentWork";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import { isChristmasLightSeason } from "@/lib/season";

const Index = () => {
  const holidays = isChristmasLightSeason();

  return (
    <SiteLayout>
      <Hero overlapped={holidays} />
      {holidays && <HolidayPromo />}
      <Services />
      <RecentWork />
      <About />
      <Testimonials />
    </SiteLayout>
  );
};

export default Index;
