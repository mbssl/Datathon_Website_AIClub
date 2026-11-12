"use client";

import React from "react";
import Image from "next/image";
import { Mail, Globe, ArrowUp } from "lucide-react";

// Crisp SVG Brand Icons
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function XTwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/company/hacettepeaiclub",
      icon: LinkedInIcon,
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/hacettepeaiclub",
      icon: InstagramIcon,
    },
    {
      platform: "YouTube",
      url: "https://youtube.com/c/HacettepeAIClub",
      icon: YouTubeIcon,
    },
    {
      platform: "X (Twitter)",
      url: "https://x.com/hacettepeaiclub",
      icon: XTwitterIcon,
    },
  ];

  return (
    <footer className="border-t border-sky-400/15 bg-[#02050D] py-12 px-6 md:px-12 relative z-10 text-slate-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-sky-400/10">
          {/* Brand Col */}
          <div className="md:col-span-6 flex flex-col items-start">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3.5 group mb-4 text-left focus:outline-none cursor-pointer"
            >
              <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/community-logo.png"
                  alt="Hacettepe Üniversitesi Yapay Zeka Topluluğu"
                  fill
                  sizes="64px"
                  className="object-contain brightness-0 invert drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-slate-300 group-hover:text-sky-300 transition-colors font-medium">
                  Hacettepe Üniversitesi
                </span>
                <span className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">
                  Yapay Zeka Topluluğu
                </span>
              </div>
            </button>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md mb-6">
              Hacettepe Üniversitesi Yapay Zeka Topluluğu (Hacettepe AI Club),
              Türkiye genelinde yapay zeka ekosistemini büyütmek, öğrencilere analitik
              vizyon kazandırmak ve sektörel bağları güçlendirmek amacıyla faaliyet gösterir.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.platform}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Hacettepe AI Club ${item.platform}`}
                    className="w-10 h-10 rounded-xl bg-slate-900 border border-sky-400/20 text-slate-300 hover:text-white hover:border-sky-400/60 hover:bg-sky-500/10 flex items-center justify-center transition-all shadow-[0_0_10px_rgba(56,189,248,0.1)] hover:shadow-[0_0_18px_rgba(56,189,248,0.3)]"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white font-mono mb-4">
              Hızlı Bağlantılar
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#hakkinda"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-sky-400/60 font-mono">/</span> Hakkında
                </a>
              </li>
              <li>
                <a
                  href="#takvim"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-sky-400/60 font-mono">/</span> Takvim & Süreç
                </a>
              </li>
              <li>
                <a
                  href="#sponsorlar"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-sky-400/60 font-mono">/</span> Sponsorlarımız
                </a>
              </li>
              <li>
                <a
                  href="#konum"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-sky-400/60 font-mono">/</span> Konum & Ulaşım
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white font-mono mb-4">
              İletişim & Ağ
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:contact@hacettepeaiclub.com"
                className="flex items-center gap-2.5 text-slate-300 hover:text-sky-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>contact@hacettepeaiclub.com</span>
              </a>

              <a
                href="https://hacettepeaiclub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-sky-300 transition-colors"
              >
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>hacettepeaiclub.com</span>
              </a>

              <p className="text-xs text-slate-400 leading-relaxed pt-2">
                Hacettepe Üniversitesi Beytepe Kampüsü, Çankaya / Ankara
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            Hacettepe Üniversitesi Yapay Zeka Topluluğu (Hacettepe AI Club) © 2026.
            Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Veri Bilimi ve Yapay Zeka ile Geleceği Şekillendiriyoruz.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
