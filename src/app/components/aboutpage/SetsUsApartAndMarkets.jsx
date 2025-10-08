// components/SetsUsApartAndMarkets.jsx
"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

// swap with your real assets if needed
const ICONS = {
  labs: "/icons/lab-jar.svg",
  hand: "/icons/hand.svg",
  shield: "/icons/shield.svg",
};

export default function SetsUsApartAndMarkets() {
  return (
    <section className="bg-background text-foreground">
      <div className="section-container mb-15">
        {/* ===== WHAT SETS US APART ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
            What Sets Us Apart
          </h2>
          <p className="mt-3 text-sm md:text-base text-foreground/70 max-w-2xl mx-auto">
            Science-led development, pre-validated systems, and rigorous quality - built for scale.
          </p>
        </motion.div>

        {/* Features + dotted connectors */}
        <div className="relative mt-10 md:mt-14">
          {/* background bloom */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 -top-6 h-40 rounded-full bg-primary/10 blur-3xl md:inset-x-24 dark:bg-primary/15"
          />

          {/* dotted line: horizontal on md+, vertical on mobile */}
          <div
            aria-hidden
            className="absolute left-1/2 top-[44px] h-[calc(100%-44px)] -translate-x-1/2 border-l border-dashed border-primary/30 md:hidden"
          />
          <div
            aria-hidden
            className="hidden md:block absolute left-0 right-0 top-8 mx-10 border-t border-dashed border-primary/30"
          />

          <motion.ul
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative grid gap-10 md:grid-cols-3"
          >
            {/* 1 */}
            <Feature
              iconSrc={ICONS.labs}
              title="Deep Application Labs"
              blurb="Specialized testing environments that replicate real-world manufacturing conditions."
            />

            {/* 2 */}
            <Feature
              iconSrc={ICONS.hand}
              title="Senso™ Ready Systems"
              blurb="Pre-validated application ranges that reduce development time and risk."
            />

            {/* 3 */}
            <Feature
              iconSrc={ICONS.shield}
              title="Robust QA/QC"
              blurb="Comprehensive quality assurance with complete documentation and compliance."
            />
          </motion.ul>
        </div>

        {/* ===== OUR MARKETS ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-20 md:mt-28 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
            Our Markets
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-foreground/80">
            Serving India with GCC support today-positioned to expand with regulatory readiness.
          </p>
        </motion.div>

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          <MarketCard
            heading="India 🇮🇳"
            highlightWidth="w-14"
            blurb="Primary market with comprehensive local supply chain, regulatory expertise, and deep understanding of regional taste preferences."
          />
          <MarketCard
            heading="GCC Region 🇸🇦🇦🇪"
            highlightWidth="w-20"
            blurb="Growing presence with specialized support for Gulf markets, including halal certification and regional compliance."
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ================== Subcomponents ================== */

function Feature({ iconSrc, title, blurb }) {
  return (
    <motion.li variants={fadeUp} className="relative flex flex-col items-center text-center">
      {/* icon pill */}
      <div className="relative">
        <div className="h-16 w-16 rounded-full bg-white shadow-xl ring-1 ring-black/5 grid place-items-center dark:bg-neutral-900 dark:ring-white/10">
          <img src={iconSrc} alt="" className="h-7 w-7" />
        </div>
        {/* soft glow */}
        <div className="absolute inset-0 -z-10 rounded-full bg-black/5 blur-xl dark:bg-white/5" />
      </div>

      <h3 className="mt-4 text-base md:text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm md:text-base text-foreground/80 max-w-[26rem]">{blurb}</p>

      {/* anchor dot for the horizontal dashed line on md+ */}
      <div
        aria-hidden
        className="hidden md:block absolute left-1/2 top-8 h-2 w-2 -translate-x-1/2 rounded-full bg-primary/60 shadow-[0_0_0_4px_rgba(0,0,0,0.04)]"
      />
    </motion.li>
  );
}

function MarketCard({ heading, blurb, highlightWidth = "w-14" }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4, boxShadow: "0 28px 46px -26px rgba(0,0,0,0.28)" }}
      className="rounded-2xl bg-white/80 backdrop-blur-md shadow-[0_14px_30px_-18px_rgba(0,0,0,0.22)] ring-1 ring-black/5 p-6 md:p-8 dark:bg-neutral-900/70 dark:ring-white/10"
    >
      <div className="flex items-center gap-3">
        <h3 className="text-lg md:text-xl font-semibold">{heading}</h3>
      </div>
      <p className="mt-3 text-sm md:text-base leading-relaxed text-foreground/80">{blurb}</p>
    </motion.article>
  );
}
