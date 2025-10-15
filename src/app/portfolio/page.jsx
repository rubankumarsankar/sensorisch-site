// app/portfolio/page.jsx
"use client";

import HeroComponent from "../components/Hero";
import FlavourFamiliesGrid from "../components/portfolio/FlavourFamiliesGrid";
import FinalCta from "../components/portfolio/FinalCta";
import FormatsGrid from "../components/portfolio/FormatsGrid";
import { DecorSection, DriedIngredientsSection, PremiumSpreadsSection, SystemsSection } from "../components/portfolio/PortfolioSections";
import NaturalColoursShowcase from "../components/portfolio/NaturalColoursShowcase";


export default function PortfolioPage() {
  return (
    <main className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <HeroComponent
        data={{
          eyebrow: "Our Portfolio",
          title: "Complete",
          highlight: "Flavour Solutions",
          blurb:
            "From high-impact flavours to natural colours and ready-to-use systems -discover our modular portfolio built for consistent performance across every application.",
          image: { src: "/banners/contact.png", alt: "Lab and product banner" },
          primary: { href: "/applications-solutions", label: "Request Full Catalogue" },
          secondary: { href: "/contact", label: "Get Samples" },
          scrollToId: "why-sensorisch",
          enableTilt: true,
          showUnderline: true,
          showShimmer: true,
          showHalo: true,
          className: "bg-background",
          containerClassName: "section-container py-16 md:py-24",
        }}
      />
      <FlavourFamiliesGrid />
      <FormatsGrid />
      <NaturalColoursShowcase />
      <PremiumSpreadsSection />
      <DecorSection />
      <SystemsSection />
      <DriedIngredientsSection />
      <FinalCta />
    </main>
  );
}
