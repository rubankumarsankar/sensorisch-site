// app/portfolio/page.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Beaker,
  FlaskConical,
  Droplet,
  Palette,
  BookOpen,
  BadgeCheck,
  Sparkles,
  Palette as PaletteIcon,
} from "lucide-react";
import HeroComponent from "../components/Hero";

/* ------------------ animation helpers ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" },
  },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

/* ------------------ data ------------------ */

// Natural Taste & Flavour Solutions
const FLAVOUR_FAMILIES = [
  {
    emoji: "🍋",
    title: "Citrus",
    blurb:
      "Bright, zesty profiles from lemon and lime to exotic yuzu and bergamot",
    items: ["Lemon", "Orange", "Lime", "Grapefruit", "Yuzu", "Bergamot"],
  },
  {
    emoji: "🍓",
    title: "Fruity",
    blurb:
      "From tropical mangoes to berry medleys, capturing nature's sweetness",
    items: [
      "Strawberry",
      "Mango",
      "Apple",
      "Peach",
      "Mixed Berry",
      "Tropical Blend",
    ],
  },
  {
    emoji: "☕",
    title: "Tea & Coffee",
    blurb: "Rich, aromatic profiles from delicate green tea to robust espresso",
    items: [
      "Earl Grey",
      "Green Tea",
      "Espresso",
      "Vanilla Latte",
      "Chai Spice",
      "Matcha",
    ],
  },
  {
    emoji: "🌿",
    title: "Botanicals",
    blurb: "Herbal and floral essences that add complexity and sophistication",
    items: ["Lavender", "Rose", "Mint", "Basil", "Rosemary", "Chamomile"],
  },
  {
    emoji: "🍫",
    title: "Brown & White",
    blurb: "Comfort flavours from vanilla and caramel to rich chocolate notes",
    items: [
      "Vanilla",
      "Caramel",
      "Chocolate",
      "Butterscotch",
      "Toffee",
      "Coconut",
    ],
  },
  {
    emoji: "🧄",
    title: "Savoury",
    blurb:
      "Complex umami profiles and spice blends for sophisticated applications",
    items: ["Garlic", "Onion", "Pepper", "Herb Blend", "Mushroom", "Smoked"],
  },
];

// Available Formats
const FORMATS = [
  { k: "Liquids", blurb: "Easy dosing & mixing", icon: Droplet },
  { k: "Powders", blurb: "Extended shelf-life", icon: Beaker },
  { k: "Emulsions", blurb: "Superior stability", icon: FlaskConical },
  {
    k: "Encapsulated",
    blurb: "Controlled release",
    icon: BadgeCheck,
    tag: "E",
  },
  { k: "Heat-Stable", blurb: "Process resilient", icon: Sparkles, tag: "H" },
];

// Natural Colours (with hex)
const COLOURS = [
  {
    name: "Citrine Yellow",
    hex: "#F4D03F",
    blurb: "Bright sunshine yellow for citrus and tropical applications",
  },
  {
    name: "Amber Orange",
    hex: "#E67E22",
    blurb: "Warm orange perfect for peach, apricot, and caramel flavours",
  },
  {
    name: "Ruby Red",
    hex: "#E74C3C",
    blurb: "Vibrant red ideal for strawberry, cherry, and berry applications",
  },
  {
    name: "Amethyst Purple",
    hex: "#9B59B6",
    blurb: "Rich purple for grape, plum, and exotic fruit products",
  },
  {
    name: "Olivine Green",
    hex: "#27AE60",
    blurb: "Natural green for apple, mint, and herbal formulations",
  },
  {
    name: "Sapphire Blue",
    hex: "#3498DB",
    blurb: "Cool blue for blueberry, ocean-inspired, and cooling products",
  },
  {
    name: "Tiger-Eye Brown",
    hex: "#8B4513",
    blurb: "Rich brown for chocolate, coffee, and caramel applications",
  },
  {
    name: "Onyx Black",
    hex: "#2C3E50",
    blurb: "Deep black for dramatic contrast and sophisticated presentations",
  },
  {
    name: "Crystal White",
    hex: "#ECF0F1",
    blurb: "Pure white base for clean, minimal, and dairy applications",
  },
];

const COLOUR_FORMS = [
  {
    k: "Water-Dispersible",
    blurb:
      "Perfect for beverages, dairy products, and water-based applications",
  },
  {
    k: "Oil-Dispersible",
    blurb: "Ideal for confectionery, bakery, and oil-based formulations",
  },
];

// Premium Spreads
const SPREADS = [
  { name: "Chocolate Hazelnut", bullets: ["Bake-stable, smooth texture"] },
  { name: "Salted Caramel", bullets: ["Heat-resistant, consistent viscosity"] },
  { name: "Biscoff Style", bullets: ["Authentic spice blend, spreadable"] },
  { name: "Pistachio Cream", bullets: ["Natural color, rich mouthfeel"] },
  { name: "White Chocolate", bullets: ["Clean taste, versatile application"] },
  { name: "Peanut Butter", bullets: ["Protein-rich, stable emulsion"] },
];

