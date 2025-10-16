// app/components/FlavourFamiliesAccordion.jsx
"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const FALLBACK = [
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

export default function FlavourFamiliesGrid({ families }) {
  const data = families?.length ? families : FALLBACK;

  // track which cards are expanded for chips
  const [expanded, setExpanded] = useState(() => new Set());

  const toggleExpanded = useCallback((idx) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  }, []);

  return (
    <section id="portfolio" className="section-container py-10">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mx-auto max-w-5xl text-center"
      >
        <h2 className="mt-3 section-title text-black tracking-tight">
          Natural Taste &{" "}
          <span className="text-primary"> Flavour Solutions</span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-4 h-1 rounded bg-gradient-to-r from-primary to-primary/60"
          />
        </h2>
        <p className="mt-2 section-paragraph text-black/70">
          Comprehensive flavour families available in multiple formats - from core
          notes to complex modulators
        </p>
      </motion.div>

      {/* Split cards */}
      <div className="mx-auto mt-10 max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((f, idx) => {
          const isOpen = expanded.has(idx);
          const preview = f.items.slice(0, 3);
          const rest = f.items.slice(3);
          const moreCount = Math.max(rest.length, 0);

          return (
            <motion.article
              key={f.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-white/[0.06] backdrop-blur
                         ring-1 ring-black/5 dark:ring-white/10 shadow-lg"
            >
              {/* ambient glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-14 -right-16 h-40 w-40 rounded-full
                           bg-gradient-to-br from-primary to-primary/50 blur-3xl opacity-0 transition-opacity duration-300
                           group-hover:opacity-100"
              />

              {/* header row */}
              <div className="flex items-start gap-3 px-5 pt-5">
                {/* emoji badge */}
                <span className="relative grid size-11 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/20 text-xl">
                  <span
                    role="img"
                    aria-label={f.title}
                    className="leading-none"
                  >
                    {f.emoji}
                  </span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-xl"
                    style={{ boxShadow: "inset 0 0 16px rgba(210,36,34,0.12)" }}
                  />
                </span>

                {/* title + blurb */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-3">
                    <h3 className="section-subtitle">
                      {f.title}{" "}
                      <motion.i
                        initial={{ width: 40 }}
                        whileHover={{ width: 90 }}
                        className="block h-[3px] rounded bg-gradient-to-r from-primary to-primary/60"
                      />
                    </h3>
                  </div>
                  <p className="mt-1 section-paragraph text-base line-clamp-3">
                    {f.blurb}
                  </p>
                </div>
              </div>

              {/* chips area */}
              <div className="px-5 pb-5 pt-3">
                <div className="flex flex-wrap gap-2">
                  {preview.map((it) => (
                    <span
                      key={it}
                      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold
                                 bg-primary/10 text-primary ring-1 ring-primary/20"
                    >
                      {it}
                    </span>
                  ))}

                  {/* +N more toggle */}
                  {moreCount > 0 && !isOpen && (
                    <button
                      type="button"
                      onClick={() => toggleExpanded(idx)}
                      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold
                                 bg-white/70 dark:bg-white/10 ring-1 ring-black/10 dark:ring-white/10
                                 hover:bg-white/90 dark:hover:bg-white/15 transition"
                    >
                      +{moreCount} more
                    </button>
                  )}
                </div>

                {/* revealed chips */}
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="mt-2"
                  >
                    <div className="flex flex-wrap gap-2">
                      {rest.map((it) => (
                        <motion.span
                          key={it}
                          whileHover={{ y: -1, scale: 1.03 }}
                          className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold
                                     bg-primary/10 text-primary ring-1 ring-primary/20"
                        >
                          {it}
                        </motion.span>
                      ))}
                      <button
                        type="button"
                        onClick={() => toggleExpanded(idx)}
                        className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold
                                   bg-white/70 dark:bg-white/10 ring-1 ring-black/10 dark:ring-white/10
                                   hover:bg-white/90 dark:hover:bg-white/15 transition"
                      >
                        Show less
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
