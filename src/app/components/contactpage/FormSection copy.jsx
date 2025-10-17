
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, Children, cloneElement } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { fadeUp, list } from "./motionHelpers";
import {
  Mail,
  Phone,
  MapPin,
  HelpCircle,
  UploadCloud,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const MAX_FILES = 8;
const MAX_TOTAL_MB = 10;

const FormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  roleTitle: z.string().optional(),
  inquiryType: z.string().optional(),
  application: z.string().optional(),
  projectDetails: z.string().optional(),
  additionalInfo: z.string().optional(),
  website: z.string().optional(), // honeypot
});

const API_URL = "https://sensorisch.com/api/contact.php";

export default function FormSection() {
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      roleTitle: "",
      inquiryType: "General",
      application: "Bakery",
      projectDetails: "",
      additionalInfo: "",
      website: "", // honeypot
    },
  });

  const totalSizeMB = useMemo(
    () => (files.reduce((a, f) => a + (f.size || 0), 0) / (1024 * 1024)).toFixed(2),
    [files]
  );

  const onPickFiles = (e) => {
    const picked = Array.from(e.target.files || []);
    const limited = picked.slice(0, MAX_FILES);
    const totalMB = limited.reduce((a, f) => a + (f.size || 0), 0) / (1024 * 1024);
    if (totalMB > MAX_TOTAL_MB) {
      alert("Total file size exceeds 10MB");
      return;
    }
    setFiles(limited);
  };

  const onSubmit = async (data) => {
    setSubmitting(true);
    setServerError("");
    setSent(false);

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 20000); // 20s timeout

    try {
      const fd = new FormData();
      Object.entries(data).forEach(([k, v]) => fd.append(k, v ?? ""));
      files.forEach((f) => fd.append("files", f)); // must be "files" to match PHP

      const res = await fetch(API_URL, {
        method: "POST",
        body: fd,
        signal: controller.signal,
      });

      let json;
      try {
        json = await res.json();
      } catch {
        throw new Error(`Unexpected response (${res.status})`);
      }
      if (!res.ok || !json?.ok) {
        throw new Error(json?.error || `Failed with ${res.status}`);
      }

      setSent(true);
      setFiles([]);
      reset();
    } catch (e) {
      if (e.name === "AbortError") {
        setServerError("Request timed out. Please try again.");
      } else {
        setServerError(e.message || "Something went wrong");
      }
    } finally {
      clearTimeout(timer);
      setSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="section-container">
      <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <motion.form
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          className="rounded-2xl bg-white dark:bg-background/60 backdrop-blur ring-1 ring-black/5 dark:ring-white/10 shadow-xl p-6 md:p-8"
        >
          <div className="text-center">
            <motion.h3 variants={fadeUp} className="section-title text-black">
              Get in <span className="text-primary">Touch</span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 160 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="mx-auto mt-4 h-1 rounded bg-gradient-to-r from-primary to-primary/60"
                aria-hidden
              />
            </motion.h3>
            <motion.p variants={fadeUp} className="section-paragraph mt-1">
              Tell us about your project and we’ll get back to you within 24 hours.
            </motion.p>
          </div>

          {/* names */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Field name="firstName" label="First Name" placeholder="John" error={errors.firstName?.message}>
              <Input {...register("firstName")} />
            </Field>
            <Field name="lastName" label="Last Name" placeholder="Smith" error={errors.lastName?.message}>
              <Input {...register("lastName")} />
            </Field>
          </div>

          {/* contact */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Field name="email" label="Email" placeholder="john@company.com" icon={Mail} error={errors.email?.message}>
              <Input {...register("email")} />
            </Field>
            <Field name="phone" label="Phone" placeholder="+91 98765 43210" icon={Phone} error={errors.phone?.message}>
              <Input {...register("phone")} />
            </Field>
          </div>

          {/* company + role */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Field name="company" label="Company" placeholder="Your Company Ltd." icon={MapPin} error={errors.company?.message}>
              <Input {...register("company")} />
            </Field>
            <Field name="roleTitle" label="Role / Title" placeholder="R&D Manager" error={errors.roleTitle?.message}>
              <Input {...register("roleTitle")} />
            </Field>
          </div>

          {/* selects */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Field name="inquiryType" label="Inquiry Type">
              <Select {...register("inquiryType")} options={["General", "Samples", "Bespoke Project", "Technical Consultation"]} />
            </Field>
            <Field name="application" label="Application Area">
              <Select {...register("application")} options={["Bakery", "Beverages", "Dairy", "Confectionery", "Health & Wellness"]} />
            </Field>
          </div>

          {/* details */}
          <Field
            name="projectDetails"
            className="mt-4"
            label="Project Details"
            icon={HelpCircle}
            error={errors.projectDetails?.message}
          >
            <TextArea
              rows={6}
              placeholder="Describe requirements, target flavour profiles, specs, timeline, and challenges..."
              {...register("projectDetails")}
            />
          </Field>

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
                {files.length ? `Selected ${files.length} file(s) • ${totalSizeMB} MB total` : "Support for specifications, references, or product briefs"}
              </p>
            </label>
          </motion.div>

          {/* extra */}
          <Field name="additionalInfo" className="mt-4" label="Additional Information" error={errors.additionalInfo?.message}>
            <TextArea rows={3} {...register("additionalInfo")} />
          </Field>

          {/* honeypot (spam trap) */}
          <input
            type="text"
            tabIndex="-1"
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
            {...register("website")}
          />

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

          <AnimatePresence>
            {sent && !submitting && (
              <motion.div
                key="ok"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-3 text-xs text-emerald-600 inline-flex items-center gap-1"
              >
                <CheckCircle2 className="h-4 w-4" /> Thanks! Your message has been sent.
              </motion.div>
            )}
          </AnimatePresence>

          {serverError && <p className="mt-3 text-xs text-red-600">{serverError}</p>}
        </motion.form>
      </div>
    </section>
  );
}

/* ------- Small UI bits (updated for RHF) ------- */
function Field({ name, label, icon: Icon, error, className = "", children }) {
  const onlyChild = Children.only(children);
  const enhanced = cloneElement(onlyChild, {
    id: onlyChild.props.id || name,
    className: [
      "w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 ring-primary/30",
      Icon ? "pl-9" : "",
      onlyChild.props.className || "",
    ]
      .filter(Boolean)
      .join(" "),
  });

  return (
    <motion.div variants={fadeUp} className={`space-y-1 ${className}`}>
      {label && (
        <label className="text-sm font-medium" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-[10px] h-4 w-4 text-black/40 pointer-events-none" />}
        {enhanced}
      </div>
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </motion.div>
  );
}

const Input = (props) => <input {...props} />;
const Select = ({ options = [], ...rest }) => (
  <select {...rest}>
    {options.map((o) => (
      <option key={o} value={o}>
        {o}
      </option>
    ))}
  </select>
);
const TextArea = ({ rows = 4, ...rest }) => <textarea rows={rows} {...rest} />;


// next -- // 


"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, Children, cloneElement } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { fadeUp, list } from "./motionHelpers";
import {
  Mail,
  Phone,
  MapPin,
  HelpCircle,
  UploadCloud,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const MAX_FILES = 8;
const MAX_TOTAL_MB = 10;

const FormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  roleTitle: z.string().optional(),
  inquiryType: z.string().optional(),
  application: z.string().optional(),
  projectDetails: z.string().optional(),
  additionalInfo: z.string().optional(),
});

export default function FormSection() {
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      roleTitle: "",
      inquiryType: "General",
      application: "Bakery",
      projectDetails: "",
      additionalInfo: "",
    },
  });

  const totalSizeMB = useMemo(
    () =>
      (files.reduce((a, f) => a + (f.size || 0), 0) / (1024 * 1024)).toFixed(2),
    [files]
  );

  const onPickFiles = (e) => {
    const picked = Array.from(e.target.files || []);
    const limited = picked.slice(0, MAX_FILES);
    const totalMB =
      limited.reduce((a, f) => a + (f.size || 0), 0) / (1024 * 1024);
    if (totalMB > MAX_TOTAL_MB) {
      alert("Total file size exceeds 10MB");
      return;
    }
    setFiles(limited);
  };

  const onSubmit = async (data) => {
    setSubmitting(true);
    setServerError("");
    setSent(false);
    try {
      const fd = new FormData();
      Object.entries(data).forEach(([k, v]) => fd.append(k, v ?? ""));
      files.forEach((f) => fd.append("files", f));

      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Failed to submit");
      }
      setSent(true);
      setFiles([]);
      reset();
    } catch (e) {
      setServerError(e.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="section-container">
      <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <motion.form
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          className="rounded-2xl bg-white dark:bg-background/60 backdrop-blur ring-1 ring-black/5 dark:ring-white/10 shadow-xl p-6 md:p-8"
        >
          <div className="text-center">
            <motion.h3 variants={fadeUp} className="section-title text-black">
              Get in <span className="text-primary">Touch</span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 160 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="mx-auto mt-4 h-1 rounded bg-gradient-to-r from-primary to-primary/60"
                aria-hidden
              />
            </motion.h3>
            <motion.p variants={fadeUp} className="section-paragraph mt-1">
              Tell us about your project and we’ll get back to you within 24 hours.
            </motion.p>
          </div>

          {/* names */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Field
              name="firstName"
              label="First Name"
              placeholder="John"
              error={errors.firstName?.message}
            >
              <Input {...register("firstName")} />
            </Field>
            <Field
              name="lastName"
              label="Last Name"
              placeholder="Smith"
              error={errors.lastName?.message}
            >
              <Input {...register("lastName")} />
            </Field>
          </div>

          {/* contact */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Field
              name="email"
              label="Email"
              placeholder="john@company.com"
              icon={Mail}
              error={errors.email?.message}
            >
              <Input {...register("email")} />
            </Field>
            <Field
              name="phone"
              label="Phone"
              placeholder="+91 98765 43210"
              icon={Phone}
              error={errors.phone?.message}
            >
              <Input {...register("phone")} />
            </Field>
          </div>

          {/* company + role */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Field
              name="company"
              label="Company"
              placeholder="Your Company Ltd."
              icon={MapPin}
              error={errors.company?.message}
            >
              <Input {...register("company")} />
            </Field>
            <Field
              name="roleTitle"
              label="Role / Title"
              placeholder="R&D Manager"
              error={errors.roleTitle?.message}
            >
              <Input {...register("roleTitle")} />
            </Field>
          </div>

          {/* selects */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Field name="inquiryType" label="Inquiry Type">
              <Select
                {...register("inquiryType")}
                options={[
                  "General",
                  "Samples",
                  "Bespoke Project",
                  "Technical Consultation",
                ]}
              />
            </Field>
            <Field name="application" label="Application Area">
              <Select
                {...register("application")}
                options={[
                  "Bakery",
                  "Beverages",
                  "Dairy",
                  "Confectionery",
                  "Health & Wellness",
                ]}
              />
            </Field>
          </div>

          {/* details */}
          <Field
            name="projectDetails"
            className="mt-4"
            label="Project Details"
            icon={HelpCircle}
            error={errors.projectDetails?.message}
          >
            <TextArea
              rows={6}
              placeholder="Describe requirements, target flavour profiles, specs, timeline, and challenges..."
              {...register("projectDetails")}
            />
          </Field>

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
          <Field
            name="additionalInfo"
            className="mt-4"
            label="Additional Information"
            error={errors.additionalInfo?.message}
          >
            <TextArea rows={3} {...register("additionalInfo")} />
          </Field>

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

          <AnimatePresence>
            {sent && !submitting && (
              <motion.div
                key="ok"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-3 text-xs text-emerald-600 inline-flex items-center gap-1"
              >
                <CheckCircle2 className="h-4 w-4" /> Thanks! Your message has been sent.
              </motion.div>
            )}
          </AnimatePresence>

          {serverError && (
            <p className="mt-3 text-xs text-red-600">{serverError}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

/* ------- Small UI bits (updated for RHF) ------- */
function Field({
  name,
  label,
  icon: Icon,
  error,
  className = "",
  children,
}) {
  // ensure the control gets left padding when an icon exists, and link label->input
  const onlyChild = Children.only(children);
  const enhanced = cloneElement(onlyChild, {
    id: onlyChild.props.id || name,
    className: [
      "w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 ring-primary/30",
      Icon ? "pl-9" : "",
      onlyChild.props.className || "",
    ]
      .filter(Boolean)
      .join(" "),
  });

  return (
    <motion.div variants={fadeUp} className={`space-y-1 ${className}`}>
      {label && (
        <label className="text-sm font-medium" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-[10px] h-4 w-4 text-black/40 pointer-events-none" />
        )}
        {enhanced}
      </div>
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </motion.div>
  );
}

const Input = (props) => <input {...props} />;

const Select = ({ options = [], ...rest }) => (
  <select {...rest}>
    {options.map((o) => (
      <option key={o} value={o}>
        {o}
      </option>
    ))}
  </select>
);

const TextArea = ({ rows = 4, ...rest }) => <textarea rows={rows} {...rest} />;
