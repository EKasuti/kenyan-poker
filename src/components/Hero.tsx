import React from 'react'
import { motion } from 'framer-motion'
import pokerLogo from '../poker.svg'
export function Hero() {
  return (
    <header className="relative py-12 md:py-16 border-b border-kp-gold/10">
      {/* Decorative page corner fold */}
      <div className="absolute top-0 right-8 w-16 h-16 bg-gradient-to-br from-kp-gold/5 to-transparent border-l border-b border-kp-gold/20 transform rotate-45 translate-x-8 -translate-y-8" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Large watermark suit behind title */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-display text-[12rem] md:text-[16rem] font-bold text-kp-gold/5 leading-none select-none">
            ♠
          </span>
        </div>

        <motion.img
          src={pokerLogo}
          alt="Kadi"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 drop-shadow-[0_0_12px_rgba(201,162,74,0.3)]"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative text-kp-gold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-3 font-semibold"
        >
          The Official Rules
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative font-display text-5xl md:text-7xl font-bold text-gold-foil mb-3 leading-none tracking-tight"
        >
          Kadi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative text-kp-gold/70 italic font-display text-base md:text-lg"
        >
          also known as{' '}
          <span className="text-gold-foil font-semibold not-italic">Kenyan Poker</span>
        </motion.p>

        {/* Decorative rule lines */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative mt-6 flex items-center justify-center gap-3"
        >
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-kp-gold/40 to-kp-gold/60" />
          <span className="text-kp-gold/40 text-sm">♦</span>
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent via-kp-gold/40 to-kp-gold/60" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative text-kp-champagne/40 text-xs md:text-sm mt-6 font-display italic"
        >
          A fast-paced card game for 2–5 players
        </motion.p>
      </div>
    </header>
  )
}
