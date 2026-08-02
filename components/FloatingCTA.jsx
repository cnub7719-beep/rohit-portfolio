"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past the hero, hide near the very top
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-xl"
        >
          <div className="flex items-center justify-between gap-4 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-300/40 px-6 py-4">
            <div>
              <p className="font-semibold text-slate-900 text-sm sm:text-base">
                Ready to turn your footage into cinematic content?
              </p>
              <p className="text-slate-500 text-xs sm:text-sm">
                Let's discuss your next project.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#contact"
                className="bg-sky-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-sky-700 transition whitespace-nowrap"
              >
                Start a Project
              </a>

              <button
                onClick={() => setDismissed(true)}
                aria-label="Dismiss"
                className="text-slate-400 hover:text-slate-600 transition text-xl leading-none"
              >
                ×
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}