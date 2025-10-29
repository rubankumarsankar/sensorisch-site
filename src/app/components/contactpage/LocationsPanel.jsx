"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "./motionHelpers";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const staggerWrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function LocationsPanel() {
  return (
    <section className="section">
      <div className="section-container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-2xl bg-white dark:bg-background/60 backdrop-blur ring-1 ring-black/5 dark:ring-white/10 shadow-xl p-6 md:p-8"
        >
          {/* Title */}
          <motion.h2
            variants={fadeUp}
            className="section-title font-semibold text-black text-center"
          >
            Our <span className="text-primary">Location</span>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 180 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="mx-auto mt-4 h-1 rounded bg-gradient-to-r from-primary to-primary/60"
              aria-hidden
            />
          </motion.h2>

          {/* Cards */}
          <motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 grid justify-items-center gap-6 md:grid-cols-1"
          >
            {/* India */}
            <motion.article
              variants={fadeUp}
              className="w-full max-w-xl rounded-xl border border-black/5 dark:border-white/10 p-5 md:p-6 bg-white/80 dark:bg-white/5"
            >
              <h3 className="section-subtitle font-semibold text-primary text-center">
                Sensorisch Formulation Lab (P) Ltd
              </h3>

              <p className="text-sm md:text-base text-black/70 mt-2 text-center leading-relaxed">
                B9, 1st Floor, SIDCO Industrial Estate, Villivakkam, Chennai — 600 049
              </p>

              {/* Contact list */}
              <ul className="mt-4 space-y-2 text-sm md:text-[15px] text-center">
                <li>
                  <a
                    href="tel:+917397397037"
                    className="inline-flex items-center justify-center gap-2 hover:opacity-90 transition"
                    aria-label="Call customer care +91 7397397037"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    +91 7397397037
                    <span className="text-black/60">(customer care)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+917397397434"
                    className="inline-flex items-center justify-center gap-2 hover:opacity-90 transition"
                    aria-label="Call +91 7397397434"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    +91 7397397434
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sales@sensorisch.com"
                    className="inline-flex items-center justify-center gap-2 hover:opacity-90 transition"
                    aria-label="Email sales at sensorisch dot com"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    sales@sensorisch.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@sensorisch.com"
                    className="inline-flex items-center justify-center gap-2 hover:opacity-90 transition"
                    aria-label="Email info at sensorisch dot com"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    info@sensorisch.com
                  </a>
                </li>
                <li className="inline-flex items-center justify-center gap-2 text-black/70">
                  <Clock className="h-4 w-4 text-primary" />
                  9:00 AM – 6:00 PM IST (Mon–Fri)
                </li>
              </ul>

              {/* Actions */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="https://maps.google.com/?q=SIDCO+Industrial+Estate,+Villivakkam,+Chennai+600049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-white px-3 py-2 text-sm font-medium shadow hover:bg-primary/90 transition"
                >
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </a>
                <a
                  href="tel:+917397397037"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-primary text-primary bg-white dark:bg-white/10 px-3 py-2 text-sm font-medium ring-1 ring-black/5 dark:ring-white/10 hover:bg-primary/90 hover:text-white transition"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </a>
                <a
                  href="mailto:info@sensorisch.com"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-primary border border-primary dark:bg-white/10 px-3 py-2 text-sm font-medium ring-1 ring-black/5 dark:ring-white/10 hover:bg-primary/90 hover:text-white transition"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </div>
            </motion.article>

            {/* Quick help / emergency */}
            {/* <motion.div
              variants={fadeUp}
              className="w-full max-w-4xl rounded-2xl bg-gradient-to-br from-primary/10 to-transparent ring-1 ring-primary/20 p-6"
            >
              <h3 className="section-title font-semibold text-black text-center">
                Need Immediate <span className="text-primary">Assistance?</span>
              </h3>
              <p className="section-paragraph text-black/70 mt-1 text-center">
                For urgent inquiries or immediate support, choose an option below.
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                <a
                  className="w-full max-w-xs inline-flex items-center gap-2 justify-center rounded-md bg-white dark:bg-white/10 px-3 py-2 text-sm font-medium ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/90 transition"
                  href="tel:+912212345678"
                >
                  <Phone className="h-5 w-5" />
                  Call Us Directly
                </a>
                <a
                  className="w-full max-w-xs inline-flex items-center gap-2 justify-center rounded-md bg-white dark:bg-white/10 px-3 py-2 text-sm font-medium ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/90 transition"
                  href="mailto:urgent@sensorisch.com"
                >
                  <Mail className="h-5 w-5" />
                  Priority Email
                </a>
                <a
                  className="w-full max-w-xs inline-flex items-center gap-2 justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow hover:bg-primary/90 transition"
                  href="#contact-form"
                >
                  <Clock className="h-5 w-5" />
                  Emergency Support (24/7 Clients)
                </a>
              </div>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
