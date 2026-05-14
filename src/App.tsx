import React from 'react';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Setup } from './components/Setup';
import { HowToPlay } from './components/HowToPlay';
import { SpecialCards } from './components/SpecialCards';
import { Winning } from './components/Winning';
import { ProTips } from './components/ProTips';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="relative min-h-screen w-full bg-kp-black text-kp-champagne-light selection:bg-kp-gold/30 selection:text-kp-champagne-light font-sans overflow-x-hidden">
      {/* Global Background Textures */}
      <div className="fixed inset-0 z-0 bg-silk pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-noise pointer-events-none opacity-40 mix-blend-overlay" />

      {/* Content */}
      <main className="relative z-10">
        <Hero />
        <Overview />
        <Setup />
        <HowToPlay />
        <SpecialCards />
        <Winning />
        <ProTips />
      </main>

      <Footer />
    </div>);

}