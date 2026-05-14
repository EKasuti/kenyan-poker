import React from 'react'
import { SectionHeading } from './ui/SectionHeading'
import { motion } from 'framer-motion'
const steps = [
  { num: '01', title: 'Gather', desc: 'Seat 2 to 5 players around the table.' },
  { num: '02', title: 'Deal', desc: 'The dealer hands 3 or 4 cards to each player.' },
  { num: '03', title: 'The Pile', desc: 'Place the remaining deck face down to form the draw pile.' },
  { num: '04', title: 'The Start', desc: 'Flip the top card. If invalid, return it, shuffle, and repeat.' },
]
const invalidStarters = ['2', '3', 'Question', 'Kickback', 'Jump', 'Joker', 'Ace']
export function Setup() {
  return (
    <section className="py-16 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="The Setup" eyebrow="Chapter I · Preparation" align="center" sectionNumber="§1" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-[#1a1410]/60 via-[#0f0a08]/70 to-[#1a1410]/60 rounded-xl p-6 border border-kp-gold/25 shadow-[inset_0_2px_16px_rgba(201,162,74,0.04)]"
            >
              <div className="absolute top-2 right-2 font-display text-5xl text-kp-gold/10 leading-none select-none">
                {step.num}
              </div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-display text-3xl text-kp-gold/60 font-bold leading-none">{step.num}</span>
                  <div className="h-[1px] flex-1 bg-kp-gold/20" />
                </div>
                <h3 className="text-lg text-kp-champagne font-display font-semibold mb-2">{step.title}</h3>
                <p className="text-kp-champagne/80 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-[#1a0f12]/70 via-[#160a0c]/80 to-[#1a0f12]/70 rounded-xl p-6 border-l-4 border-kp-burgundy/70 shadow-[inset_0_2px_20px_rgba(107,18,40,0.06)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-kp-burgundy text-2xl">⚠</span>
              <span className="text-kp-gold/90 text-[10px] uppercase tracking-[0.3em] font-semibold">Rule · A Valid Starter</span>
            </div>
            <p className="text-kp-champagne leading-relaxed mb-4 font-display">
              The discard pile may{' '}
              <strong className="text-kp-gold font-semibold">not begin</strong>{' '}
              with any of the following. If one is drawn, return it, shuffle, and try again.
            </p>
            <div className="flex flex-wrap gap-2">
              {invalidStarters.map((card) => (
                <span key={card} className="px-3 py-1 rounded-md bg-kp-burgundy/15 border border-kp-burgundy/40 text-kp-champagne text-xs uppercase tracking-widest font-display">
                  {card}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-[#1a1410]/70 via-[#120e08]/80 to-[#1a1410]/70 rounded-xl p-6 border-l-4 border-kp-gold/70 shadow-[inset_0_2px_20px_rgba(201,162,74,0.06)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-kp-gold text-2xl">✦</span>
              <span className="text-kp-gold/90 text-[10px] uppercase tracking-[0.3em] font-semibold">Rule · The Large Table</span>
            </div>
            <p className="text-kp-champagne leading-relaxed font-display">
              When more than{' '}
              <strong className="text-kp-gold font-semibold">five players</strong>{' '}
              sit at the table, a hard cap of{' '}
              <strong className="text-kp-gold font-semibold">10 cards per hand</strong>{' '}
              applies. Any player whose hand swells beyond ten must{' '}
              <strong className="text-kp-gold font-semibold">quit the game</strong>.
              A gentleman knows when to fold.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
