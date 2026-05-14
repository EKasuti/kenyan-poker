import React from 'react';
export function Footer() {
  return (
    <footer className="py-12 px-6 relative z-10 border-t border-kp-gold/10 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-3 mb-6 text-kp-gold/30 text-sm">
          <span>♠</span>
          <span>♥</span>
          <span>♦</span>
          <span>♣</span>
        </div>
        <p className="text-kp-champagne/40 text-sm tracking-widest uppercase font-semibold mb-2">
          Kadi
        </p>
        <p className="text-kp-champagne/30 text-xs italic font-display mb-6">
          A Kenyan Pastime &copy; {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-2 text-kp-champagne/50 text-xs tracking-[0.2em] uppercase">
          <span>Made with</span>
          <span className="text-kp-red text-sm animate-pulse">♥</span>
          <span>by</span>
          <span className="font-display text-gold-foil font-bold text-base tracking-tight normal-case">
            BigK
          </span>
        </div>
      </div>
    </footer>);

}