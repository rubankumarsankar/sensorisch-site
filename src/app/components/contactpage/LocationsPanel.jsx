"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./motionHelpers";
import { Phone, Mail, Clock } from "lucide-react";

export default function LocationsPanel() {
  return (
    <section className="section">
      <div className="space-y-2 section-container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-2xl bg-white dark:bg-background/60 backdrop-blur ring-1 ring-black/5 dark:ring-white/10 shadow-xl p-6"
        >
          <h4 className="section-title font-semibold text-center">
            Our Locations
          </h4>

          {/* Center the cards on all breakpoints */}
          <div className="mt-4 grid gap-6 md:grid-cols-2 justify-items-center">
            {/* India */}
            <article className="w-full max-w-md rounded-lg border border-black/5 dark:border-white/10 p-4">
              <h5 className="font-medium text-primary text-center">
                India Headquarters
              </h5>
              <p className="text-sm text-black/70 mt-1 text-center">
                Innovation Center, Technology Park, Mumbai, Maharashtra 400001
              </p>
              <div className="mt-3 text-sm space-y-2 text-center">
                <a
                  href="tel:+912212345678"
                  className="inline-flex items-center gap-2 justify-center"
                >
                  <Phone className="h-4 w-4 text-primary" /> +91 22 1234 5678
                </a>
                <br />
                <a
                  href="mailto:india@sensorisch.com"
                  className="inline-flex items-center gap-2 justify-center"
                >
                  <Mail className="h-4 w-4 text-primary" /> india@sensorisch.com
                </a>
                <br />
                <div className="inline-flex items-center gap-2 justify-center text-black/70">
                  <Clock className="h-4 w-4 text-primary" /> 9:00 AM – 6:00 PM
                  IST (Mon–Fri)
                </div>
              </div>
            </article>

            {/* GCC */}
            <article className="w-full max-w-md rounded-lg border border-black/5 dark:border-white/10 p-4">
              <h5 className="font-medium text-primary text-center">
                GCC Operations
              </h5>
              <p className="text-sm text-black/70 mt-1 text-center">
                Business District, Dubai, UAE
              </p>
              <div className="mt-3 text-sm space-y-2 text-center">
                <a
                  href="tel:+97141234567"
                  className="inline-flex items-center gap-2 justify-center"
                >
                  <Phone className="h-4 w-4 text-primary" /> +971 4 123 4567
                </a>
                <br />
                <a
                  href="mailto:gcc@sensorisch.com"
                  className="inline-flex items-center gap-2 justify-center"
                >
                  <Mail className="h-4 w-4 text-primary" /> gcc@sensorisch.com
                </a>
                <br />
                <div className="inline-flex items-center gap-2 justify-center text-black/70">
                  <Clock className="h-4 w-4 text-primary" /> 9:00 AM – 6:00 PM
                  GST (Sun–Thu)
                </div>
              </div>
            </article>

            {/* Quick help / emergency (centered, spans 2 cols on md+) */}
            <motion.div
              variants={fadeUp}
              className="w-full max-w-3xl rounded-2xl bg-gradient-to-br from-primary/10 to-transparent ring-1 ring-primary/20 p-6 md:col-span-2"
            >
              <h4 className="text-2xl text-primary font-semibold text-center">
                Need Immediate Assistance?
              </h4>
              <p className="text-sm text-black/70 mt-1 text-center">
                For urgent inquiries or immediate support, choose from these
                options
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                <a
                  className="w-full max-w-xs inline-flex items-center gap-2 justify-center rounded-md bg-white dark:bg-white/10 px-3 py-2 text-sm font-medium ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/90 transition"
                  href="tel:+912212345678"
                >
                  <Phone className="h-5 w-5" /> Call Us Directly <br /> +91 22
                  1234 5678
                </a>
                <a
                  className="w-full max-w-xs inline-flex items-center gap-2 justify-center rounded-md bg-white dark:bg-white/10 px-3 py-2 text-sm font-medium ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/90 transition"
                  href="mailto:urgent@sensorisch.com"
                >
                  <Mail className="h-5 w-5" /> Priority Email <br />{" "}
                  urgent@sensorisch.com
                </a>
                <a
                  className="w-full max-w-xs inline-flex items-center gap-2 justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow hover:bg-primary/90 transition"
                  href="#contact-form"
                >
                  <Clock className="h-5 w-5" /> Emergency Support <br /> 24/7
                  (Clients)
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
