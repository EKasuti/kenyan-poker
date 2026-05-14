import { SectionHeading } from './ui/SectionHeading'
import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'
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
          {/* Danger card — A Valid Starter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden bg-gradient-to-br from-[#2a0608]/90 via-[#1a0305]/95 to-[#2a0608]/90 rounded-xl p-6 border-2 border-red-700/80 ring-1 ring-red-600/40 shadow-[0_0_40px_-5px_rgba(220,38,38,0.55),inset_0_2px_30px_rgba(220,38,38,0.12)]"
          >
            {/* Hazard tape strip */}
            <div
              className="absolute top-0 left-0 right-0 h-1.5 opacity-90"
              style={{ backgroundImage: 'repeating-linear-gradient(45deg, #dc2626 0 10px, #1a0305 10px 20px)' }}
              aria-hidden="true"
            />
            {/* Pulsing red halo */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-xl"
              animate={{
                boxShadow: [
                  '0 0 20px 0 rgba(220,38,38,0.35), inset 0 0 30px rgba(220,38,38,0.08)',
                  '0 0 45px 4px rgba(220,38,38,0.65), inset 0 0 50px rgba(220,38,38,0.18)',
                  '0 0 20px 0 rgba(220,38,38,0.35), inset 0 0 30px rgba(220,38,38,0.08)',
                ],
              }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative flex items-center gap-3 mb-4 mt-1">
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  filter: [
                    'drop-shadow(0 0 4px rgba(220,38,38,0.6))',
                    'drop-shadow(0 0 14px rgba(248,113,113,0.95))',
                    'drop-shadow(0 0 4px rgba(220,38,38,0.6))',
                  ],
                }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="flex items-center justify-center"
              >
                <AlertTriangle className="w-9 h-9 text-red-500" strokeWidth={2.5} fill="rgba(220,38,38,0.18)" />
              </motion.div>
              <span className="text-red-400 text-[10px] uppercase tracking-[0.3em] font-bold">
                Rule · A Valid Starter
              </span>
            </div>
            <p className="relative text-kp-champagne leading-relaxed mb-4 font-display">
              The discard pile may{' '}
              <strong className="text-red-400 font-semibold uppercase tracking-wide">not begin</strong>{' '}
              with any of the following. If one is drawn, return it, shuffle, and try again.
            </p>
            <div className="relative flex flex-wrap gap-2">
              {invalidStarters.map((card) => (
                <span
                  key={card}
                  className="px-3 py-1 rounded-md bg-red-950/70 border border-red-600/70 text-red-300 text-xs uppercase tracking-widest font-display font-semibold shadow-[0_0_10px_-2px_rgba(220,38,38,0.5),inset_0_0_8px_rgba(220,38,38,0.15)]"
                >
                  {card}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Info card — The Large Table */}
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
