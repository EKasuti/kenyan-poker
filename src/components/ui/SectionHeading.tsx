import React from 'react';
import { motion } from 'framer-motion';
interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  align?: 'left' | 'center';
  className?: string;
}
export function SectionHeading({
  title,
  eyebrow,
  align = 'center',
  className = ''
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      
      {eyebrow &&
      <motion.div
        initial={{
          opacity: 0,
          y: 10
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.6
        }}
        className="flex items-center gap-3 mb-4">
        
          <span className="text-kp-gold/60 text-xs uppercase tracking-[0.2em] font-semibold">
            {eyebrow}
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-r from-kp-gold/40 to-transparent" />
        </motion.div>
      }
      <motion.h2
        initial={{
          opacity: 0,
          y: 10
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
          delay: 0.1
        }}
        className="font-display text-4xl md:text-5xl text-gold-foil font-bold">
        
        {title}
      </motion.h2>
    </div>);

}