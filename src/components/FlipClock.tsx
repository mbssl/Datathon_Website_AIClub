"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Sparkles, CheckCircle2, ChevronDown } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export type CountdownState = "STATE_1_BEFORE_START" | "STATE_2_DURING_COMPETITION" | "STATE_3_EVENT_LIVE_OR_ENDED";

interface FlipUnitProps {
  digit: number;
  label: string;
}

// 3D Flip Card Component for a single 2-digit unit (e.g., Days or Seconds)
function FlipUnit({ digit, label }: FlipUnitProps) {
  const formattedDigit = String(digit).padStart(2, "0");
  const prevDigitRef = useRef(formattedDigit);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (prevDigitRef.current !== formattedDigit) {
      setFlip(true);
      const timer = setTimeout(() => {
        setFlip(false);
        prevDigitRef.current = formattedDigit;
      }, 550);
      return () => clearTimeout(timer);
    }
  }, [formattedDigit]);

  return (
    <div className="flex flex-col items-center">
      {/* 3D Flip Card Container */}
      <div
        className="relative w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 rounded-xl sm:rounded-2xl bg-[#091122] border border-sky-400/25 shadow-[0_8px_30px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        {/* Subtle glass reflection highlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/40 pointer-events-none z-20" />

        {/* Center horizontal fold line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-[#030712] z-30 shadow-[0_1px_2px_rgba(56,189,248,0.3)]" />

        {/* Side notch pegs (retro-modern mechanical look) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-3 bg-[#030712] rounded-r-sm z-30" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-3 bg-[#030712] rounded-l-sm z-30" />

        {/* Background static card showing current number */}
        <div className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-mono)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white select-none">
          {formattedDigit}
        </div>

        {/* Animated 3D Flip Top-to-Bottom Leaf */}
        <AnimatePresence mode="popLayout">
          {flip && (
            <motion.div
              key={formattedDigit}
              initial={{ rotateX: 0, opacity: 0.95 }}
              animate={{ rotateX: -180, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.37, 0, 0.63, 1] }}
              style={{
                transformOrigin: "bottom",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
              className="absolute top-0 left-0 right-0 h-1/2 bg-[#0d182e] border-b border-sky-400/30 overflow-hidden flex items-end justify-center z-25"
            >
              <div
                className="font-[family-name:var(--font-mono)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sky-200 select-none"
                style={{ transform: "translateY(50%)" }}
              >
                {formattedDigit}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Corner Neon Ambient Glow */}
        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-sky-500/10 rounded-full blur-xl pointer-events-none" />
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-cyan-400/10 rounded-full blur-xl pointer-events-none" />
      </div>

      {/* Label under card */}
      <span className="mt-2 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-widest text-slate-400 font-mono">
        {label}
      </span>
    </div>
  );
}

