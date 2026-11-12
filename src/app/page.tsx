"use client";

import React, { useState } from "react";
import BreathingBackground from "@/components/BreathingBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import SponsorsSection from "@/components/SponsorsSection";
import VenueMapSection from "@/components/VenueMapSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import RegisterModal from "@/components/RegisterModal";

export default function Home() {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030712] text-white selection:bg-sky-500/30 selection:text-sky-300">
      {/* Fixed Gemini Breathing Gradient Background */}
      <BreathingBackground />

      {/* Floating Glass Navbar */}
      <Navbar onOpenRegisterModal={() => setRegisterModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero Section with 3D Flip Clock */}
        <HeroSection onOpenRegisterModal={() => setRegisterModalOpen(true)} />

        {/* 2. About Section with Apple Bento Grid & TBA Cards */}
        <AboutSection />

        {/* 3. Timeline Section with Glowing Interactive Journey */}
        <TimelineSection />

        {/* 4. Sponsors Section with Frosted Glass Container & Skeletons */}
        <SponsorsSection />

        {/* 5. Venue & Map Section with Custom Dark Style & Directions */}
        <VenueMapSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll to Top Button */}
      <ScrollToTopButton />

      {/* Register & Info Modal */}
      <RegisterModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
      />
    </div>
  );
}
