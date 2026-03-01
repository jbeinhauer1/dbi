"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/what-is-dbi", label: "What is DBI?" },
  { href: "/five-requirements", label: "Five Requirements" },
  { href: "/dbi-index", label: "DBI Index" },
  { href: "/reports", label: "Reports" },
  { href: "/framework", label: "Framework" },
  { href: "/subscribe", label: "Subscribe" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-site mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="no-underline hover:no-underline">
          <span className="text-navy font-bold text-lg tracking-tight">
            DRUG BENEFIT INTEGRITY<sup className="text-xs ml-0.5">&#8482;</sup>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-secondary hover:text-accent no-underline hover:no-underline transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-navy transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="lg:hidden border-t border-gray-200 bg-white">
          <div className="max-w-site mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-secondary hover:text-accent no-underline text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
