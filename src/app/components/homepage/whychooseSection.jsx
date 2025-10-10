"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FEATURES = [
  {
    iconSrc: "/icons/icon-1.png",
    iconAlt: "Innovation icon",
    title: "Multi-Sensory Innovation",
    desc:
      "Science-led creativity combining data-driven R&D with culinary craft for distinctive taste experiences.",
  },
  {
    iconSrc: "/icons/icon-2.png",
    iconAlt: "Nutrition & Wellness icon",
    title: "Nutrition & Wellness",
    desc:
      "Specialized solutions for health-focused applications with effective masking and enhanced palatability.",
  },
  {
    iconSrc: "/icons/icon-3.png",
    iconAlt: "Sustainability icon",
    title: "Sustainability Focus",
    desc:
      "Responsible sourcing and waste-aware processes for clean-label and environmentally conscious solutions.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay },
});

export default function WhyChooseSection() {
  // JS version: no <number | null> type here
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="why-sensorisch" className="section relative overflow-hidden bg-background">
      {/* soft ambient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-24 h-80 w-80 rounded-full blur-3xl opacity-25 bg-primary/15" />
        <div className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full blur-3xl opacity-15 bg-secondary/20" />
      </div>

      <div className="section-container">
        {/* Title */}
        <motion.div {...fadeUp(0)} className="mx-auto max-w-3xl text-center">
          <h2 className="section-title text-black  mt-4">Why Choose <span className="text-primary">Sensorisch</span></h2>
        </motion.div>

        {/* Features */}
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {FEATURES.map((f, i) => {
            const isOpen = openIdx === i;

            return (
              <motion.article
                key={f.title}
                {...fadeUp(0.08 * i)}
                className="group feature-card cursor-pointer select-none"
                aria-label={f.title}
                onClick={() => setOpenIdx(isOpen ? null : i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenIdx(isOpen ? null : i);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                {/* Icon on top (PNG) */}
                <div className="flex flex-col items-center text-center">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary
                               transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3"
                  >
                    <Image
                      src={f.iconSrc}
                      alt={f.iconAlt}
                      width={20}
                      height={20}
                      className="h-7 w-7 object-contain"
                      priority={i === 0}
                    />
                  </div>

                  {/* Heading next line */}
                  <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                </div>

                {/* Hidden paragraph reveals on hover/focus/expand */}
                <div
                  className={[
                    "mt-2 overflow-hidden transition-all duration-300 ease-out",
                    "group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0",
                    "focus-within:max-h-40 focus-within:opacity-100 focus-within:translate-y-0",
                    isOpen ? "max-h-40 opacity-100 translate-y-0" : "max-h-0 opacity-0 translate-y-1",
                  ].join(" ")}
                >
                  <p className="text-foreground/70 text-center leading-relaxed">{f.desc}</p>
                </div>

                {/* underline + chevron indicator */}
                <div className="mt-5 flex items-center justify-center gap-2">
                  <div className="h-px w-0 bg-primary/40 transition-all duration-300 group-hover:w-20" />
                  <ChevronDown
                    className={`h-4 w-4 text-primary/70 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  />
                  <div className="h-px w-0 bg-primary/40 transition-all duration-300 group-hover:w-20" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
