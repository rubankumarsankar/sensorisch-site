// components/CompanyProfileCTA.jsx
"use client";

import { motion } from "framer-motion";
import { HiArrowDownTray } from "react-icons/hi2";

export default function CompanyProfileCTA({
  title = "Company Profile",
  blurb = `Download our comprehensive company profile to learn more about our capabilities,
processes, and how we can support your product development goals.`,
  fileUrl = "/files/company-profile.pdf",
  fileName = "Sensorisch-Company-Profile.pdf",
  buttonLabel = "Download Company Profile",
}) {
  return (
    <section className="relative isolate w-full bg-primary section-container text-white">
      {/* soft vignette for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)]" />

      <div className="section-container py-12 md:py-16 text-center">
        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="section-title text-white"
        >
          {title}
        </motion.h2>

        {/* blurb */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mx-auto mt-3 max-w-2xl text-sm md:text-[15px] leading-relaxed text-white/90"
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
                       text-primary ring-1 ring-white/70 shadow-[0_12px_30px_-16px_rgba(0,0,0,0.45)]
                       hover:bg-white transition-colors"
          >
            {buttonLabel}
            {/* download icon */}
            
            <HiArrowDownTray className="w-8 h-8" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
