// app/components/FlavourFamiliesGrid.jsx
"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";

/* animations */
const fadeUp = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0)", transition: { duration: 0.45, ease: "easeOut" } },
};
const pop = { whileHover: { y: -6, scale: 1.01, transition: { type: "spring", stiffness: 260, damping: 22 } } };

/* data */
const FALLBACK = [
  { title: "Citrus", blurb: "Bright, zesty profiles from lemon and lime to exotic yuzu and bergamot.", items: ["Lemon","Orange","Lime","Grapefruit","Yuzu","Bergamot"], image: "/assets/img-1.png" },
  { title: "Fruity", blurb: "From tropical mangoes to berry medleys, capturing nature's sweetness.", items: ["Strawberry","Mango","Apple","Peach","Mixed Berry","Tropical Blend"], image: "/assets/img-2.png"},
  { title: "Tea & Coffee", blurb: "Rich, aromatic profiles from delicate green tea to robust espresso.", items: ["Earl Grey","Green Tea","Espresso","Vanilla Latte","Chai Spice","Matcha"], image: "/assets/img-3.png" },
  { title: "Botanicals", blurb: "Herbal and floral essences that add complexity and sophistication.", items: ["Lavender","Rose","Mint","Basil","Rosemary","Chamomile"], image: "/assets/img-4.png" },
  { title: "Brown & White", blurb: "Comfort flavours from vanilla and caramel to rich chocolate notes.", items: ["Vanilla","Caramel","Chocolate","Butterscotch","Toffee","Coconut"], image: "/assets/img-5.png" },
  { title: "Savoury", blurb: "Complex umami profiles and spice blends for sophisticated applications.", items: ["Garlic","Onion","Pepper","Herb Blend","Mushroom","Smoked"], image: "/assets/img-6.png" },
];

/* chip palette (multicolor) */
const chipColors = [
  "bg-pink-100 text-pink-700 ring-pink-200",
  "bg-yellow-100 text-yellow-700 ring-yellow-200",
  "bg-green-100 text-green-700 ring-green-200",
  "bg-blue-100 text-blue-700 ring-blue-200",
  "bg-purple-100 text-purple-700 ring-purple-200",
  "bg-orange-100 text-orange-700 ring-orange-200",
  "bg-red-100 text-red-700 ring-red-200",
  "bg-amber-100 text-amber-800 ring-amber-200",
];

export default function FlavourFamiliesGrid({ families }) {
  const data = families?.length ? families : FALLBACK;
  const [expanded, setExpanded] = useState(() => new Set());
  const toggleExpanded = useCallback((idx) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  }, []);

  return (
    <section id="flavour-families" className="section-container py-10">
      {/* header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mx-auto max-w-5xl text-center"
      >
        <h2 className="mt-3 section-title text-black tracking-tight">
          Natural Taste & <span className="text-primary">Flavour Solutions</span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-4 h-1 rounded bg-black"
          />
        </h2>
        <p className="mt-2 section-paragraph text-black/70">
          Comprehensive flavour families available in multiple formats—from core notes to complex modulators.
        </p>
      </motion.div>

      {/* cards (2-col grid overall) */}
      <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2">
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
              {...pop}
              className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur ring-1 ring-black/5 shadow-lg"
            >
              {/* glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-12 h-44 w-44 rounded-full bg-gradient-to-br from-primary to-primary/50 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* content row — 50/50 split on sm+ */}
              <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2">
                {/* text (50%) */}
                <div className="sm:pr-2">
                  <h3 className="section-subtitle">
                    {f.title}
                    <motion.i
                      initial={{ width: 40 }}
                      whileHover={{ width: 90 }}
                      className="block h-[3px] rounded bg-black"
                    />
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-black/70 line-clamp-3">{f.blurb}</p>

                  {/* chips */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {preview.map((it, i) => (
                      <span
                        key={it}
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${chipColors[i % chipColors.length]}`}
                      >
                        {it}
                      </span>
                    ))}
                    {moreCount > 0 && !isOpen && (
                      <button
                        type="button"
                        onClick={() => toggleExpanded(idx)}
                        className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-white/70 ring-1 ring-black/10 hover:bg-white transition"
                      >
                        +{moreCount} more
                      </button>
                    )}
                  </div>

                  {/* reveal more chips */}
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="mt-2"
                    >
                      <div className="flex flex-wrap gap-2">
                        {rest.map((it, i) => (
                          <motion.span
                            key={it}
                            whileHover={{ y: -1, scale: 1.03 }}
                            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${chipColors[i % chipColors.length]}`}
                          >
                            {it}
                          </motion.span>
                        ))}
                        <button
                          type="button"
                          onClick={() => toggleExpanded(idx)}
                          className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-white/70 ring-1 ring-black/10 hover:bg-white transition"
                        >
                          Show less
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* image (50%) */}
                <motion.div
                  initial={{ scale: 1.02 }}
                  whileHover={{ scale: 1.06 }}
                  className="relative overflow-hidden rounded-xl ring-1 ring-black/5 sm:h-full"
                >
                  {/* maintain nice shape on mobile; fill the column on sm+ */}
                  <div className="relative block sm:hidden aspect-[16/10]" />
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
