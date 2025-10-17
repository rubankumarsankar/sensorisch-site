// app/components/InsightsExplorer.jsx
"use client";

import { useMemo, useState, useId } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock, Tag, BookOpen } from "lucide-react";

/* ------------ sample data w/ images (swap with CMS later) ------------ */
const ALL_POSTS = [
  {
    id: "plant-based-future",
    title: "The Future of Plant-Based Flavours: Beyond Taste Masking",
    blurb:
      "Exploring how advanced flavour technologies are transforming plant-based products from acceptable alternatives to preferred choices.",
    category: "Innovation",
    tags: ["Plant-Based", "Innovation", "Consumer Trends"],
    date: "March 15, 2024",
    read: "5 min read",
    image: "/assets/img-13.png",
  },
  {
    id: "clean-label-2024",
    title: "Clean Label Compliance: Navigating Global Regulations in 2024",
    blurb:
      "A comprehensive guide to clean label requirements across major markets and how to maintain compliance while optimizing taste.",
    category: "Regulatory",
    tags: ["Regulatory", "Clean Label", "Global Markets"],
    date: "March 10, 2024",
    read: "7 min read",
    image: "/assets/img-14.png",
  },
  {
    id: "functional-beverages-science",

    title: "Functional Beverages: The Science of Taste-Neutral Nutrition",
    blurb:
      "How advanced masking technologies are enabling the next generation of functional beverages without compromising on taste.",
    category: "Beverages",
    tags: ["Beverages", "Functional Foods", "Nutrition"],
    date: "March 5, 2024",
    read: "6 min read",
    image: "/assets/img-15.png",
  },
  
];

const CATEGORIES = [
  "All",
  "Innovation",
  "Regulatory",
  "Beverages",
  "Bakery",
  "Sustainability",
  "Market Research",
];

/* -------------------------- animations -------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: "easeOut" },
  },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

/* -------------------------- helpers --------------------------- */
const norm = (v) => (v ?? "").toString().toLowerCase().trim();
const parseDate = (s) => {
  const t = Date.parse(s);
  return Number.isNaN(t) ? 0 : t;
};

/* -------------------------- component --------------------------- */
export default function InsightsExplorer({ posts = ALL_POSTS }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");
  const tablistId = useId();

  const filtered = useMemo(() => {
    const q = norm(query);
    const activeNorm = norm(active);

    const matches = posts.filter((p) => {
      const inCategory =
        activeNorm === "all" || norm(p.category) === activeNorm;
      if (!q) return inCategory;

      const haystack = [p.title, p.blurb, p.category, ...(p.tags ?? [])]
        .map(norm)
        .join(" ");
      const inQuery = haystack.includes(q);
      return inCategory && inQuery;
    });

    return matches.sort((a, b) => parseDate(b.date) - parseDate(a.date));
  }, [posts, query, active]);

  return (
    <section id="insights" className="section-container">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mx-auto max-w-6xl text-center"
      >
        <h2 className="text-black section-title">
          Featured <span className="text-primary">Insights</span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-3 h-1 rounded bg-gradient-to-r from-primary to-primary/60"
            aria-hidden
          />
        </h2>

        {/* Search */}
        <label className="relative mt-6 mx-auto block w-full max-w-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/60" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search topics, tags, keywords…"
            className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur pl-10 pr-3 py-2.5 text-sm outline-none focus:ring-2 ring-primary/30"
          />
        </label>

        {/* Tabs */}
        <nav
          role="tablist"
          aria-label="Insight categories"
          id={tablistId}
          className="mt-4"
        >
          <div className="mx-auto flex max-w-4xl justify-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none]">
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {CATEGORIES.map((c) => {
              const isActive = active === c;
              return (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${tablistId}-${c}`}
                  onClick={() => setActive(c)}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold ring-1 transition whitespace-nowrap ${
                    isActive
                      ? "bg-primary text-white ring-primary/50"
                      : "bg-white/60 dark:bg-white/5 text-foreground ring-black/10 dark:ring-white/10 hover:bg-white/80 dark:hover:bg-white/10"
                  }`}
                >
                  {c}
                  {isActive && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-full"
                      style={{ boxShadow: "0 0 18px rgba(210,36,34,0.35)" }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </nav>
      </motion.div>

      {/* Results: single card per row */}
      <motion.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto mt-8 max-w-6xl space-y-6"
        role="tabpanel"
        id={`${tablistId}-${active}`}
        aria-labelledby={tablistId}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.article
              key={p.id}
              variants={fadeUp}
              layout
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white/80 dark:bg-white/[0.06] backdrop-blur"
            >
              {/* inner editorial layout */}
              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Text */}
                <div className="p-6 md:col-span-7">
                  {/* halo + shimmer */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br from-primary to-primary/40 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <motion.span
                    aria-hidden
                    initial={{ x: "-120%" }}
                    whileHover={{ x: "120%" }}
                    transition={{ duration: 1.1, ease: "easeInOut" }}
                    className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 skew-x-12 bg-white/20"
                  />

                  <div className="flex items-start gap-4">
                    
                    <div className="min-w-0">
                      <h3 className="section-subtitle text-primary">
                        {p.title}
                      </h3>
                      <p className="mt-1 section-paragraph">{p.blurb}</p>
                    </div>
                  </div>

                  {/* meta */}
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-foreground/70">
                    <span className="inline-flex items-center gap-1">
                      <BookOpen className="h-3.5 w-3.5" />
                      {p.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {p.date} • {p.read}
                    </span>
                  </div>

                  {/* tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {(p.tags ?? []).map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-2.5 py-1 text-[11px] font-semibold ring-1 ring-primary/20"
                      >
                        <Tag className="h-3 w-3" /> {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-5">
                    <a
                      href={`/insights/${p.id}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition"
                    >
                      Read More
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Image */}
                {/* Image */}
                <div className="relative md:col-span-5">
                  <div className="m-5 overflow-hidden rounded-xl ring-1 ring-black/5 md:h-full md:min-h-[260px]">
                    {/* Mobile keeps aspect; desktop fills full height */}
                    <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-full">
                      {p.image ? (
                        <>
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            sizes="(min-width:768px) 520px, 100vw"
                            className="object-cover md:object-center transition duration-700 group-hover:scale-[1.04]"
                          />
                          <motion.span
                            aria-hidden
                            initial={{ x: "-120%" }}
                            whileHover={{ x: "120%" }}
                            transition={{ duration: 1.15, ease: "easeInOut" }}
                            className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-12 bg-white/20"
                          />
                        </>
                      ) : (
                        <div className="h-full w-full bg-neutral-100" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <div className="mt-10 rounded-2xl border border-dashed border-black/10 dark:border-white/10 p-8 text-center">
            <p className="text-sm text-foreground/70">
              No results. Try a different keyword or category.
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
}
