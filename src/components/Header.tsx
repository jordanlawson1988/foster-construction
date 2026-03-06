"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { cn } from "@/lib/cn";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header({
  onOpenContact,
}: {
  onOpenContact: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg font-bold text-lg transition-colors",
                scrolled
                  ? "bg-navy-900 text-white"
                  : "bg-white text-navy-900"
              )}
            >
              FC
            </div>
            <div>
              <span
                className={cn(
                  "block text-lg font-bold leading-tight transition-colors",
                  scrolled ? "text-navy-900" : "text-white"
                )}
              >
                Foster Construction
              </span>
              <span
                className={cn(
                  "block text-xs tracking-wider uppercase transition-colors",
                  scrolled ? "text-slate-600" : "text-white/70"
                )}
              >
                Services Georgia
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  scrolled
                    ? "text-slate-700 hover:text-navy-900 hover:bg-slate-100"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+17705551234"
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all",
                scrolled
                  ? "text-navy-900 border border-navy-200 hover:bg-navy-50"
                  : "text-white border border-white/30 hover:bg-white/10"
              )}
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-orange-500 text-white hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
            >
              <MessageSquare className="h-4 w-4" />
              Text Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled
                ? "text-navy-900 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200 shadow-xl"
          >
            <nav className="mx-auto max-w-7xl px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-slate-700 font-medium hover:bg-slate-50 hover:text-navy-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-200 space-y-2">
                <a
                  href="tel:+17705551234"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 font-semibold hover:bg-navy-50 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenContact();
                  }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors"
                >
                  <MessageSquare className="h-4 w-4" />
                  Text Us
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
