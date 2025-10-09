"use client";

import HeroSection from "../components/aboutpage/heroSection";
import BespokeSolutionsSection from "../components/applicationpage/BespokeSolutionsSection";
import ProfileCTA from "../components/applicationpage/CTA";
import SensoRangeHero from "../components/applicationpage/SensoRangeHero";
import WhyChooseSenso from "../components/applicationpage/WhyChooseSenso";
import StickyFullpageSlides from "../components/StickyFullpageSlides";
const ranges = [
  {
    reverse: false,
    badge: "Bakery",
    title: "SensoBake",
    blurb:
      "Flavours that enrich cakes, cookies, pastries, and breads with oven-true performance.",
    imageSrc: "/assets/sensobake/banner-hero.webp",
    iconSrc: "/icons/bakery.png",
    benefits: [
      { text: "Heat-stable formulations",     icon: "/icons/heat.png",   iconType: "img", iconBgClass: "bg-orange-50 ring-orange-200" },
      { text: "Consistent aroma release",     icon: "/icons/aroma.png",  iconType: "img", iconBgClass: "bg-emerald-50 ring-emerald-200" },
      { text: "Wide pH tolerance",            icon: "/icons/ph.png",     iconType: "img", iconBgClass: "bg-sky-50 ring-sky-200" },
      { text: "Optimal baking performance",   icon: "/icons/bread.png",  iconType: "img", iconBgClass: "bg-amber-50 ring-amber-200" },
    ],
    tags: [
      { t: "Cakes & Muffins",    cls: "bg-red-50 text-red-600 ring-red-200" },
      { t: "Cookies & Biscuits", cls: "bg-blue-50 text-blue-600 ring-blue-200" },
      { t: "Pastries",           cls: "bg-emerald-50 text-emerald-600 ring-emerald-200" },
      { t: "Artisan Breads",     cls: "bg-orange-50 text-orange-600 ring-orange-200" },
    ],
    primaryHref : "/samples/request",
      primaryLabel : "Request Sample",
      secondaryHref : "/downloads/techsheet",
      secondaryLabel : "Technical Sheet"
  },
  {
    reverse: true,
    badge: "Confectionery",
    title: "SensoTreat",
    blurb:
      "Playful and nostalgic profiles with controlled release for long-lasting flavour.",
    imageSrc: "/assets/sensotreat/banner-hero.webp",
    iconSrc: "/icons/confectionery.png",
    benefits: [
      { text: "Controlled flavour release",   icon: "/icons/release.png",   iconType: "img", iconBgClass: "bg-purple-50 ring-purple-200" },
      { text: "Long-lasting taste",           icon: "/icons/longlast.png",  iconType: "img", iconBgClass: "bg-pink-50 ring-pink-200" },
      { text: "Sugar crystallization stability", icon: "/icons/crystal.png", iconType: "img", iconBgClass: "bg-amber-50 ring-amber-200" },
      { text: "Texture compatibility",        icon: "/icons/texture.png",   iconType: "img", iconBgClass: "bg-teal-50 ring-teal-200" },
    ],
    tags: [
      { t: "Hard Candies",  cls: "bg-amber-50 text-amber-700 ring-amber-200" },
      { t: "Gummies",       cls: "bg-pink-50 text-pink-700 ring-pink-200" },
      { t: "Chocolates",    cls: "bg-stone-100 text-stone-700 ring-stone-300" },
      { t: "Chewing Gum",   cls: "bg-indigo-50 text-indigo-700 ring-indigo-200" },
    ],
    primaryHref : "/samples/request",
      primaryLabel : "Request Sample",
      secondaryHref : "/downloads/techsheet",
      secondaryLabel : "Technical Sheet"
  },
  {
    reverse: false,
    badge: "Dairy",
    title: "SensoCreme",
    blurb:
      "Creamy, authentic notes for ice creams, yoghurts, milkshakes, and cheeses with heat-stable options.",
    imageSrc: "/assets/sensocreme/banner-hero.webp",
    iconSrc: "/icons/dairy.png",
    benefits: [
      { text: "Heat-stable options",        icon: "/icons/heat.png",      iconType: "img", iconBgClass: "bg-orange-50 ring-orange-200" },
      { text: "Protein compatibility",      icon: "/icons/protein.png",   iconType: "img", iconBgClass: "bg-blue-50 ring-blue-200" },
      { text: "Freeze-thaw stability",      icon: "/icons/freeze.png",    iconType: "img", iconBgClass: "bg-cyan-50 ring-cyan-200" },
      { text: "Authentic dairy notes",      icon: "/icons/creamy.png",    iconType: "img", iconBgClass: "bg-rose-50 ring-rose-200" },
    ],
    tags: [
      { t: "Ice Cream",    cls: "bg-cyan-50 text-cyan-700 ring-cyan-200" },
      { t: "Yoghurt",      cls: "bg-lime-50 text-lime-700 ring-lime-200" },
      { t: "Milkshakes",   cls: "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200" },
      { t: "Cheese Products", cls: "bg-amber-50 text-amber-700 ring-amber-200" },
    ],
    primaryHref : "/samples/request",
      primaryLabel : "Request Sample",
      secondaryHref : "/downloads/techsheet",
      secondaryLabel : "Technical Sheet"
  },
  {
    reverse: true,
    badge: "Beverages",
    title: "SensoSip",
    blurb:
      "Architectures tuned for clarity, fizz stability, and shelf-life resilience across beverages.",
    imageSrc: "/assets/sensosip/banner-hero.webp",
    iconSrc: "/icons/beverage.png",
    benefits: [
      { text: "Beverage clarity",        icon: "/icons/clarity.png",  iconType: "img", iconBgClass: "bg-sky-50 ring-sky-200" },
      { text: "Carbonation stability",   icon: "/icons/fizz.png",     iconType: "img", iconBgClass: "bg-indigo-50 ring-indigo-200" },
      { text: "Extended shelf-life",     icon: "/icons/shelf.png",    iconType: "img", iconBgClass: "bg-green-50 ring-green-200" },
      { text: "pH resilience",           icon: "/icons/ph.png",       iconType: "img", iconBgClass: "bg-teal-50 ring-teal-200" },
    ],
    tags: [
      { t: "Juices",            cls: "bg-orange-50 text-orange-700 ring-orange-200" },
      { t: "Carbonated Drinks", cls: "bg-sky-50 text-sky-700 ring-sky-200" },
      { t: "Energy Drinks",     cls: "bg-yellow-50 text-yellow-700 ring-yellow-200" },
      { t: "Mocktails",         cls: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
    ],
    primaryHref : "/samples/request",
      primaryLabel : "Request Sample",
      secondaryHref : "/downloads/techsheet",
      secondaryLabel : "Technical Sheet"
  },
   {
    "reverse": false,
    "badge": "Pharmaceuticals",
    "title": "Senso+",
    "blurb": "Palatable profiles for syrups and chewables with bitterness modulation and aftertaste control.",
    "imageSrc": "/assets/sensoplus/banner-hero.webp",
    "iconSrc": "/icons/pharma.png",
    "benefits": [
      { "text": "Bitterness masking",       "icon": "/icons/mask.png",     "iconType": "img", "iconBgClass": "bg-violet-50 ring-violet-200" },
      { "text": "Aftertaste control",      "icon": "/icons/aftertaste.png","iconType": "img", "iconBgClass": "bg-fuchsia-50 ring-fuchsia-200" },
      { "text": "Child-friendly profiles", "icon": "/icons/kid.png",       "iconType": "img", "iconBgClass": "bg-rose-50 ring-rose-200" },
      { "text": "Stability in formulations","icon": "/icons/stability.png","iconType": "img", "iconBgClass": "bg-sky-50 ring-sky-200" }
    ],
    "tags": [
      { "t": "Liquid Medicines",   "cls": "bg-indigo-50 text-indigo-700 ring-indigo-200" },
      { "t": "Chewable Tablets",   "cls": "bg-amber-50 text-amber-700 ring-amber-200" },
      { "t": "Syrups",             "cls": "bg-cyan-50 text-cyan-700 ring-cyan-200" },
      { "t": "Supplements",        "cls": "bg-emerald-50 text-emerald-700 ring-emerald-200" }
    ],
    "primaryHref": "/samples/request",
    "primaryLabel": "Request Sample",
    "secondaryHref": "/downloads/techsheet",
    "secondaryLabel": "Technical Sheet"
  },
  {
    "reverse": true,
    "badge": "Nutraceuticals",
    "title": "SensoActive",
    "blurb": "Flavours that enhance proteins, botanicals, minerals, and vitamins while masking off-notes.",
    "imageSrc": "/assets/sensoactive/banner-hero.webp",
    "iconSrc": "/icons/nutra.png",
    "benefits": [
      { "text": "Nutrient masking",        "icon": "/icons/mask.png",     "iconType": "img", "iconBgClass": "bg-emerald-50 ring-emerald-200" },
      { "text": "Protein compatibility",   "icon": "/icons/protein.png",  "iconType": "img", "iconBgClass": "bg-blue-50 ring-blue-200" },
      { "text": "Botanical enhancement",   "icon": "/icons/botanical.png","iconType": "img", "iconBgClass": "bg-green-50 ring-green-200" },
      { "text": "Mineral taste modulation","icon": "/icons/mineral.png",  "iconType": "img", "iconBgClass": "bg-slate-50 ring-slate-200" }
    ],
    "tags": [
      { "t": "Protein Powders",      "cls": "bg-lime-50 text-lime-700 ring-lime-200" },
      { "t": "Vitamin Supplements",  "cls": "bg-purple-50 text-purple-700 ring-purple-200" },
      { "t": "Functional Foods",     "cls": "bg-teal-50 text-teal-700 ring-teal-200" },
      { "t": "Sports Nutrition",     "cls": "bg-orange-50 text-orange-700 ring-orange-200" }
    ],
    "primaryHref": "/samples/request",
    "primaryLabel": "Request Sample",
    "secondaryHref": "/downloads/techsheet",
    "secondaryLabel": "Technical Sheet"
  },
  {
    "reverse": false,
    "badge": "Savoury",
    "title": "SensoSpice",
    "blurb": "Authentic spice & herb signatures that add richness to soups, sauces, snacks, and seasonings.",
    "imageSrc": "/assets/sensospice/banner-hero.webp",
    "iconSrc": "/icons/spice.png",
    "benefits": [
      { "text": "Authentic spice profiles", "icon": "/icons/spice-leaf.png", "iconType": "img", "iconBgClass": "bg-amber-50 ring-amber-200" },
      { "text": "Heat resistance",          "icon": "/icons/heat.png",       "iconType": "img", "iconBgClass": "bg-red-50 ring-red-200" },
      { "text": "Oil-soluble options",      "icon": "/icons/oil.png",        "iconType": "img", "iconBgClass": "bg-orange-50 ring-orange-200" },
      { "text": "Clean label friendly",     "icon": "/icons/clean.png",      "iconType": "img", "iconBgClass": "bg-emerald-50 ring-emerald-200" }
    ],
    "tags": [
      { "t": "Seasonings", "cls": "bg-amber-50 text-amber-700 ring-amber-200" },
      { "t": "Sauces",     "cls": "bg-red-50 text-red-700 ring-red-200" },
      { "t": "Soups",      "cls": "bg-orange-50 text-orange-700 ring-orange-200" },
      { "t": "Snacks",     "cls": "bg-yellow-50 text-yellow-700 ring-yellow-200" }
    ],
    "primaryHref": "/samples/request",
    "primaryLabel": "Request Sample",
    "secondaryHref": "/downloads/techsheet",
    "secondaryLabel": "Technical Sheet"
  },
  {
    "reverse": true,
    "badge": "Oral & Personal Care",
    "title": "SensoCare",
    "blurb": "Cooling, refreshing notes for toothpastes, mouthwashes, and personal-care applications.",
    "imageSrc": "/assets/sensocare/banner-hero.webp",
    "iconSrc": "/icons/oralcare.png",
    "benefits": [
      { "text": "Cooling sensation",        "icon": "/icons/cool.png",     "iconType": "img", "iconBgClass": "bg-sky-50 ring-sky-200" },
      { "text": "Long-lasting freshness",   "icon": "/icons/fresh.png",    "iconType": "img", "iconBgClass": "bg-teal-50 ring-teal-200" },
      { "text": "Antimicrobial compatibility","icon": "/icons/antimicrobial.png", "iconType": "img", "iconBgClass": "bg-cyan-50 ring-cyan-200" },
      { "text": "Oral-safe formulations",   "icon": "/icons/safe.png",     "iconType": "img", "iconBgClass": "bg-indigo-50 ring-indigo-200" }
    ],
    "tags": [
      { "t": "Toothpaste",   "cls": "bg-sky-50 text-sky-700 ring-sky-200" },
      { "t": "Mouthwash",    "cls": "bg-teal-50 text-teal-700 ring-teal-200" },
      { "t": "Oral Sprays",  "cls": "bg-blue-50 text-blue-700 ring-blue-200" },
      { "t": "Personal Care","cls": "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200" }
    ],
    "primaryHref": "/samples/request",
    "primaryLabel": "Request Sample",
    "secondaryHref": "/downloads/techsheet",
    "secondaryLabel": "Technical Sheet"
  },
  {
    "reverse": false,
    "badge": "Natural Segment",
    "title": "SensoNat",
    "blurb": "Nature-derived flavours & colours for clean-label ambitions with extracts and distillates.",
    "imageSrc": "/assets/sensonat/banner-hero.webp",
    "iconSrc": "/icons/natural.png",
    "benefits": [
      { "text": "100% natural origin",     "icon": "/icons/leaf.png",     "iconType": "img", "iconBgClass": "bg-emerald-50 ring-emerald-200" },
      { "text": "Clean label compliant",   "icon": "/icons/clean.png",    "iconType": "img", "iconBgClass": "bg-lime-50 ring-lime-200" },
      { "text": "Sustainable sourcing",    "icon": "/icons/eco.png",      "iconType": "img", "iconBgClass": "bg-green-50 ring-green-200" },
      { "text": "Certification ready",     "icon": "/icons/cert.png",     "iconType": "img", "iconBgClass": "bg-amber-50 ring-amber-200" }
    ],
    "tags": [
      { "t": "Organic Products",  "cls": "bg-green-50 text-green-700 ring-green-200" },
      { "t": "Clean Label Foods", "cls": "bg-emerald-50 text-emerald-700 ring-emerald-200" },
      { "t": "Natural Beverages", "cls": "bg-teal-50 text-teal-700 ring-teal-200" },
      { "t": "Premium Ranges",    "cls": "bg-amber-50 text-amber-700 ring-amber-200" }
    ],
    "primaryHref": "/samples/request",
    "primaryLabel": "Request Sample",
    "secondaryHref": "/downloads/techsheet",
    "secondaryLabel": "Technical Sheet"
  }
];

export default function ApplicationSolutions() {
  return (
    <>
      <HeroSection />
      <WhyChooseSenso />
      <main className="bg-background text-foreground">
        
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
      </main>
      <BespokeSolutionsSection  onPrimaryHref="/contact"
        onPrimaryLabel="Discuss Your Bespoke Needs"
        onProcessHref="#process" />
        <ProfileCTA />
    </>
  );
}