const SPREADS_BENEFITS = [
  "Bake-Stable Formulations",
  "Smooth Spreadability",
  "Consistent Viscosity",
];

// Cake Dust & Decor
const DECOR = [
  { k: "Cocoa Dust", sub: "Fine cocoa powder for dusting and decoration" },
  { k: "Vanilla Sugar Dust", sub: "Aromatic vanilla-infused powder" },
  {
    k: "Metallic Shimmer",
    sub: "Food-grade metallic finish for premium appearance",
  },
  {
    k: "Coloured Icing Dust",
    sub: "Vibrant colours for creative cake decoration",
  },
  { k: "Edible Glitter", sub: "Sparkling finish for special occasions" },
  {
    k: "Matcha Powder",
    sub: "Premium green tea powder for Asian-inspired desserts",
  },
];

const DECOR_BENEFITS = [
  "Even Coverage",
  "Low Clumping",
  "Camera-Friendly",
  "Food-Grade Safety",
];

// Ingredient & Delivery Systems
const SYSTEMS = [
  {
    k: "Taste Modulators",
    sub: "Enhance sweetness, reduce bitterness, or balance acidity",
  },
  {
    k: "Delivery Systems",
    sub: "Controlled release, encapsulation, and targeted delivery",
  },
  {
    k: "Emulsion Systems",
    sub: "Stable water-in-oil and oil-in-water formulations",
  },
  {
    k: "Coating Systems",
    sub: "Protective and functional coatings for various applications",
  },
  {
    k: "Fermented Bases",
    sub: "Natural fermentation-derived flavour enhancers",
  },
  { k: "Creamy Bases", sub: "Dairy and plant-based creamy texture systems" },
];

const DRIED = [
  {
    k: "Granulates",
    tag: "Consistent particle size",
    pill: "Uniform distribution",
  },
  { k: "Flakes & Pieces", tag: "Visual texture", pill: "Premium positioning" },
  {
    k: "Specialty Powders",
    tag: "Concentrated profiles",
    pill: "High concentration",
  },
];

