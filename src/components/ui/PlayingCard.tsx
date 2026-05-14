interface PlayingCardProps {
  rank: string
  suit: string
  color?: 'gold' | 'red' // legacy prop, unused
  className?: string
}

const SUIT_NAMES: Record<string, string> = {
  '♠': 'spades',
  '♥': 'hearts',
  '♦': 'diamonds',
  '♣': 'clubs',
}

function cardSrc(rank: string, suit: string): string {
  if (suit === 'JOKER') return '/images/cards/singles/joker.svg'
  return `/images/cards/singles/${rank}-${SUIT_NAMES[suit]}.svg`
}

export function PlayingCard({ rank, suit, className = '' }: PlayingCardProps) {
  return (
    <div
      className={`relative w-28 h-40 md:w-36 md:h-52 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden group transition-transform duration-500 hover:-translate-y-2 hover:rotate-1 hover:shadow-[0_18px_40px_rgba(201,162,74,0.25)] ${className}`}
    >
      <img
        src={cardSrc(rank, suit)}
        alt={suit === 'JOKER' ? 'Joker' : `${rank} of ${SUIT_NAMES[suit]}`}
        className="w-full h-full"
        draggable={false}
      />
      {/* Hover shine sweep */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
    </div>
  )
}
