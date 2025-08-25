import React from 'react';

interface HeroSectionProps {
  onCatalogClick: () => void;
}

export default function HeroSection({ onCatalogClick }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-[60vh] bg-neutral-900">
      {/* Background image from public with slight blur (place at public/images/hero-bg.png) */}
      <img
        src="/images/hero-bg.png"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover blur-sm"
      />
      {/* Dark overlays */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />

      {/* Headline and subtext */}
      <div className="relative z-10 flex items-center justify-center h-[60vh] px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            Eurodoor — качественные двери для вашего дома и офиса
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-white/90 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            Надёжность, стиль и долговечность. Современные решения из МДФ и металла
            с акцентом на безопасность и дизайн.
          </p>
        </div>
      </div>
    </section>
  );
}