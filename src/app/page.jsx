"use client";

import ApplicationExpertise from "./components/homepage/ApplicationExpertise";
import PromoSection from "./components/homepage/CheesePromoSection";
import HeroSection from "./components/homepage/heroSection";
import WhyChooseSection from "./components/homepage/whychooseSection";

export default function Home() {
  return (
   <>
   <HeroSection />
   <WhyChooseSection />
   <PromoSection />
   <ApplicationExpertise />
   </>
  );
}
