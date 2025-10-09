"use client";

import HeroSection from "../components/aboutpage/heroSection";
import ContactPage from "../components/contactpage/ContactPage";
import HeroCompnonet from "../components/Hero";

export default function ContactUs() {
  return (
    <>
      <HeroCompnonet
        data={{
          eyebrow: "Contact Us",
          title: "Let's Create Something ",
          highlight: "Extraordinary",
          blurb:
            "Ready to transform your products with science-led flavour solutions? Our experts are here to guide you from concept to market success.",
          image: { src: "/hero-banner.png", alt: "Lab and product banner" },
          //  primary: { href: "/#solutions", label: "Explore Solutions" },
          //  secondary: { href: "/#contact", label: "Request Samples" },

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
      <ContactPage />
    </>
  );
}
