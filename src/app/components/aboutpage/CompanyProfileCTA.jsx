// components/CompanyProfileCTA.jsx
"use client";

import { motion } from "framer-motion";
import { HiArrowDownTray } from "react-icons/hi2";

export default function CompanyProfileCTA({
  title = "Company Profile",
  blurb = `Download our comprehensive company profile to learn more about our capabilities,
processes, and how we can support your product development goals.`,
  fileUrl = "#",
  fileName = "Sensorisch-Company-Profile.pdf",
  buttonLabel = "Download Company Profile",
}) {
  return (
    <section className="relative isolate w-full bg-[#f5f5f5] section-container text-black">
      <div className="section-container py-12 md:py-16 text-center">
        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="section-title text-primary"
        >
          {title}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-6 h-1 rounded bg-black"
          />
        </motion.h2>

        {/* blurb */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mx-auto mt-3 max-w-2xl section-paragraph leading-relaxed text-black/90"
        >
          {blurb}
        </motion.p>

        {/* button */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-6"
        >
          <a
            href={fileUrl}
            download={fileName}
            className="inline-flex items-center gap-2 rounded-md bg-white/95 px-4 py-2 text-lg font-semibold
                       text-primary ring-1 shadow-[0_12px_30px_-16px_rgba(0,0,0,0.45)]
                       hover:bg-primary hover:text-white transition-colors"
          >
            {buttonLabel}
            {/* download icon */}

            <HiArrowDownTray className="w-8 h-8" />
          </a>
        </motion.div>
      </div>
      <motion.div
        aria-hidden
        className=""
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
