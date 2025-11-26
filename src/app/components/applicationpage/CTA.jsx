// components/CompanyProfileCTA.jsx
"use client";

import { motion } from "framer-motion";
import { HiArrowDownTray, HiCalendarDays } from "react-icons/hi2";
import Link from "next/link";

export default function ProfileCTA({
  title = "Ready to Accelerate Your Product Development?",
  blurb = `Choose from our proven Senso ranges or partner with us for bespoke solutions tailored to your unique requirements.`,
  // Primary actions
  primaryHref = "/contact",
  primaryLabel = "Request Samples",
  secondaryHref = "/contact",
  secondaryLabel = "Schedule Consultation",
}) {
  return (
    <section className="relative section-container bg-[#f5f5f5] w-full overflow-hidden">
      <div className=" py-14 md:py-20 text-center text-priamry">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto section-title max-w-4xl text-primary"
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
          className="mx-auto mt-4 max-w-2xl section-paragraph leading-relaxed text-black/90"
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
