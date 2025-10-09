// app/components/HeroSection.jsx
"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  show:   { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSection() {
  // image hover-tilt
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useTransform(ry, [-30, 30], [8, -8]);
  const rotateY = useTransform(rx, [-30, 30], [-8, 8]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;  // 0..1
    const y = (e.clientY - rect.top) / rect.height;  // 0..1
    rx.set((x - 0.5) * 60);
    ry.set((y - 0.5) * 60);
  };

  const handleLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden">

        <div className="section-container py-14 md:py-20">
          <div className="grid items-center gap-10 md:gap-12 md:grid-cols-2">
            {/* LEFT — copy */}
            <div className="order-1">
              <motion.h3
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="mb-4 text-center md:text-center text-sm font-semibold tracking-wide text-primary/90"
              >
                Flavours & Fragrances. Engineered for Impact.
              </motion.h3>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.05 }}
                className="section-title mb-3 text-black"
              >
                Make Everyday Products Feel{" "}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10 text-primary">Extraordinary</span>
                  
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.15 }}
                className="section-paragraph mb-8 max-w-xl text-pretty"
              >
                Make everyday products feel extraordinary. Partner with us to create
                repeat-worthy taste and aroma through science-led innovation,
                application-ready systems, and rigorous execution that scales consistently.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.25 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                {/* primary */}
                <motion.a
                  href="#solutions"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg
                             bg-primary text-white font-semibold shadow-[0_16px_40px_-18px_rgba(0,0,0,0.45)]
                             hover:bg-primary/90 transition"
                >
                  Explore Solutions
                </motion.a>

                {/* secondary */}
                <motion.a
                  href="#contact"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg
                             border border-primary/40 bg-white text-primary font-semibold
                             hover:bg-primary/5 transition"
                >
                  Request Samples
                </motion.a>
              </motion.div>
            </div>

            {/* RIGHT — image with tilt/parallax + shimmer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="order-2 relative w-full lg:h-[560px] overflow-hidden rounded-xl
                         border border-black/5 dark:border-white/10 shadow-md"
            >
              <motion.div
                style={{ rotateX, rotateY }}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                className="relative h-full w-full will-change-transform"
              >
                <Image
                  src="/hero-banner.png"
                  alt="Sensorisch flavour & fragrance lab banner"
                  fill
                  priority
                  sizes="(min-width:1024px) 60vw, (min-width:768px) 50vw, 100vw"
                  className="object-cover object-right"
                />

                {/* light sweep shimmer */}
                <motion.div
                  aria-hidden
                  initial={{ x: "-120%", opacity: 0.0 }}
                  animate={{ x: "120%", opacity: [0, 0.25, 0] }}
                  transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut" }}
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2
                             bg-gradient-to-r from-transparent via-white/25 to-transparent
                             skew-x-12"
                />
              </motion.div>

              {/* soft halo glow */}
              <motion.div
                aria-hidden
                animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.04, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -inset-3 rounded-[20px] bg-primary/10 blur-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom-center animated scroll arrow */}
        <motion.a
          href="#why-sensorisch"
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
      </section>
    </main>
  );
}
