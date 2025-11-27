"use client";

import HeroComponent from "../components/Hero";
import HeroCompnonet from "../components/Hero";
import CTA from "../components/Insights/FinalCta";
import IndustryResources from "../components/Insights/IndustryResources";
import InsightsExplorer from "../components/Insights/InsightsExplorer";
import LatestInsights from "../components/Insights/LatestInsights";
import PressUpdates from "../components/Insights/PressUpdates";

export default function Insights() {
  return (
    <>
      {/* <HeroCompnonet
        data={{
          eyebrow: "News & Trends",
          title: "Industry ",
          highlight: "Insights & Updates",
          blurb:
            "Stay ahead of flavour and fragrance trends with our expert insights, industry analysis, and company updates from the Sensorisch team.",
          image: { src: "/banners/Insights.png", alt: "Lab and product banner" },
          scrollToId: "insights",

          // toggles
          enableTilt: true,
          showUnderline: true,
          showShimmer: true,
          showHalo: true,

          // layout
          className: "bg-background",
          containerClassName: "section-container py-16 md:py-24",
        }}
      /> */}
      <HeroComponent
        data={{
          imageMobile: { src: "/banners/insights-mob.jpg", alt: "Mobile Banner" },
          imageDesktop: { src: "/banners/insights-web.jpg", alt: "Desktop Banner" },
      
          primary: {
            href: "/applications-solutions",
            label: "Request Full Catalogue"
          },
      
          secondary: {
            href: "/contact",
            label: "Request Samples"
          },
      
          scrollToId: "insights"
        }}
      />
      <InsightsExplorer />
      <LatestInsights />
      <PressUpdates />
      <IndustryResources />
      <CTA />
    </>
  );
}
