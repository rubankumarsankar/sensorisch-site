// components/HeroComponent.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";
import Link from "next/link";

export default function HeroComponent({ data = {} }) {
  const {
    imageMobile,   // { src, alt }
    imageDesktop,  // { src, alt }
    primary,
    secondary,
    scrollToId,
  } = data;

  return (
    <section
      className="
        relative overflow-hidden
        min-h-[600px]
        flex items-end mt-18 
      "
    >
      {/* ===========================
           FULL BANNER IMAGE (MOBILE)
      ============================ */}
      {imageMobile?.src && (
        <div className="absolute inset-0 -z-10 md:hidden">
          <Image
            src={imageMobile.src}
            alt={imageMobile.alt || "Banner"}
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      )}

      {/* ===========================
           FULL BANNER IMAGE (DESKTOP)
      ============================ */}
      {imageDesktop?.src && (
        <div className="absolute inset-0 -z-10 hidden md:block">
          <Image
            src={imageDesktop.src}
            alt={imageDesktop.alt || "Banner"}
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      )}

      {/* If needed, you can re-enable this overlay: */}
      {/* <div className="absolute inset-0 bg-black/30 -z-10" /> */}

      {/* ===========================
            BUTTONS (BOTTOM, RESPONSIVE)
      ============================ */}
      <div className="section-container pb-14 md:pb-20 w-full">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {primary?.href && (
            <Link
              href={primary.href}
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary/90 transition"
            >
              {primary.label || "Button One"}
            </Link>
          )}

          {secondary?.href && (
            <Link
              href={secondary.href}
              className="px-6 py-3 border border-primary/40 bg-white text-primary font-semibold rounded-lg hover:bg-white hover:text-primary transition"
            >
              {secondary.label || "Button Two"}
            </Link>
          )}
        </div>
      </div>

      {/* ===========================
           SCROLL BUTTON (CENTER BOTTOM)
      ============================ */}
      {scrollToId && (
  <motion.a
    href={`#${scrollToId}`}
    aria-label="Scroll to next section"
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
    className="
      group
      absolute
      left-1/2
      -translate-x-1/2
      bottom-0 md:bottom-6
    "
  >
    <motion.span
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 1.4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="
        inline-flex 
        h-12 w-10               /* smaller mobile size */
        md:h-20 md:w-12        /* larger desktop size */
        items-center justify-center
        rounded-full 
        bg-white/85 backdrop-blur
        border-2 border-dotted border-primary/50
        shadow-sm
        group-hover:ring-4 ring-primary/20 transition
      "
    >
      <FaArrowDownLong 
        className="text-primary
        h-5 w-4 md:h-8 md:w-5   /* smaller arrow on mobile */
      " 
      />
    </motion.span>
  </motion.a>
)}

    </section>
  );
}
