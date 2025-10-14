// app/components/ContactPage.jsx
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  MessageSquare,
  CalendarDays,
  FileUp,
  FlaskConical,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  UploadCloud,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";

/* ------------------ motion helpers ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: "easeOut" },
  },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

/* ------------------ data ------------------ */
const METHODS = [
  {
    tag: "Recommended",
    title: "Start a Conversation",
    blurb: "Discuss your requirements with our flavour experts",
    cta: "Send Message",
    href: "#contact-form",
    icon: MessageSquare,
  },
  {
    title: "Book a Tasting Session",
    blurb: "Experience our flavours firsthand at our facilities",
    cta: "Schedule Visit",
    href: "#contact-form",
    icon: CalendarDays,
  },
  {
    title: "Share Your Brief",
    blurb: "Upload detailed specifications for custom development",
    cta: "Upload Brief",
    href: "#contact-form",
    icon: FileUp,
  },
  {
    title: "Technical Consultation",
    blurb: "Connect with our R&D team for complex challenges",
    cta: "Book Consultation",
    href: "#contact-form",
    icon: FlaskConical,
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

export default function ContactPage() {
  const [openIdx, setOpenIdx] = useState(0);
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  // subtle page progress bar
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  const totalSizeMB = useMemo(
    () =>
      (files.reduce((a, f) => a + (f.size || 0), 0) / (1024 * 1024)).toFixed(2),
    [files]
  );

  const onPickFiles = (e) => {
    const picked = Array.from(e.target.files || []);
    setFiles(picked.slice(0, 8)); // cap at 8 files
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // simulate network
    setTimeout(() => setSubmitting(false), 1200);
  };

  return (
    <main className="bg-background text-black relative overflow-hidden">
    

      {/* ===== Methods cards ===== */}
      <section className="section">
        <div className="section-container">
          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="text-xl md:text-2xl font-semibold"
            >
              How Can We Help You?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-black/70 mt-2">
              Choose the best way to connect with our team based on your needs
            </motion.p>
          </motion.div>

          <motion.ul
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
          >
            {METHODS.map((m) => (
              <motion.li
                key={m.title}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-white/[0.06] backdrop-blur p-6 ring-1 ring-black/5 dark:ring-white/10 shadow-lg"
              >
                {m.tag && (
                  <span className="absolute right-3 top-3 rounded-full bg-primary/10 text-primary text-[10px] font-semibold px-2 py-1">
                    {m.tag}
                  </span>
                )}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                  <m.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-3 text-lg font-semibold">{m.title}</h3>
                <p className="mt-1 text-sm text-black/75">{m.blurb}</p>

                <a
                  href={m.href}
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-sm font-semibold text-white shadow hover:bg-primary/90 transition-colors"
                >
                  {m.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>

                {/* radial glow on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(70%_70%_at_50%_0%,rgba(210,36,34,0.06),transparent)]" />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ===== Main form + locations ===== */}
      <section
        id="contact-form"
        className="section bg-gray-50/60 dark:bg-white/[0.04]"
      >
        <div className="section-container grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
          {/* --- Form --- */}
          <motion.form
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            onSubmit={onSubmit}
            className="rounded-2xl bg-white dark:bg-background/60 backdrop-blur ring-1 ring-black/5 dark:ring-white/10 shadow-xl p-6 md:p-8"
          >
            <motion.h3
              variants={fadeUp}
              className="text-xl md:text-2xl font-semibold"
            >
              Get in Touch
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="text-sm text-black/70 mt-1"
            >
              Tell us about your project and we’ll get back to you within 24
              hours.
            </motion.p>

            {/* names */}
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Field label="First Name" placeholder="John" />
              <Field label="Last Name" placeholder="Smith" />
            </div>

            {/* contact */}
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Field
                type="email"
                label="Email"
                placeholder="john@company.com"
                icon={Mail}
              />
              <Field label="Phone" placeholder="+91 98765 43210" icon={Phone} />
            </div>

            {/* company + role */}
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Field
                label="Company"
                placeholder="Your Company Ltd."
                icon={MapPin}
              />
              <Field label="Role / Title" placeholder="R&D Manager" />
            </div>

            {/* selects */}
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Select
                label="Inquiry Type"
                options={[
                  "General",
                  "Samples",
                  "Bespoke Project",
                  "Technical Consultation",
                ]}
              />
              <Select
                label="Application Area"
                options={[
                  "Bakery",
                  "Beverages",
                  "Dairy",
                  "Confectionery",
                  "Health & Wellness",
                ]}
              />
            </div>

            {/* details */}
            <TextArea
              className="mt-4"
              label="Project Details"
              rows={6}
              placeholder="Describe requirements, target flavour profiles, specs, timeline, and challenges..."
              icon={HelpCircle}
            />

            {/* upload */}
            <motion.div variants={fadeUp} className="mt-4">
              <label className="text-sm font-medium">
                Attach Files (Max 10MB)
              </label>
              <label className="mt-2 block cursor-pointer rounded-lg border border-dashed border-black/10 dark:border-white/10 p-4 text-sm text-black/70 hover:border-primary/40 hover:bg-primary/[0.03] transition">
                <input
                  type="file"
                  className="hidden"
                  multiple
                  onChange={onPickFiles}
                />
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2">
                    <UploadCloud className="h-4 w-4" /> Drop files here or
                    browse
                  </span>
                  <span className="rounded-md bg-primary/10 text-primary px-2 py-1 text-xs font-semibold">
                    Upload
                  </span>
                </div>
                <p className="mt-1 text-xs text-black/60">
                  {files.length
                    ? `Selected ${files.length} file(s) • ${totalSizeMB} MB total`
                    : "Support for specifications, references, or product briefs"}
                </p>
              </label>
            </motion.div>

            {/* extra */}
            <TextArea
              className="mt-4"
              label="Additional Information"
              rows={3}
            />

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3"
            >
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-primary/90 transition-colors disabled:opacity-60"
              >
                {submitting ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="size-4 rounded-full border-2 border-white/40 border-r-transparent animate-spin" />
                    Sending…
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    Send Message <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </button>
              <span className="text-xs text-black/60">
                We’ll respond within 24 hours during business days
              </span>
            </motion.div>

            {/* tiny success hint (demo) */}
            <AnimatePresence>
              {submitting === false && (
                <motion.div
                  key="hint"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-3 text-xs text-emerald-600 inline-flex items-center gap-1"
                >
                  <CheckCircle2 className="h-4 w-4" /> Your message will be
                  routed to the right team.
                </motion.div>
              )}
            </AnimatePresence>
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
              <h4 className="text-2xl section-title font-semibold">Our Locations</h4>

              {/* 1-col on mobile, 2-col on md+; left, right, then a full-width 3rd card */}
              <div className="mt-4 grid gap-6 md:grid-cols-3">
                {/* LEFT card (India) */}
                <article className="rounded-lg border border-black/5 dark:border-white/10 p-4 max-w-md w-full md:justify-self-start">
                  <h5 className="font-medium text-primary">
                    India Headquarters
                  </h5>
                  <p className="text-sm text-black/70 mt-1">
                    Innovation Center, Technology Park, Mumbai, Maharashtra
                    400001
                  </p>
                  <div className="mt-3 text-sm space-y-2">
                    <a
                      href="tel:+91 22 1234
                      5678"
                    >
                      {" "}
                      <div className="inline-flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" /> +91 22 1234
                        5678
                      </div>
                    </a>
                    <br />
                    <a href="mailto:india@sensorisch.com">
                      <div className="inline-flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />{" "}
                        india@sensorisch.com
                      </div>
                    </a>
                    <br />
                    <div className="inline-flex items-center gap-2 text-black/70">
                      <Clock className="h-4 w-4 text-primary" /> 9:00 AM – 6:00
                      PM IST (Mon–Fri)
                    </div>
                  </div>
                </article>

                {/* RIGHT card (GCC) */}
                <article className="rounded-lg border border-black/5 dark:border-white/10 p-4 max-w-md w-full md:justify-self-end">
                  <h5 className="font-medium text-primary">GCC Operations</h5>
                  <p className="text-sm text-black/70 mt-1">
                    Business District, Dubai, UAE
                  </p>
                  <div className="mt-3 text-sm space-y-2">
                    <a href="tel:+971 4 123 4567">
                      <div className="inline-flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" /> +971 4 123
                        4567
                      </div>
                    </a>
                    <br />
                    <a href="mailto:gcc@sensorisch.com">
                      <div className="inline-flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />{" "}
                        gcc@sensorisch.com
                      </div>
                    </a>
                    <br />
                    <div className="inline-flex items-center gap-2 text-black/70">
                      <Clock className="h-4 w-4 text-primary" /> 9:00 AM – 6:00
                      PM GST (Sun–Thu)
                    </div>
                  </div>
                </article>

                {/* THIRD card (full width on md+) */}
                <motion.div
                  variants={fadeUp}
                  className="rounded-2xl bg-gradient-to-br from-primary/10 to-transparent ring-1 ring-primary/20 p-6
                 md:col-span-2 max-w-3xl w-full justify-self-center"
                >
                  <h4 className="text-2xl text-primary font-semibold">
                    Need Immediate Assistance?
                  </h4>
                  <p className="text-sm text-black/70 mt-1">
                    For urgent inquiries or immediate support, choose from these
                    options
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <a
                      className="inline-flex items-center gap-2 rounded-md bg-white dark:bg-white/10 px-3 py-2 text-sm font-medium
                     ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/90 transition"
                      href="tel:+912212345678"
                    >
                      <Phone className="h-8 w-8" /> Call Us Directly <br /> +91 22
                      1234 5678
                    </a>
                    <a
                      className="inline-flex items-center gap-2 rounded-md bg-white dark:bg-white/10 px-3 py-2 text-sm font-medium
                     ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/90 transition"
                      href="mailto:urgent@sensorisch.com"
                    >
                      <Mail className="h-8 w-8" /> Priority Email <br />
                      urgent@sensorisch.com
                    </a>
                    <a
                      className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white
                     shadow hover:bg-primary/90 transition"
                      href="#contact-form"
                    >
                      <Clock className="h-8 w-8" /> Emergency Support <br /> 24/7
                      (Clients)
                    </a>
                  </div>
                </motion.div>
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
                    <span className="inline-flex items-center gap-2 text-sm md:text-base font-medium">
                      <HelpCircle className="h-5 w-5 text-primary" /> {f.q}
                    </span>
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
                        className="text-sm text-black/75 pt-2"
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

/* ------------------ small UI bits ------------------ */
function Field({ label, placeholder, type = "text", icon: Icon }) {
  return (
    <motion.div variants={fadeUp} className="space-y-1">
      <label className="text-sm font-medium">{label}</label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-[10px] h-4 w-4 text-black/40" />
        )}
        <input
          type={type}
          className={`w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 ring-primary/30 ${
            Icon ? "pl-9" : ""
          }`}
          placeholder={placeholder}
        />
      </div>
    </motion.div>
  );
}

function Select({ label, options = [] }) {
  return (
    <motion.div variants={fadeUp} className="space-y-1">
      <label className="text-sm font-medium">{label}</label>
      <select className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 ring-primary/30">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </motion.div>
  );
}

function TextArea({
  label,
  rows = 4,
  placeholder = "",
  className = "",
  icon: Icon,
}) {
  return (
    <motion.div variants={fadeUp} className={`space-y-1 ${className}`}>
      <label className="text-sm font-medium">{label}</label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-3 h-4 w-4 text-black/40" />
        )}
        <textarea
          rows={rows}
          className={`w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 ring-primary/30 ${
            Icon ? "pl-9" : ""
          }`}
          placeholder={placeholder}
        />
      </div>
    </motion.div>
  );
}
