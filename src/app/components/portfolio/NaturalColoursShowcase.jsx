// app/components/NaturalColoursShowcase.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Palette, Copy, Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

// Defaults (you can pass your own via props)
const DEFAULT_COLOURS = [
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

const DEFAULT_FORMS = [
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

export default function NaturalColoursShowcase({
  colours = DEFAULT_COLOURS,
  forms = DEFAULT_FORMS,
}) {
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
        <h2 className="mt-3 section-title text-black tracking-tight">
          Natural
          <span className="text-primary">Colours</span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-4 h-1 rounded bg-gradient-to-r from-primary to-primary/60"
          />
        </h2>
        <p className="mt-2 section-paragraph text-black/70">
          A curated palette of natural colours available in water- and
          oil-dispersible forms
        </p>
      </motion.div>

      {/* Palette grid */}
      <motion.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {colours.map((c, i) => (
          <ColourCard key={c.name} colour={c} delay={i * 0.04} />
        ))}
      </motion.div>

      {/* Available Forms */}
      <div className="py-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-5xl text-center"
        >
          <h2 className="mt-3 section-title text-black tracking-tight">
            Available {" "}
            <span className="text-primary">Forms</span>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="mx-auto mt-4 h-1 rounded bg-gradient-to-r from-primary to-primary/60"
            />
          </h2>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {forms.map((f, i) => (
              <motion.div
                key={f.k}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-4"
              >
                <div className="flex items-center justify-between">
                  <h4 className="section-subtitle">{f.k}</h4>
                </div>
                <p className="section-paragraph mt-1">{f.blurb}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- sub-components -------------------- */

function ColourCard({ colour, delay = 0 }) {
  const { name, hex, blurb } = colour;
  const [copied, setCopied] = useState(false);

  const copyHex = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <motion.article
      variants={fadeUp}
      transition={{ delay }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white/70 dark:bg-white/5 backdrop-blur"
    >
      {/* Top swatch with subtle sheen */}
      <div className="relative h-28 w-full" style={{ backgroundColor: hex }}>
        <motion.span
          aria-hidden
          initial={{ x: "-120%" }}
          whileHover={{ x: "120%" }}
          transition={{ duration: 1.15, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 skew-x-12 bg-white/20"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-4">
          <h3 className="section-subtitle">{name}</h3>
          <button
            onClick={copyHex}
            className="inline-flex items-center gap-1.5 rounded-md bg-black/5 dark:bg-white/10 px-2.5 py-1 text-xs font-semibold text-foreground/80 hover:bg-black/10 dark:hover:bg-white/15 transition"
            title="Copy HEX"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            <code>{hex}</code>
          </button>
        </div>

        <p className="mt-1 section-paragraph">{blurb}</p>

        <div className="mt-3 flex items-center gap-3">
          <button className="rounded-md bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 ring-1 ring-primary/20 hover:bg-primary/20 transition">
            Match Color
          </button>

        </div>
      </div>

      {/* Hover halo */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full
                   bg-gradient-to-br from-primary to-primary/50 blur-3xl opacity-0 transition-opacity duration-300
                   group-hover:opacity-100"
      />
    </motion.article>
  );
}
