// components/Footer.jsx
"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full  text-white">
      {/* Main footer */}
      <div className="section-container bg-primary">
        <div className="mx-auto px-6 py-14">
          {/* 4 columns on lg, stack on mobile */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 items-start">
            {/* 1) Brand + tagline */}
            <div>
              <img
                src="/footer-logo.png"
                alt="Sensorisch"
                className="h-20 w-20 object-contain mb-6"
              />
              <p className="text-lg/7 font-medium">
                Flavours & Fragrances.<br />Engineered for Impact.
              </p>
            </div>

            {/* 2) Solutions */}
            <div>
              <h4 className="text-2xl font-semibold tracking-tight mb-6">Solutions</h4>
              <ul className="space-y-1 text-lg">
                <li><a className="hover:opacity-90 transition-opacity" href="#">Senso Ranges</a></li>
                <li><a className="hover:opacity-90 transition-opacity" href="#">Bespoke Solutions</a></li>
                <li><a className="hover:opacity-90 transition-opacity" href="#">Flavours</a></li>
                <li><a className="hover:opacity-90 transition-opacity" href="#">Natural Colours</a></li>
              </ul>
            </div>

            {/* 3) Company */}
            <div>
              <h4 className="text-2xl font-semibold tracking-tight mb-6">Company</h4>
              <ul className="space-y-1 text-lg">
                <li><a className="hover:opacity-90 transition-opacity" href="#">About Sensorisch</a></li>
                <li><a className="hover:opacity-90 transition-opacity" href="#">News & Trends</a></li>
                <li><a className="hover:opacity-90 transition-opacity" href="#">Contact Us</a></li>
                <li><a className="hover:opacity-90 transition-opacity" href="#">Natural Colours</a></li>
              </ul>
            </div>

            {/* 4) Contact + CTA */}
            <div className="lg:justify-self-end">
              <h4 className="text-2xl font-semibold tracking-tight mb-6">Contact</h4>
              <p className="text-lg/7 mb-8 opacity-95">Ready to start your project?</p>

              <a
                href="/contact"
                className="inline-block rounded-md bg-white text-primary px-5 py-3 text-lg font-semibold
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
      <div className="border-t border-white/20 ">
        <div className="section-container bg-primary">
          <div className="mx-auto px-6 py-4">
            <p className="text-center text-sm tracking-wide opacity-95">
              © {year} Sensorisch. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
