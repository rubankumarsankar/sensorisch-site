"use client";

import { motion } from "framer-motion";
import { fadeUp, list } from "./motionHelpers";
import { MessageSquare, CalendarDays, FileUp, FlaskConical, ArrowRight } from "lucide-react";

const METHODS = [
  { tag: "Recommended", title: "Start a Conversation", blurb: "Discuss your requirements with our flavour experts", cta: "Send Message", href: "#contact-form", icon: MessageSquare },
  { title: "Book a Tasting Session", blurb: "Experience our flavours firsthand at our facilities", cta: "Schedule Visit", href: "#contact-form", icon: CalendarDays },
  { title: "Share Your Brief", blurb: "Upload detailed specifications for custom development", cta: "Upload Brief", href: "#contact-form", icon: FileUp },
  { title: "Technical Consultation", blurb: "Connect with our R&D team for complex challenges", cta: "Book Consultation", href: "#contact-form", icon: FlaskConical },
];

export default function MethodsSection() {
  return (
    <section className="section">
      <div className="section-container">
        <motion.div variants={list} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="text-center">
          <motion.h2 variants={fadeUp} className="text-xl md:text-2xl font-semibold">How Can We Help You?</motion.h2>
          <motion.p variants={fadeUp} className="text-black/70 mt-2">Choose the best way to connect with our team based on your needs</motion.p>
        </motion.div>

        <motion.ul variants={list} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {METHODS.map((m) => (
            <motion.li
              key={m.title}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-white/[0.06] backdrop-blur p-6 ring-1 ring-black/5 dark:ring-white/10 shadow-lg"
            >
              {m.tag && <span className="absolute right-3 top-3 rounded-full bg-primary/10 text-primary text-[10px] font-semibold px-2 py-1">{m.tag}</span>}
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <m.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-3 text-lg font-semibold">{m.title}</h3>
              <p className="mt-1 text-sm text-black/75">{m.blurb}</p>

              <a href={m.href} className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-sm font-semibold text-white shadow hover:bg-primary/90 transition-colors">
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
  );
}