/* ------------------ page ------------------ */
export default function PortfolioPage() {
  return (
    <main className="relative overflow-hidden">
      {/* hero background wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent"
      />
      <HeroComponent
        data={{
          eyebrow: "Our Portfolio",
          title: "Complete  ",
          highlight: "Flavour Solutions",
          blurb:
            "From high-impact flavours to natural colours and ready-to-use systems—discover our modular portfolio built for consistent performance across every application.",
          image: { src: "/banners/contact.png", alt: "Lab and product banner" },
          primary: {
            href: "/applications-solutions",
            label: "Request Full Catalogue",
          },
          secondary: { href: "/contact", label: "Get Samples" },

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

      {/* FLAVOUR FAMILIES */}
      <SectionHeader
        eyebrow="Natural Taste & Flavour Solutions"
        title="Comprehensive families across multiple formats"
        sub="From core notes to complex modulators"
      />
      <section className="section-container pb-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FLAVOUR_FAMILIES.map((f, i) => (
            <motion.article
              key={f.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur ring-1 ring-black/5 dark:ring-white/10 p-6"
            >
              {/* hover sheen */}
              <motion.span
                aria-hidden
                initial={{ x: "-120%" }}
                whileHover={{ x: "120%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 skew-x-12 bg-white/25"
              />
              <div className="flex items-start gap-3">
                <div className="text-2xl">{f.emoji}</div>
                <div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-black/70">{f.blurb}</p>
                </div>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {f.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1"
                  >
                    {it}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-2 text-[11px] uppercase tracking-wider text-primary/80">
                Custom Solutions →
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* FORMATS */}
      <section className="section-container py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {FORMATS.map((f, i) => (
            <motion.div
              key={f.k}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="relative overflow-hidden rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur ring-1 ring-black/5 dark:ring-white/10 p-4"
            >
              <div className="flex items-start gap-3">
                <span className="grid place-items-center size-9 rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-semibold">
                    {f.k}{" "}
                    {f.tag && (
                      <span className="text-[10px] ml-1 rounded bg-primary/10 px-1.5 py-0.5">
                        {" "}
                        {f.tag}{" "}
                      </span>
                    )}
                  </h4>
                  <p className="text-sm text-black/70">{f.blurb}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NATURAL COLOURS */}
      <SectionHeader
        eyebrow="Natural Colours"
        title="Curated palette in water- & oil-dispersible forms"
        icon={<PaletteIcon className="h-5 w-5 text-primary" />}
      />
      <section className="section-container pb-4">
        <div className="grid gap-6 md:grid-cols-3">
          {COLOURS.map((c, i) => (
            <motion.div
              key={c.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.04 }}
              className="rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10 bg-white/70 dark:bg-white/5 backdrop-blur"
            >
              <div className="h-28 w-full" style={{ backgroundColor: c.hex }} />
              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold">{c.name}</h3>
                  <code className="text-xs rounded bg-black/5 dark:bg-white/10 px-2 py-1">
                    {c.hex}
                  </code>
                </div>
                <p className="mt-1 text-sm text-black/70">{c.blurb}</p>
                <div className="mt-3 flex items-center gap-3">
                  <button className="rounded-md bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 ring-1 ring-primary/20 hover:bg-primary/20 transition">
                    Match Color
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {COLOUR_FORMS.map((f, i) => (
            <motion.div
              key={f.k}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-4"
            >
              <h4 className="font-semibold">{f.k}</h4>
              <p className="text-sm text-black/70">{f.blurb}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PREMIUM SPREADS */}
      <SectionHeader
        eyebrow="Premium Spreads"
        title="Ready-to-use spreads with exceptional profiles"
        sub="Superior functionality for modern applications"
      />
      <section className="section-container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SPREADS.map((s, i) => (
            <motion.article
              key={s.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur ring-1 ring-black/5 dark:ring-white/10 p-6"
            >
              <motion.span
                aria-hidden
                initial={{ x: "-120%" }}
                whileHover={{ x: "120%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 skew-x-12 bg-white/25"
              />
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-black/75">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <button className="rounded-md bg-primary px-3.5 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition">
                  Sample
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* spread benefits */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {SPREADS_BENEFITS.map((b, i) => (
            <motion.div
              key={b}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-lg ring-1 ring-black/5 dark:ring-white/10 bg-white/60 dark:bg-white/5 backdrop-blur px-4 py-3 text-sm"
            >
              ✓ {b}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CAKE DUST & DECOR */}
      <SectionHeader
        eyebrow="Cake Dust & Decor"
        title="Professional-grade finishes for presentation-perfect products"
      />
      <section className="section-container">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {DECOR.map((d, i) => (
            <motion.div
              key={d.k}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center justify-between gap-4 rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white/60 dark:bg-white/5 backdrop-blur px-5 py-4"
            >
              <div>
                <h4 className="font-semibold">{d.k}</h4>
                <p className="text-sm text-black/70">{d.sub}</p>
              </div>
              <button className="rounded-md bg-white text-primary font-semibold ring-1 ring-primary/20 px-3 py-2 hover:bg-white/90 transition">
                Order Sample
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {DECOR_BENEFITS.map((b, i) => (
            <motion.div
              key={b}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.04 }}
              className="rounded-lg ring-1 ring-black/5 dark:ring-white/10 bg-white/60 dark:bg-white/5 backdrop-blur px-4 py-3 text-sm"
            >
              {b}
            </motion.div>
          ))}
        </div>
      </section>

      {/* INGREDIENT & DELIVERY SYSTEMS */}
      <SectionHeader
        eyebrow="Ingredient & Delivery Systems"
        title="Advanced systems to enhance functionality and performance"
      />
      <section className="section-container">
        <div className="grid gap-6 md:grid-cols-2">
          {SYSTEMS.map((s, i) => (
            <motion.div
              key={s.k}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5"
            >
              <h4 className="font-semibold">{s.k}</h4>
              <p className="text-sm text-black/70">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DRIED INGREDIENTS */}
      <SectionHeader
        eyebrow="Dried Fruit & Vegetable Ingredients"
        title="Premium dried ingredients available on request"
        sub="Custom sizing & specification support"
      />
      <section className="section-container">
        <div className="grid gap-6 md:grid-cols-3">
          {DRIED.map((d, i) => (
            <motion.div
              key={d.k}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5"
            >
              <h4 className="font-semibold">{d.k}</h4>
              <p className="text-sm text-black/70">{d.tag}</p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold ring-1 ring-primary/20">
                {d.pill}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-container py-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-amber-500/80 to-rose-500/80 text-white p-10 md:p-14">
          <motion.div
            aria-hidden
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[linear-gradient(110deg,transparent_15%,rgba(255,255,255,0.12)_45%,transparent_75%)]"
          />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-extrabold">
              Explore Our Complete Portfolio
            </h3>
            <p className="mt-2 max-w-2xl text-white/90">
              From concept to completion, our comprehensive portfolio supports
              every stage of your product development journey.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-primary px-5 py-3 text-sm font-semibold shadow hover:bg-white/95 transition"
              >
                Request Full Catalogue
              </Link>
              <Link
                href="/tasting"
                className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-5 py-3 text-sm font-semibold ring-1 ring-white/30 hover:bg-white/25 transition"
              >
                Schedule Tasting Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------------------ tiny helpers ------------------ */
function SectionHeader({ eyebrow, title, sub, icon }) {
  return (
    <section className="section-container pt-10">
      <motion.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold ring-1 ring-primary/20"
        >
          {icon} {eyebrow}
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight"
        >
          {title}
        </motion.h2>
        {sub && (
          <motion.p
            variants={fadeUp}
            className="mt-2 text-sm md:text-base text-black/70"
          >
            {sub}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
