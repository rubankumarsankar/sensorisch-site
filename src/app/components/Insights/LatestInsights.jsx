// app/components/LatestInsights.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, CalendarDays, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

/* demo data with images */
const DEFAULT_POSTS = [
  {
    id: "sustainable-sourcing",
    category: "Sustainability",
    title: "Sustainable Sourcing in Flavour Manufacturing",
    blurb:
      "Our commitment to responsible sourcing and how it's shaping the future of flavour development.",
    tags: ["Sustainability", "Sourcing"],
    date: "February 28, 2024",
    image: "/assets/img-16.png",
  },
  {
    id: "heat-stable-bakery",
    category: "Bakery",
    title:
      "Heat-Stable Flavours: Breakthrough Technologies for Bakery Applications",
    blurb:
      "New developments in thermal-resistant flavour systems that maintain integrity through high-temperature processes.",
    tags: ["Bakery", "Technology"],
    date: "February 22, 2024",
    image: "/assets/img-17.png",
  },
  {
    id: "consumer-psychology",
    category: "Market Research",
    title: "Consumer Psychology: Why Familiar Flavours Drive Innovation",
    blurb:
      "Understanding the balance between novelty and familiarity in flavour development for market success.",
    tags: ["Consumer Insights", "Psychology"],
    date: "February 15, 2024",
    image: "/assets/img-18.png",
  },
  {
    id: "natural-colours-science",
    category: "Colours",
    title: "Natural Colours in Food: Science Meets Aesthetics",
    blurb:
      "Exploring the technical challenges and creative opportunities in natural colour applications.",
    tags: ["Natural Colours", "Food Science"],
    date: "February 8, 2024",
    image: "/assets/img-19.png",
  },
  {
    id: "personalized-nutrition",
    category: "Personalization",
    title: "The Rise of Personalized Nutrition and Flavour Preferences",
    blurb:
      "How data-driven insights are enabling more targeted flavour development for specific demographics.",
    tags: ["Personalization", "Data Science"],
    date: "February 1, 2024",
    image: "/assets/img-20.png",
  },
];

export default function LatestInsights({ posts = DEFAULT_POSTS }) {
  return (
    <section className="section-container py-15">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mx-auto max-w-5xl text-center"
      >
        <h2 className="section-title text-black">
          Latest <span className="text-primary">Insights</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="h-1 mt-4 mx-auto rounded bg-gradient-to-r from-primary to-primary/60"
        />
      </motion.div>

      {/* Grid: 2 columns of equal-height cards */}
      <motion.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2"
      >
        {posts.map((p, i) => (
          <motion.article
            key={p.id}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 360, damping: 26 }}
            className="group overflow-hidden rounded-2xl bg-white/70 backdrop-blur ring-1 ring-black/5 shadow-sm"
          >
            {/* inner 2-col layout: left text, right image */}
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* LEFT: content */}
              <div className="p-6 md:col-span-3 flex flex-col">
                <HeaderMeta category={p.category} date={p.date} />
                <h3 className="mt-2 section-subtitle leading-tight text-black">
                  {p.title}
                </h3>
                <p className="mt-2 section-paragraph flex-1 text-black/70">
                  {p.blurb}
                </p>
                <Tags tags={p.tags} />
                <div className="mt-5">
                  <a
                    href={`/insights/${p.id}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm leading-none font-semibold text-white hover:bg-primary/90 transition"
                  >
                    Read More <ArrowRight className="h-4 w-4 shrink-0" />
                  </a>
                </div>
              </div>

              {/* RIGHT: image */}
              <div className="relative md:col-span-2">
                <div className="m-4 md:m-5 overflow-hidden rounded-xl ring-1 ring-black/5">
                  <div className="relative w-full aspect-[4/3] md:aspect-[1/1.05]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width:768px) 360px, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      priority={i < 2}
                    />
                    {/* subtle sheen */}
                    <motion.span
                      aria-hidden
                      initial={{ x: "-120%" }}
                      whileHover={{ x: "120%" }}
                      transition={{ duration: 1.15, ease: "easeInOut" }}
                      className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-12 bg-white/20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

/* ---------- subcomponents (aligned icons & tags) ---------- */

function HeaderMeta({ category, date }) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-[12px] leading-none text-black/60">
      {/* Category */}
      <span className="inline-flex items-center gap-1.5 font-semibold text-black/80">
        <BookOpen className="h-4 w-4 shrink-0 translate-y-[1px]" strokeWidth={2} />
        <span className="leading-none">{category}</span>
      </span>

      {/* Separator */}
      <span aria-hidden className="text-black/20 select-none">•</span>

      {/* Date */}
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="h-3.5 w-3.5 shrink-0 translate-y-[1px]" strokeWidth={2} />
        <span className="leading-none">{date}</span>
      </span>
    </div>
  );
}

function Tags({ tags = [] }) {
  if (!tags.length) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <span
          key={t}
          className="inline-flex items-center rounded-full px-2.5 py-[5px] text-[11px] font-semibold
                     leading-none bg-primary/10 text-primary ring-1 ring-primary/20"
        >
          {t}
        </span>
      ))}
    </div>
  );
}
