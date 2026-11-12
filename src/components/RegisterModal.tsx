"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Sparkles,
  Users,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import confetti from "canvas-confetti";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Burst celebratory confetti
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#38bdf8", "#00f5d4", "#1e3a8a", "#ffffff"],
      });
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Hacettepe AI Club//Datathon 2026//TR
BEGIN:VEVENT
UID:datathon26-hacettepe@hacettepeaiclub.com
DTSTAMP:20261112T200000Z
DTSTART:20261201T000000
DTEND:20261215T180000
SUMMARY:Hacettepe AI Club - Datathon '26
DESCRIPTION:Türkiye Geneli Veri Bilimi ve Yapay Zeka Maratonu. Online Aşama: 1-14 Aralık 2026 Kaggle. Final: 15 Aralık 2026 Beytepe Kampüsü Mehmet Akif Ersoy K Salonu.
LOCATION:Hacettepe Üniversitesi Beytepe Kampüsü, Mehmet Akif Ersoy Salonu, Ankara
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "datathon26-hacettepe.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#030712]/85 backdrop-blur-xl"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-xl rounded-3xl bg-slate-900/90 border border-sky-400/30 p-6 sm:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl z-10 my-8 overflow-hidden"
        >
          {/* Top ambient glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/15 rounded-full blur-2xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 border border-sky-400/20 text-slate-300 hover:text-white hover:border-sky-400/50 transition-colors cursor-pointer"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.3)]">
              <Sparkles className="w-6 h-6 text-cyan-300" />
            </div>
            <div>
              <span className="text-xs font-mono font-semibold uppercase text-sky-300 tracking-wider">
                Başvuru Rehberi
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Datathon &apos;26&apos;ya Kayıt Ol
              </h3>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Yarışma maratonumuz Kaggle platformu üzerinden yürütülmektedir.
            Kaydınızı tamamlamak için aşağıdaki adımları takip ediniz:
          </p>

          {/* Steps */}
          <div className="space-y-3.5 mb-6">
            <div className="p-3.5 rounded-2xl bg-slate-950/50 border border-sky-400/15 flex items-start gap-3.5">
              <div className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                1
              </div>
              <div className="text-xs sm:text-sm text-slate-300">
                <strong className="text-white block font-semibold mb-0.5">
                  Kaggle Hesabınızla Giriş Yapın
                </strong>
                Yarışma veri seti ve liderlik tablosu Kaggle üzerinde barındırılacaktır.
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/50 border border-sky-400/15 flex items-start gap-3.5">
              <div className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                2
              </div>
              <div className="text-xs sm:text-sm text-slate-300">
                <strong className="text-white block font-semibold mb-0.5">
                  1 - 3 Kişilik Takımınızı Oluşturun
                </strong>
                Tüm takım üyelerinin üniversite öğrencisi (ön lisans/lisans) ve 25 yaş
                altında olması gerekmektedir.
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/50 border border-sky-400/15 flex items-start gap-3.5">
              <div className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                3
              </div>
              <div className="text-xs sm:text-sm text-slate-300">
                <strong className="text-white block font-semibold mb-0.5">
                  1 Aralık&apos;ta Maraton Başlıyor!
                </strong>
                İlk hafta online ön eleme görevlendirmeleri, ikinci hafta Kaggle veri
                yarışması ile final heyecanı yaşanacak.
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a
              href="https://www.kaggle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-gradient-to-r from-blue-600 to-sky-400 text-white font-semibold text-sm sm:text-base shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Terminal className="w-4 h-4" />
              <span>Kaggle&apos;da Kaydı Başlat</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={handleDownloadCalendar}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-sky-400/25 text-slate-200 hover:text-white transition-all text-xs sm:text-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-sky-400" />
              <span>Takvime Ekle (.ics)</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

