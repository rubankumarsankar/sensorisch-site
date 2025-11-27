// components/Footer.jsx
"use client";

import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full text-white bg-primary">
      {/* Main footer */}
      <div className="border-b border-white/15">
        <div className="max-w-6xl mx-auto px-6 py-14">
          {/* 4 columns on lg, stack on mobile */}
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
                  <a className="hover:opacity-90 transition-opacity" href="#">
                    Senso Ranges
                  </a>
                </li>
                <li>
                  <a className="hover:opacity-90 transition-opacity" href="#">
                    Bespoke Solutions
                  </a>
                </li>
                <li>
                  <a className="hover:opacity-90 transition-opacity" href="#">
                    Flavours
                  </a>
                </li>
                <li>
                  <a className="hover:opacity-90 transition-opacity" href="#">
                    Natural Colours
                  </a>
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
                  <a className="hover:opacity-90 transition-opacity" href="#">
                    About Sensorisch
                  </a>
                </li>
                <li>
                  <a className="hover:opacity-90 transition-opacity" href="#">
                    News &amp; Trends
                  </a>
                </li>
                <li>
                  <a className="hover:opacity-90 transition-opacity" href="#">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="hover:opacity-90 transition-opacity" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* 4) Contact + CTA */}
            <div className="lg:justify-self-end">
              <h4 className="text-xl sm:text-2xl font-medium tracking-tight mb-4 sm:mb-6">
                Contact
              </h4>
              <p className="text-sm sm:text-lg leading-relaxed mb-6 opacity-95">
                Ready to start your project?
              </p>

              <a
                href="/contact"
                className="inline-block rounded-md bg-white text-primary px-5 py-3 text-sm sm:text-lg font-medium
                           shadow-[0_12px_30px_-12px_rgba(0,0,0,0.4)] ring-1 ring-white/60
                           hover:bg-white/95 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-3 py-4 text-center sm:flex-row sm:text-left">
            {/* Left: Copyright */}
            <p className="text-xs sm:text-sm tracking-wide text-white/90">
              © {year} Sensorisch. All rights reserved.
            </p>

            {/* Right: Developer credit */}
            <div className="flex items-center gap-2">
              <a
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
                  width={90}
                  height={24}
                  className="object-contain brightness-110"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
