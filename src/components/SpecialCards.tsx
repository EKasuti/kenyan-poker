import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';
import { PlayingCard } from './ui/PlayingCard';
import { motion } from 'framer-motion';
type CardColor = 'gold' | 'red';
interface CardEntry {
  rank: string;
  suit: string;
  color: CardColor;
}
interface CategoryProps {
  eyebrow: string;
  title: string;
  intro: string;
  cards: CardEntry[];
  callout?: {
    label: string;
    body: React.ReactNode;
  };
}
const categories: CategoryProps[] = [
{
  eyebrow: 'Category I',
  title: 'Answer Cards',
  intro:
  'The foundation of every hand. 4, 5, 6, 7, 9, 10 and the Ace. Played freely on matching suit or rank.',
  cards: [
  {
    rank: '4',
    suit: '♥',
    color: 'red'
  },
  {
    rank: '7',
    suit: '♠',
    color: 'gold'
  },
  {
    rank: '10',
    suit: '♦',
    color: 'red'
  },
  {
    rank: 'A',
    suit: '♣',
    color: 'gold'
  }],

  callout: {
    label: 'The Ace · A Quiet Power',
    body:
    <>
          Playing an Ace lets you{' '}
          <strong className="text-kp-gold font-medium">declare the suit</strong>{' '}
          the next player must follow. Decline to declare, and play continues as
          usual. An Ace also{' '}
          <strong className="text-kp-gold font-medium">
            cancels any pending penalty
          </strong>
          , returning play to the suit from before the penalty began.
        </>

  }
},
{
  eyebrow: 'Category II',
  title: 'Question Cards',
  intro:
  'Queens and 8s ask a question. They must be answered — in the same turn — by an Answer Card of matching suit or rank. If you cannot answer, draw a card.',
  cards: [
  {
    rank: '8',
    suit: '♦',
    color: 'red'
  },
  {
    rank: 'Q',
    suit: '♣',
    color: 'gold'
  }],

  callout: {
    label: 'A Question Demands an Answer',
    body:
    <>
          Every Question Card must be paired with a matching Answer Card in the{' '}
          <strong className="text-kp-gold font-medium">same play</strong>.
          Question without an answer? Draw, and your turn ends.
        </>

  }
},
{
  eyebrow: 'Category III',
  title: 'Jump Cards',
  intro:
  'The Jack skips the next player. The player who was about to move may counter with a Jack of their own — and the skip cascades down the line.',
  cards: [
  {
    rank: 'J',
    suit: '♠',
    color: 'gold'
  },
  {
    rank: 'J',
    suit: '♥',
    color: 'red'
  }],

  callout: {
    label: 'Compounding Jumps',
    body:
    <>
          Stack multiple Jumps in a single turn to skip multiple players. Each
          Jack drops one more rival from the round.
        </>

  }
},
{
  eyebrow: 'Category IV',
  title: 'Kickback Cards',
  intro:
  'The King reverses direction. Like Jumps, they can be countered or chained — each King flipping the flow again.',
  cards: [
  {
    rank: 'K',
    suit: '♦',
    color: 'red'
  },
  {
    rank: 'K',
    suit: '♣',
    color: 'gold'
  }],

  callout: {
    label: 'Counter or Compound',
    body:
    <>
          The player about to be acted upon may play their own Kickback to
          reverse it. Multiple Kings in one turn flip the direction once for
          each.
        </>

  }
},
{
  eyebrow: 'Category V',
  title: 'Penalty Cards',
  intro:
  'The 2, 3, and the two Jokers. Each forces the next player to draw — 2, 3, or 5 cards respectively. The harshest weapons in the deck.',
  cards: [
  {
    rank: '2',
    suit: '♠',
    color: 'gold'
  },
  {
    rank: '3',
    suit: '♥',
    color: 'red'
  },
  {
    rank: '★',
    suit: 'JOKER',
    color: 'red'
  }],

  callout: {
    label: 'Three Ways to Survive',
    body:
    <>
          The targeted player may escape the penalty by playing{' '}
          <strong className="text-kp-gold font-medium">
            another Penalty Card of the same rank
          </strong>{' '}
          (forwarding the draw), or by playing an{' '}
          <strong className="text-kp-gold font-medium">Ace</strong> (cancelling
          the penalty entirely, reverting to the suit from before the chain).
          After a Joker, play continues with the suit and rank from the prior
          penalty.
        </>

  }
}];

function Category({ eyebrow, title, intro, cards, callout }: CategoryProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.8,
        ease: 'easeOut'
      }}
      className="relative">
      
      <div className="flex items-center gap-4 mb-8">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-kp-gold/30" />
        <div className="flex flex-col items-center text-center">
          <span className="text-kp-gold/60 text-[10px] uppercase tracking-[0.3em] font-semibold">
            {eyebrow}
          </span>
          <h3 className="font-display text-3xl md:text-4xl text-gold-foil font-bold">
            {title}
          </h3>
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-kp-gold/30" />
      </div>

      <p className="text-center text-kp-champagne/60 italic font-display text-lg max-w-2xl mx-auto mb-10">
        {intro}
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {cards.map((card, i) =>
        <motion.div
          key={`${card.rank}-${card.suit}-${i}`}
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: i * 0.1
          }}>
          
            <PlayingCard rank={card.rank} suit={card.suit} color={card.color} />
          </motion.div>
        )}
      </div>

      {callout &&
      <GlassCard className="max-w-3xl mx-auto">
          <span className="text-kp-gold/60 text-[10px] uppercase tracking-[0.3em] font-semibold block mb-3">
            {callout.label}
          </span>
          <p className="text-kp-champagne/80 leading-relaxed">{callout.body}</p>
        </GlassCard>
      }
    </motion.div>);

}
export function SpecialCards() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="The Five Categories"
          eyebrow="The Cards"
          align="center" />
        

        <div className="space-y-28 mt-16">
          {categories.map((cat) =>
          <Category key={cat.title} {...cat} />
          )}
        </div>
      </div>
    </section>);

}