import React from 'react'
import { motion } from 'framer-motion'
interface SectionHeadingProps {
  title: string
  eyebrow?: string
  align?: 'left' | 'center'
  className?: string
  sectionNumber?: string
}
export function SectionHeading({
  title,
  eyebrow,
  align = 'center',
  className = '',
  sectionNumber,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} ${className} relative`}
    >
      {sectionNumber && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <span className="font-display text-[8rem] md:text-[10rem] font-bold text-kp-gold/5 leading-none select-none">
            {sectionNumber}
          </span>
        </div>
      )}

      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex items-center gap-3 mb-4"
        >
          <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-kp-gold/40" />
          <span className="text-kp-gold/60 text-[10px] uppercase tracking-[0.3em] font-semibold">{eyebrow}</span>
          <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-kp-gold/40" />
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative font-display text-4xl md:text-5xl text-gold-foil font-bold"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mt-4 h-[1px] w-32 bg-gradient-to-r from-transparent via-kp-gold/50 to-transparent"
      />
    </div>
  )
}
