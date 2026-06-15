'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 80vh)
      setShow(window.scrollY > window.innerHeight * 0.7)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToPricing = () => {
    document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
          style={{
            background: 'rgba(10,16,34,0.95)',
            borderTop: '1px solid rgba(61,165,255,0.2)',
            backdropFilter: 'blur(20px)',
            paddingBottom: 'env(safe-area-inset-bottom)',
          }}
        >
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="flex-1">
              <div className="text-white font-bold text-sm">Khóa Học AI Workflow</div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-gold font-extrabold text-base">1.499.000đ</span>
                <span className="text-text-secondary/60 text-xs line-through">3.999.000đ</span>
              </div>
            </div>
            <button
              id="mobile-sticky-cta"
              onClick={scrollToPricing}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-bold text-sm flex-shrink-0 hover:opacity-90 active:scale-95 transition-all"
            >
              Đăng Ký
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
