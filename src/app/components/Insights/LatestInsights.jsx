// app/components/LatestInsights.jsx
"use client";

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

// Fallback (you can pass your own posts via props)
const DEFAULT_POSTS = [
  {
    id: "sustainable-sourcing",
    emoji: "🌍",
    category: "Sustainability",
    title: "Sustainable Sourcing in Flavour Manufacturing",
    blurb:
      "Our commitment to responsible sourcing and how it's shaping the future of flavour development.",
    tags: ["Sustainability", "Sourcing"],
    date: "February 28, 2024",
  },
  {
    id: "heat-stable-bakery",
    emoji: "🍰",
    category: "Bakery",
    title: "Heat-Stable Flavours: Breakthrough Technologies for Bakery Applications",
    blurb:
      "New developments in thermal-resistant flavour systems that maintain integrity through high-temperature processes.",
    tags: ["Bakery", "Technology"],
    date: "February 22, 2024",
  },
  {
    id: "consumer-psychology",
    emoji: "🧠",
    category: "Market Research",
    title: "Consumer Psychology: Why Familiar Flavours Drive Innovation",
    blurb:
      "Understanding the balance between novelty and familiarity in flavour development for market success.",
    tags: ["Consumer Insights", "Psychology"],
    date: "February 15, 2024",
  },
  {
    id: "natural-colours-science",
    emoji: "🎨",
    category: "Colours",
    title: "Natural Colours in Food: Science Meets Aesthetics",
    blurb:
      "Exploring the technical challenges and creative opportunities in natural colour applications.",
    tags: ["Natural Colours", "Food Science"],
    date: "February 8, 2024",
  },
  {
    id: "personalized-nutrition",
    emoji: "👤",
    category: "Personalization",
    title: "The Rise of Personalized Nutrition and Flavour Preferences",
    blurb:
      "How data-driven insights are enabling more targeted flavour development for specific demographics.",
    tags: ["Personalization", "Data Science"],
    date: "February 1, 2024",
  },
];

export default function LatestInsights({ posts = DEFAULT_POSTS }) {
  const [featured, ...rest] = posts;

  return (
    <section className="section-container py-15">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mx-auto max-w-6xl"
      >
        <div className="flex items-end justify-between gap-6">
          <div>
            
            <h2 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight">
              Latest  <span className="text-primary">Insights</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="h-1 mt-4 rounded bg-gradient-to-r from-primary to-primary/60"
              aria-hidden
            />
          </div>

          <a
            href="/insights"
            className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold
                       bg-white/60 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 backdrop-blur
                       hover:bg-white/80 dark:hover:bg-white/10 transition"
          >
            Browse all
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>

      {/* Grid: 1 featured + 4 compact cards */}
      <motion.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-3"
      >
        {/* Featured */}
        {featured && (
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 360, damping: 26 }}
            className="group relative overflow-hidden rounded-2xl md:col-span-2 p-6
                       bg-white/70 dark:bg-white/[0.06] backdrop-blur ring-1 ring-black/5 dark:ring-white/10"
          >
            {/* glow + shimmer */}
            <span
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full
                         bg-gradient-to-br from-primary to-primary/40 blur-3xl opacity-0 transition-opacity duration-300
                         group-hover:opacity-100"
            />
            <motion.span
              aria-hidden
              initial={{ x: "-120%" }}
              whileHover={{ x: "120%" }}
              transition={{ duration: 1.15, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 skew-x-12 bg-white/20"
            />

            <div className="flex items-start gap-4">
              <span className="grid size-14 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/20 text-2xl">
                {featured.emoji}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 text-xs text-foreground/70">
                  <span className="inline-flex section-subtitle items-center gap-1 font-semibold">
                    <BookOpen className="h-7 w-7" />
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {featured.date}
                  </span>
                </div>

                <h3 className="mt-2 section-subtitle leading-tight">
                  {featured.title}
                </h3>
                <p className="mt-2 section-paragraph">
                  {featured.blurb}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {(featured.tags ?? []).map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary
                                 px-2.5 py-1 text-[11px] font-semibold ring-1 ring-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  <a
                    href={`/insights/${featured.id}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-base font-semibold text-white
                               hover:bg-primary/90 transition"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        )}

        {/* Compact cards */}
        {rest.slice(0, 4).map((p) => (
          <motion.article
            key={p.id}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 360, damping: 26 }}
            className="group relative overflow-hidden rounded-2xl p-5
                       bg-white/70 dark:bg-white/[0.06] backdrop-blur ring-1 ring-black/5 dark:ring-white/10"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full
                         bg-gradient-to-br from-primary to-primary/40 blur-3xl opacity-0 transition-opacity duration-300
                         group-hover:opacity-100"
            />
            <motion.span
              aria-hidden
              initial={{ x: "-120%" }}
              whileHover={{ x: "120%" }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 skew-x-12 bg-white/20"
            />

            <div className="flex items-start gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/20 text-lg">
                {p.emoji}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-foreground/70">
                  <span className="inline-flex items-center section-subtitle gap-1 font-semibold">
                    <BookOpen className="h-6 w-6" />
                    {p.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" />
                    {p.date}
                  </span>
                </div>

                <h3 className="mt-1 section-subtitle leading-snug">
                  {p.title}
                </h3>
                <p className="mt-1 section-paragraph">
                  {p.blurb}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {(p.tags ?? []).map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary
                                 px-2 py-0.5 text-[11px] font-semibold ring-1 ring-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <a
                    href={`/insights/${p.id}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-base font-semibold text-white
                               hover:bg-primary/90 transition"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
