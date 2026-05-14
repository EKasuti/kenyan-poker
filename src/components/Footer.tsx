import React from 'react'
export function Footer() {
  return (
    <footer className="py-16 px-6 relative z-10 border-t-2 border-kp-gold/20 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-4 mb-8 text-kp-gold/30 text-lg">
          <span>♠</span>
          <span className="text-kp-gold/20">·</span>
          <span>♥</span>
          <span className="text-kp-gold/20">·</span>
          <span>♦</span>
          <span className="text-kp-gold/20">·</span>
          <span>♣</span>
        </div>

        <p className="text-kp-champagne/50 text-sm tracking-[0.3em] uppercase font-semibold mb-2 font-display">Kadi</p>
        <p className="text-kp-champagne/40 text-xs italic font-display mb-2">also known as Kenyan Poker</p>
        <p className="text-kp-champagne/30 text-xs font-display mb-8">
          A Kenyan Pastime &copy; {new Date().getFullYear()}
        </p>

        <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-kp-gold/30 to-transparent mb-8" />

        <div className="flex items-center gap-2 text-kp-champagne/50 text-xs tracking-[0.2em] uppercase">
          <span>Made with</span>
          <span className="text-kp-red text-sm animate-pulse">♥</span>
          <span>by</span>
          <span className="font-display text-gold-foil font-bold text-base tracking-tight normal-case">BigK</span>
        </div>
      </div>
    </footer>
  )
}
