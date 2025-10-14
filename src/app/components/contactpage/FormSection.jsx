"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { fadeUp, list } from "./motionHelpers";
import { Mail, Phone, MapPin, HelpCircle, UploadCloud, ArrowRight, CheckCircle2 } from "lucide-react";

export default function FormSection() {
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const totalSizeMB = useMemo(
    () => (files.reduce((a, f) => a + (f.size || 0), 0) / (1024 * 1024)).toFixed(2),
    [files]
  );

  const onPickFiles = (e) => {
    const picked = Array.from(e.target.files || []);
    setFiles(picked.slice(0, 8));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 1200);
  };

  return (
    <section id="contact-form" className="section-container">
      <div className=" grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        {/* Form */}
        <motion.form
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          onSubmit={onSubmit}
          className="rounded-2xl bg-white dark:bg-background/60 backdrop-blur ring-1 ring-black/5 dark:ring-white/10 shadow-xl p-6 md:p-8"
        >
          <motion.h3 variants={fadeUp} className="text-xl md:text-2xl font-semibold">Get in Touch</motion.h3>
          <motion.p variants={fadeUp} className="text-sm text-black/70 mt-1">
            Tell us about your project and we’ll get back to you within 24 hours.
          </motion.p>

          {/* names */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Field label="First Name" placeholder="John" />
            <Field label="Last Name" placeholder="Smith" />
          </div>

          {/* contact */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Field type="email" label="Email" placeholder="john@company.com" icon={Mail} />
            <Field label="Phone" placeholder="+91 98765 43210" icon={Phone} />
          </div>

          {/* company + role */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Field label="Company" placeholder="Your Company Ltd." icon={MapPin} />
            <Field label="Role / Title" placeholder="R&D Manager" />
          </div>

          {/* selects */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Select label="Inquiry Type" options={["General", "Samples", "Bespoke Project", "Technical Consultation"]} />
            <Select label="Application Area" options={["Bakery", "Beverages", "Dairy", "Confectionery", "Health & Wellness"]} />
          </div>

          {/* details */}
          <TextArea className="mt-4" label="Project Details" rows={6}
            placeholder="Describe requirements, target flavour profiles, specs, timeline, and challenges..." icon={HelpCircle} />

          {/* upload */}
          <motion.div variants={fadeUp} className="mt-4">
            <label className="text-sm font-medium">Attach Files (Max 10MB)</label>
            <label className="mt-2 block cursor-pointer rounded-lg border border-dashed border-black/10 dark:border-white/10 p-4 text-sm text-black/70 hover:border-primary/40 hover:bg-primary/[0.03] transition">
              <input type="file" className="hidden" multiple onChange={onPickFiles} />
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2">
                  <UploadCloud className="h-4 w-4" /> Drop files here or browse
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
          <TextArea className="mt-4" label="Additional Information" rows={3} />

          <motion.div variants={fadeUp} className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
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
            <span className="text-xs text-black/60">We’ll respond within 24 hours during business days</span>
          </motion.div>

          {/* success hint (demo) */}
          <AnimatePresence>
            {!submitting && (
              <motion.div
                key="hint"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-3 text-xs text-emerald-600 inline-flex items-center gap-1"
              >
                <CheckCircle2 className="h-4 w-4" /> Your message will be routed to the right team.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}

/* ------- Small UI bits (local to form) ------- */
function Field({ label, placeholder, type = "text", icon: Icon }) {
  return (
    <motion.div variants={fadeUp} className="space-y-1">
      <label className="text-sm font-medium">{label}</label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-[10px] h-4 w-4 text-black/40" />}
        <input
          type={type}
          className={`w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 ring-primary/30 ${Icon ? "pl-9" : ""}`}
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
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </motion.div>
  );
}

function TextArea({ label, rows = 4, placeholder = "", className = "", icon: Icon }) {
  return (
    <motion.div variants={fadeUp} className={`space-y-1 ${className}`}>
      <label className="text-sm font-medium">{label}</label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-3 h-4 w-4 text-black/40" />}
        <textarea
          rows={rows}
          className={`w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 ring-primary/30 ${Icon ? "pl-9" : ""}`}
          placeholder={placeholder}
        />
      </div>
    </motion.div>
  );
}

