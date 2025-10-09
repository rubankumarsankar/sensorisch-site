"use client";

import BespokeSolutionsSection from "../components/applicationpage/BespokeSolutionsSection";
import ProfileCTA from "../components/applicationpage/CTA";
import SensoRangeHero from "../components/applicationpage/SensoRangeHero";
import WhyChooseSenso from "../components/applicationpage/WhyChooseSenso";
import HeroCompnonet from "../components/Hero";
import StickyFullpageSlides from "../components/StickyFullpageSlides";
const ranges = [
  {
    reverse: false,
    badge: "Bakery",
    title: "SensoBake",
    blurb:
      "Flavours that enrich cakes, cookies, pastries, and breads with oven-true performance.",
    imageSrc: "/applicatio-1.png",
    iconSrc: "/icons/bakery.png",
    benefits: [
      {
        text: "Heat-stable formulations",
        icon: "/icons/icons-1.png",
        iconType: "img",
        iconBgClass: "bg-orange-50 ring-orange-200",
      },
      {
        text: "Consistent aroma release",
        icon: "/icons/icons-2.png",
        iconType: "img",
        iconBgClass: "bg-emerald-50 ring-emerald-200",
      },
      {
        text: "Wide pH tolerance",
        icon: "/icons/icons-3.png",
        iconType: "img",
        iconBgClass: "bg-sky-50 ring-sky-200",
      },
      {
        text: "Optimal baking performance",
        icon: "/icons/icons-4.png",
        iconType: "img",
        iconBgClass: "bg-amber-50 ring-amber-200",
      },
    ],
    tags: [
      { t: "Cakes & Muffins", cls: "bg-red-50 text-red-600 ring-red-200" },
      {
        t: "Cookies & Biscuits",
        cls: "bg-blue-50 text-blue-600 ring-blue-200",
      },
      { t: "Pastries", cls: "bg-emerald-50 text-emerald-600 ring-emerald-200" },
      {
        t: "Artisan Breads",
        cls: "bg-orange-50 text-orange-600 ring-orange-200",
      },
    ],
    primaryHref: "/samples/request",
    primaryLabel: "Request Sample",
    secondaryHref: "/downloads/techsheet",
    secondaryLabel: "Technical Sheet",
  },
  {
    reverse: true,
    badge: "Confectionery",
    title: "SensoTreat",
    blurb:
      "Playful and nostalgic profiles with controlled release for long-lasting flavour.",
    imageSrc: "/applicatio-2.png",
    iconSrc: "/icons/confectionery.png",
    benefits: [
      {
        text: "Controlled flavour release",
        icon: "/icons/icons-5.png",
        iconType: "img",
        iconBgClass: "bg-purple-50 ring-purple-200",
      },
      {
        text: "Long-lasting taste",
        icon: "/icons/icons-3.png",
        iconType: "img",
        iconBgClass: "bg-pink-50 ring-pink-200",
      },
      {
        text: "Sugar crystallization stability",
        icon: "/icons/icons-6.png",
        iconType: "img",
        iconBgClass: "bg-amber-50 ring-amber-200",
      },
      {
        text: "Texture compatibility",
        icon: "/icons/icons-7.png",
        iconType: "img",
        iconBgClass: "bg-teal-50 ring-teal-200",
      },
    ],
    tags: [
      { t: "Hard Candies", cls: "bg-amber-50 text-amber-700 ring-amber-200" },
      { t: "Gummies", cls: "bg-pink-50 text-pink-700 ring-pink-200" },
      { t: "Chocolates", cls: "bg-stone-100 text-stone-700 ring-stone-300" },
      { t: "Chewing Gum", cls: "bg-indigo-50 text-indigo-700 ring-indigo-200" },
    ],
    primaryHref: "/samples/request",
    primaryLabel: "Request Sample",
    secondaryHref: "/downloads/techsheet",
    secondaryLabel: "Technical Sheet",
  },
  {
    reverse: false,
    badge: "Dairy",
    title: "SensoCreme",
    blurb:
      "Creamy, authentic notes for ice creams, yoghurts, milkshakes, and cheeses with heat-stable options.",
    imageSrc: "/applicatio-3.png",
    iconSrc: "/icons/dairy.png",
    benefits: [
      {
        text: "Heat-stable options",
        icon: "/icons/icons-8.png",
        iconType: "img",
        iconBgClass: "bg-orange-50 ring-orange-200",
      },
      {
        text: "Protein compatibility",
        icon: "/icons/icons-9.png",
        iconType: "img",
        iconBgClass: "bg-blue-50 ring-blue-200",
      },
      {
        text: "Freeze-thaw stability",
        icon: "/icons/icons-4.png",
        iconType: "img",
        iconBgClass: "bg-cyan-50 ring-cyan-200",
      },
      {
        text: "Authentic dairy notes",
        icon: "/icons/icons-3.png",
        iconType: "img",
        iconBgClass: "bg-rose-50 ring-rose-200",
      },
    ],
    tags: [
      { t: "Ice Cream", cls: "bg-cyan-50 text-cyan-700 ring-cyan-200" },
      { t: "Yoghurt", cls: "bg-lime-50 text-lime-700 ring-lime-200" },
      {
        t: "Milkshakes",
        cls: "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200",
      },
      {
        t: "Cheese Products",
        cls: "bg-amber-50 text-amber-700 ring-amber-200",
      },
    ],
    primaryHref: "/samples/request",
    primaryLabel: "Request Sample",
    secondaryHref: "/downloads/techsheet",
    secondaryLabel: "Technical Sheet",
  },
  {
    reverse: true,
    badge: "Beverages",
    title: "SensoSip",
    blurb:
      "Architectures tuned for clarity, fizz stability, and shelf-life resilience across beverages.",
    imageSrc: "/applicatio-4.png",
    iconSrc: "/icons/beverage.png",
    benefits: [
      {
        text: "Beverage clarity",
        icon: "/icons/icons-10.png",
        iconType: "img",
        iconBgClass: "bg-sky-50 ring-sky-200",
      },
      {
        text: "Carbonation stability",
        icon: "/icons/icons-3.png",
        iconType: "img",
        iconBgClass: "bg-indigo-50 ring-indigo-200",
      },
      {
        text: "Extended shelf-life",
        icon: "/icons/icons-11.png",
        iconType: "img",
        iconBgClass: "bg-green-50 ring-green-200",
      },
      {
        text: "pH resilience",
        icon: "/icons/icons-2.png",
        iconType: "img",
        iconBgClass: "bg-teal-50 ring-teal-200",
      },
    ],
    tags: [
      { t: "Juices", cls: "bg-orange-50 text-orange-700 ring-orange-200" },
      { t: "Carbonated Drinks", cls: "bg-sky-50 text-sky-700 ring-sky-200" },
      {
        t: "Energy Drinks",
        cls: "bg-yellow-50 text-yellow-700 ring-yellow-200",
      },
      {
        t: "Mocktails",
        cls: "bg-emerald-50 text-emerald-700 ring-emerald-200",
      },
    ],
    primaryHref: "/samples/request",
    primaryLabel: "Request Sample",
    secondaryHref: "/downloads/techsheet",
    secondaryLabel: "Technical Sheet",
  },
  {
    reverse: false,
    badge: "Pharmaceuticals",
    title: "Senso+",
    blurb:
      "Palatable profiles for syrups and chewables with bitterness modulation and aftertaste control.",
    imageSrc: "/applicatio-5.png",
    iconSrc: "/icons/pharma.png",
    benefits: [
      {
        text: "Bitterness masking",
        icon: "/icons/icons-3.png",
        iconType: "img",
        iconBgClass: "bg-violet-50 ring-violet-200",
      },
      {
        text: "Aftertaste control",
        icon: "/icons/icons-12.png",
        iconType: "img",
        iconBgClass: "bg-fuchsia-50 ring-fuchsia-200",
      },
      {
        text: "Child-friendly profiles",
        icon: "/icons/icons-9.png",
        iconType: "img",
        iconBgClass: "bg-rose-50 ring-rose-200",
      },
      {
        text: "Stability in formulations",
        icon: "/icons/icons-6.png",
        iconType: "img",
        iconBgClass: "bg-sky-50 ring-sky-200",
      },
    ],
    tags: [
      {
        t: "Liquid Medicines",
        cls: "bg-indigo-50 text-indigo-700 ring-indigo-200",
      },
      {
        t: "Chewable Tablets",
        cls: "bg-amber-50 text-amber-700 ring-amber-200",
      },
      { t: "Syrups", cls: "bg-cyan-50 text-cyan-700 ring-cyan-200" },
      {
        t: "Supplements",
        cls: "bg-emerald-50 text-emerald-700 ring-emerald-200",
      },
    ],
    primaryHref: "/samples/request",
    primaryLabel: "Request Sample",
    secondaryHref: "/downloads/techsheet",
    secondaryLabel: "Technical Sheet",
  },
  {
    reverse: true,
    badge: "Nutraceuticals",
    title: "SensoActive",
    blurb:
      "Flavours that enhance proteins, botanicals, minerals, and vitamins while masking off-notes.",
    imageSrc: "/applicatio-6.png",
    iconSrc: "/icons/nutra.png",
    benefits: [
      {
        text: "Nutrient masking",
        icon: "/icons/icons-13.png",
        iconType: "img",
        iconBgClass: "bg-emerald-50 ring-emerald-200",
      },
      {
        text: "Protein compatibility",
        icon: "/icons/icons-4.png",
        iconType: "img",
        iconBgClass: "bg-blue-50 ring-blue-200",
      },
      {
        text: "Botanical enhancement",
        icon: "/icons/icons-14.png",
        iconType: "img",
        iconBgClass: "bg-green-50 ring-green-200",
      },
      {
        text: "Mineral taste modulation",
        icon: "/icons/icons-3.png",
        iconType: "img",
        iconBgClass: "bg-slate-50 ring-slate-200",
      },
    ],
    tags: [
      { t: "Protein Powders", cls: "bg-lime-50 text-lime-700 ring-lime-200" },
      {
        t: "Vitamin Supplements",
        cls: "bg-purple-50 text-purple-700 ring-purple-200",
      },
      { t: "Functional Foods", cls: "bg-teal-50 text-teal-700 ring-teal-200" },
      {
        t: "Sports Nutrition",
        cls: "bg-orange-50 text-orange-700 ring-orange-200",
      },
    ],
    primaryHref: "/samples/request",
    primaryLabel: "Request Sample",
    secondaryHref: "/downloads/techsheet",
    secondaryLabel: "Technical Sheet",
  },
  {
    reverse: false,
    badge: "Savoury",
    title: "SensoSpice",
    blurb:
      "Authentic spice & herb signatures that add richness to soups, sauces, snacks, and seasonings.",
    imageSrc: "/applicatio-7.png",
    iconSrc: "/icons/spice.png",
    benefits: [
      {
        text: "Authentic spice profiles",
        icon: "/icons/icons-6.png",
        iconType: "img",
        iconBgClass: "bg-amber-50 ring-amber-200",
      },
      {
        text: "Heat resistance",
        icon: "/icons/icons-13.png",
        iconType: "img",
        iconBgClass: "bg-red-50 ring-red-200",
      },
      {
        text: "Oil-soluble options",
        icon: "/icons/icons-14.png",
        iconType: "img",
        iconBgClass: "bg-orange-50 ring-orange-200",
      },
      {
        text: "Clean label friendly",
        icon: "/icons/icons-4.png",
        iconType: "img",
        iconBgClass: "bg-emerald-50 ring-emerald-200",
      },
    ],
    tags: [
      { t: "Seasonings", cls: "bg-amber-50 text-amber-700 ring-amber-200" },
      { t: "Sauces", cls: "bg-red-50 text-red-700 ring-red-200" },
      { t: "Soups", cls: "bg-orange-50 text-orange-700 ring-orange-200" },
      { t: "Snacks", cls: "bg-yellow-50 text-yellow-700 ring-yellow-200" },
    ],
    primaryHref: "/samples/request",
    primaryLabel: "Request Sample",
    secondaryHref: "/downloads/techsheet",
    secondaryLabel: "Technical Sheet",
  },
  {
    reverse: true,
    badge: "Oral & Personal Care",
    title: "SensoCare",
    blurb:
      "Cooling, refreshing notes for toothpastes, mouthwashes, and personal-care applications.",
    imageSrc: "/applicatio-8.png",
    iconSrc: "/icons/oralcare.png",
    benefits: [
      {
        text: "Cooling sensation",
        icon: "/icons/icons-10.png",
        iconType: "img",
        iconBgClass: "bg-sky-50 ring-sky-200",
      },
      {
        text: "Long-lasting freshness",
        icon: "/icons/icons-2.png",
        iconType: "img",
        iconBgClass: "bg-teal-50 ring-teal-200",
      },
      {
        text: "Antimicrobial compatibility",
        icon: "/icons/icons-4.png",
        iconType: "img",
        iconBgClass: "bg-cyan-50 ring-cyan-200",
      },
      {
        text: "Oral-safe formulations",
        icon: "/icons/icons-15.png",
        iconType: "img",
        iconBgClass: "bg-indigo-50 ring-indigo-200",
      },
    ],
    tags: [
      { t: "Toothpaste", cls: "bg-sky-50 text-sky-700 ring-sky-200" },
      { t: "Mouthwash", cls: "bg-teal-50 text-teal-700 ring-teal-200" },
      { t: "Oral Sprays", cls: "bg-blue-50 text-blue-700 ring-blue-200" },
      {
        t: "Personal Care",
        cls: "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200",
      },
    ],
    primaryHref: "/samples/request",
    primaryLabel: "Request Sample",
    secondaryHref: "/downloads/techsheet",
    secondaryLabel: "Technical Sheet",
  },
  {
    reverse: false,
    badge: "Natural Segment",
    title: "SensoNat",
    blurb:
      "Nature-derived flavours & colours for clean-label ambitions with extracts and distillates.",
    imageSrc: "/applicatio-9.png",
    iconSrc: "/icons/natural.png",
    benefits: [
      {
        text: "100% natural origin",
        icon: "/icons/icons-4.png",
        iconType: "img",
        iconBgClass: "bg-emerald-50 ring-emerald-200",
      },
      {
        text: "Clean label compliant",
        icon: "/icons/icons-13.png",
        iconType: "img",
        iconBgClass: "bg-lime-50 ring-lime-200",
      },
      {
        text: "Sustainable sourcing",
        icon: "/icons/icons-16.png",
        iconType: "img",
        iconBgClass: "bg-green-50 ring-green-200",
      },
      {
        text: "Certification ready",
        icon: "/icons/icons-6.png",
        iconType: "img",
        iconBgClass: "bg-amber-50 ring-amber-200",
      },
    ],
    tags: [
      {
        t: "Organic Products",
        cls: "bg-green-50 text-green-700 ring-green-200",
      },
      {
        t: "Clean Label Foods",
        cls: "bg-emerald-50 text-emerald-700 ring-emerald-200",
      },
      { t: "Natural Beverages", cls: "bg-teal-50 text-teal-700 ring-teal-200" },
      { t: "Premium Ranges", cls: "bg-amber-50 text-amber-700 ring-amber-200" },
    ],
    primaryHref: "/contact",
    primaryLabel: "Request Sample",
    secondaryHref: "/contact",
    secondaryLabel: "Technical Sheet",
  },
];

