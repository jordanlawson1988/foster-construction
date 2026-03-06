"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, Loader2 } from "lucide-react";

const serviceOptions = [
  "Kitchen Remodel",
  "Bathroom Renovation",
  "Home Addition",
  "Interior Finishing",
  "General Construction",
  "Deck & Outdoor Living",
  "Other",
];

export default function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleClose = () => {
    onClose();
    // Reset after animation
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-navy-900 px-6 py-5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {submitted ? "Thank You!" : "Book a Consultation"}
                </h3>
                <p className="text-sm text-white/60 mt-0.5">
                  {submitted
                    ? "We'll be in touch soon"
                    : "We'll get back to you within 24 hours"}
                </p>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-navy-900 mb-2">
                      Message Received!
                    </h4>
                    <p className="text-slate-600 max-w-sm mx-auto">
                      A member of our team will contact you shortly to discuss
                      your project. We typically respond within a few hours
                      during business days.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-6 px-6 py-3 rounded-xl bg-navy-900 text-white font-semibold hover:bg-navy-800 transition-colors"
                    >
                      Done
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-navy-400 focus:ring-2 focus:ring-navy-400/20 outline-none transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(770) 555-1234"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-navy-400 focus:ring-2 focus:ring-navy-400/20 outline-none transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-navy-400 focus:ring-2 focus:ring-navy-400/20 outline-none transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Service Needed *
                      </label>
                      <select
                        required
                        defaultValue=""
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:border-navy-400 focus:ring-2 focus:ring-navy-400/20 outline-none transition-all text-sm appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat"
                      >
                        <option value="" disabled>
                          Select a service...
                        </option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Project Details
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-navy-400 focus:ring-2 focus:ring-navy-400/20 outline-none transition-all text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-orange-500 text-white font-semibold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-xs text-slate-400 text-center">
                      By submitting, you agree to be contacted regarding your
                      project. We respect your privacy.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
