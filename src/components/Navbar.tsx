"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenRegisterModal?: () => void;
}

export default function Navbar({ onOpenRegisterModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Hakkında", href: "#hakkinda" },
    { label: "Takvim", href: "#takvim" },
    { label: "Sponsor", href: "#sponsorlar" },
    { label: "Konum", href: "#konum" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 px-6 md:px-12 flex items-center justify-between border-b ${
          isScrolled
            ? "backdrop-blur-xl bg-[#030712]/80 border-sky-400/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "backdrop-blur-xl bg-[#030712]/70 border-sky-400/15"
        }`}
      >
        {/* Left: Community Logo */}
        <button
          onClick={scrollToTop}
          type="button"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1 text-left"
          aria-label="Hacettepe Üniversitesi Yapay Zeka Topluluğu Ana Sayfa"
        >
          <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/community-logo.png"
              alt="Hacettepe Üniversitesi Yapay Zeka Topluluğu Logo"
              fill
              priority
              sizes="64px"
              className="object-contain brightness-0 invert drop-shadow-[0_0_12px_rgba(56,189,248,0.45)] transition-all duration-300 group-hover:drop-shadow-[0_0_18px_rgba(0,245,212,0.65)]"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-medium tracking-wider uppercase text-slate-300 group-hover:text-sky-300 transition-colors">
              Hacettepe Üniversitesi
            </span>
            <span className="text-sm md:text-base font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-sky-200 group-hover:to-sky-400 transition-all">
              Yapay Zeka Topluluğu
            </span>
          </div>
        </button>

        {/* Center: Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-slate-900/50 border border-sky-400/10 backdrop-blur-md"
          aria-label="Ana Gezinti"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-all duration-200 rounded-full hover:bg-sky-500/10 hover:shadow-[0_0_15px_rgba(56,189,248,0.15)] relative group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
            </a>
          ))}
        </nav>

        {/* Right: CTA & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenRegisterModal}
            type="button"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-sky-500 to-sky-400 text-white font-semibold px-6 py-2.5 rounded-full hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer text-sm"
          >
            <span>Kayıt Ol</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900/80 border border-sky-400/20 text-slate-200 hover:text-white hover:border-sky-400/50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-sky-400" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Glass Backdrop) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 top-20 z-40 bg-[#030712]/95 backdrop-blur-2xl md:hidden flex flex-col justify-between p-6 border-b border-sky-400/20"
          >
            <div className="flex flex-col gap-3 pt-4">
              <span className="text-xs uppercase tracking-widest text-sky-400/70 font-mono font-semibold px-4">
                Datathon &apos;26 Gezinti
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 text-lg font-medium text-slate-200 hover:text-white rounded-2xl hover:bg-slate-800/60 border border-transparent hover:border-sky-400/20 transition-all"
                >
                  <span>{link.label}</span>
                  <span className="text-sky-400 text-xs font-mono">→</span>
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 pb-8">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-sky-400/15">
                <div className="flex items-center gap-2 text-sky-300 text-xs font-medium mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>1 - 15 Aralık 2026</span>
                </div>
                <p className="text-xs text-slate-400">
                  Türkiye geneli veri bilimi maratonu Kaggle & Beytepe Kampüsü
                </p>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenRegisterModal) onOpenRegisterModal();
                }}
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-sky-400 text-white font-semibold py-3.5 rounded-full shadow-[0_0_25px_rgba(56,189,248,0.4)] text-base"
              >
                <span>Kayıt Ol (Kaggle)</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

