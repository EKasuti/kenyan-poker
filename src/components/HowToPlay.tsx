import { SectionHeading } from './ui/SectionHeading'
import { motion } from 'framer-motion'
const rules = [
  {
    title: 'Match or Draw',
    body: 'Play a card matching the top of the discard pile in suit or rank. If you cannot, draw one from the pile and pass.',
  },
  {
    title: 'The Penalty',
    body: 'Play an invalid card and you are penalised. Draw one card from the pile, and the turn passes to the next player.',
  },
  {
    title: 'The Lead',
    body: 'The previous winner — or the dealer in a new game — starts play and chooses the direction the round will flow.',
  },
  {
    title: 'The Refill',
    body: 'When the draw pile runs dry, take the discard pile (save the top card), shuffle, and place it face down as the new draw pile.',
  },
]
export function HowToPlay() {
  return (
    <section className="py-16 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="The Flow of Play" eyebrow="Chapter II · The Turn" align="center" sectionNumber="§2" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-[#1a1410]/60 via-[#0f0a08]/70 to-[#1a1410]/60 rounded-xl p-6 border border-kp-gold/25 shadow-[inset_0_2px_16px_rgba(201,162,74,0.04)]"
            >
              <div className="absolute top-3 right-3 font-display text-4xl text-kp-gold/10 leading-none select-none">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-kp-gold/60 text-sm">●</span>
                  <h3 className="text-xl text-kp-gold font-display font-semibold">{rule.title}</h3>
                </div>
                <p className="text-kp-champagne/85 leading-relaxed font-display">{rule.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
