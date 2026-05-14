import React from 'react';
import { motion } from 'framer-motion';
const rules = [
{
  label: 'The Declaration',
  body: 'On the turn before you intend to win, you must announce "Niko Kadi." Without it, no victory may be claimed.'
},
{
  label: 'The One Move',
  body: 'Victory must be played in a single move — all Answer Cards, or Question Cards each followed by their matching Answer Cards.'
},
{
  label: 'The Cardless',
  body: 'You cannot win while any other player is cardless. The hand must finish with rivals still holding.'
}];

export function Winning() {
  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 1
          }}
          className="relative py-16 md:py-20 px-6 md:px-16 border-y border-kp-gold/20 bg-gradient-to-r from-transparent via-kp-burgundy/10 to-transparent">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-kp-gold/40 text-2xl bg-kp-black px-4">
            ♦
          </div>

          <div className="text-center mb-12">
            <span className="text-kp-gold/60 text-[10px] uppercase tracking-[0.3em] font-semibold">
              The Final Word
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-gold-foil font-bold mt-4">
              "Niko Kadi"
            </h2>
            <p className="text-kp-champagne/50 italic font-display text-sm md:text-base mt-3 tracking-wide">
              / NEE-koh KAH-dee /
            </p>
            <p className="text-lg md:text-xl text-kp-champagne/80 font-light mt-6 max-w-2xl mx-auto italic font-display">
              The phrase that earns a win. Spoken one turn early — never late —
              and only when the hand is ready to fall.
            </p>
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
              duration: 0.8,
              delay: 0.2
            }}
            className="relative max-w-4xl mx-auto mb-14">
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-kp-gold/40" />
              <span className="text-kp-gold/60 text-[10px] uppercase tracking-[0.3em] font-semibold">
                From the Swahili
              </span>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-kp-gold/40" />
            </div>

            <div className="glass-panel rounded-2xl p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1.2fr] gap-6 md:gap-8 items-center">
                {/* Niko */}
                <div className="text-center md:text-left">
                  <p className="font-display text-3xl md:text-4xl text-gold-foil font-bold leading-none">
                    Niko
                  </p>
                  <p className="text-kp-champagne/40 italic text-xs mt-2 tracking-wide">
                    / NEE-koh /
                  </p>
                  <p className="text-kp-champagne/80 text-sm mt-3 leading-relaxed">
                    <span className="text-kp-gold/70 text-[10px] uppercase tracking-[0.2em] block mb-1">
                      verb
                    </span>
                    I have · I am
                  </p>
                </div>

                {/* Divider */}
                <div className="hidden md:flex items-center justify-center text-kp-gold/40 text-xl">
                  <span>+</span>
                </div>
                <div className="md:hidden flex items-center justify-center text-kp-gold/40 text-xl">
                  <div className="h-[1px] flex-1 bg-kp-gold/20" />
                  <span className="px-3">+</span>
                  <div className="h-[1px] flex-1 bg-kp-gold/20" />
                </div>

                {/* Kadi */}
                <div className="text-center md:text-left">
                  <p className="font-display text-3xl md:text-4xl text-gold-foil font-bold leading-none">
                    Kadi
                  </p>
                  <p className="text-kp-champagne/40 italic text-xs mt-2 tracking-wide">
                    / KAH-dee /
                  </p>
                  <p className="text-kp-champagne/80 text-sm mt-3 leading-relaxed">
                    <span className="text-kp-gold/70 text-[10px] uppercase tracking-[0.2em] block mb-1">
                      noun
                    </span>
                    a card · a hand
                  </p>
                </div>

                {/* Equals divider */}
                <div className="hidden md:flex items-center justify-center text-kp-gold/40 text-xl">
                  <span>=</span>
                </div>
                <div className="md:hidden flex items-center justify-center text-kp-gold/40 text-xl">
                  <div className="h-[1px] flex-1 bg-kp-gold/20" />
                  <span className="px-3">=</span>
                  <div className="h-[1px] flex-1 bg-kp-gold/20" />
                </div>

                {/* Synthesis */}
                <div className="text-center md:text-left">
                  <p className="text-kp-champagne italic font-display text-lg md:text-xl leading-snug">
                    "I have one card."
                  </p>
                  <div className="flex items-center gap-2 mt-3 justify-center md:justify-start">
                    <span className="text-kp-gold/60 text-[10px] uppercase tracking-[0.3em] font-semibold">
                      Spirit
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-kp-gold/30 text-kp-champagne/80 text-xs tracking-widest uppercase">
                      <span className="text-kp-gold">≈</span> Uno
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-kp-champagne/50 text-xs md:text-sm italic font-display text-center mt-8 max-w-2xl mx-auto leading-relaxed">
                The same warning shot. The same pulse-quickening declaration
                that one card stands between you and victory.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rules.map((rule, i) =>
            <motion.div
              key={rule.label}
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
                delay: i * 0.15
              }}
              className="text-center md:text-left">
              
                <span className="text-kp-gold/60 text-[10px] uppercase tracking-[0.3em] font-semibold block mb-3">
                  {rule.label}
                </span>
                <p className="text-kp-champagne/90 leading-relaxed text-sm md:text-base">
                  {rule.body}
                </p>
              </motion.div>
            )}
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-kp-gold/40 text-2xl bg-kp-black px-4">
            ♣
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
          className="glass-panel rounded-2xl p-8 md:p-10 max-w-3xl mx-auto mt-16 border-kp-gold/30">
          
          <span className="text-kp-gold/60 text-[10px] uppercase tracking-[0.3em] font-semibold block mb-4">
            The Winning Hand
          </span>
          <p className="text-kp-champagne/80 leading-relaxed">
            Your closing move must consist entirely of{' '}
            <strong className="text-kp-gold font-medium">Answer Cards</strong>,
            or{' '}
            <strong className="text-kp-gold font-medium">
              Question Cards each paired with their matching Answer
            </strong>
            . No Jumps, no Kickbacks, no Penalties may end the game.
          </p>
        </motion.div>
      </div>
    </section>);

}