export default function FlipClock() {
  const [overrideState, setOverrideState] = useState<CountdownState | "AUTO">("AUTO");
  const [mounted, setMounted] = useState(false);

  // Default target date: 2026-12-01T00:00:00+03:00
  const START_DATE = new Date("2026-12-01T00:00:00+03:00").getTime();
  const FINAL_DATE = new Date("2026-12-15T09:00:00+03:00").getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [activeState, setActiveState] = useState<CountdownState>("STATE_1_BEFORE_START");

  useEffect(() => {
    setMounted(true);
    const calculateTime = () => {
      const now = Date.now();
      let state: CountdownState = "STATE_1_BEFORE_START";

      if (overrideState !== "AUTO") {
        state = overrideState;
      } else {
        if (now < START_DATE) {
          state = "STATE_1_BEFORE_START";
        } else if (now >= START_DATE && now < FINAL_DATE) {
          state = "STATE_2_DURING_COMPETITION";
        } else {
          state = "STATE_3_EVENT_LIVE_OR_ENDED";
        }
      }

      setActiveState(state);

      let targetTime = START_DATE;
      if (state === "STATE_2_DURING_COMPETITION") {
        targetTime = FINAL_DATE;
      }

      let diff = targetTime - now;

      // Handle override simulated preview times
      if (overrideState === "STATE_1_BEFORE_START" && diff <= 0) {
        diff = 18 * 24 * 3600 * 1000 + 4 * 3600 * 1000 + 12 * 60 * 1000 + 35 * 1000;
      } else if (overrideState === "STATE_2_DURING_COMPETITION") {
        diff = 6 * 24 * 3600 * 1000 + 14 * 3600 * 1000 + 22 * 60 * 1000 + 10 * 1000;
      }

      if (state === "STATE_3_EVENT_LIVE_OR_ENDED" || diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [overrideState, START_DATE, FINAL_DATE]);

  if (!mounted) {
    return (
      <div className="w-full max-w-2xl mx-auto h-40 flex items-center justify-center">
        <div className="animate-pulse flex gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-20 h-24 bg-slate-900/60 rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
      {/* State Badge with Apple/Gemini Glass Glow */}
      <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/70 border border-sky-400/30 backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.2)]">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
        </span>
        <span className="text-xs sm:text-sm font-semibold tracking-wide text-sky-200 uppercase font-mono">
          {activeState === "STATE_1_BEFORE_START" && "YARIŞMA BAŞLANGICINA KALAN SÜRE"}
          {activeState === "STATE_2_DURING_COMPETITION" &&
            "ONLINE GÖREVLENDİRMELER DEVAM EDİYOR • BÜYÜK FİNALE KALAN SÜRE"}
          {activeState === "STATE_3_EVENT_LIVE_OR_ENDED" && "DATATHON '26 BÜYÜK FİNAL GÜNÜ!"}
        </span>
      </div>

      {/* Countdown Cards or Live Status Announcement */}
      {activeState !== "STATE_3_EVENT_LIVE_OR_ENDED" ? (
        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 py-2 px-4 rounded-3xl bg-slate-950/40 border border-sky-400/15 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <FlipUnit digit={timeLeft.days} label="GÜN" />
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-sky-400/40 -mt-6 select-none">
            :
          </span>
          <FlipUnit digit={timeLeft.hours} label="SAAT" />
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-sky-400/40 -mt-6 select-none">
            :
          </span>
          <FlipUnit digit={timeLeft.minutes} label="DAKİKA" />
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-sky-400/40 -mt-6 select-none">
            :
          </span>
          <FlipUnit digit={timeLeft.seconds} label="SANİYE" />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 rounded-3xl bg-gradient-to-r from-blue-950/80 via-slate-900/90 to-blue-950/80 border border-cyan-400/40 shadow-[0_0_40px_rgba(0,245,212,0.25)] text-center max-w-xl"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-400/10 border border-cyan-400/40 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-cyan-300 animate-pulse" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Büyük Final Heyecanı Başladı!
          </h3>
          <p className="text-sm sm:text-base text-slate-300">
            Hacettepe Üniversitesi Beytepe Kampüsü Mehmet Akif Ersoy K Salonu&apos;nda
            gerçekleşen jüri sunumları ve ödül töreni sürüyor.
          </p>
        </motion.div>
      )}

      {/* Sub-note */}
      <p className="mt-4 text-xs sm:text-sm text-slate-400 font-medium tracking-wide text-center">
        {activeState === "STATE_1_BEFORE_START" && "Online aşama 1 Aralık 2026'da başlıyor."}
        {activeState === "STATE_2_DURING_COMPETITION" &&
          "Final: 15 Aralık 2026 • Mehmet Akif Ersoy K Salonu"}
        {activeState === "STATE_3_EVENT_LIVE_OR_ENDED" &&
          "Finalist takımlarımızın sunumlarını salondan veya online yayınlarımızdan takip edebilirsiniz."}
      </p>

      {/* State Simulation Switcher (Discreet Developer / Evaluator Tool) */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-400">
        <span className="font-mono text-slate-500">Zaman Durumu:</span>
        <button
          type="button"
          onClick={() => setOverrideState("AUTO")}
          className={`px-2.5 py-1 rounded-full border transition-all ${
            overrideState === "AUTO"
              ? "bg-sky-500/20 border-sky-400 text-sky-300 font-semibold"
              : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
          }`}
        >
          Otomatik (Canlı)
        </button>
        <button
          type="button"
          onClick={() => setOverrideState("STATE_1_BEFORE_START")}
          className={`px-2.5 py-1 rounded-full border transition-all ${
            overrideState === "STATE_1_BEFORE_START"
              ? "bg-sky-500/20 border-sky-400 text-sky-300 font-semibold"
              : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
          }`}
        >
          Aşama 1 (Başlangıç Öncesi)
        </button>
        <button
          type="button"
          onClick={() => setOverrideState("STATE_2_DURING_COMPETITION")}
          className={`px-2.5 py-1 rounded-full border transition-all ${
            overrideState === "STATE_2_DURING_COMPETITION"
              ? "bg-sky-500/20 border-sky-400 text-sky-300 font-semibold"
              : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
          }`}
        >
          Aşama 2 (Yarışma Sürecinde)
        </button>
        <button
          type="button"
          onClick={() => setOverrideState("STATE_3_EVENT_LIVE_OR_ENDED")}
          className={`px-2.5 py-1 rounded-full border transition-all ${
            overrideState === "STATE_3_EVENT_LIVE_OR_ENDED"
              ? "bg-sky-500/20 border-sky-400 text-sky-300 font-semibold"
              : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
          }`}
        >
          Aşama 3 (Büyük Final)
        </button>
      </div>
    </div>
  );
}

