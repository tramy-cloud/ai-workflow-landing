'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Giới Thiệu', href: '#hero' },
  { label: 'Lộ Trình', href: '#curriculum' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Học Viên', href: '#testimonials' },
  { label: 'Học Phí', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollTop > 50)
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Scroll Progress */}
      <div
        id="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-card-border/40 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center shadow-blue group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5 text-white" fill="white" />
            </div>
            <div>
              <span className="text-white font-bold text-base leading-none block">AI Workflow</span>
              <span className="text-xs text-text-secondary leading-none">Masterclass</span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:flex items-center gap-1"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  className="px-4 py-2 rounded-xl text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:flex items-center gap-3"
          >
            <button
              id="nav-cta"
              onClick={() => scrollTo('#pricing')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-semibold text-sm hover:shadow-blue hover:scale-105 transition-all duration-300"
            >
              Đăng Ký Ngay
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl glass-card text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-card-border/30 bg-bg-secondary/95 backdrop-blur-xl"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="px-4 py-3 rounded-xl text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => scrollTo('#pricing')}
                  className="mt-3 px-5 py-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-semibold text-sm"
                >
                  Đăng Ký Ngay
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
