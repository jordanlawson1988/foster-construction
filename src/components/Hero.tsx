"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Clock } from "lucide-react";

export default function Hero({
  onOpenContact,
}: {
  onOpenContact: () => void;
}) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 border border-white/20 rounded-full" />
        <div className="absolute top-40 right-40 w-64 h-64 border border-white/10 rounded-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8"
          >
            <Star className="h-4 w-4 text-orange-400 fill-orange-400" />
            Trusted by homeowners across Metro Atlanta
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
          >
            Build Your Dream.
            <br />
            <span className="text-orange-400">We Make It Real.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed"
          >
            From stunning kitchen remodels to complete home additions, Foster
            Construction delivers expert craftsmanship and exceptional results
            in Marietta, GA and beyond.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-500 text-white text-lg font-semibold hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5"
            >
              Book a Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all"
            >
              View Our Work
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Star,
                label: "5-Star Rated",
                sub: "Google & Facebook",
              },
              {
                icon: Shield,
                label: "Licensed & Insured",
                sub: "Full coverage",
              },
              {
                icon: Clock,
                label: "20+ Years",
                sub: "Of experience",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 text-white/80"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                  <item.icon className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">
                    {item.label}
                  </div>
                  <div className="text-xs text-white/60">{item.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
