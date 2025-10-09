"use client";

import HeroCompnonet from "./components/Hero";
import ApplicationExpertise from "./components/homepage/ApplicationExpertise";
import BriefToScale from "./components/homepage/BriefToScale";
import PromoSection from "./components/homepage/CheesePromoSection";
import CTAWideBanner from "./components/homepage/CTAWideBanner";
import HeroSection from "./components/homepage/heroSection";
import QualityResponsibility from "./components/homepage/QualityResponsibility";
import WhyChooseSection from "./components/homepage/whychooseSection";

export default function Home() {
  return (
    <>
      <HeroCompnonet
        data={{
          eyebrow: "Flavours & Fragrances. Engineered for Impact.",
          title: "Make Everyday Products Feel",
          highlight: "Extraordinary",
          blurb:
            "Make everyday products feel extraordinary. Partner with us to create repeat-worthy taste and aroma through science-led innovation, application-ready systems, and rigorous execution that scales consistently.",

          primary: { href: "/#solutions", label: "Explore Solutions" },
          secondary: { href: "/#contact", label: "Request Samples" },

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
      <WhyChooseSection />
      <PromoSection />
      <ApplicationExpertise />
      <BriefToScale />
      <QualityResponsibility />
      <CTAWideBanner />
    </>
  );
}
