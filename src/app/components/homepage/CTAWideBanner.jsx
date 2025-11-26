// components/CompanyProfileCTA.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProfileCTA({
  title = "Ready to Transform Your Products?",
  blurb = `Partner with Sensorisch for science-led flavours that scale consistently, comply regionally, and delight consumers.`,
  primaryHref = "/contact",
  primaryLabel = "Start Your Project",
  secondaryHref = "/contact",
  secondaryLabel = "View Our Portfolio",
}) {
  return (
    <section className="relative section-container  w-full overflow-hidden">
      {/* Main block */}
      <div className="section-container  py-14 md:py-20 text-center text-black">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-4xl section-title"
        >
          {title}
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            className="mx-auto mt-3 block h-1 w-40 md:w-56 origin-left rounded-full bg-black"
          />
        </motion.h2>

        {/* Blurb */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mx-auto mt-4 section-paragraph max-w-2xl leading-relaxed "
        >
          {blurb}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
          {/* Primary */}
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={primaryHref}
              aria-label={primaryLabel}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-white font-semibold shadow-[0_16px_40px_-20px_rgba(0,0,0,0.45)] hover:bg-white/95 hover:text-primary transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            >
              {primaryLabel}
            </Link>
          </motion.div>

          {/* Secondary */}
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={secondaryHref}
              aria-label={secondaryLabel}
              className="inline-flex items-center gap-2 rounded-lg bg-white text-primary px-5 py-3 font-semibold  hover:bg-primary transition-colors hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            >
              {secondaryLabel}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle bottom divider spanning the container width */}
      <motion.div
        aria-hidden
        className="section-container"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="h-px w-full bg-white/20 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
