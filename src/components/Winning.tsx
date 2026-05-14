import React from 'react'
import { motion } from 'framer-motion'
const rules = [
  { label: 'The Declaration', body: 'On the turn before you intend to win, you must announce "Niko Kadi." Without it, no victory may be claimed.' },
  { label: 'The One Move', body: 'Victory must be played in a single move — all Answer Cards, or Question Cards each followed by their matching Answer Cards.' },
  { label: 'The Cardless', body: 'You cannot win while any other player is cardless. The hand must finish with rivals still holding.' },
]
export function Winning() {
  return (
    <section className="py-16 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative py-16 md:py-20 px-6 md:px-12 border-y-2 border-kp-gold/30 bg-gradient-to-r from-transparent via-kp-burgundy/10 to-transparent"
        >
          {/* Large §4 watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <span className="font-display text-[14rem] md:text-[18rem] font-bold text-kp-gold/5 leading-none select-none">§4</span>
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-kp-gold/40 text-2xl bg-kp-black px-4">♦</div>

          <div className="relative text-center mb-8">
            <span className="text-kp-gold/60 text-[10px] uppercase tracking-[0.3em] font-semibold block mb-2">Chapter IV · The Final Word</span>
            <h2 className="font-display text-5xl md:text-7xl text-gold-foil font-bold mt-3 mb-4">"Niko Kadi"</h2>
            <p className="text-kp-champagne/50 italic font-display text-sm md:text-base tracking-wide">/ NEE-koh KAH-dee /</p>
            <div className="mt-4 h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-kp-gold/50 to-transparent" />
            <p className="text-base md:text-lg text-kp-champagne/80 font-light mt-5 max-w-2xl mx-auto italic font-display leading-relaxed">
              The phrase that earns a win. Spoken one turn early — never late — and only when the hand is ready to fall.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-4xl mx-auto mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-kp-gold/40" />
              <span className="text-kp-gold/60 text-[10px] uppercase tracking-[0.3em] font-semibold">From the Swahili</span>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-kp-gold/40" />
            </div>

            <div className="relative bg-gradient-to-br from-[#1a1410]/70 via-[#0f0a08]/80 to-[#1a1410]/70 rounded-2xl p-6 md:p-8 border border-kp-gold/30 shadow-[inset_0_2px_20px_rgba(201,162,74,0.05)]">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1.2fr] gap-6 items-center">
                <div className="text-center md:text-left">
                  <p className="font-display text-3xl md:text-4xl text-gold-foil font-bold leading-none">Niko</p>
                  <p className="text-kp-champagne/40 italic text-xs mt-2 tracking-wide">/ NEE-koh /</p>
                  <p className="text-kp-champagne/80 text-sm mt-3 leading-relaxed">
                    <span className="text-kp-gold/70 text-[10px] uppercase tracking-[0.2em] block mb-1">verb</span>
                    I have · I am
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center text-kp-gold/40 text-xl"><span>+</span></div>
                <div className="md:hidden flex items-center justify-center text-kp-gold/40 text-xl">
                  <div className="h-[1px] flex-1 bg-kp-gold/20" /><span className="px-3">+</span><div className="h-[1px] flex-1 bg-kp-gold/20" />
                </div>
                <div className="text-center md:text-left">
                  <p className="font-display text-3xl md:text-4xl text-gold-foil font-bold leading-none">Kadi</p>
                  <p className="text-kp-champagne/40 italic text-xs mt-2 tracking-wide">/ KAH-dee /</p>
                  <p className="text-kp-champagne/80 text-sm mt-3 leading-relaxed">
                    <span className="text-kp-gold/70 text-[10px] uppercase tracking-[0.2em] block mb-1">noun</span>
                    a card · a hand
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center text-kp-gold/40 text-xl"><span>=</span></div>
                <div className="md:hidden flex items-center justify-center text-kp-gold/40 text-xl">
                  <div className="h-[1px] flex-1 bg-kp-gold/20" /><span className="px-3">=</span><div className="h-[1px] flex-1 bg-kp-gold/20" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-kp-champagne italic font-display text-xl md:text-2xl leading-snug">"I have one card."</p>
                  <div className="flex items-center gap-2 mt-3 justify-center md:justify-start">
                    <span className="text-kp-gold/60 text-[10px] uppercase tracking-[0.3em] font-semibold">Spirit</span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-kp-gold/30 text-kp-champagne/80 text-xs tracking-widest uppercase">
                      <span className="text-kp-gold">≈</span> Uno
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-kp-champagne/50 text-xs md:text-sm italic font-display text-center mt-6 max-w-2xl mx-auto leading-relaxed">
                The same warning shot. The same pulse-quickening declaration that one card stands between you and victory.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rules.map((rule, i) => (
              <motion.div
                key={rule.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative bg-gradient-to-br from-[#1a1410]/60 via-[#0f0a08]/70 to-[#1a1410]/60 rounded-xl p-5 border border-kp-gold/25 shadow-[inset_0_2px_16px_rgba(201,162,74,0.04)]"
              >
                <div className="absolute top-2 right-2 font-display text-4xl text-kp-gold/10 leading-none select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <span className="text-kp-gold/70 text-[10px] uppercase tracking-[0.3em] font-semibold block mb-3">
                  Rule {i + 1} · {rule.label}
                </span>
                <p className="text-kp-champagne/90 leading-relaxed text-sm md:text-base font-display">{rule.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-kp-gold/40 text-2xl bg-kp-black px-4">♣</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-[#1a1410]/70 via-[#0f0a08]/80 to-[#1a1410]/70 rounded-xl p-6 md:p-8 max-w-3xl mx-auto mt-10 border-l-4 border-kp-gold/70 shadow-[inset_0_2px_20px_rgba(201,162,74,0.06)]"
        >
          <span className="text-kp-gold/70 text-[10px] uppercase tracking-[0.3em] font-semibold block mb-3">The Winning Hand</span>
          <p className="text-kp-champagne/85 leading-relaxed font-display">
            Your closing move must consist entirely of{' '}
            <strong className="text-kp-gold font-medium">Answer Cards</strong>, or{' '}
            <strong className="text-kp-gold font-medium">Question Cards each paired with their matching Answer</strong>.
            No Jumps, no Kickbacks, no Penalties may end the game.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
