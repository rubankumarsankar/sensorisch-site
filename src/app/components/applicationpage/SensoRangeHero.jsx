// app/components/SensoRangeHero.jsx
"use client";

import { motion } from "framer-motion";
// import Image from "next/image";
import * as Lucide from "lucide-react"; // for dynamic Lucide icons by name

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

// Fallbacks
const DEFAULT_BENEFITS = [
  "Consistent aroma release",
  "Heat-stable formulations",
  "Wide pH tolerance",
  "Optimal baking performance",
];
const DEFAULT_TAGS = [
  { t: "Cakes & Muffins", cls: "bg-red-50 text-red-600 ring-red-200" },
  { t: "Cookies & Biscuits", cls: "bg-blue-50 text-blue-600 ring-blue-200" },
  { t: "Pastries", cls: "bg-emerald-50 text-emerald-600 ring-emerald-200" },
  { t: "Artisan Breads", cls: "bg-orange-50 text-orange-600 ring-orange-200" },
];

/* ========= Helper: dynamic benefit icon resolver =========
   Supports:
   - iconType="lucide" with icon="Check", "Droplet", "Flame", etc.
   - iconType="img"    with icon as image URL
   - iconType="node"   with icon as a React node
   Falls back to a ✓ check. */
function BenefitIcon({ icon, iconType = "lucide", className = "" }) {
  if (iconType === "node" && icon && typeof icon !== "string") {
    return <span className={className}>{icon}</span>;
  }
  if (iconType === "img" && typeof icon === "string") {
    return (
      <img
        src={icon}
        alt=""
        className={`h-7 w-7 object-contain ${className}`}
        loading="lazy"
        decoding="async"
        aria-hidden
      />
    );
  }
  if (iconType === "lucide") {
    const LucideIcon =
      typeof icon === "string" && Lucide[icon] ? Lucide[icon] : Lucide.Check;
    return <LucideIcon className={`h-7 w-7 ${className}`} aria-hidden />;
  }
  return (
    <span className={`text-primary ${className}`} aria-hidden>
      ✓
    </span>
  );
}

export default function SensoRangeHero({
  reverse = false,
  badge = "Bakery",
  title = "SensoBake",
  blurb = "Flavours that enrich cakes, cookies, pastries, and breads with oven-true performance.",
  benefits = DEFAULT_BENEFITS, // can be string[] OR {text, icon?, iconType?, iconClass?, iconBgClass?}[]
  tags = DEFAULT_TAGS,
  imageSrc = "/assets/sensobake-banner.webp",
  iconSrc = "/icons/icon-4.png", // badge icon image (left of badge text)
  imageAlt = "SensoBake application visual",

  primaryHref = "#request",
  primaryLabel = "Request Sample",
  secondaryHref = "#tech",
  secondaryLabel = "Technical Sheet",
}) {
  const contentOrder = reverse ? "order-1 lg:order-2" : "order-1 lg:order-1";
  const imageOrder = reverse ? "order-2 lg:order-1" : "order-2 lg:order-2";

  return (
    <section className="bg-background text-foreground">
      <div className="section-container py-16 md:py-24">
        <div className="grid items-center gap-14 md:gap-16 lg:grid-cols-2">
          {/* ==== CONTENT ==== */}
          <div className={`space-y-8 ${contentOrder}`}>
            {/* Header */}
            <motion.div
              variants={list}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="space-y-4"
            >
              {/* Badge with icon (single pill) */}
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-md bg-red-50 text-red-700 px-3 py-1 text-sm font-semibold ring-1 ring-red-200"
              >
                
                {badge}
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl font-bold tracking-tight text-primary"
              >
                {title}
              </motion.h1>

              <motion.div
                variants={fadeUp}
                className="h-[3px] w-28 rounded bg-primary/70"
              />
            </motion.div>

            {/* Benefits (supports dynamic icons) */}
            <motion.div
              variants={list}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-2"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Key Benefits:
              </h3>

              <div className="grid gap-5 sm:grid-cols-2">
                {benefits.map((item, i) => {
                  const isString = typeof item === "string";
                  const text = isString ? item : item.text;
                  const icon = isString ? undefined : item.icon;
                  const iconType = isString ? "img" : item.iconType || "img"; // <-- default to img
                  const iconClass = isString ? "" : item.iconClass || "";
                  const iconBgClass = isString
                    ? " ring-1 ring-black/10"
                    : item.iconBgClass || "bg-white ring-1 ring-black/10";

                  return (
                    <motion.div
                      key={text || i}
                      variants={fadeUp}
                      className="group relative flex items-center gap-3"
                    >
                      <div
                        className={`grid h-15 w-15 place-items-center rounded-full shadow-md`}
                      >
                        <BenefitIcon
                          icon={icon}
                          iconType={iconType}
                          className={iconClass}
                        />
                      </div>
                      <p className="font-medium">{text}</p>
                      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(70%_70%_at_50%_0%,rgba(0,0,0,0.05),transparent)]" />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Tags */}
            <div className="pt-2 flex flex-wrap gap-3">
              {tags.map(({ t, cls }) => (
                <span
                  key={t}
                  className={`inline-flex items-center rounded-md px-3 py-1.5 text-sm font-semibold ring-1 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-[0_0_12px_rgba(0,0,0,0.15)] hover:ring-2 hover:ring-offset-2 ${cls}`}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={primaryHref}
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-semibold shadow hover:bg-primary/90 transition"
              >
                {primaryLabel}
              </a>
              <a
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-md border-2 border-primary/30 px-6 py-3 text-primary font-semibold bg-white hover:bg-primary/5 transition"
              >
                {secondaryLabel}
              </a>
            </div>
          </div>

          {/* ==== IMAGE / VISUAL ==== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className={`relative ${imageOrder}`}
          >
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mb-4 md:mb-6 text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl"
            >
              {blurb}
            </motion.p>

            <div className="aspect-[16/11] w-full rounded-sm ring-1 ring-black/5 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)] overflow-hidden relative bg-muted">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              {/*
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(min-width:1024px) 560px, 100vw"
                className="object-cover"
              />
              */}
            </div>

            <motion.div
              aria-hidden
              animate={{ y: [0, -6, 0], opacity: [0.25, 0.5, 0.25] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -inset-3 rounded-[46px] bg-primary/10 blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
