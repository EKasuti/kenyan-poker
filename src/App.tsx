import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Overview } from './components/Overview'
import { Setup } from './components/Setup'
import { HowToPlay } from './components/HowToPlay'
import { SpecialCards } from './components/SpecialCards'
import { Winning } from './components/Winning'
import { ProTips } from './components/ProTips'
import { Footer } from './components/Footer'
export function App() {
  return (
    <div className="relative min-h-screen w-full bg-kp-black text-kp-champagne-light selection:bg-kp-gold/30 selection:text-kp-champagne-light font-sans">
      {/* Global Background Textures */}
      <div className="fixed inset-0 z-0 bg-silk pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-noise pointer-events-none opacity-40 mix-blend-overlay" />

      {/* Booklet Table of Contents */}
      <Nav />

      {/* Main Booklet Content */}
      <div className="relative z-10">
        <Hero />

        <main className="relative max-w-5xl mx-auto">
          <div id="overview" className="scroll-mt-24">
            <Overview />
          </div>

          <SectionDivider number="§1" suit="♠" />

          <div id="setup" className="scroll-mt-24">
            <Setup />
          </div>

          <SectionDivider number="§2" suit="♥" />

          <div id="how-to-play" className="scroll-mt-24">
            <HowToPlay />
          </div>

          <SectionDivider number="§3" suit="♦" />

          <div id="special-cards" className="scroll-mt-24">
            <SpecialCards />
          </div>

          <SectionDivider number="§4" suit="♣" />

          <div id="winning" className="scroll-mt-24">
            <Winning />
          </div>

          <SectionDivider number="§5" suit="♠" />

          <div id="pro-tips" className="scroll-mt-24">
            <ProTips />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
function SectionDivider({ number, suit }: { number: string; suit: string }) {
  return (
    <div className="relative py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-kp-gold/40 to-kp-gold/20" />
          <div className="flex items-center gap-3">
            <span className="font-display text-2xl text-kp-gold/30">{number}</span>
            <span className="text-kp-gold/40 text-xl">{suit}</span>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-kp-gold/40 to-kp-gold/20" />
        </div>
      </div>
    </div>
  )
}
