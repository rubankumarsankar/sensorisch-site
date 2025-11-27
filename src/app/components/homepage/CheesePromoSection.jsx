import React from "react";
import Image from "next/image";

export default function PromoSection() {
  return (
    <main className="w-full bg-background text-black">
      {/* SECTION 1  -  VIDEO HERO */}
      <section className="relative w-full h-[60vh] min-h-[360px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/home-banner-1.jpg"
        >
          <source src="/videos/food-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/10" />
      </section>

      {/* SECTION 2  -  OVERLAPPING CARD */}
      <section className="relative w-full bg-gray-50 dark:bg-black">
        <div className="section-container py-10 sm:pb-24 relative">

          <div
            className="
              mt-6 sm:mt-0 w-full flex justify-center px-0
              sm:absolute sm:-top-36 sm:left-1/2 sm:-translate-x-1/2
            "
          >
            <div
              className="
                grid grid-cols-1 sm:grid-cols-12 items-stretch
                max-w-4xl w-full sm:w-[85%] md:w-[70%]
                rounded-lg bg-white dark:bg-white/10 
                shadow-2xl ring-1 ring-black/5
                overflow-hidden
              "
            >
              {/* LEFT: IMAGE (full height, no white gap) */}
              <div className="sm:col-span-4 relative h-full">
                <div className="relative w-full h-full min-h-[260px]">
                  <Image
                    src="/assets/home-banner-2.jpg"
                    alt="Cheese"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* RIGHT: CONTENT */}
              <div className="sm:col-span-8 p-6 sm:p-8 flex flex-col justify-center text-center sm:text-left">
                <h2 className="section-title text-black">
                  Explore the <span className="text-primary">Senso</span> Ranges
                </h2>

                <p className="section-paragraph mb-3">
                  Behind every great flavour is great science. Senso brings
                  together expertise, innovation, and application-specific
                  precision to fast-track your success.
                </p>

                <div className="flex justify-center sm:justify-start">
                  <a
                    href="/applications-solutions"
                    className="px-6 py-3 rounded-sm bg-primary text-white font-semibold hover:bg-primary/90 transition"
                  >
                    Start Production
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
