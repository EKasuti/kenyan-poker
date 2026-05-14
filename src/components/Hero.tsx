import React from 'react';
import { motion } from 'framer-motion';
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background decorative suits */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: 0
          }}
          animate={{
            opacity: 0.03,
            scale: 1,
            rotate: 12
          }}
          transition={{
            duration: 2,
            ease: 'easeOut'
          }}
          className="absolute -top-20 -left-20 text-[30rem] md:text-[45rem] text-kp-gold leading-none">
          
          ♠
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: 0
          }}
          animate={{
            opacity: 0.02,
            scale: 1,
            rotate: -15
          }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: 'easeOut'
          }}
          className="absolute -bottom-40 -right-20 text-[30rem] md:text-[45rem] text-kp-burgundy leading-none">
          
          ♥
        </motion.div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <motion.p
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="text-kp-gold tracking-[0.3em] text-xs md:text-sm uppercase mb-6 font-semibold">
          
          The Rules of the House
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: 0.4
          }}
          className="font-display text-7xl md:text-9xl lg:text-[12rem] font-bold text-gold-foil mb-4 leading-none tracking-tight py-2">
          
          Kadi
        </motion.h1>

        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            delay: 0.7
          }}
          className="flex flex-col items-center gap-2 mb-8">
          
          <p className="text-kp-champagne/60 tracking-[0.4em] text-xs md:text-sm uppercase">
            A Kenyan Card Game
          </p>
          <p className="text-kp-gold/70 italic font-display text-base md:text-lg">
            also known as{' '}
            <span className="text-gold-foil font-semibold not-italic">
              Kenyan Poker
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            delay: 0.9
          }}
          className="flex items-center justify-center gap-4 mb-8">
          
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-kp-gold/40" />
          <span className="text-kp-gold/60 text-sm">♦ ♣</span>
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-kp-gold/40" />
        </motion.div>

        <motion.p
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            delay: 1.1
          }}
          className="text-xl md:text-2xl text-kp-champagne/80 font-light max-w-2xl mx-auto italic font-display">
          
          "Swift, savage, and elegant. Be the first to call Niko Kadi."
        </motion.p>

      </div>

      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 1,
          delay: 1.8
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 text-kp-gold/40">

        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll to enter
        </span>
        <motion.div
          animate={{
            y: [0, 8, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="w-[1px] h-16 bg-gradient-to-b from-kp-gold/40 to-transparent" />

      </motion.div>
    </section>);

}