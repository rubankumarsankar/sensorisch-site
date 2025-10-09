// app/components/ContactPage.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------ helpers ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

const METHODS = [
  {
    tag: "Recommended",
    title: "Start a Conversation",
    blurb: "Discuss your requirements with our flavour experts",
    cta: "Send Message",
    href: "#contact-form",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M4 4h16v12H5.17L4 17.17V4z" />
      </svg>
    ),
  },
  {
    title: "Book a Tasting Session",
    blurb: "Experience our flavours firsthand at our facilities",
    cta: "Schedule Visit",
    href: "#contact-form",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M7 10h10v7H7z" /><path d="M7 3h2v3H7zM15 3h2v3h-2z" />
      </svg>
    ),
  },
  {
    title: "Share Your Brief",
    blurb: "Upload detailed specifications for custom development",
    cta: "Upload Brief",
    href: "#contact-form",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M14 2H6a2 2 0 0 0-2 2v16l4-4h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
      </svg>
    ),
  },
  {
    title: "Technical Consultation",
    blurb: "Connect with our R&D team for complex challenges",
    cta: "Book Consultation",
    href: "#contact-form",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2a7 7 0 0 0-7 7v3H3l3.5 4L10 12H7V9a5 5 0 1 1 10 0v3h-3l3.5 4L21 12h-2V9a7 7 0 0 0-7-7z" />
      </svg>
    ),
  },
];

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

