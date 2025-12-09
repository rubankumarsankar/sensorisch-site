// components/LocationsPanel.jsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "./motionHelpers";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function LocationsPanel() {
  return (
    <section className="section">
      <div className="section-container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 md:grid-cols-2 items-center"
        >
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <motion.h2
              variants={fadeUp}
              className="section-title font-semibold text-black"
            >
              Our <span className="text-primary">Location</span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 180 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="mt-4 h-1 rounded bg-primary"
              />
            </motion.h2>

            <motion.article
              variants={fadeUp}
              className="w-full rounded-2xl  p-6 md:p-7 "
            >
              <h3 className="section-subtitle font-semibold text-primary text-center md:text-left">
                Sensorisch Formulation Lab (P) Ltd
              </h3>

              <p className="text-sm md:text-base text-black/70 mt-2 leading-relaxed text-center md:text-left">
                B9, 1st Floor, SIDCO Industrial Estate, Villivakkam, Chennai —
                600 049
              </p>

              {/* CONTACT LIST */}
              <ul className="mt-4 space-y-2 text-sm md:text-[15px] text-center md:text-left">
                <li>
                  <Link
                    href="tel:+917397397037"
                    className="inline-flex items-center gap-2 hover:opacity-90 transition"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    +91 7397397037
                    <span className="text-black/60">(customer care)</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="tel:+917397397434"
                    className="inline-flex items-center gap-2 hover:opacity-90 transition"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    +91 7397397434
                  </Link>
                </li>

                <li>
                  <Link
                    href="mailto:sales@sensorisch.com"
                    className="inline-flex items-center gap-2 hover:opacity-90 transition"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    sales@sensorisch.com
                  </Link>
                </li>

                <li>
                  <Link
                    href="mailto:info@sensorisch.com"
                    className="inline-flex items-center gap-2 hover:opacity-90 transition"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    info@sensorisch.com
                  </Link>
                </li>

                <li className="inline-flex items-center gap-2 text-black/70">
                  <Clock className="h-4 w-4 text-primary" />
                  9:00 AM – 6:00 PM IST (Mon–Fri)
                </li>
              </ul>

              {/* ACTION BUTTONS */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Google Maps → External */}
                <Link
                  href="https://maps.google.com/?q=SIDCO+Industrial+Estate,+Villivakkam,+Chennai+600049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-white px-3 py-2 text-sm font-medium shadow hover:bg-primary/90 transition"
                >
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </Link>

                {/* Call */}
                <Link
                  href="tel:+917397397037"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-primary text-primary bg-white dark:bg-white/10 px-3 py-2 text-sm font-medium ring-1 ring-black/5 hover:bg-primary/90 hover:text-white transition"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </Link>

                {/* Email */}
                <Link
                  href="mailto:info@sensorisch.com"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-primary border border-primary dark:bg-white/10 px-3 py-2 text-sm font-medium ring-1 ring-black/5 hover:bg-primary/90 hover:text-white transition"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </Link>
              </div>
            </motion.article>
          </div>

          {/* RIGHT SIDE — MAP IFRAME */}
          <motion.div
            variants={fadeUp}
            className="w-full h-[260px] sm:h-[320px] md:h-[380px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white"
          >
            <iframe
              title="Sensorisch Location Map"
              src="https://www.google.com/maps?q=SIDCO+Industrial+Estate,+Villivakkam,+Chennai+600049&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
