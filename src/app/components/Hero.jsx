"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";
import * as React from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroComponent({ data = {} }) {
  const {
    eyebrow,
    title,
    highlight,
    blurb,
    primary,
    secondary,
    image,
    scrollToId,
  } = data;

  // tilt logic (optional)
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useTransform(ry, [-30, 30], [8, -8]);
  const rotateY = useTransform(rx, [-30, 30], [-8, 8]);

  if (!title && !image?.src) return null;

  return (
    <section className="relative w-full h-[80vh] section-container overflow-hidden text-white">
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        style={{ rotateX, rotateY }}
      >
        <Image
          src={image?.src}
          alt={image?.alt || "Hero image"}
          fill
          priority
          unoptimized
          className="object-cover "
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 " />

      {/* Text content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-2xl pl-8 md:pl-16 space-y-6">
          {eyebrow && (
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-sm font-semibold tracking-wide text-primary/90"
            >
              {eyebrow}
            </motion.h3>
          )}

          {title && (
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="section-title text-black"
            >
              {title}{" "}
              {highlight && (
                <span className="text-primary">{highlight}</span>
              )}
            </motion.h1>
          )}

          {blurb && (
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.1 }}
              className="text-lg text-black/90 max-w-xl"
            >
              {blurb}
            </motion.p>
          )}

          {(primary?.href || secondary?.href) && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              {primary?.href && (
                <a
                  href={primary.href}
                  className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary/90 transition"
                >
                  {primary.label || "Learn more"}
                </a>
              )}
              {secondary?.href && (
                <a
                  href={secondary.href}
                  className="px-6 py-3 border border-primary/30 bg-primary/10 text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition"
                >
                  {secondary.label || "Secondary"}
                </a>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Optional scroll cue */}
      {scrollToId && (
        <div className="border border-dotted bg-priamry/10 p-6">
          <a
          href={`#${scrollToId}`}
          className="absolute left-1/2 bottom-8 -translate-x-1/2 text-primary hover:text-primary transition"
        >
          <FaArrowDownLong className="h-8 w-8 animate-bounce" />
        </a>
        </div>
        
      )}
    </section>
  );
}
