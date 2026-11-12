"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Handshake,
  Lock,
  Mail,
  Copy,
  Check,
  Sparkles,
  ArrowUpRight,
  Shield,
  Building2,
} from "lucide-react";

export default function SponsorsSection() {
  const [copied, setCopied] = useState(false);
  const email = "contact@hacettepeaiclub.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="sponsorlar" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 z-10">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[480px] h-[480px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        {/* Section Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/70 border border-sky-400/25 text-sky-300 text-xs font-semibold uppercase tracking-widest font-mono mb-4"
        >
          <Handshake className="w-3.5 h-3.5 text-cyan-400" />
          <span>İş Birlikleri & Destekçiler</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Sponsorlarımız
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          Türkiye&apos;nin dört bir yanından veri bilimi yeteneklerini destekleyen vizyoner
          şirketler ve kurumlar.
        </motion.p>

        {/* Big Frosted Glass Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-slate-900/50 border border-sky-400/25 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          {/* 3x2 Locked / Blurred Skeleton Placeholders Background */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 opacity-35 filter blur-[1px]">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-24 sm:h-28 rounded-2xl bg-slate-800/40 border border-sky-400/10 flex flex-col items-center justify-center p-4 relative overflow-hidden"
              >
                <div className="absolute inset-0 animate-shimmer opacity-20 pointer-events-none" />
                <Building2 className="w-8 h-8 text-slate-500 mb-1" />
                <div className="w-16 h-2 bg-slate-700/50 rounded-full" />
              </div>
            ))}
          </div>

          {/* Frosted Glass Overlay with TBA Announcement & Glowing Badge */}
          <div className="absolute inset-0 bg-[#030712]/75 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-10">
            <div className="w-16 h-16 rounded-2xl bg-blue-950/90 border border-sky-400/40 flex items-center justify-center text-sky-400 mb-6 shadow-[0_0_30px_rgba(56,189,248,0.35)] animate-pulse-glow">
              <Lock className="w-7 h-7 text-cyan-300" />
            </div>

            {/* Glowing Sky Blue Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/15 border border-sky-400/50 text-sky-200 text-xs sm:text-sm font-semibold tracking-wide uppercase font-mono shadow-[0_0_25px_rgba(56,189,248,0.3)] mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Sponsorlarımız Çok Yakında Açıklanacaktır</span>
            </div>

            <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
              Resmi ana sponsorlarımız ve destekçi iş ortaklarımız görüşmeler tamamlandıkça
              burada duyurulacaktır.
            </p>

            {/* Corporate Partnership Action: Sponsor Olun */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`mailto:${email}?subject=Datathon%20%2726%20Sponsorluk%20Talebi`}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-sky-400 text-white font-semibold shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] hover:scale-105 active:scale-95 transition-all text-sm sm:text-base"
              >
                <Mail className="w-4 h-4" />
                <span>Sponsor Olun (E-posta Gönder)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-sky-400/25 hover:border-sky-400/50 text-slate-300 hover:text-white transition-all text-sm font-mono cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Kopyalandı!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-sky-400" />
                    <span>{email}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

