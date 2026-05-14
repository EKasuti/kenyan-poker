import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';
const tips = [
'Hoard your Aces — they are your only defence against a Penalty chain, and your only voice to declare a suit.',
'Never play a Question Card without holding its Answer. A Question alone is a self-inflicted penalty.',
'Chain Jumps and Kickbacks aggressively when the table is dense — every skip is a turn closer to Kadi.',
'Say Niko Kadi the moment you are one move from winning — and not a breath sooner. Premature calls warn your rivals.',
'If a rival is cardless, no one can win this hand. Bide your time and force the table to refill.',
'When you draw a Joker, hold it. Five cards is a punishment few hands recover from.'];

export function ProTips() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Strategy of the Table"
          eyebrow="Pro Tips"
          align="left" />
        

        <GlassCard className="mt-12">
          <ul className="space-y-6">
            {tips.map((tip, index) =>
            <li key={index} className="flex gap-5 items-start">
                <span className="text-kp-gold font-display text-xl leading-none mt-1 shrink-0 w-8">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-kp-champagne/80 leading-relaxed flex-1">
                  {tip}
                </p>
              </li>
            )}
          </ul>
        </GlassCard>
      </div>
    </section>);

}