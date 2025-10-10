// components/CompanyProfileCTA.jsx
"use client";

import { motion } from "framer-motion";
import { HiArrowDownTray, HiCalendarDays } from "react-icons/hi2";

export default function ProfileCTA({
  title = "Ready to Accelerate Your Product Development?",
  blurb = `Choose from our proven Senso ranges or partner with us for bespoke solutions tailored to your unique requirements.`,
  // Primary actions
  primaryHref = "/samples/request",
  primaryLabel = "Request Samples",
  secondaryHref = "/consultation/schedule",
  secondaryLabel = "Schedule Consultation",
}) {
  return (
    <section className="relative section-container bg-primary w-full overflow-hidden">
      <div className=" py-14 md:py-20 text-center text-white">
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
            <HiCalendarDays className="h-5 w-5" />
            {secondaryLabel}
          </motion.a>
        </motion.div>
      </div>
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
