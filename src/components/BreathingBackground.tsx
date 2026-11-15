"use client";

import React from "react";
import { getAssetPath } from "@/lib/asset";

export default function BreathingBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#030712]"
    >
      {/* Animated background image at 33% opacity */}
      <div
        className="absolute inset-0 animate-bg-drift opacity-[0.33]"
        style={{
          backgroundImage: `url(${getAssetPath("/images/datathon-background.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          willChange: "transform",
        }}
      />

      {/* Deep secondary ambient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#050b1d] to-[#030712] opacity-80" />

      {/* Sphere 1: Koyu Lacivert (#1E3A8A) */}
      <div
        className="absolute top-[-10%] left-[10%] w-[680px] h-[680px] rounded-full animate-gemini-1 opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(30, 58, 138, 0.85) 0%, rgba(30, 58, 138, 0.2) 65%, transparent 80%)",
          filter: "blur(140px)",
          willChange: "transform, opacity",
        }}
      />

      {/* Sphere 2: Açık Mavi (#0284C7) */}
      <div
        className="absolute top-[25%] right-[5%] w-[620px] h-[620px] rounded-full animate-gemini-2 opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(2, 132, 199, 0.75) 0%, rgba(2, 132, 199, 0.2) 60%, transparent 80%)",
          filter: "blur(140px)",
          willChange: "transform, opacity",
        }}
      />

      {/* Sphere 3: Buz Mavisi & Camgöbeği (#38BDF8 / #00F5D4) */}
      <div
        className="absolute bottom-[10%] left-[20%] w-[540px] h-[540px] rounded-full animate-gemini-3 opacity-45"
        style={{
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.7) 0%, rgba(0, 245, 212, 0.25) 55%, transparent 80%)",
          filter: "blur(140px)",
          willChange: "transform, opacity",
        }}
      />

      {/* Subtle Apple-style micro-dot grid pattern for depth */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#030712]/30 to-[#030712]/80 pointer-events-none" />
    </div>
  );
}

