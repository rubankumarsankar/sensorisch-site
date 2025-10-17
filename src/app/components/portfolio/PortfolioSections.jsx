// app/components/PortfolioSections.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Sparkles,
  PackageCheck,
  Wand2,
  FlaskConical,
  Droplet,
} from "lucide-react";

/* ---------- anim helpers ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

/* ---------- data WITH IMAGES ---------- */
const SPREADS = [
  {
    name: "Chocolate Hazelnut",
    sub: "Rich cocoa with roasted hazelnut notes",
    bullets: ["Bake-stable, smooth texture"],
    image: "/assets/img-7.png",
  },
  {
    name: "Salted Caramel",
    sub: "Sweet caramel balanced with sea salt crystals",
    bullets: ["Heat-resistant, consistent viscosity"],
    image: "/assets/img-8.png",
  },
  {
    name: "Biscoff Style",
    sub: "Spiced cookie butter with cinnamon warmth",
    bullets: ["Authentic spice blend, spreadable"],
    image: "/assets/img-9.png",
  },
  {
    name: "Pistachio Cream",
    sub: "Premium pistachio with creamy undertones",
    bullets: ["Natural color, rich mouthfeel"],
    image: "/assets/img-10.png",
  },
  {
    name: "White Chocolate",
    sub: "Creamy white chocolate with vanilla notes",
    bullets: ["Clean taste, versatile application"],
    image: "/assets/img-11.png",
  },
  {
    name: "Peanut Butter",
    sub: "Classic roasted peanut with smooth finish",
    bullets: ["Protein-rich, stable emulsion"],
    image: "/assets/img-12.png",
  },
];

const SPREADS_BENEFITS = [
  { k: "Bake-Stable Formulations", sub: "Maintains texture and flavour through heating processes" },
  { k: "Smooth Spreadability",     sub: "Consistent texture across temperature ranges" },
  { k: "Consistent Viscosity",     sub: "Reliable performance in production environments" },
];

/* ---------- Decor data ---------- */
const DECOR = [
  { k: "Cocoa Dust",         sub: "Fine cocoa powder for dusting and decoration" },
  { k: "Vanilla Sugar Dust", sub: "Aromatic vanilla-infused powder" },
  { k: "Metallic Shimmer",   sub: "Food-grade metallic finish for premium appearance" },
  { k: "Coloured Icing Dust",sub: "Vibrant colours for creative cake decoration" },
  { k: "Edible Glitter",     sub: "Sparkling finish for special occasions" },
  { k: "Matcha Powder",      sub: "Premium green tea powder for Asian-inspired desserts" },
];

const DECOR_BENEFITS = [
  { k: "Even Coverage",  sub: "Uniform distribution for professional results" },
  { k: "Low Clumping",   sub: "Free-flowing powders for easy application" },
  { k: "Camera-Friendly",sub: "Optimized for photography and presentation" },
  { k: "Food-Grade Safety", sub: "All materials meet strict food safety standards" },
];

/* ---------- Systems data ---------- */
const SYSTEMS = [
  { k: "Taste Modulators",  sub: "Enhance sweetness, reduce bitterness, or balance acidity", icon: Wand2 },
  { k: "Delivery Systems",  sub: "Controlled release, encapsulation, and targeted delivery", icon: PackageCheck },
  { k: "Emulsion Systems",  sub: "Stable water-in-oil and oil-in-water formulations",       icon: FlaskConical },
  { k: "Coating Systems",   sub: "Protective and functional coatings for various applications", icon: BadgeCheck },
  { k: "Fermented Bases",   sub: "Natural fermentation-derived flavour enhancers",           icon: Sparkles },
  { k: "Creamy Bases",      sub: "Dairy and plant-based creamy texture systems",            icon: Droplet },
];

/* ---------- Dried ingredients data ---------- */
const DRIED = [
  { k: "Granulates",        tag: "Consistent particle size", pill: "Uniform distribution" },
  { k: "Flakes & Pieces",   tag: "Visual texture",           pill: "Premium positioning" },
  { k: "Specialty Powders", tag: "Concentrated profiles",    pill: "High concentration" },
];

