// components/HeroComponent.jsx
"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";
import * as React from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HeroComponent({ data = {} }) {
  const {
    eyebrow,
    title,
    highlight,
    blurb,
    primary,
    secondary,
    image, // { src, alt }
    scrollToId,

    // toggles
    enableTilt = true,
  } = data;

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useTransform(ry, [-30, 30], [8, -8]);
  const rotateY = useTransform(rx, [-30, 30], [-8, 8]);

  const onMove = (e) => {
    if (!enableTilt) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    rx.set((x - 0.5) * 60);
    ry.set((y - 0.5) * 60);
  };
  const onLeave = () => {
    if (!enableTilt) return;
    rx.set(0);
    ry.set(0);
  };

  if (!title && !image?.src) return null;

  return (
    <section className="relative overflow-hidden">
      <div className="section-container py-14 md:py-20">
        <div className="grid items-center gap-10 md:gap-12 md:grid-cols-2">
          {/* LEFT  -  text */}
          <div className="order-1">
            {eyebrow && (
              <motion.h3
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="relative text-sm font-semibold inline-block tracking-wide text-primary/90 rounded-md"
              >
                {/* glow */}
                <span
                  className="absolute inset-0 bg-primary-light  rounded-md "
                  aria-hidden="true"
                />
                {/* highlight capsule */}
                <span className="relative bg-primary-light px-3 py-1 rounded-md">
                  {eyebrow}
                </span>
              </motion.h3>
            )}

            {title && (
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.05 }}
                className="section-title mt-3 text-black"
              >
                {title}{" "}
                {highlight && <span className="text-primary">{highlight}</span>}
              </motion.h1>
            )}

            {blurb && (
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.12 }}
                className="section-paragraph mt-4 max-w-xl text-black/90"
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
                className="mt-6 flex flex-wrap gap-4"
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

          {/* RIGHT  -  image column (contained card, not full bleed) */}
          {image?.src && (
            <motion.div
              className="order-2 relative w-full overflow-hidden "
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            >
              {/* Keep a pleasant aspect ratio; adjust as needed */}
              <div
                className="relative w-full"
                style={{ aspectRatio: "4 / 3" }} // 4:3; change to "16 / 9" if you prefer
              >
                <motion.div
                  // style={enableTilt ? { rotateX, rotateY } : undefined}
                  onMouseMove={onMove}
                  onMouseLeave={onLeave}
                  className="relative h-full w-full will-change-transform"
                >
                  <Image
                    src={image.src}
                    alt={image.alt || "Hero image"}
                    fill
                    priority
                    unoptimized // needed if using { output: 'export' }
                    sizes="(min-width:1024px) 40vw, (min-width:768px) 50vw, 90vw"
                    className="object-cover object-center"
                  />

                  {/* optional shimmer */}
                  {/* <motion.div
                    aria-hidden
                    initial={{ x: "-120%", opacity: 0.0 }}
                    animate={{ x: "120%", opacity: [0, 0.22, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3.6,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2
                               bg-gradient-to-r from-transparent via-white/35 to-transparent
                               skew-x-12"
                  /> */}
                </motion.div>

                {/* subtle halo */}
                {/* <motion.div
                  aria-hidden
                  animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.03, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute -inset-2 rounded-[18px] bg-primary/10 blur-2xl"
                /> */}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Optional scroll cue */}
      {scrollToId && (
        <motion.a
          href={`#${scrollToId}`}
          aria-label="Scroll to next section"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="group absolute left-1/2 -translate-x-1/2 bottom-6 md:bottom-10"
        >
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex h-20 w-12 items-center justify-center rounded-full
               bg-white/80 dark:bg-white/10 backdrop-blur
               border-2 border-dotted border-primary/50
               shadow-sm ring-0 group-hover:ring-4 ring-primary/20 transition"
          >
            <FaArrowDownLong
              className="h-8 w-5 text-primary"
              aria-hidden="true"
            />
          </motion.span>
        </motion.a>
      )}
    </section>
  );
}
