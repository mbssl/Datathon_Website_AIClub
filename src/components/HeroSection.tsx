"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Calendar, Trophy } from "lucide-react";
import FlipClock from "./FlipClock";
import { getAssetPath } from "@/lib/asset";

interface HeroSectionProps {
  onOpenRegisterModal: () => void;
}

export default function HeroSection({ onOpenRegisterModal }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen pt-28 pb-16 md:py-36 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
      {/* Decorative background grid beam */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-sky-500/10 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Apple-style Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-sky-400/25 backdrop-blur-xl shadow-[0_0_25px_rgba(56,189,248,0.25)] mb-8 hover:border-sky-400/50 transition-all cursor-default"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-200">
            1 - 15 ARALIK 2026 • TÜRKİYE GENELİ VERİ BİLİMİ MARATONU
          </span>
        </motion.div>

        {/* Hero Brand Visual: Event Logo with mix-blend-mode: screen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative w-full max-w-md sm:max-w-lg md:max-w-xl h-28 sm:h-36 md:h-44 mb-6 flex items-center justify-center"
        >
          {/* Subtle neon back-glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-cyan-400/25 to-sky-500/30 blur-2xl rounded-full pointer-events-none" />

          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={getAssetPath("/images/event-logo.jpg")}
              alt="Hacettepe AI Club Datathon Logo"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-contain mix-blend-screen select-none filter contrast-125 brightness-110 drop-shadow-[0_0_35px_rgba(56,189,248,0.5)]"
            />
          </div>
        </motion.div>

        {/* H1 Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.08] text-white max-w-4xl"
        >
          Veriyi{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 drop-shadow-[0_0_35px_rgba(56,189,248,0.35)]">
            Geleceğe
          </span>{" "}
          Dönüştür.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl sm:max-w-3xl leading-relaxed font-normal"
        >
          Gerçek veri setleri üzerinde analitik ve yaratıcı çözümler üreteceğin,
          2 hafta sürecek online görevlendirmeler ve büyük final heyecanına hazır
          mısın?
        </motion.p>

        {/* State-Driven Flip Clock Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="w-full mt-10 md:mt-12"
        >
          <FlipClock />
        </motion.div>

        {/* Primary CTA Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary Glow Button */}
          <button
            onClick={onOpenRegisterModal}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 via-sky-500 to-sky-400 shadow-[0_0_30px_rgba(56,189,248,0.5)] hover:shadow-[0_0_45px_rgba(56,189,248,0.75)] hover:scale-105 active:scale-95 transition-all duration-300 text-base md:text-lg group cursor-pointer"
          >
            <span>Hemen Kayıt Ol</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Secondary Glass Button */}
          <a
            href="#takvim"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-medium text-slate-200 bg-slate-900/70 hover:bg-slate-800/80 border border-sky-400/25 hover:border-sky-400/60 backdrop-blur-xl hover:text-white transition-all duration-300 text-base md:text-lg shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            <Calendar className="w-5 h-5 text-sky-400" />
            <span>Süreci İncele</span>
          </a>
        </motion.div>

        {/* Quick highlight tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 pt-8 border-t border-sky-400/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 w-full max-w-4xl text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-sky-400/20 flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Ödül & Prestij</p>
              <p className="text-sm font-semibold text-white">Büyük Ödül Havuzu</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-sky-400/20 flex items-center justify-center shrink-0">
              <Terminal className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Yarışma Platformu</p>
              <p className="text-sm font-semibold text-white">Kaggle & Final</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-sky-400/20 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Süre</p>
              <p className="text-sm font-semibold text-white">2 Hafta Maraton</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-sky-400/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Katılım</p>
              <p className="text-sm font-semibold text-white">1 - 3 Kişilik Takım</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

