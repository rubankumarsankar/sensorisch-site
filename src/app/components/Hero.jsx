// app/components/HeroData.jsx
"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";
import * as React from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroCompnonet({ data = {} }) {
  const {
    // copy
    eyebrow,
    title,
    highlight,
    blurb,

    // CTAs
    primary,   // { href, label }
    secondary, // { href, label }

    // image
    image,     // { src, alt }

    // scroll cue
    scrollToId,

    // toggles (optional)
    enableTilt = true,
    showUnderline = true,
    showShimmer = true,
    showHalo = true,

    // layout
    className = "",
    containerClassName = "section-container py-14 md:py-20",
  } = data;

  // 3D hover tilt
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useTransform(ry, [-30, 30], [8, -8]);
  const rotateY = useTransform(rx, [-30, 30], [-8, 8]);

  const onMove = (e) => {
    if (!enableTilt) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    rx.set((x - 0.5) * 60);
    ry.set((y - 0.5) * 60);
  };
  const onLeave = () => {
    if (!enableTilt) return;
    rx.set(0);
    ry.set(0);
  };

  // If nothing meaningful to show, render nothing
  if (!title && !image?.src) return null;

  return (
    <main className={`bg-background text-foreground ${className}`}>
      <section className="relative overflow-hidden">
        
        <div className={containerClassName}>
          <div className="grid items-center gap-10 md:gap-12 md:grid-cols-2">
            {/* LEFT — copy */}
            <div className="order-1">
              {eyebrow && (
                <motion.h3
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  className="mb-4 text-center md:text-center text-base font-semibold tracking-wide text-primary/90"
                >
                  {eyebrow}
                </motion.h3>
              )}

              {title && (
                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.05 }}
                  className="section-title mb-3 text-black"
                >
                  {title}{" "}
                  {highlight ? (
                    <span className="relative whitespace-nowrap">
                      <span className="relative z-10 text-primary">{highlight}</span>
                      
                    </span>
                  ) : null}
                </motion.h1>
              )}

              {blurb && (
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.15 }}
                  className="section-paragraph mb-8 max-w-xl text-pretty"
                >
                  {blurb}
                </motion.p>
              )}

              {(primary?.href || secondary?.href) && (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.25 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  {primary?.href && (
                    <motion.a
                      href={primary.href}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center px-8 py-3 rounded-lg
                                 bg-primary text-white font-semibold shadow-[0_16px_40px_-18px_rgba(0,0,0,0.45)]
                                 hover:bg-primary/90 transition"
                    >
                      {primary.label || "Learn more"}
                    </motion.a>
                  )}

                  {secondary?.href && (
                    <motion.a
                      href={secondary.href}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center px-8 py-3 rounded-lg
                                 border border-primary/40 bg-white text-primary font-semibold
                                 hover:bg-primary/5 transition"
                    >
                      {secondary.label || "Secondary"}
                    </motion.a>
                  )}
                </motion.div>
              )}
            </div>

            {/* RIGHT — image */}
            {image?.src && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="order-2 relative w-full lg:h-[560px] overflow-hidden rounded-xl
                           border border-black/5 dark:border-white/10 shadow-md"
              >
                <motion.div
                  style={enableTilt ? { rotateX, rotateY } : undefined}
                  onMouseMove={onMove}
                  onMouseLeave={onLeave}
                  className="relative h-full w-full will-change-transform"
                >
                  <Image
                    src={image.src}
                    alt={image.alt || "Hero image"}
                    fill
                    priority
                    sizes="(min-width:1024px) 60vw, (min-width:768px) 50vw, 100vw"
                    className="object-cover object-right"
                  />

                  {showShimmer && (
                    <motion.div
                      aria-hidden
                      initial={{ x: "-120%", opacity: 0.0 }}
                      animate={{ x: "120%", opacity: [0, 0.25, 0] }}
                      transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut" }}
                      className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2
                                 bg-gradient-to-r from-transparent via-white/25 to-transparent
                                 skew-x-12"
                    />
                  )}
                </motion.div>

                {showHalo && (
                  <motion.div
                    aria-hidden
                    animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.04, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="pointer-events-none absolute -inset-3 rounded-[20px] bg-primary/10 blur-2xl"
                  />
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Scroll cue (optional) */}
        {scrollToId && (
          <motion.a
            href={`#${scrollToId}`}
            aria-label="Scroll to next section"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group absolute left-1/2 bottom-6 md:bottom-10 -translate-x-1/2"
          >
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex h-20 w-12 items-center justify-center rounded-full
                         bg-white/80 dark:bg-white/10 backdrop-blur
                         border-2 border-dotted border-primary/50
                         shadow ring-0 group-hover:ring-4 ring-primary/20 transition"
            >
              <FaArrowDownLong className="h-8 w-5 text-primary" aria-hidden="true" />
            </motion.span>
          </motion.a>
        )}
      </section>
    </main>
  );
}
