"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & Michael T.",
    location: "Marietta, GA",
    project: "Kitchen Remodel",
    text: "Foster Construction completely transformed our outdated kitchen into a modern masterpiece. The attention to detail was incredible — from the custom cabinetry to the quartz countertops. They finished on time and on budget. We couldn't be happier!",
    rating: 5,
  },
  {
    name: "David R.",
    location: "Kennesaw, GA",
    project: "Bathroom Renovation",
    text: "From the initial consultation to the final walkthrough, the Foster team was professional, communicative, and talented. Our master bathroom looks like it belongs in a luxury hotel. Highly recommend!",
    rating: 5,
  },
  {
    name: "Jennifer & Mark P.",
    location: "Smyrna, GA",
    project: "Home Addition",
    text: "We needed more space for our growing family and Foster Construction delivered beyond our expectations. The new addition blends seamlessly with our original home. Their crew was respectful and kept the site clean every day.",
    rating: 5,
  },
  {
    name: "Robert K.",
    location: "Acworth, GA",
    project: "Deck & Patio",
    text: "Our new outdoor living space is absolutely stunning. The composite deck, pergola, and outdoor kitchen are perfect for entertaining. Foster's team had creative solutions for every challenge. A+ work!",
    rating: 5,
  },
  {
    name: "Amanda S.",
    location: "Roswell, GA",
    project: "Full Home Remodel",
    text: "We bought a fixer-upper and Foster Construction turned it into our dream home. They managed the entire project — demolition, structural work, electrical, plumbing, and finishing. Incredible quality and craftsmanship throughout.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-gradient-to-b from-slate-100 to-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
            What Our Clients
            <br />
            <span className="text-orange-500">Are Saying</span>
          </h2>
        </motion.div>

        {/* Review badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {[
            { platform: "Google", rating: "4.9", count: "127 reviews" },
            { platform: "Facebook", rating: "5.0", count: "89 reviews" },
          ].map((badge) => (
            <div
              key={badge.platform}
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl border border-slate-200 shadow-sm"
            >
              <div className="text-center">
                <div className="text-sm font-semibold text-slate-700">
                  {badge.platform}
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-lg font-bold text-navy-900">
                    {badge.rating}
                  </span>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-slate-500">{badge.count}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100"
            >
              <Quote className="h-10 w-10 text-orange-200 mb-6" />

              <p className="text-lg lg:text-xl text-slate-700 leading-relaxed mb-8">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-navy-900">
                    {testimonials[current].name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {testimonials[current].location} &middot;{" "}
                    {testimonials[current].project}
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({
                    length: testimonials[current].rating,
                  }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-navy-900 transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === current
                      ? "w-8 bg-orange-500"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-navy-900 transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
