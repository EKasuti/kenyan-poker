import React from 'react'
import { motion } from 'framer-motion'
export function Overview() {
  return (
    <section className="py-16 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Parchment-style content block */}
          <div className="relative bg-gradient-to-br from-[#1a1410]/60 via-[#0f0a08]/70 to-[#1a1410]/60 rounded-2xl p-8 md:p-12 border border-kp-gold/20 shadow-[inset_0_2px_20px_rgba(201,162,74,0.03)]">
            {/* Paper texture overlay */}
            <div
              className="absolute inset-0 rounded-2xl opacity-20 mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
              }}
            />

            {/* Decorative corner ornaments */}
            <span className="absolute top-3 left-3 text-kp-gold/30 text-sm">❦</span>
            <span className="absolute top-3 right-3 text-kp-gold/30 text-sm">❦</span>
            <span className="absolute bottom-3 left-3 text-kp-gold/30 text-sm rotate-180">❦</span>
            <span className="absolute bottom-3 right-3 text-kp-gold/30 text-sm rotate-180">❦</span>

            <div className="relative">
              {/* Large decorative drop cap */}
              <span className="float-left font-display text-7xl md:text-8xl leading-none text-gold-foil mr-3 mt-1">
                K
              </span>
              <p className="font-display text-xl md:text-2xl text-kp-champagne leading-relaxed font-light">
                adi is a fast-paced Kenyan card game for{' '}
                <span className="text-kp-gold font-medium">2 to 5 players</span>,
                played with a standard 54-card deck. The objective is sharp and
                singular: be the first to play{' '}
                <span className="text-kp-gold font-medium">all your winning cards in one move</span>{' '}
                — and not before you have said the magic words.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
