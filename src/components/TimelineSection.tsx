"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Globe,
  Award,
  ChevronRight,
  Sparkles,
  Terminal,
} from "lucide-react";

interface TimelinePhase {
  step: string;
  title: string;
  date: string;
  location: string;
  description: string;
  icon: React.ElementType;
  tag: string;
}

const phases: TimelinePhase[] = [
  {
    step: "Aşama 1",
    title: "Başvuru ve Takım Kayıt Süreci",
    date: "1 Aralık 2026'ya Kadar",
    location: "Online",
    description:
      "1-3 kişilik takımların oluşturulması ve tüm ekip üyelerinin başvurularını tamamlaması.",
    icon: Globe,
    tag: "Kayıt & Takım Kurma",
  },
  {
    step: "Aşama 2",
    title: "Yarışma Başlangıcı & Online Ön Eleme",
    date: "1 Aralık – 6 Aralık 2026",
    location: "Online Görevlendirme (1. Hafta)",
    description:
      "Yarışmanın resmi başlangıcı. Takımların ilk hafta online görevlendirmeleri ve ön eleme aşamasını gerçekleştirmesi.",
    icon: Terminal,
    tag: "1. Hafta Maraton",
  },
  {
    step: "Aşama 3",
    title: "Kaggle Yarışma Süreci & Finalistlerin Duyurulması",
    date: "7 Aralık – 13 Aralık 2026",
    location: "Kaggle Platformu (2. Hafta)",
    description:
      "Ön elemeyi geçen takımların Kaggle üzerinden gerçek veri setleriyle modelleri geliştirmesi ve 13 Aralık'ta finalist takımların ilan edilmesi.",
    icon: Sparkles,
    tag: "Kaggle & Sıralama",
  },
  {
    step: "Aşama 4",
    title: "Büyük Final ve Jüri Sunumları",
    date: "15 Aralık 2026",
    location: "Hacettepe Üniversitesi Mehmet Akif Ersoy K Salonu",
    description:
      "Finalist takımların Beytepe Kampüsü'nde uzman jüri karşısında sunumlarını gerçekleştirmesi ve kazananların ödüllendirilmesi.",
    icon: Award,
    tag: "Fiziksel Final & Ödüller",
  },
];

export default function TimelineSection() {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  return (
    <section id="takvim" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 z-10">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-sky-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/70 border border-sky-400/25 text-sky-300 text-xs font-semibold uppercase tracking-widest font-mono mb-4"
          >
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span>Süreç Haritası</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Yarışma Takvimi ve Süreç
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Datathon &apos;26, iki haftalık yoğun online maraton ve fiziksel final
            olmak üzere 4 ana aşamadan oluşur.
          </motion.p>
        </div>

        {/* Glowing Interactive Timeline Layout */}
        <div className="relative">
          {/* Vertical Glowing Center Line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-sky-400/20 via-sky-400/60 to-cyan-400/20 shadow-[0_0_12px_rgba(56,189,248,0.4)] pointer-events-none" />

          <div className="space-y-8 sm:space-y-12">
            {phases.map((phase, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = phase.icon;

              return (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  } gap-6 md:gap-12`}
                >
                  {/* Left / Right Card Container */}
                  <div
                    className={`w-full md:w-[calc(50%-2.5rem)] ${
                      isEven ? "md:text-left" : "md:text-left"
                    }`}
                  >
                    <div
                      onMouseEnter={() => setSelectedPhase(idx)}
                      className={`p-6 sm:p-8 rounded-3xl bg-slate-900/60 border backdrop-blur-xl transition-all duration-300 relative group overflow-hidden ${
                        selectedPhase === idx
                          ? "border-sky-400/50 shadow-[0_0_30px_rgba(56,189,248,0.2)] bg-slate-900/80"
                          : "border-sky-400/20 hover:border-sky-400/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.1)]"
                      }`}
                    >
                      {/* Ambient card corner glow */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-sky-500/20 transition-all" />

                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-blue-950/80 border border-sky-400/30 text-sky-300">
                          {phase.step}
                        </span>

                        <span className="text-xs font-mono text-cyan-300/80 px-2.5 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-400/20">
                          {phase.tag}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        {phase.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                        {phase.description}
                      </p>

                      {/* Meta Tags: Date and Location */}
                      <div className="pt-4 border-t border-sky-400/15 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/60 border border-sky-400/20 text-slate-200">
                          <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
                          <span className="font-medium font-mono">{phase.date}</span>
                        </div>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/60 border border-cyan-400/20 text-slate-200">
                          <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span className="font-medium">{phase.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Node / Pin */}
                  <div className="hidden md:flex relative z-20 items-center justify-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border ${
                        selectedPhase === idx
                          ? "bg-gradient-to-tr from-blue-600 to-sky-400 border-white text-white shadow-[0_0_25px_rgba(56,189,248,0.7)] scale-110"
                          : "bg-slate-950 border-sky-400/40 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Spacer for opposite column */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

