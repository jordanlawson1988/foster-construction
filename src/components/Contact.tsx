"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export default function Contact({
  onOpenContact,
}: {
  onOpenContact: () => void;
}) {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-orange-300 text-sm font-semibold mb-6">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              Ready to Start Your
              <br />
              <span className="text-orange-400">Next Project?</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-lg">
              Get a free, no-obligation consultation and estimate. We&apos;ll
              visit your home, discuss your vision, and provide a detailed plan
              to bring it to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={onOpenContact}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-500 text-white text-lg font-semibold hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50"
              >
                <MessageSquare className="h-5 w-5" />
                Send Us a Text
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="tel:+17705551234"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 text-white text-lg font-semibold hover:bg-white/10 hover:border-white/40 transition-all"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Right: Contact info cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              {
                icon: Phone,
                title: "Phone",
                details: ["(770) 555-1234"],
                sub: "Mon-Fri, 8AM-6PM",
              },
              {
                icon: Mail,
                title: "Email",
                details: ["info@fosterconstructionga.com"],
                sub: "We respond within 24 hours",
              },
              {
                icon: MapPin,
                title: "Service Areas",
                details: [
                  "Marietta, Kennesaw, Smyrna, Roswell, Acworth, Woodstock, Canton & surrounding areas",
                ],
                sub: "Metro Atlanta, GA",
              },
              {
                icon: Clock,
                title: "Business Hours",
                details: [
                  "Mon-Fri: 8:00 AM - 6:00 PM",
                  "Sat: 9:00 AM - 2:00 PM",
                  "Sun: Closed",
                ],
                sub: null,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/20">
                  <item.icon className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">
                    {item.title}
                  </div>
                  {item.details.map((d) => (
                    <div key={d} className="text-sm text-white/70">
                      {d}
                    </div>
                  ))}
                  {item.sub && (
                    <div className="text-xs text-white/40 mt-1">
                      {item.sub}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
