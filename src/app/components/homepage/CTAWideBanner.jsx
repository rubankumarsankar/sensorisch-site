// components/CompanyProfileCTA.jsx
"use client";

import { motion } from "framer-motion";
import { HiArrowDownTray, HiCalendarDays } from "react-icons/hi2";

export default function ProfileCTA({
  title = "Ready to Transform Your Products?",
  blurb = `Partner with Sensorisch for science-led flavours that scale consistently, comply regionally, and delight consumers.

`,
  // Primary actions
  primaryHref = "/samples/request",
  primaryLabel = "Start Your Project",
  secondaryHref = "/consultation/schedule",
  secondaryLabel = "View Our Portfolio",
 
}) {
  return (
    <section className="relative isolate w-full overflow-hidden section-container">
      {/* Gradient background + soft lights */}
      <div className="absolute inset-0 -z-10 bg-primary" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 size-[36rem] rounded-full blur-3xl opacity-25 bg-white/20" />
        <div className="absolute -bottom-40 -right-24 size-[38rem] rounded-full blur-3xl opacity-15 bg-black/20" />
      </div>

      {/* Subtle noise + vignette */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(90%_60%_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)]" />

      <div className="section-container py-14 md:py-20 text-center text-white">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-4xl text-3xl md:text-4xl font-extrabold tracking-tight"
        >
          {title}
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            className="mx-auto mt-3 block h-1 w-40 md:w-56 origin-left rounded-full bg-white/70"
          />
        </motion.h2>

        {/* Blurb */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-sm md:text-[15px] leading-relaxed text-white/90"
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
          <motion.a
            href={primaryHref}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-primary font-semibold shadow-[0_16px_40px_-20px_rgba(0,0,0,0.45)] hover:bg-white/95 transition-colors"
            aria-label={primaryLabel}
          >
            {primaryLabel}
          </motion.a>

          {/* Secondary */}
          <motion.a
            href={secondaryHref}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-semibold ring-1 ring-white/40 hover:bg-white/15 transition-colors"
            aria-label={secondaryLabel}
          >
            {/* <HiCalendarDays className="h-5 w-5" /> */}
            {secondaryLabel}
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative corner ribbons */}
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-24 w-24 bg-gradient-to-br from-white/20 to-transparent" />
      <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-24 w-24 bg-gradient-to-tl from-white/10 to-transparent" />
    </section>
  );
}
