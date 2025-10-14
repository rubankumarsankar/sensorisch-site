// components/CompanyProfileCTA.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA({
  title = "Explore Our Complete Portfolio",
  blurb = `From concept to completion, our comprehensive portfolio supports every stage of your product development journey.`,
  primaryHref = "/contact",
  primaryLabel = "Request Full Catalogue",
  secondaryHref = "/contact",
  secondaryLabel = "Schedule Tasting Session",
}) {
  return (
    <section className="relative overflow-hidden section-container bg-primary text-white">
      {/* floating shimmer lines */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_60%)]"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.1)_50%,transparent_80%)]"
      />

      <div className="section-container relative py-16 md:py-24 text-center">
        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-3xl md:text-4xl font-extrabold tracking-tight leading-snug"
        >
          {title}
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="mx-auto mt-3 block h-[3px] w-40 md:w-56 origin-left rounded-full bg-white/70"
          />
        </motion.h2>

        {/* blurb */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl section-paragraph leading-relaxed text-white/90"
        >
          {blurb}
        </motion.p>

        {/* buttons */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 rounded-lg bg-white text-primary px-6 py-3 text-sm font-semibold shadow-[0_12px_40px_-20px_rgba(0,0,0,0.5)] hover:bg-white/95 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            >
              {primaryLabel}
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-6 py-3 text-sm font-semibold ring-1 ring-white/30 hover:bg-white/25 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            >
              {secondaryLabel}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* subtle white divider at bottom */}
      <motion.div
        aria-hidden
        className="h-px w-full bg-white/30"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </section>
  );
}
