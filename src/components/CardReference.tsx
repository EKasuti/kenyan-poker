import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionHeading } from './ui/SectionHeading'
import { PlayingCard } from './ui/PlayingCard'
type Category = 'Answer' | 'Question' | 'Jump' | 'Kickback' | 'Penalty'
type RankEntry = {
  rank: string
  name: string
  category: Category
  tag: string
  headline: string
  description: React.ReactNode
  count: number
  suits: string[]
}
const ranks: RankEntry[] = [
  {
    rank: 'A', name: 'The Ace', category: 'Answer', tag: 'Ans',
    headline: 'Answer · Declare · Cancel',
    description: (<>The quietest power in the deck. Played freely on any matching suit or rank, the Ace lets you <strong className="text-kp-gold font-medium">declare the suit</strong> the next player must follow, or <strong className="text-kp-gold font-medium">cancel a pending penalty</strong> — restoring play to the suit from before the chain began.</>),
    count: 4, suits: ['♠', '♥', '♦', '♣'],
  },
  {
    rank: '2', name: 'The Deuce', category: 'Penalty', tag: '×2',
    headline: 'Penalty · Stackable',
    description: (<>Forces the next player to <strong className="text-kp-gold font-medium">draw two cards</strong>. Stackable — chain Twos together to compound the penalty, or counter with another Two of any suit to pass it along.</>),
    count: 4, suits: ['♠', '♥', '♦', '♣'],
  },
  {
    rank: '3', name: 'The Three', category: 'Penalty', tag: '×3',
    headline: 'Penalty · Stackable',
    description: (<>A sharper sibling. The next player <strong className="text-kp-gold font-medium">draws three</strong>. Stack with other Threes for ruinous chains, or escape with an Ace to cancel the whole assault.</>),
    count: 4, suits: ['♠', '♥', '♦', '♣'],
  },
  {
    rank: '4', name: 'The Four', category: 'Answer', tag: 'Ans',
    headline: 'Plays freely',
    description: 'A common Answer Card. Plays on a matching suit or rank. No special ability — just steady, dependable tempo.',
    count: 4, suits: ['♠', '♥', '♦', '♣'],
  },
  {
    rank: '5', name: 'The Five', category: 'Answer', tag: 'Ans',
    headline: 'Plays freely',
    description: 'A common Answer Card. Plays on a matching suit or rank, and pairs cleanly with a Question Card of the same suit or rank.',
    count: 4, suits: ['♠', '♥', '♦', '♣'],
  },
  {
    rank: '6', name: 'The Six', category: 'Answer', tag: 'Ans',
    headline: 'Plays freely',
    description: 'A common Answer Card. Plays on a matching suit or rank. Useful, unceremonious, never noisy.',
    count: 4, suits: ['♠', '♥', '♦', '♣'],
  },
  {
    rank: '7', name: 'The Seven', category: 'Answer', tag: 'Ans',
    headline: 'Plays freely',
    description: 'A common Answer Card. Plays on a matching suit or rank — a graceful companion to your Eights and Queens.',
    count: 4, suits: ['♠', '♥', '♦', '♣'],
  },
  {
    rank: '8', name: 'The Eight', category: 'Question', tag: 'Qn',
    headline: 'Demands an Answer',
    description: (<>A Question Card. Must be paired with an <strong className="text-kp-gold font-medium">Answer Card of matching suit or rank</strong> in the same turn. Unanswered, you draw a card and your turn ends.</>),
    count: 4, suits: ['♠', '♥', '♦', '♣'],
  },
  {
    rank: '9', name: 'The Nine', category: 'Answer', tag: 'Ans',
    headline: 'Plays freely',
    description: 'A common Answer Card. Plays on a matching suit or rank. Quiet, reliable, and often underestimated.',
    count: 4, suits: ['♠', '♥', '♦', '♣'],
  },
  {
    rank: '10', name: 'The Ten', category: 'Answer', tag: 'Ans',
    headline: 'Plays freely',
    description: 'A common Answer Card. Plays on a matching suit or rank. The highest of the plain ranks.',
    count: 4, suits: ['♠', '♥', '♦', '♣'],
  },
  {
    rank: 'J', name: 'The Jack', category: 'Jump', tag: 'Skip',
    headline: 'Skip the next player',
    description: (<>Jumps the next player entirely. The skipped player may <strong className="text-kp-gold font-medium">counter with their own Jack</strong> — and the skip cascades down the line, one player at a time.</>),
    count: 4, suits: ['♠', '♥', '♦', '♣'],
  },
  {
    rank: 'Q', name: 'The Queen', category: 'Question', tag: 'Qn',
    headline: 'Demands an Answer',
    description: (<>A Question Card. Like the Eight, she must be answered in the same turn with a <strong className="text-kp-gold font-medium">matching suit or rank</strong>. She sets the tempo — but never finishes the move alone.</>),
    count: 4, suits: ['♠', '♥', '♦', '♣'],
  },
  {
    rank: 'K', name: 'The King', category: 'Kickback', tag: 'Rev',
    headline: 'Reverse the table',
    description: (<>Flips the direction of play. Stack Kings to flip again — each crown reverses the table once. The player about to be acted upon may <strong className="text-kp-gold font-medium">counter with their own King</strong> to return the favour.</>),
    count: 4, suits: ['♠', '♥', '♦', '♣'],
  },
  {
    rank: '★', name: 'The Joker', category: 'Penalty', tag: '×5',
    headline: "The deck's heaviest blow",
    description: (<>The deck's most punishing card. Forces the next player to <strong className="text-kp-gold font-medium">draw five</strong>. Only an Ace can cancel it. After the strike, play resumes with the suit and rank from before the chain.</>),
    count: 2, suits: ['★', '★'],
  },
]
const categoryAccent: Record<Category, string> = {
  Answer: 'from-kp-gold/20 to-kp-gold/0',
  Question: 'from-[#a78bfa]/20 to-[#a78bfa]/0',
  Jump: 'from-[#7dd3fc]/20 to-[#7dd3fc]/0',
  Kickback: 'from-[#fb923c]/20 to-[#fb923c]/0',
  Penalty: 'from-kp-burgundy/30 to-kp-burgundy/0',
}
function HeroCardStack({ entry }: { entry: RankEntry }) {
  const isJoker = entry.rank === '★'
  const heroSuit = isJoker ? 'JOKER' : entry.suits[0]
  const backSuits = isJoker ? ['JOKER'] : entry.suits.slice(1)
  const offsets = [{ x: -36, y: -10, rot: -10 }, { x: 0, y: -18, rot: 0 }, { x: 36, y: -10, rot: 10 }]
  return (
    <div className="relative w-[12rem] h-[17rem] md:w-[14rem] md:h-[20rem] flex items-center justify-center">
      {backSuits.map((s, i) => (
        <motion.div
          key={`bg-${i}-${s}`}
          initial={{ opacity: 0, y: 10, rotate: 0 }}
          animate={{ opacity: isJoker ? 0.45 : 0.55, y: offsets[i]?.y ?? 0, x: offsets[i]?.x ?? 0, rotate: offsets[i]?.rot ?? 0 }}
          transition={{ duration: 0.6, delay: 0.05 * i, ease: 'easeOut' }}
          className="absolute"
          style={{ filter: 'blur(0.3px) brightness(0.78)' }}
        >
          <PlayingCard rank={entry.rank} suit={s} />
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        className="relative drop-shadow-[0_20px_30px_rgba(0,0,0,0.55)]"
      >
        <PlayingCard rank={entry.rank} suit={heroSuit} />
      </motion.div>
    </div>
  )
}
function RankChip({ entry, active, onClick }: { entry: RankEntry; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`
        relative flex flex-col items-center justify-center overflow-hidden
        w-12 h-16 md:w-14 md:h-18 rounded-md border transition-all duration-300
        font-display flex-shrink-0
        ${active ? 'bg-gradient-to-b from-kp-gold/20 to-kp-gold/5 border-kp-gold/70 text-kp-gold shadow-[0_4px_20px_rgba(201,162,74,0.18)]' : 'border-kp-gold/15 text-kp-champagne/55 hover:text-kp-champagne hover:border-kp-gold/40 bg-kp-black/30'}
      `}
    >
      <span className="text-base md:text-lg font-bold tracking-tight leading-none">{entry.rank}</span>
      <span className="text-[7px] uppercase tracking-[0.08em] mt-1 opacity-60 w-full text-center px-1 truncate">{entry.tag}</span>
      {active && (
        <motion.span
          layoutId="rank-chip-underline"
          className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-6 h-[2px] bg-kp-gold rounded-full"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}
    </button>
  )
}
export function CardReference() {
  const [activeIndex, setActiveIndex] = useState(0)
  const entry = ranks[activeIndex]
  return (
    <section className="py-16 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="The Rank Codex" eyebrow="Chapter IV · The Reference" align="center" sectionNumber="§4" />

        <p className="text-center text-kp-champagne/70 italic font-display text-base md:text-lg max-w-3xl mx-auto -mt-2 mb-10 leading-relaxed">
          Fifty-four cards. Fourteen ranks. Turn through the index below to study each one's role at the table — its powers, its perils, its place in the deck.
        </p>

        {/* Rank index chips */}
        <div
          className="relative mb-10 -mx-6 px-6 overflow-x-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`.codex-scroller::-webkit-scrollbar { display: none; }`}</style>
          <div className="codex-scroller flex items-end justify-start md:justify-center gap-1.5 md:gap-2 min-w-max pb-2">
            {ranks.map((r, i) => (
              <RankChip key={r.rank + r.name} entry={r} active={i === activeIndex} onClick={() => setActiveIndex(i)} />
            ))}
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-kp-gold/25 to-transparent" />
        </div>

        {/* Featured plate */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={entry.rank + entry.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative rounded-2xl border border-kp-gold/20 bg-gradient-to-br from-[#1a1410]/70 via-[#0f0a08]/75 to-[#1a1410]/70 shadow-[inset_0_2px_24px_rgba(201,162,74,0.05)] overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${categoryAccent[entry.category]} opacity-60 pointer-events-none`} />
              <span className="absolute top-3 left-4 text-kp-gold/40 text-xs">❦</span>
              <span className="absolute top-3 right-4 text-kp-gold/40 text-xs">❦</span>
              <span className="absolute bottom-3 left-4 text-kp-gold/40 text-xs rotate-180">❦</span>
              <span className="absolute bottom-3 right-4 text-kp-gold/40 text-xs rotate-180">❦</span>

              <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-14 p-8 md:p-12 items-center">
                <div className="flex justify-center md:justify-start">
                  <HeroCardStack entry={entry} />
                </div>
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <span className="text-kp-gold/60 text-[10px] uppercase tracking-[0.3em] font-semibold">{entry.category} Card</span>
                    <span className="h-[1px] w-8 bg-kp-gold/30" />
                    <span className="text-kp-champagne/50 text-[10px] uppercase tracking-[0.3em]">
                      {entry.count === 2 ? 'Two in the deck' : 'Four in the deck'}
                    </span>
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl text-gold-foil font-bold mb-1">{entry.name}</h3>
                  <p className="font-display italic text-kp-champagne/60 text-sm md:text-base mb-5">{entry.headline}</p>
                  <p className="text-kp-champagne/85 font-display leading-relaxed text-[15px] md:text-base max-w-xl mx-auto md:mx-0">
                    {entry.description}
                  </p>
                  <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
                    <span className="text-kp-gold/50 text-[10px] uppercase tracking-[0.3em]">
                      {entry.rank === '★' ? 'Both Jokers' : 'In every suit'}
                    </span>
                    <div className="flex items-center gap-2">
                      {entry.suits.map((s, i) => (
                        <span key={i} className={`text-base md:text-lg ${s === '♥' || s === '♦' ? 'text-kp-red/80' : s === '★' ? 'text-kp-burgundy' : 'text-kp-champagne/85'}`}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next */}
          <div className="flex items-center justify-between mt-6 px-1">
            <button
              onClick={() => setActiveIndex((i) => (i - 1 + ranks.length) % ranks.length)}
              className="group flex items-center gap-2 text-kp-champagne/60 hover:text-kp-gold transition-colors font-display text-sm"
            >
              <span className="text-kp-gold/70 group-hover:-translate-x-0.5 transition-transform">←</span>
              <span className="hidden sm:inline tracking-wide">{ranks[(activeIndex - 1 + ranks.length) % ranks.length].name}</span>
            </button>
            <span className="font-display text-kp-gold/40 text-xs tracking-[0.3em]">
              {String(activeIndex + 1).padStart(2, '0')} / {String(ranks.length).padStart(2, '0')}
            </span>
            <button
              onClick={() => setActiveIndex((i) => (i + 1) % ranks.length)}
              className="group flex items-center gap-2 text-kp-champagne/60 hover:text-kp-gold transition-colors font-display text-sm"
            >
              <span className="hidden sm:inline tracking-wide">{ranks[(activeIndex + 1) % ranks.length].name}</span>
              <span className="text-kp-gold/70 group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
