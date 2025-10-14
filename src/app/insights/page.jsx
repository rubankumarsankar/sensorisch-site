"use client";

import HeroCompnonet from "../components/Hero";

export default function Insights() {
  return (
    <>
      <HeroCompnonet
        data={{
          eyebrow: "News & Trends",
          title: "Industry ",
          highlight: "Insights & Updates",
          blurb:
            "Stay ahead of flavour and fragrance trends with our expert insights, industry analysis, and company updates from the Sensorisch team.",
          image: { src: "/banners/contact.png", alt: "Lab and product banner" },
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
    </>
  );
}
