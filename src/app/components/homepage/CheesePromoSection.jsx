import React from "react";

export default function PromoSection() {
  return (
    <main className="w-full bg-background text-foreground">
      {/* SECTION 1  -  VIDEO */}
      <section className="relative section-container w-full h-[60vh] min-h-[360px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/home-banner-1.png"
        >
          <source src="/videos/food-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* SECTION 2  -  CARD */}
      <section className="relative w-full bg-gray-50 dark:bg-black">
        <div className="section-container py-10 sm:pb-24">
          {/* On mobile: normal flow (mt-6). On desktop: overlap using sm:absolute */}
          <div className="mt-6 sm:mt-0 w-full flex justify-center px-0 sm:px-4
                          sm:absolute sm:-top-36 sm:left-1/2 sm:-translate-x-1/2">
            <div
              className="grid grid-cols-1 sm:grid-cols-12 max-w-4xl w-full sm:w-[85%] md:w-[70%]
                         rounded-2xl bg-white dark:bg-white/10 shadow-2xl ring-1 ring-black/5
                         overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-3xl duration-300"
            >
              {/* LEFT: Image */}
              <div className="sm:col-span-4 flex items-center justify-center bg-primary/5">
                <img
                  src="/home-banner-2.png"
                  alt="cheese"
                  className="h-56 sm:h-72 md:h-80 w-full sm:w-auto object-cover sm:object-contain"
                />
              </div>

              {/* RIGHT: Copy */}
              <div className="sm:col-span-8 p-6 sm:p-8 flex flex-col justify-center text-center sm:text-left">
                <h2 className="section-title">
                  Cheese Systems, <br /> Built for Scale
                </h2>
                <p className="section-paragraph mb-3">
                  Automate deli & bakery with consistent yield, uptime, and process visibility.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <a
                    href="#"
                    className="px-6 py-3 rounded-sm bg-primary text-white font-semibold hover:bg-primary/90 transition"
                  >
                    Start Production
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* extra bottom space so next section doesn’t collide on desktop */}
          <div className="hidden sm:block h-24" />
        </div>
      </section>
    </main>
  );
}
