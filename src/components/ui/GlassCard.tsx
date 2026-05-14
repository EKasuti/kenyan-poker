import React from 'react';
import { motion } from 'framer-motion';
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
export function GlassCard({
  children,
  className = '',
  delay = 0
}: GlassCardProps) {
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
        delay,
        ease: 'easeOut'
      }}
      className={`glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden group transition-colors duration-500 hover:border-kp-gold/30 ${className}`}>
      
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-kp-champagne/5 to-transparent group-hover:animate-shimmer pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </motion.div>);

}