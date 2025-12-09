// components/Footer.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full text-white bg-primary">
      {/* Main footer */}
      <div className="border-b border-white/15">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 items-start">
            {/* 1) Brand + tagline */}
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2">
                <Image
                  src="/sensorisch-logo.png"
                  alt="Sensorisch"
                  width={180}
                  height={56}
                  className="object-contain"
                />
              </div>
              <p className="text-sm sm:text-base font-medium tracking-[0.18em] uppercase text-center sm:text-left">
                Where Science Meets Senses
              </p>
            </div>

            {/* 2) Solutions */}
            <div>
              <h4 className="text-xl sm:text-2xl font-medium tracking-tight mb-4 sm:mb-6">
                Solutions
              </h4>
              <ul className="space-y-1 text-sm sm:text-lg">
                <li>
                  <Link
                    href="/about"
                    className="hover:opacity-90 transition-opacity"
                  >
                    Senso Ranges
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bespoke"
                    className="hover:opacity-90 transition-opacity"
                  >
                    Bespoke Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights"
                    className="hover:opacity-90 transition-opacity"
                  >
                    Flavours
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="hover:opacity-90 transition-opacity"
                  >
                    Natural Colours
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3) Company */}
            <div>
              <h4 className="text-xl sm:text-2xl font-medium tracking-tight mb-4 sm:mb-6">
                Company
              </h4>
              <ul className="space-y-1 text-sm sm:text-lg">
                <li>
                  <Link
                    href="/about"
                    className="hover:opacity-90 transition-opacity"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:opacity-90 transition-opacity"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:opacity-90 transition-opacity"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights"
                    className="hover:opacity-90 transition-opacity"
                  >
                    Blog & Insights
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4) Support */}
            <div>
              <h4 className="text-xl sm:text-2xl font-medium tracking-tight mb-4 sm:mb-6">
                Support
              </h4>
              <ul className="space-y-1 text-sm sm:text-lg">
                <li>
                  <Link
                    href="#"
                    className="hover:opacity-90 transition-opacity"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:opacity-90 transition-opacity"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:opacity-90 transition-opacity"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      {/* <div className="text-center py-6 text-sm opacity-80">
        © {year} Sensorisch. All Rights Reserved.
      </div> */}
      {/* Bottom Bar */}
      <div className="border-t border-white/15">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* LEFT SIDE — COPYRIGHT */}
            <p className="text-xs sm:text-sm text-white/80">
              © {year} Sensorisch. All rights reserved.
            </p>

            {/* RIGHT SIDE — AYATIWORKS CREDIT */}
            <div className="flex items-center gap-2">
              <Link
                href="https://ayatiworks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:opacity-90"
              >
                <span className="text-xs sm:text-sm text-white">
                  Designed &amp; Developed by
                </span>
                <Image
                  src="/web_logo.png"
                  alt="Ayatiworks"
                  width={60}
                  height={24}
                  className="object-contain brightness-110"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
