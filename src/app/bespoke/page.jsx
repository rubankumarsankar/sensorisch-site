"use client";

import BespokeApplications from "../components/bespoke/BespokeApplications";
import BespokeProcessSection from "../components/bespoke/BespokeProcessSection";
import CompetitiveEdgeSection from "../components/bespoke/CompetitiveEdgeSection";
import CTA from "../components/bespoke/cta";
import PartnerSection from "../components/bespoke/PartnerSection";
import QualityComplianceSection from "../components/bespoke/QualityComplianceSection";
import HeroCompnonet from "../components/Hero";

export default function bespoke() {
  return (
    <>
      <HeroCompnonet
        data={{
          eyebrow: "Bespoke Solutions",
          title: "Tailored to Your ",
          highlight: "Unique Needs",
          blurb:
            "At Sensorisch, we know that every brand has a unique identity, and so should its flavours. Our bespoke solutions are designed to deliver exactly what your product requires from taste profile to technical format.",
          image: { src: "/banners/contact.png", alt: "Lab and product banner" },
          primary: {
            href: "/applications-solutions",
            label: "Start Your Project",
          },
          secondary: { href: "/portfolio", label: "View Our Portfolio" },

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
      <PartnerSection />
      <BespokeProcessSection />
      <BespokeApplications />
      <CompetitiveEdgeSection />
      <QualityComplianceSection />
      <CTA />
    </>
  );
}
