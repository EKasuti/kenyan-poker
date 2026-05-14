import React from 'react';
interface PlayingCardProps {
  rank: string;
  suit: string;
  color?: 'gold' | 'red'; // legacy — ignored, derived from suit
  className?: string;
}
type PipPos = {
  top: string;
  left: string;
  flip?: boolean;
};
const pipLayouts: Record<string, PipPos[]> = {
  '2': [
  {
    top: '14%',
    left: '50%'
  },
  {
    top: '86%',
    left: '50%',
    flip: true
  }],

  '3': [
  {
    top: '14%',
    left: '50%'
  },
  {
    top: '50%',
    left: '50%'
  },
  {
    top: '86%',
    left: '50%',
    flip: true
  }],

  '4': [
  {
    top: '14%',
    left: '28%'
  },
  {
    top: '14%',
    left: '72%'
  },
  {
    top: '86%',
    left: '28%',
    flip: true
  },
  {
    top: '86%',
    left: '72%',
    flip: true
  }],

  '5': [
  {
    top: '14%',
    left: '28%'
  },
  {
    top: '14%',
    left: '72%'
  },
  {
    top: '50%',
    left: '50%'
  },
  {
    top: '86%',
    left: '28%',
    flip: true
  },
  {
    top: '86%',
    left: '72%',
    flip: true
  }],

  '6': [
  {
    top: '14%',
    left: '28%'
  },
  {
    top: '14%',
    left: '72%'
  },
  {
    top: '50%',
    left: '28%'
  },
  {
    top: '50%',
    left: '72%'
  },
  {
    top: '86%',
    left: '28%',
    flip: true
  },
  {
    top: '86%',
    left: '72%',
    flip: true
  }],

  '7': [
  {
    top: '14%',
    left: '28%'
  },
  {
    top: '14%',
    left: '72%'
  },
  {
    top: '32%',
    left: '50%'
  },
  {
    top: '50%',
    left: '28%'
  },
  {
    top: '50%',
    left: '72%'
  },
  {
    top: '86%',
    left: '28%',
    flip: true
  },
  {
    top: '86%',
    left: '72%',
    flip: true
  }],

  '8': [
  {
    top: '14%',
    left: '28%'
  },
  {
    top: '14%',
    left: '72%'
  },
  {
    top: '32%',
    left: '50%'
  },
  {
    top: '50%',
    left: '28%'
  },
  {
    top: '50%',
    left: '72%'
  },
  {
    top: '68%',
    left: '50%',
    flip: true
  },
  {
    top: '86%',
    left: '28%',
    flip: true
  },
  {
    top: '86%',
    left: '72%',
    flip: true
  }],

  '9': [
  {
    top: '14%',
    left: '28%'
  },
  {
    top: '14%',
    left: '72%'
  },
  {
    top: '32%',
    left: '28%'
  },
  {
    top: '32%',
    left: '72%'
  },
  {
    top: '50%',
    left: '50%'
  },
  {
    top: '68%',
    left: '28%',
    flip: true
  },
  {
    top: '68%',
    left: '72%',
    flip: true
  },
  {
    top: '86%',
    left: '28%',
    flip: true
  },
  {
    top: '86%',
    left: '72%',
    flip: true
  }],

  '10': [
  {
    top: '14%',
    left: '28%'
  },
  {
    top: '14%',
    left: '72%'
  },
  {
    top: '28%',
    left: '50%'
  },
  {
    top: '36%',
    left: '28%'
  },
  {
    top: '36%',
    left: '72%'
  },
  {
    top: '64%',
    left: '28%',
    flip: true
  },
  {
    top: '64%',
    left: '72%',
    flip: true
  },
  {
    top: '72%',
    left: '50%',
    flip: true
  },
  {
    top: '86%',
    left: '28%',
    flip: true
  },
  {
    top: '86%',
    left: '72%',
    flip: true
  }]

};
function isRed(suit: string) {
  return suit === '♥' || suit === '♦';
}
function isJoker(suit: string) {
  return suit === 'JOKER';
}
function isFace(rank: string) {
  return rank === 'J' || rank === 'Q' || rank === 'K';
}
function CornerIndex({
  rank,
  suit,
  flipped = false,
  textClass





}: {rank: string;suit: string;flipped?: boolean;textClass: string;}) {
  return (
    <div
      className={`absolute flex flex-col items-center leading-none ${flipped ? 'bottom-1.5 right-2 rotate-180' : 'top-1.5 left-2'} ${textClass}`}
      style={{
        fontFeatureSettings: '"lnum"'
      }}>
      
      <span className="font-display font-bold text-base md:text-xl tracking-tighter">
        {rank}
      </span>
      <span className="text-sm md:text-base -mt-0.5">{suit}</span>
    </div>);

}
function Pip({
  suit,
  pos,
  textClass




}: {suit: string;pos: PipPos;textClass: string;}) {
  return (
    <span
      className={`absolute text-lg md:text-2xl leading-none ${textClass}`}
      style={{
        top: pos.top,
        left: pos.left,
        transform: `translate(-50%, -50%) ${pos.flip ? 'rotate(180deg)' : ''}`
      }}>
      
      {suit}
    </span>);

}
function FaceCardCenter({
  rank,
  suit,
  textClass




}: {rank: string;suit: string;textClass: string;}) {
  return (
    <div className="absolute inset-6 md:inset-7 rounded-md border border-kp-gold/40 flex flex-col items-center justify-center bg-gradient-to-br from-transparent via-kp-gold/5 to-transparent">
      {/* Decorative corner flourishes */}
      <span className="absolute top-1 left-1 text-kp-gold/50 text-[10px]">
        ❦
      </span>
      <span className="absolute top-1 right-1 text-kp-gold/50 text-[10px]">
        ❦
      </span>
      <span className="absolute bottom-1 left-1 text-kp-gold/50 text-[10px] rotate-180">
        ❦
      </span>
      <span className="absolute bottom-1 right-1 text-kp-gold/50 text-[10px] rotate-180">
        ❦
      </span>

      <span
        className={`font-display font-bold text-4xl md:text-6xl leading-none ${textClass}`}>
        
        {rank}
      </span>
      <span className={`text-2xl md:text-3xl mt-1 ${textClass}`}>{suit}</span>
    </div>);

}
function AceCenter({ suit, textClass }: {suit: string;textClass: string;}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className={`text-5xl md:text-7xl ${textClass}`}>{suit}</span>
    </div>);

}
function NumberCenter({
  rank,
  suit,
  textClass




}: {rank: string;suit: string;textClass: string;}) {
  const pips = pipLayouts[rank] ?? [];
  return (
    <div className="absolute inset-0">
      {pips.map((pos, i) =>
      <Pip key={i} suit={suit} pos={pos} textClass={textClass} />
      )}
    </div>);

}
function JokerFace() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="absolute inset-3 rounded-md border border-kp-gold/40" />
      <span className="text-kp-burgundy text-5xl md:text-6xl leading-none">
        ★
      </span>
      <span className="font-display font-bold text-kp-burgundy text-sm md:text-base tracking-[0.2em] mt-2">
        JOKER
      </span>
      <span className="text-kp-gold/60 text-xs mt-1">♦ ♣ ♠ ♥</span>
    </div>);

}
function JokerCorner({ flipped = false }: {flipped?: boolean;}) {
  return (
    <div
      className={`absolute flex flex-col items-center leading-none text-kp-burgundy ${flipped ? 'bottom-1.5 right-2 rotate-180' : 'top-1.5 left-2'}`}>
      
      <span className="font-display font-bold text-sm md:text-base tracking-tight">
        JKR
      </span>
      <span className="text-sm md:text-base -mt-0.5">★</span>
    </div>);

}
export function PlayingCard({ rank, suit, className = '' }: PlayingCardProps) {
  const red = isRed(suit);
  const joker = isJoker(suit);
  const face = isFace(rank);
  const isAce = rank === 'A';
  const textClass = red ? 'text-kp-red' : 'text-kp-black';
  return (
    <div
      className={`relative w-28 h-40 md:w-36 md:h-52 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden group transition-transform duration-500 hover:-translate-y-2 hover:rotate-1 hover:shadow-[0_18px_40px_rgba(201,162,74,0.25)] ${className}`}>
      
      {/* Card stock — cream paper with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fdfaf2] via-[#f5ecd7] to-[#e8d9b0]" />

      {/* Paper grain */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-multiply"
        style={{
          backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")"
        }} />
      

      {/* Subtle inner highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/10 pointer-events-none" />

      {/* Gold foil inner border */}
      <div className="absolute inset-[5px] rounded-lg border border-kp-gold/50 pointer-events-none" />
      <div className="absolute inset-[7px] rounded-lg border border-kp-gold/15 pointer-events-none" />

      {/* Outer edge */}
      <div className="absolute inset-0 rounded-xl border border-kp-gold/30 pointer-events-none" />

      {/* Content */}
      <div className="relative h-full">
        {joker ?
        <>
            <JokerCorner />
            <JokerFace />
            <JokerCorner flipped />
          </> :

        <>
            <CornerIndex rank={rank} suit={suit} textClass={textClass} />
            {face &&
          <FaceCardCenter rank={rank} suit={suit} textClass={textClass} />
          }
            {isAce && <AceCenter suit={suit} textClass={textClass} />}
            {!face && !isAce &&
          <NumberCenter rank={rank} suit={suit} textClass={textClass} />
          }
            <CornerIndex
            rank={rank}
            suit={suit}
            flipped
            textClass={textClass} />
          
          </>
        }
      </div>

      {/* Hover shine sweep */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
    </div>);

}