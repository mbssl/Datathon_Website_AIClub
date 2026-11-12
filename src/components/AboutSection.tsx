"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Target,
  CheckCircle,
  Sparkles,
  Users,
  Award,
  Zap,
  Globe,
  Presentation,
  ShieldCheck,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="hakkinda" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 z-10">
      {/* Background radial accent */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/70 border border-sky-400/25 text-sky-300 text-xs font-semibold uppercase tracking-widest font-mono mb-4"
          >
            <Brain className="w-3.5 h-3.5 text-cyan-400" />
            <span>Yarışma Vizyonu & Detaylar</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Datathon &apos;26 Hakkında
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Yapay zekanın ve veri analitiğinin sınırlarını zorlayan, Türkiye genelindeki
            genç yetenekleri gerçek dünya problemleriyle buluşturan öncü maraton.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {/* Card 1: Datathon Nedir? (col-span-12 lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-7 rounded-3xl p-8 sm:p-10 bg-slate-900/50 border border-sky-400/20 backdrop-blur-xl relative overflow-hidden group hover:border-sky-400/40 hover:shadow-[0_10px_40px_rgba(56,189,248,0.12)] transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top gradient glow inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/20 transition-all duration-500" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-6 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                <Brain className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                Datathon Nedir?
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Datathon; katılımcıların belirli bir süre boyunca gerçek veri setleri
                üzerinde çalışarak analitik ve yaratıcı çözümler ürettiği, veri odaklı
                bir yarışmadır. Bu süreçte katılımcılar; veri analizi, makine öğrenmesi,
                veri görselleştirme ve problem çözme becerilerini kullanarak en iyi çözümü
                geliştirmeye çalışır. Sadece teknik bilgi değil; ekip çalışmasını, zaman
                yönetimini ve sunum becerilerini de geliştirme fırsatı sunar.
              </p>
            </div>

            {/* Micro badges at the bottom of Card 1 */}
            <div className="mt-8 pt-6 border-t border-sky-400/10 flex flex-wrap gap-2 sm:gap-3">
              {[
                "Veri Analizi & Temizleme",
                "Makine Öğrenmesi (ML)",
                "Ekip Çalışması",
                "Gerçek Veri Setleri",
                "Jüri Sunumu",
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-blue-950/60 border border-sky-400/20 text-sky-300"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Amacımız (col-span-12 lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-12 lg:col-span-5 rounded-3xl p-8 sm:p-10 bg-slate-900/50 border border-sky-400/20 backdrop-blur-xl relative overflow-hidden group hover:border-sky-400/40 hover:shadow-[0_10px_40px_rgba(56,189,248,0.12)] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-52 h-52 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-sky-400/30 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_20px_rgba(0,245,212,0.25)]">
                <Target className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                Amacımız
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Türkiye genelinde yapay zeka ve veri bilimine ilgi duyan üniversite
                öğrencilerini bir araya getirerek yeteneklerini ortaya çıkarmaktır.
                Profesyonel dünyada karşılaşacağınız gerçek veri problemleri üzerinde
                çalışma ve sektör liderleriyle network kurma deneyimi hedeflenmektedir.
              </p>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-blue-950/40 border border-sky-400/15 flex items-center gap-4">
              <Zap className="w-8 h-8 text-cyan-400 shrink-0" />
              <div className="text-xs sm:text-sm text-slate-300">
                <strong className="text-white block font-semibold">
                  Sektörel Görünürlük
                </strong>
                En iyi modellerinizi lider yapay zeka şirketlerinin önünde sergileyin.
              </div>
            </div>
          </motion.div>

          {/* Card 3: Ayırt Edici Özellikler (col-span-12 lg:col-span-6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-12 lg:col-span-6 rounded-3xl p-8 sm:p-10 bg-slate-900/50 border border-sky-400/20 backdrop-blur-xl relative overflow-hidden group hover:border-sky-400/40 hover:shadow-[0_10px_40px_rgba(56,189,248,0.12)] transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-6 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
              <Sparkles className="w-6 h-6 text-cyan-300" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
              Ayırt Edici Özellikler
            </h3>

            <div className="space-y-4">
              {[
                {
                  icon: Globe,
                  text: "Sadece Ankara'da değil, Türkiye'deki tüm üniversite öğrencilerinin katılımına açıktır.",
                },
                {
                  icon: Users,
                  text: "Farklı bölümlerden veri bilimine ilgi duyan tüm öğrencilere hitap eder.",
                },
                {
                  icon: Presentation,
                  text: "Finalde jüri karşısında yapılan sunumlar ile kişisel marka ve sunum becerilerini geliştirme fırsatı sunar.",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-950/40 border border-sky-400/10 hover:border-sky-400/25 transition-colors"
                  >
                    <div className="p-2 rounded-xl bg-sky-500/10 text-sky-300 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300 leading-snug">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Card 4: Katılım Koşulları (col-span-12 lg:col-span-6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-12 lg:col-span-6 rounded-3xl p-8 sm:p-10 bg-slate-900/50 border border-sky-400/20 backdrop-blur-xl relative overflow-hidden group hover:border-sky-400/40 hover:shadow-[0_10px_40px_rgba(56,189,248,0.12)] transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-sky-400/30 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_20px_rgba(0,245,212,0.25)]">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
              Katılım Koşulları
            </h3>

            <div className="space-y-3.5">
              {[
                "Türkiye'deki herhangi bir üniversitede 25 yaşının altında lisans veya ön lisans öğrencisi olmak",
                "1 - 3 kişilik takımlar oluşturmak",
                "Tüm ekip üyelerinin eksiksiz kayıt olması",
                "Temel düzeyde veri bilimi ve veri analizi bilgisine sahip olmak",
              ].map((cond, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-950/40 border border-sky-400/10 hover:border-sky-400/25 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-300 leading-snug">
                    {cond}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* TBA Sub-sections: Prizes and Jury */}
        <div className="mt-12 sm:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Prizes TBA Card with Shimmer / Meteor border effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 rounded-3xl bg-gradient-to-b from-slate-900/70 to-slate-950/80 border border-sky-400/30 backdrop-blur-xl overflow-hidden group"
            >
              {/* Shimmer sweep effect */}
              <div className="absolute inset-0 animate-shimmer opacity-30 pointer-events-none" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-300">
                    <Award className="w-6 h-6" />
                  </div>

                  {/* Status Badge: TBA */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/10 border border-sky-400/30 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                    Açıklanacak (TBA)
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-white mb-2">Ödül Havuzu</h4>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Dereceye giren finalist takımları bekleyen büyük ödüller çok yakında
                  duyurulacaktır. Nakit ödüller, staj/iş imkanları ve sponsor özel hediyeleri
                  için takipte kalın!
                </p>

                <div className="pt-4 border-t border-sky-400/15 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Birinci • İkinci • Üçüncü</span>
                  <span className="text-cyan-400 font-semibold">Yakında Lansman</span>
                </div>
              </div>
            </motion.div>

            {/* Jury TBA Card with Shimmer / Meteor border effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative p-8 rounded-3xl bg-gradient-to-b from-slate-900/70 to-slate-950/80 border border-sky-400/30 backdrop-blur-xl overflow-hidden group"
            >
              {/* Shimmer sweep effect */}
              <div className="absolute inset-0 animate-shimmer opacity-30 pointer-events-none" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                    <Users className="w-6 h-6" />
                  </div>

                  {/* Status Badge: TBA */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 shadow-[0_0_15px_rgba(0,245,212,0.2)]">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    Açıklanacak (TBA)
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-white mb-2">Jüri Üyelerimiz</h4>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Sektör profesyonelleri ve akademisyenlerden oluşan uzman jüri kadromuz
                  yakında açıklanacaktır. Projeleriniz alanında öncü veri bilimciler tarafından
                  titizlikle değerlendirilecektir.
                </p>

                <div className="pt-4 border-t border-sky-400/15 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Akademi & Sektör Liderleri</span>
                  <span className="text-sky-400 font-semibold">Yakında Duyuru</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

