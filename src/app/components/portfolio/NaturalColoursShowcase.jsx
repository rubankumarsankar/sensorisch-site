// app/components/NaturalColoursShowcase_v2.jsx
"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const ACCENT = "#D22422"; // brand red

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

// Default colour list
const DEFAULT_COLOURS = [
  { name: "Citrine Yellow", hex: "#F4D03F", blurb: "Bright sunshine yellow for citrus and tropical applications" },
  { name: "Amber Orange", hex: "#E67E22", blurb: "Warm orange perfect for peach, apricot, and caramel flavours" },
  { name: "Ruby Red", hex: "#E74C3C", blurb: "Vibrant red ideal for strawberry, cherry, and berry applications" },
  { name: "Amethyst Purple", hex: "#9B59B6", blurb: "Rich purple for grape, plum, and exotic fruit products" },
  { name: "Olivine Green", hex: "#27AE60", blurb: "Natural green for apple, mint, and herbal formulations" },
  { name: "Sapphire Blue", hex: "#3498DB", blurb: "Cool blue for blueberry, ocean-inspired, and cooling products" },
  { name: "Tiger-Eye Brown", hex: "#8B4513", blurb: "Rich brown for chocolate, coffee, and caramel applications" },
  { name: "Onyx Black", hex: "#2C3E50", blurb: "Deep black for dramatic contrast and sophisticated presentations" },
  { name: "Crystal White", hex: "#ECF0F1", blurb: "Pure white base for clean, minimal, and dairy applications" },
];

export default function NaturalColoursShowcase({
  colours = DEFAULT_COLOURS,
  title = <>Natural <span style={{ color: ACCENT }}>Colours</span></>,
  subtitle = "A curated palette of natural colours available in water- and oil-dispersible forms",
}) {
  const items = useMemo(() => colours, [colours]);

  return (
    <section className="section-container">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mx-auto max-w-5xl text-center"
      >
        <h2 className="section-title tracking-tight text-black">{title}</h2>
        <p className="section-paragraph mt-2 text-black/70">{subtitle}</p>
        
      </motion.div>

      {/* Cards Grid (now 3 columns on md+) */}
      <motion.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3"
      >
        {items.map((c, i) => (
          <ColourCard key={c.name + i} {...c} />
        ))}
      </motion.div>
    </section>
  );
}

/* -------------------- Card -------------------- */

function ColourCard({ name, blurb, hex = "#e5e7eb" }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur ring-1 ring-black/5 shadow-sm transition"
    >
      {/* Colour block */}
      <div className="aspect-[2/1] w-full overflow-hidden rounded-t-2xl">
        <motion.div
          className="h-full w-full"
          style={{ background: hex }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          
        </motion.div>
      </div>

      {/* Text */}
      <div className="p-5">
        <h3 className="text-base font-semibold tracking-tight">
          <span className="inline-block border-b-2" >
            {name}
          </span>
        </h3>
        <p className="mt-2 text-sm leading-6 text-black/70">{blurb}</p>

        {/* Hex chip */}
        <div className="mt-3">
          <span
            className="inline-block rounded-md border px-2 py-1 text-xs font-mono"
            style={{
              borderColor: "rgba(0,0,0,0.08)",
              color: "#111",
              background: "rgba(0,0,0,0.03)",
            }}
          >
            {hex}
          </span>
        </div>
      </div>

      
    </motion.article>
  );
}
