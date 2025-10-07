"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About Sensorisch", href: "/about" },
  { label: "Bespoke Solutions", href: "/bespoke-solutions" },
  { label: "Our Portfolio", href: "/our-portfolio" },
  { label: "News & Trends", href: "/news-trends" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 dark:bg-background/70 backdrop-blur border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-primary">
        <img src="/sensorisch-logo.png" alt="" />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-foreground/80 hover:text-primary">
              {n.label}
            </Link>
          ))}
          <Link
            href="/samples"
            className="px-4 py-2 rounded-sm bg-primary text-white hover:bg-primary/90"
          >
            Request Samples
          </Link>
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="md:hidden border-t border-black/5 dark:border-white/10 bg-background">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="py-2 text-lg text-foreground/90 hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/samples"
              className="mt-2 px-4 py-2 rounded-sm bg-primary text-white text-center"
              onClick={() => setOpen(false)}
            >
              Request Samples
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
