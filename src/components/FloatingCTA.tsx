"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function FloatingCTA({
  onOpenContact,
}: {
  onOpenContact: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={onOpenContact}
          className="fixed bottom-6 right-6 z-40 lg:hidden flex items-center gap-2 px-5 py-3.5 rounded-full bg-orange-500 text-white font-semibold shadow-2xl shadow-orange-500/40 hover:bg-orange-600 transition-colors"
          aria-label="Send us a text"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="text-sm">Text Us</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
