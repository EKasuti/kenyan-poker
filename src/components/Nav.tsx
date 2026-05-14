import { useEffect, useState, Fragment } from 'react'
import { motion } from 'framer-motion'
type Section = {
  id: string
  label: string
  suit: string
}
const sections: Section[] = [
  { id: 'overview', label: 'Overview', suit: '♠' },
  { id: 'setup', label: 'Setup', suit: '♥' },
  { id: 'how-to-play', label: 'How to Play', suit: '♦' },
  { id: 'special-cards', label: 'Special Cards', suit: '♣' },
  { id: 'winning', label: 'Winning', suit: '♠' },
  { id: 'pro-tips', label: 'Pro Tips', suit: '♥' },
]
export function Nav() {
  const [activeSection, setActiveSection] = useState('overview')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5, rootMargin: '-100px 0px -50% 0px' },
    )
    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <nav className="sticky top-0 z-40 border-b border-kp-gold/20 backdrop-blur-xl bg-kp-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Desktop: Horizontal TOC */}
        <div className="hidden md:flex items-center justify-center gap-1 py-3">
          {sections.map((section, index) => {
            const isActive = activeSection === section.id
            return (
              <Fragment key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`
                    relative px-4 py-2 rounded-md transition-all duration-200
                    flex items-center gap-2 group font-display text-sm tracking-wide
                    ${isActive ? 'text-kp-gold' : 'text-kp-champagne/60 hover:text-kp-champagne'}
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-kp-gold/10 rounded-md border border-kp-gold/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 text-xs">{section.suit}</span>
                  <span className="relative z-10">{section.label}</span>
                </button>
                {index < sections.length - 1 && (
                  <span className="text-kp-gold/20 text-xs">·</span>
                )}
              </Fragment>
            )
          })}
        </div>

        {/* Mobile: Scrollable TOC */}
        <div
          className="md:hidden overflow-x-auto py-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`.overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>
          <div className="flex gap-2 px-2 min-w-max">
            {sections.map((section) => {
              const isActive = activeSection === section.id
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`
                    flex-shrink-0 px-3 py-1.5 rounded-full border transition-all duration-200
                    flex items-center gap-1.5 whitespace-nowrap font-display text-xs tracking-wide
                    ${isActive ? 'bg-kp-gold/15 text-kp-gold border-kp-gold/60' : 'border-kp-gold/20 text-kp-champagne/60'}
                  `}
                >
                  <span className="text-[10px]">{section.suit}</span>
                  <span>{section.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
