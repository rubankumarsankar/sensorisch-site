"use client";

import AboutSensorisch from "../components/aboutpage/AboutSensorisch";
import CapabilitiesSection from "../components/aboutpage/CapabilitiesSection";
import CompanyProfileCTA from "../components/aboutpage/CompanyProfileCTA";
import HeroSection from "../components/aboutpage/heroSection";
import SetsUsApartAndMarkets from "../components/aboutpage/SetsUsApartAndMarkets";
import ValuesSection from "../components/aboutpage/ValuesSection";
import VisionMission from "../components/aboutpage/VisionMission";
import HeroCompnonet from "../components/Hero";

export default function AboutUS() {
  return (
    <>
      <HeroCompnonet
        data={{
          eyebrow: "About Sensorisch",
          title: "Science - Led Innovation Meets",
          highlight: "Culinary Craft",
          blurb:
            "We blend rigorous R&D with culinary artistry to create end-to-end taste and aroma experiences that make everyday products extraordinary.",
          image: { src: "/hero-banner.png", alt: "Lab and product banner" },

          scrollToId: "why-sensorisch",

          // toggles
          enableTilt: true,
          showUnderline: true,
          showShimmer: true,
          showHalo: true,

          // layout
          className: "bg-background",
          containerClassName: "section-container py-16 md:py-24",
        }}
      />
      {/* <HeroSection /> */}
      <AboutSensorisch />
      <VisionMission />
      <ValuesSection />
      <CapabilitiesSection />
      <SetsUsApartAndMarkets />
      <CompanyProfileCTA />
    </>
  );
}
