// components/Header.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  const pillCls = (href) =>
    [
      "inline-flex items-center rounded-full px-3.5 py-2 text-sm font-medium transition-all",
      "ring-1 ring-transparent",
      "hover:ring-primary/30 hover:shadow-[0_0_0_3px_rgba(210,36,34,0.08)]",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
      isActive(href)
        ? "bg-primary/10 text-primary ring-primary/30 shadow-[0_8px_24px_-12px_rgba(210,36,34,0.45)]"
        : "text-foreground/80 hover:text-primary",
    ].join(" ");

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 dark:bg-background/70 backdrop-blur border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/sensorisch-logo.png" alt="Sensorisch" className="w-60" />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-2">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={pillCls(n.href)}>
              {n.label}
            </Link>
          ))}
          <Link
            href="/samples"
            className="ml-2 inline-flex items-center rounded-full bg-primary text-white px-4 py-2 text-sm font-semibold
                       shadow hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            Request Samples
          </Link>
        </nav>

        {/* Mobile toggle */}
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
        <nav className="md:hidden border-t border-black/5 dark:border-white/10 bg-background/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={[
                  "rounded-full px-4 py-2 text-base transition-all ring-1",
                  isActive(n.href)
                    ? "bg-primary/10 text-primary ring-primary/30"
                    : "text-foreground/90 ring-transparent hover:text-primary hover:ring-primary/30",
                ].join(" ")}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/samples"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary text-white px-4 py-2 text-base font-semibold shadow hover:bg-primary/90 transition-colors"
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