export default function ApplicationSolutions() {
  return (
    <>
      <HeroCompnonet
        data={{
          eyebrow: "Applications & Solutions",
          title: "Senso™ ",
          highlight: "Application Ranges",
          blurb:
            "Ready-to-apply systems that package our expertise into risk-reducing, time-saving solutions for faster product development and market success.",
          image: { src: "/hero-banner.png", alt: "Lab and product banner" },
          primary: { href: "/#solutions", label: "Explore Solutions" },
          secondary: { href: "/#contact", label: "Request Samples" },

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

      <WhyChooseSenso />
      {/* <main className="bg-background text-foreground"> */}
        <StickyFullpageSlides fade translate heightMultiplier={1}>
          {ranges.map((r, i) => (
            <SensoRangeHero
              key={r.title + i}
              reverse={r.reverse}
              badge={r.badge}
              title={r.title}
              blurb={r.blurb}
              imageSrc={r.imageSrc}
              iconSrc={r.iconSrc}
              imageAlt={`${r.title} hero`}
              benefits={r.benefits}
              tags={r.tags}
            />
          ))}
        </StickyFullpageSlides>
      {/* </main> */}
      <BespokeSolutionsSection
        onPrimaryHref="/contact"
        onPrimaryLabel="Discuss Your Bespoke Needs"
        onProcessHref="#process"
      />
      <ProfileCTA />
    </>
  );
}