/* =========================================================
   PREMIUM SPREADS (image layout like screenshot)
========================================================= */
export function PremiumSpreadsSection() {
  return (
    <section className="section-container py-15">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mx-auto max-w-4xl text-center"
      >
        <h2 className="mt-3 section-title text-black">
          Premium <span className="text-primary">Spreads</span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-4 h-1 rounded bg-gradient-to-r from-primary to-primary/60"
          />
        </h2>
        <p className="mt-2 section-paragraph text-black/70">
          Ready-to-use spreads with exceptional taste profiles and superior functionality
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-8 grid gap-6 md:grid-cols-2"
      >
        {SPREADS.map((s, i) => (
          <motion.article
            key={s.name}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur ring-1 ring-black/5 shadow-sm"
          >
            {/* sheen + halo */}
            <motion.span
              aria-hidden
              initial={{ x: "-120%" }}
              whileHover={{ x: "120%" }}
              transition={{ duration: 1.15, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 skew-x-12 bg-white/20"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br from-primary to-primary/50 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Text */}
              <div className="p-6 md:col-span-3">
                <h3 className="section-subtitle">{s.name}</h3>
                <p className="mt-1 section-paragraph">{s.sub}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground/75">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <button className="rounded-md bg-primary px-3.5 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition">
                    Sample
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="relative md:col-span-2">
                <div className="m-5 overflow-hidden rounded-xl ring-1 ring-black/5">
                  <div className="relative w-full aspect-[4/3] md:aspect-[1/1.05]">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      sizes="(min-width: 768px) 360px, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      priority={i < 2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Key Benefits */}
      <div className="py-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mt-3 section-title text-black">
            Key <span className="text-primary">Benefits</span>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="mx-auto mt-4 h-1 rounded bg-gradient-to-r from-primary to-primary/60"
            />
          </h2>
        </motion.div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {SPREADS_BENEFITS.map((b, i) => (
            <motion.div
              key={b.k}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.04 }}
              className="rounded-xl bg-white/60 dark:bg-white/[0.06] backdrop-blur ring-1 ring-black/5 dark:ring-white/10 px-4 py-3"
            >
              <div className="section-subtitle">✓ {b.k}</div>
              <p className="section-paragraph">{b.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CAKE DUST & DECOR
========================================================= */
export function DecorSection() {
  return (
    <section className="section-container py-15">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mx-auto max-w-4xl text-center"
      >
        <h2 className="mt-3 section-title text-black">
          Cake Dust & <span className="text-primary">Decor</span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-4 h-1 rounded bg-gradient-to-r from-primary to-primary/60"
          />
        </h2>
        <p className="mt-2 section-paragraph text-black/70">
          Professional-grade dusts and decorative elements for stunning visual presentations
        </p>
      </motion.div>

      {/* Items */}
      <motion.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {DECOR.map((d) => (
          <motion.div
            key={d.k}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-2xl bg-white/60 dark:bg-white/[0.06] backdrop-blur ring-1 ring-black/5 dark:ring-white/10 px-5 py-4"
          >
            <motion.span
              aria-hidden
              initial={{ x: "-120%" }}
              whileHover={{ x: "120%" }}
              transition={{ duration: 1.05, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-12 bg-white/20"
            />
            <div>
              <h4 className="section-subtitle">{d.k}</h4>
              <p className="section-paragraph">{d.sub}</p>
            </div>
            <div className="mt-3 flex justify-end">
              <button className="rounded-md bg-white text-primary font-semibold ring-1 ring-primary/20 px-3 py-2 hover:bg-white/90 transition">
                Order Sample
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Professional Benefits */}
      <div className="py-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mt-3 section-title text-black">
            Professional <span className="text-primary">Benefits</span>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="mx-auto mt-4 h-1 rounded bg-gradient-to-r from-primary to-primary/60"
            />
          </h2>
        </motion.div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DECOR_BENEFITS.map((b, i) => (
            <motion.div
              key={b.k}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.04 }}
              className="rounded-xl bg-white/60 text-center dark:bg-white/[0.06] backdrop-blur ring-1 ring-black/5 dark:ring-white/10 px-4 py-3"
            >
              <div className="section-subtitle">{b.k}</div>
              <p className="section-paragraph">{b.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   INGREDIENT & DELIVERY SYSTEMS
========================================================= */
export function SystemsSection() {
  return (
    <section className="section-container py-15">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mx-auto max-w-4xl text-center"
      >
        <h2 className="mt-3 section-title text-black">
          Ingredient & <span className="text-primary">Delivery Systems</span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-4 h-1 rounded bg-gradient-to-r from-primary to-primary/60"
          />
        </h2>
        <p className="mt-2 section-paragraph text-black/70">
          Advanced systems to enhance functionality and performance
        </p>
      </motion.div>

      <motion.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-8 grid gap-6 md:grid-cols-2"
      >
        {SYSTEMS.map((s) => {
          const Icon = s.icon ?? BadgeCheck;
          return (
            <motion.div
              key={s.k}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="rounded-2xl bg-white/60 dark:bg-white/[0.06] backdrop-blur ring-1 ring-black/5 dark:ring-white/10 p-5"
            >
              <div className="flex items-start gap-3">
                <span className="grid place-items-center size-10 rounded-xl bg-primary/10 mt-3 text-primary ring-1 ring-primary/20">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="section-subtitle">{s.k}</h4>
                  <p className="section-paragraph">{s.sub}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

/* =========================================================
   DRIED FRUIT & VEGETABLE INGREDIENTS
========================================================= */
export function DriedIngredientsSection() {
  return (
    <section className="section-container py-15">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mx-auto max-w-4xl text-center"
      >
        <h2 className="mt-3 section-title text-black">
          Dried <span className="text-primary">Fruit &amp; Vegetable</span> Ingredients
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-4 h-1 rounded bg-gradient-to-r from-primary to-primary/60"
          />
        </h2>
        <p className="mt-2 section-paragraph text-black/70">
          Premium dried ingredients available on request for specialized applications
        </p>
      </motion.div>

      <motion.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-8 grid gap-6 md:grid-cols-3"
      >
        {DRIED.map((d) => (
          <motion.div
            key={d.k}
            variants={fadeUp}
            whileHover={{ y: -3 }}
            className="rounded-2xl bg-white/60 text-center dark:bg-white/[0.06] backdrop-blur ring-1 ring-black/5 dark:ring-white/10 p-5"
          >
            <h4 className="section-subtitle">{d.k}</h4>
            <p className="section-paragraph">{d.tag}</p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold ring-1 ring-primary/20">
              {d.pill}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
