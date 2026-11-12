"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={scrollToTop}
          type="button"
          aria-label="Sayfanın Başına Kaydır"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-blue-950/80 backdrop-blur-md border border-sky-400/40 text-sky-400 flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:bg-sky-400 hover:text-slate-950 transition-all duration-300 cursor-pointer active:scale-90"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

