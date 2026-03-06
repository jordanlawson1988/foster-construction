"use client";

import { motion } from "framer-motion";
import { Award, Users, Home, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Home, value: "500+", label: "Projects Completed" },
  { icon: Users, value: "20+", label: "Years Experience" },
  { icon: Award, value: "100%", label: "Licensed & Insured" },
  { icon: ThumbsUp, value: "4.9", label: "Average Rating" },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80')",
                }}
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-navy-900 text-white p-6 rounded-2xl shadow-2xl">
              <div className="text-3xl font-bold text-orange-400">20+</div>
              <div className="text-sm text-white/80">Years of Excellence</div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-6">
              Building Trust Through
              <br />
              <span className="text-orange-500">Quality Craftsmanship</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Foster Construction Services has been a cornerstone of the Marietta,
              Georgia community for over two decades. What started as a small
              family operation has grown into one of Metro Atlanta&apos;s most
              trusted construction and remodeling companies.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              We believe every home tells a story, and we&apos;re here to help you
              write the next chapter. Our team of skilled craftsmen brings passion,
              precision, and professionalism to every project — from minor updates
              to major transformations.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {[
                "Transparent pricing with detailed, upfront estimates",
                "Direct communication with your project lead",
                "Premium materials and industry-leading warranties",
                "Clean, respectful job sites — we treat your home like ours",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 lg:p-12 bg-navy-900 rounded-3xl"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 mb-3">
                <stat.icon className="h-6 w-6 text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
