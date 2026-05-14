import React from 'react'
import { SectionHeading } from './ui/SectionHeading'
import { motion } from 'framer-motion'
const tips = [
  'Hoard your Aces — they are your only defence against a Penalty chain, and your only voice to declare a suit.',
  'Never play a Question Card without holding its Answer. A Question alone is a self-inflicted penalty.',
  'Chain Jumps and Kickbacks aggressively when the table is dense — every skip is a turn closer to Kadi.',
  'Say Niko Kadi the moment you are one move from winning — and not a breath sooner. Premature calls warn your rivals.',
  'If a rival is cardless, no one can win this hand. Bide your time and force the table to refill.',
  'When you draw a Joker, hold it. Five cards is a punishment few hands recover from.',
]
export function ProTips() {
  return (
    <section className="py-16 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Strategy of the Table" eyebrow="Chapter VI · Pro Tips" align="center" sectionNumber="§6" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-[#1a1410]/60 via-[#0f0a08]/70 to-[#1a1410]/60 rounded-2xl p-8 md:p-10 border border-kp-gold/25 shadow-[inset_0_2px_20px_rgba(201,162,74,0.04)]"
        >
          <span className="absolute top-4 left-4 text-kp-gold/30 text-sm">❦</span>
          <span className="absolute top-4 right-4 text-kp-gold/30 text-sm">❦</span>
          <span className="absolute bottom-4 left-4 text-kp-gold/30 text-sm rotate-180">❦</span>
          <span className="absolute bottom-4 right-4 text-kp-gold/30 text-sm rotate-180">❦</span>

          <ul className="space-y-5 relative">
            {tips.map((tip, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4 items-start group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-kp-gold/40 bg-kp-gold/5 flex items-center justify-center">
                  <span className="text-kp-gold font-display text-sm font-bold leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-kp-champagne/85 leading-relaxed flex-1 font-display pt-1.5">{tip}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
