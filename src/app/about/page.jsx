"use client";

import AboutSensorisch from "../components/aboutpage/AboutSensorisch";
import CapabilitiesSection from "../components/aboutpage/CapabilitiesSection";
import CompanyProfileCTA from "../components/aboutpage/CompanyProfileCTA";
import HeroSection from "../components/aboutpage/heroSection";
import SetsUsApartAndMarkets from "../components/aboutpage/SetsUsApartAndMarkets";
import ValuesSection from "../components/aboutpage/ValuesSection";
import VisionMission from "../components/aboutpage/VisionMission";


export default function AboutUS() {
  return (
   <>
   <HeroSection />
   <AboutSensorisch />
   <VisionMission />
   <ValuesSection />
   <CapabilitiesSection />
   <SetsUsApartAndMarkets />
   <CompanyProfileCTA />
   </>
  );
}
