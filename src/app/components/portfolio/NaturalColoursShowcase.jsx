// app/components/NaturalColoursShowcase_v2.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useMemo } from "react";

const ACCENT = "#D22422"; // brand red

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

// Your original defaults, with optional tags/images added (you can pass your own via props)
const DEFAULT_COLOURS = [
  {
    name: "Citrine Yellow",
    hex: "#F4D03F",
    blurb: "Bright sunshine yellow for citrus and tropical applications",
    tags: ["Citrus", "Tropical", "Yuzu"],
    image: "/assets/img-1.png",
  },
  {
    name: "Amber Orange",
    hex: "#E67E22",
    blurb: "Warm orange perfect for peach, apricot, and caramel flavours",
    tags: ["Peach", "Apricot", "Caramel"],
    image: "/assets/img-2.png",
  },
  {
    name: "Ruby Red",
    hex: "#E74C3C",
    blurb: "Vibrant red ideal for strawberry, cherry, and berry applications",
    tags: ["Strawberry", "Cherry", "Berry"],
    image: "/assets/img-3.png",
  },
  {
    name: "Amethyst Purple",
    hex: "#9B59B6",
    blurb: "Rich purple for grape, plum, and exotic fruit products",
    tags: ["Grape", "Plum", "Dragonfruit"],
    image: "/assets/img-4.png",
  },
  {
    name: "Olivine Green",
    hex: "#27AE60",
    blurb: "Natural green for apple, mint, and herbal formulations",
    tags: ["Apple", "Mint", "Herbal"],
    image: "/assets/img-5.png",
  },
  {
    name: "Sapphire Blue",
    hex: "#3498DB",
    blurb: "Cool blue for blueberry, ocean-inspired, and cooling products",
    tags: ["Blueberry", "Cool", "Ice"],
    image: "/assets/img-6.png",
  },
];

export default function NaturalColoursShowcase({
  colours = DEFAULT_COLOURS,
  title = (
    <>
      Natural <span style={{ color: ACCENT }}>Colours</span>
    </>
  ),
  subtitle = "A curated palette of natural colours available in water- and oil-dispersible forms",
}) {
  // ensure pairs for a neat 2-col grid on md+
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
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 160 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-4 h-1 rounded"
          style={{
            background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT}99)`,
          }}
        />
      </motion.div>

      {/* Cards Grid (same layout as screenshot) */}
      <motion.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto mt-10 grid gap-6 md:grid-cols-2"
      >
        {items.map((c, i) => (
          <ColourCard key={c.name + i} index={i} {...c} />
        ))}
      </motion.div>
    </section>
  );
}

/* -------------------- Card -------------------- */

function ColourCard({ name, blurb, tags = [], image, hex, index }) {
  const isAlt = index % 2 === 1; // alternate image side on md+

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur ring-1 ring-black/5 shadow-sm"
    >
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Text */}
        <div className={`p-5 md:col-span-3 ${isAlt ? "md:order-2" : ""}`}>
          <h3 className="text-lg font-semibold tracking-tight">
            <span
              className="inline-block border-b-2"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              {name}
            </span>
          </h3>

          <p className="mt-2 text-sm leading-6 text-black/70">{blurb}</p>

          {/* Chips (like the screenshot) */}
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-md border px-2 py-1 text-xs font-medium"
                style={{
                  borderColor: `${ACCENT}33`,
                  color: ACCENT,
                  background: `${ACCENT}0D`,
                }}
              >
                {t}
              </span>
            ))}
            {/* always show the HEX as a chip */}
            {hex && (
              <span
                className="rounded-md border px-2 py-1 text-xs font-mono"
                style={{
                  borderColor: "rgba(0,0,0,0.08)",
                  color: "#111",
                  background: "rgba(0,0,0,0.03)",
                }}
              >
                {hex}
              </span>
            )}
          </div>

          {/* +More chip */}
          <button
            className="mt-3 inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs font-semibold transition"
            style={{
              borderColor: "rgba(0,0,0,0.08)",
              color: "#111",
              background: "rgba(0,0,0,0.03)",
            }}
            type="button"
          >
            +More <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Image / Swatch */}
        {/* Image / Swatch */}
        <div className={`relative md:col-span-2 ${isAlt ? "md:order-1" : ""}`}>
          <div className="m-5 overflow-hidden rounded-xl ring-1 ring-black/5">
            {/* Give the fill image a guaranteed box */}
            <div className="relative w-full aspect-[4/3] md:aspect-[1/1.05]">
              {image ? (
                <Image
                  src={image} // make sure the file is in /public/assets/...
                  alt={name}
                  fill
                  sizes="(min-width: 768px) 360px, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  priority={index < 2}
                />
              ) : (
                // fallback swatch if no image
                <div
                  className="h-full w-full"
                  style={{ background: hex ?? "#eee" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* hover halo */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT}80)`,
        }}
      />
    </motion.article>
  );
}
