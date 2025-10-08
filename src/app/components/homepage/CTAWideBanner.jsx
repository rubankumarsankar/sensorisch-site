// components/CTAWideBanner.jsx
"use client";

export default function CTAWideBanner({
  title = "Ready to Transform Your Products?",
  blurb = "Partner with Sensorisch for science-led flavours that scale consistently, comply regionally, and delight consumers.",
  primaryLabel = "Start Your Project",
  secondaryLabel = "View Our Portfolio",
  onPrimaryHref = "#",
  onSecondaryHref = "#",
  cheeseImg = "/cheese-img.png", // replace with your asset
}) {
  return (
    <section className="relative w-full">
      {/* Red strip */}
      <div className="relative w-full bg-primary text-white section-container">
        {/* Content */}
        <div className="section-container relative p-6">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            {/* LEFT (4 cols): Cheese image breaking out */}
            <div className="relative order-2 lg:order-1 lg:col-span-5">
              <div className="absolute -inset-6 rounded-md bg-primary/0 lg:bg-transparent" />
              <img
                src={cheeseImg}
                alt="Cheese stack"
                className="relative -mt-8 sm:-mt-14 lg:-mt-[230px]
                           drop-shadow-[0_18px_30px_rgba(0,0,0,0.25)]
                           max-h-[360px] lg:max-h-[520px] w-auto mx-auto"
              />
            </div>

            {/* RIGHT (8 cols): Copy + CTAs */}
            <div className="relative z-[1] order-1 lg:order-2 lg:col-span-7">
              <h2 className="section-title text-white">
                {title}
              </h2>
              <p className="mt-3 md:mt-4 section-subtitle text-white max-w-2xl">
                {blurb}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={onPrimaryHref}
                  className="inline-flex items-center justify-center rounded-md bg-white text-primary
                             px-5 py-3 text-sm md:text-base font-semibold shadow-sm
                             hover:bg-white/90 transition-colors"
                >
                  {primaryLabel}
                </a>

                <a
                  href={onSecondaryHref}
                  className="inline-flex items-center justify-center rounded-md border border-white/80
                             text-white px-5 py-3 text-sm md:text-base font-semibold
                             hover:bg-white/10 transition-colors"
                >
                  {secondaryLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feather shadow under banner */}
      {/* <div className="pointer-events-none h-6 w-full bg-gradient-to-b from-black/10 to-transparent" /> */}
    </section>
  );
}
