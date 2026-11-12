"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  Globe,
  ExternalLink,
  Calendar,
  Building,
  Car,
  Bus,
  Sparkles,
} from "lucide-react";
import { APIProvider, Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

const LAT = 39.8667;
const LNG = 32.7339;

// Custom Dark-Blue / Midnight Navy JSON Map Style
const darkMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#030712" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#030712" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#94a3b8" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#38bdf8" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#64748b" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#0b192c" }],
  },
  {
    featureType: "poi.school",
    elementType: "geometry",
    stylers: [{ color: "#0d233a" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#1e293b" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#0f172a" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#1e3a8a" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#172554" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#111827" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#0a1128" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#38bdf8" }],
  },
];

export default function VenueMapSection() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}&destination_place_id=Hacettepe+Üniversitesi+Mehmet+Akif+Ersoy+Salonu`;

  return (
    <section id="konum" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 z-10">
      {/* Background radial glow */}
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

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
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Fiziksel & Online Etaplar</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Final Konumu ve Ulaşım
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            2 haftalık online Kaggle maratonunun ardından, finalist takımlar Hacettepe
            Üniversitesi Beytepe Kampüsü&apos;nde bir araya geliyor.
          </motion.p>
        </div>

        {/* 2 Stage Cards (Online & Final) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {/* Online Stage Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-slate-900/60 border border-sky-400/20 backdrop-blur-xl hover:border-sky-400/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-sky-400/30 flex items-center justify-center text-sky-400">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-950/60 border border-sky-400/20 text-sky-300">
                  Online Aşama
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Kaggle Platformu</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Yarışmanın ilk iki haftasında takımlar tüm görevlendirmeleri, veri
                hazırlıklarını ve model eğitimlerini Kaggle üzerinden online olarak
                gerçekleştirecektir.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-sky-400/10 flex items-center justify-between text-xs sm:text-sm font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-sky-300">
                <Calendar className="w-4 h-4 text-sky-400" />
                1 - 14 Aralık 2026
              </span>
              <span className="text-slate-400">Türkiye Geneli</span>
            </div>
          </motion.div>

          {/* Final Stage Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-slate-900/60 border border-sky-400/20 backdrop-blur-xl hover:border-sky-400/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                  <Building className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/60 border border-cyan-400/20 text-cyan-300">
                  Büyük Final
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Mehmet Akif Ersoy K Salonu
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Hacettepe Üniversitesi Beytepe Kampüsü, Mehmet Akif Ersoy K Salonu,
                Çankaya / Ankara. Finalist takımlar jüri karşısında canlı sunumlarını
                gerçekleştirecektir.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-sky-400/10 flex items-center justify-between text-xs sm:text-sm font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <Calendar className="w-4 h-4 text-cyan-400" />
                15 Aralık 2026
              </span>
              <span className="text-slate-400">Beytepe / Ankara</span>
            </div>
          </motion.div>
        </div>

        {/* Interactive Styled Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-sky-400/25 bg-[#030712] shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        >
          {/* Map Viewer */}
          <div className="relative w-full h-[420px] sm:h-[480px]">
            {apiKey ? (
              <APIProvider apiKey={apiKey}>
                <Map
                  defaultCenter={{ lat: LAT, lng: LNG }}
                  defaultZoom={16}
                  gestureHandling={"greedy"}
                  disableDefaultUI={false}
                  styles={darkMapStyle}
                  className="w-full h-full"
                >
                  <AdvancedMarker position={{ lat: LAT, lng: LNG }}>
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-10 h-10 rounded-full bg-cyan-400/30 animate-ping" />
                      <div className="relative w-7 h-7 rounded-full bg-sky-500 border-2 border-white flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.8)]">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </AdvancedMarker>
                </Map>
              </APIProvider>
            ) : (
              /* Custom Dark-Blue Map Frame with Google Maps Navigation Link */
              <div className="relative w-full h-full bg-[#030712] overflow-hidden flex items-center justify-center">
                {/* Embedded Dark Theme Vector/Satellite Map iframe centered on Beytepe Mehmet Akif Ersoy Salonu */}
                <iframe
                  title="Hacettepe Üniversitesi Beytepe Kampüsü Harita"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.298371308436!2d32.73171127653775!3d39.86670008953112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347c6e612cb77%3A0xb3ff76566c7f1a3b!2sHacettepe%20%C3%9Cniversitesi%20Mehmet%20Akif%20Ersoy%20Salonu!5e0!3m2!1str!2str!4v1714500000000!5m2!1str!2str`}
                  className="w-full h-full border-0 filter invert-[0.9] hue-rotate-[185deg] contrast-[1.15] brightness-[0.8] opacity-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Custom Pulsing Pin Overlay Badge */}
                <div className="absolute top-6 left-6 z-20 p-4 rounded-2xl bg-slate-950/90 border border-sky-400/30 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] max-w-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="relative flex items-center justify-center">
                      <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping absolute" />
                      <span className="w-3 h-3 rounded-full bg-cyan-400 relative" />
                    </div>
                    <span className="text-xs font-mono font-bold text-sky-300 uppercase">
                      Büyük Final Salonu
                    </span>
                  </div>
                  <h4 className="text-white font-bold text-sm sm:text-base mb-1">
                    Hacettepe Üniversitesi Beytepe Kampüsü
                  </h4>
                  <p className="text-xs text-slate-300">
                    Mehmet Akif Ersoy K Salonu, Çankaya / Ankara
                  </p>
                  <p className="text-[11px] font-mono text-slate-400 mt-2">
                    Koordinat: {LAT}° K, {LNG}° D
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Action Bar at Bottom of Map */}
          <div className="p-6 bg-slate-950/90 border-t border-sky-400/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <Car className="w-4 h-4 text-sky-400" />
                Ücretsiz Kampüs Otoparkı
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <Bus className="w-4 h-4 text-cyan-400" />
                Beytepe Metro & Ring Ulaşımı
              </span>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-sky-400 text-white font-semibold text-sm shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:scale-105 active:scale-95 transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>Google Haritalar&apos;da Yol Tarifi Al</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