/* ------------------ component ------------------ */
export default function ContactPage() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <main className="bg-background text-foreground">
      

      {/* ===== Methods cards ===== */}
      <section className="section">
        <div className="section-container">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center text-xl md:text-2xl font-semibold"
          >
            How Can We Help You?
          </motion.h2>
          <p className="text-center text-foreground/70 mt-2">
            Choose the best way to connect with our team based on your needs
          </p>

          <motion.ul
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
          >
            {METHODS.map((m, i) => (
              <motion.li
                key={m.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-white/[0.06] backdrop-blur p-6 ring-1 ring-black/5 dark:ring-white/10 shadow-lg"
              >
                {m.tag && (
                  <span className="absolute right-3 top-3 rounded-full bg-primary/10 text-primary text-[10px] font-semibold px-2 py-1">
                    {m.tag}
                  </span>
                )}
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                  {m.icon}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{m.title}</h3>
                <p className="mt-1 text-sm text-foreground/75">{m.blurb}</p>

                <a
                  href={m.href}
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow hover:bg-primary/90 transition-colors"
                >
                  {m.cta}
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>

                {/* glow on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(70%_70%_at_50%_0%,rgba(210,36,34,0.06),transparent)]" />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ===== Main form + locations ===== */}
      <section id="contact-form" className="section bg-gray-50/60 dark:bg-white/[0.04]">
        <div className="section-container grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
          {/* --- Form --- */}
          <motion.form
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl bg-white dark:bg-background/60 backdrop-blur ring-1 ring-black/5 dark:ring-white/10 shadow-xl p-6 md:p-8"
          >
            <motion.h3 variants={fadeUp} className="text-xl md:text-2xl font-semibold">
              Get in Touch
            </motion.h3>
            <motion.p variants={fadeUp} className="text-sm text-foreground/70 mt-1">
              Tell us about your project and we’ll get back to you within 24 hours.
            </motion.p>

            {/* names */}
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <motion.div variants={fadeUp} className="space-y-1">
                <label className="text-sm font-medium">First Name</label>
                <input className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 ring-primary/30" placeholder="John" />
              </motion.div>
              <motion.div variants={fadeUp} className="space-y-1">
                <label className="text-sm font-medium">Last Name</label>
                <input className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 ring-primary/30" placeholder="Smith" />
              </motion.div>
            </div>

            {/* contact */}
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <motion.div variants={fadeUp} className="space-y-1">
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 ring-primary/30" placeholder="john@company.com" />
              </motion.div>
              <motion.div variants={fadeUp} className="space-y-1">
                <label className="text-sm font-medium">Phone</label>
                <input className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 ring-primary/30" placeholder="+91 98765 43210" />
              </motion.div>
            </div>

            {/* company + role */}
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <motion.div variants={fadeUp} className="space-y-1">
                <label className="text-sm font-medium">Company</label>
                <input className="w-full rounded-md border border-black/10 dark:border_WHITE/10 bg-transparent px-3 py-2 outline-none focus:ring-2 ring-primary/30" placeholder="Your Company Ltd." />
              </motion.div>
              <motion.div variants={fadeUp} className="space-y-1">
                <label className="text-sm font-medium">Role / Title</label>
                <input className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 ring-primary/30" placeholder="R&D Manager" />
              </motion.div>
            </div>

            {/* selects */}
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <motion.div variants={fadeUp} className="space-y-1">
                <label className="text-sm font-medium">Inquiry Type</label>
                <select className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 ring-primary/30">
                  <option>General</option>
                  <option>Samples</option>
                  <option>Bespoke Project</option>
                  <option>Technical Consultation</option>
                </select>
              </motion.div>
              <motion.div variants={fadeUp} className="space-y-1">
                <label className="text-sm font-medium">Application Area</label>
                <select className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 ring-primary/30">
                  <option>Bakery</option>
                  <option>Beverages</option>
                  <option>Dairy</option>
                  <option>Confectionery</option>
                  <option>Health & Wellness</option>
                </select>
              </motion.div>
            </div>

            {/* details */}
            <motion.div variants={fadeUp} className="mt-4 space-y-1">
              <label className="text-sm font-medium">Project Details</label>
              <textarea
                rows={6}
                className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 ring-primary/30"
                placeholder="Describe requirements, target flavour profiles, specs, timeline, and challenges..."
              />
            </motion.div>

            {/* upload */}
            <motion.div variants={fadeUp} className="mt-4">
              <label className="text-sm font-medium">Attach Files (Max 10MB)</label>
              <label
                className="mt-2 block cursor-pointer rounded-lg border border-dashed border-black/10 dark:border-white/10 p-4 text-sm text-foreground/70 hover:border-primary/40 hover:bg-primary/[0.03] transition"
              >
                <input type="file" className="hidden" multiple />
                <div className="flex items-center justify-between gap-3">
                  <span>Drop files here or browse</span>
                  <span className="rounded-md bg-primary/10 text-primary px-2 py-1 text-xs font-semibold">Upload</span>
                </div>
                <p className="mt-1 text-xs text-foreground/60">Support for specifications, references, or product briefs</p>
              </label>
            </motion.div>

            {/* extra */}
            <motion.div variants={fadeUp} className="mt-4 space-y-1">
              <label className="text-sm font-medium">Additional Information</label>
              <textarea rows={3} className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 ring-primary/30" />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
              <span className="text-xs text-foreground/60">We’ll respond within 24 hours during business days</span>
            </motion.div>
          </motion.form>

          {/* --- Locations / Quick help --- */}
          <div className="space-y-6">
            {/* Locations */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="rounded-2xl bg-white dark:bg-background/60 backdrop-blur ring-1 ring-black/5 dark:ring-white/10 shadow-xl p-6"
            >
              <h4 className="text-lg font-semibold">Our Locations</h4>
              <div className="mt-4 grid gap-5">
                <div className="rounded-lg border border-black/5 dark:border-white/10 p-4">
                  <h5 className="font-medium">India Headquarters</h5>
                  <p className="text-sm text-foreground/70 mt-1">Innovation Center, Technology Park, Mumbai, Maharashtra 400001</p>
                  <div className="mt-3 text-sm">
                    <div>📞 +91 22 1234 5678</div>
                    <div>✉️ india@sensorisch.com</div>
                    <div className="text-foreground/70">🕘 9:00 AM – 6:00 PM IST (Mon–Fri)</div>
                  </div>
                </div>

                <div className="rounded-lg border border-black/5 dark:border-white/10 p-4">
                  <h5 className="font-medium">GCC Operations</h5>
                  <p className="text-sm text-foreground/70 mt-1">Business District, Dubai, UAE</p>
                  <div className="mt-3 text-sm">
                    <div>📞 +971 4 123 4567</div>
                    <div>✉️ gcc@sensorisch.com</div>
                    <div className="text-foreground/70">🕘 9:00 AM – 6:00 PM GST (Sun–Thu)</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Immediate assistance */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="rounded-2xl bg-gradient-to-br from-primary/10 to-transparent ring-1 ring-primary/20 p-6"
            >
              <h4 className="text-lg font-semibold">Need Immediate Assistance?</h4>
              <p className="text-sm text-foreground/70 mt-1">For urgent inquiries or immediate support, choose from these options</p>
              <div className="mt-4 grid gap-3">
                <a className="inline-flex items-center gap-2 rounded-md bg-white dark:bg-white/10 px-3 py-2 text-sm font-medium ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/90 transition" href="tel:+912212345678">
                  Call Us Directly • +91 22 1234 5678
                </a>
                <a className="inline-flex items-center gap-2 rounded-md bg-white dark:bg-white/10 px-3 py-2 text-sm font-medium ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/90 transition" href="mailto:urgent@sensorisch.com">
                  Priority Email • urgent@sensorisch.com
                </a>
                <a className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow hover:bg-primary/90 transition" href="#contact-form">
                  Emergency Support • 24/7 (Clients)
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section">
        <div className="section-container">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center text-2xl font-semibold"
          >
            Frequently Asked Questions
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
                    <span className="text-sm md:text-base font-medium">{f.q}</span>
                    <motion.span
                      animate={{ rotate: active ? 180 : 0 }}
                      className="h-6 w-6 grid place-items-center rounded-full bg-primary/10 text-primary"
                    >
                      ▾
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
                        className="text-sm text-foreground/75 pt-2"
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
    </main>
  );
}
