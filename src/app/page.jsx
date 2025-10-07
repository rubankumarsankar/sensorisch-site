"use client";

import ApplicationExpertise from "./components/homepage/ApplicationExpertise";
import BriefToScale from "./components/homepage/BriefToScale";
import PromoSection from "./components/homepage/CheesePromoSection";
import HeroSection from "./components/homepage/heroSection";
import QualityResponsibility from "./components/homepage/QualityResponsibility";
import WhyChooseSection from "./components/homepage/whychooseSection";

export default function Home() {
  return (
   <>
   <HeroSection />
   <WhyChooseSection />
   <PromoSection />
   <ApplicationExpertise />
   <BriefToScale />
   <QualityResponsibility />
   </>
  );
}
