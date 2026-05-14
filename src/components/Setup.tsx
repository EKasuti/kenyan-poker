import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';
import { motion } from 'framer-motion';
const steps = [
{
  num: '01',
  title: 'Gather',
  desc: 'Seat 2 to 5 players around the table.'
},
{
  num: '02',
  title: 'Deal',
  desc: 'The dealer hands 3 or 4 cards to each player.'
},
{
  num: '03',
  title: 'The Pile',
  desc: 'Place the remaining deck face down to form the draw pile.'
},
{
  num: '04',
  title: 'The Start',
  desc: 'Flip the top card. If invalid, return it, shuffle, and repeat.'
}];

const invalidStarters = [
'2',
'3',
'Question',
'Kickback',
'Jump',
'Joker',
'Ace'];

export function Setup() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="The Setup"
          eyebrow="Preparation"
          align="center" />
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {steps.map((step, index) =>
          <GlassCard
            key={step.num}
            delay={index * 0.15}
            className="flex flex-col items-center text-center">
            
              <span className="font-display text-5xl text-kp-gold/20 font-bold mb-4">
                {step.num}
              </span>
              <h3 className="text-xl text-kp-champagne font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-kp-champagne/60 text-sm leading-relaxed">
                {step.desc}
              </p>
            </GlassCard>
          )}
        </div>

        <motion.div
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
            duration: 0.8
          }}
          className="glass-panel rounded-2xl p-8 md:p-10 max-w-3xl mx-auto mt-12 border-kp-burgundy/30">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="text-kp-burgundy text-2xl">⚠</span>
            <span className="text-kp-gold/60 text-[10px] uppercase tracking-[0.3em] font-semibold">
              A Valid Starter
            </span>
          </div>
          <p className="text-kp-champagne/80 leading-relaxed mb-4">
            The discard pile may{' '}
            <strong className="text-kp-gold font-medium">not begin</strong> with
            any of the following. If one is drawn, return it, shuffle, and try
            again.
          </p>
          <div className="flex flex-wrap gap-2">
            {invalidStarters.map((card) =>
            <span
              key={card}
              className="px-3 py-1 rounded-full border border-kp-burgundy/40 text-kp-champagne/70 text-xs uppercase tracking-widest">
              
                {card}
              </span>
            )}
          </div>
        </motion.div>

        <motion.div
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
            duration: 0.8
          }}
          className="glass-panel rounded-2xl p-8 md:p-10 max-w-3xl mx-auto mt-6 border-kp-gold/30">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="text-kp-gold text-2xl">✦</span>
            <span className="text-kp-gold/60 text-[10px] uppercase tracking-[0.3em] font-semibold">
              The Large Table
            </span>
          </div>
          <p className="text-kp-champagne/80 leading-relaxed">
            When more than{' '}
            <strong className="text-kp-gold font-medium">five players</strong>{' '}
            sit at the table, a hard cap of{' '}
            <strong className="text-kp-gold font-medium">
              10 cards per hand
            </strong>{' '}
            applies. Any player whose hand swells beyond ten must{' '}
            <strong className="text-kp-gold font-medium">quit the game</strong>.
            A gentleman knows when to fold.
          </p>
        </motion.div>
      </div>
    </section>);

}