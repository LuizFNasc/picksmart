"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/tools", label: "Tools" },
  { href: "/reviews", label: "Reviews" },
  { href: "/buying-guides", label: "Buying Guides" },
  { href: "/beginners", label: "Beginners" },
  { href: "/workshop", label: "Workshop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)]/95 backdrop-blur border-b border-[var(--color-beige-dark)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-18 py-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-[var(--color-forest)] text-[var(--color-beige)] font-serif text-lg font-bold">
              P
            </span>
            <span className="font-serif text-xl font-bold tracking-tight text-[var(--color-forest)]">
              PickSmart <span className="text-[var(--color-wood-dark)]">Magazine</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--color-charcoal-light)] hover:text-[var(--color-forest)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-[var(--color-forest)]"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="lg:hidden pb-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-[var(--color-charcoal-light)] hover:bg-[var(--color-beige)] hover:text-[var(--color-forest)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
