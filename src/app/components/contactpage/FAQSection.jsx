"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "./motionHelpers";
import { ChevronDown } from "lucide-react";
const FAQ = [
  {
    q: "How long does sample development take?",
    a: "Initial samples are typically delivered within 5–7 business days for standard applications, and 10–14 days for complex bespoke formulations.",
  },
  {
    q: "What information do you need for custom development?",
    a: "Target flavour profiles, application details, technical specs, regulatory requirements, and any specific performance criteria or constraints.",
  },
  {
    q: "Do you provide regulatory support?",
    a: "Yes. We provide FSSAI and international compliance guidance plus complete documentation support.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section">
      <div className="section-container">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center text-black section-title"
        >
          Frequently <span className="text-primary"> Asked Questions</span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 160 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-4 h-1 rounded bg-black"
            aria-hidden
          />
        </motion.h3>

        <div className="mx-auto mt-6 max-w-3xl">
          {FAQ.map((f, i) => {
            const active = openIdx === i;
            return (
              <div
                key={f.q}
                className="border-b border-black/5 dark:border-white/10 py-4"
              >
                <button
                  onClick={() => setOpenIdx(active ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="inline-flex items-center gap-2 section-subtitle">
                    {/* simple icon dot */}
                    <span className="h-2 w-2 rounded-full bg-primary inline-block" />{" "}
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: active ? 180 : 0 }}
                    className="h-6 w-6 grid place-items-center rounded-full text-primary"
                  >
                    <ChevronDown />

                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {active && (
                    <motion.p
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="section-paragraph text-black/75 pt-2"
                    >
                      {f.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
