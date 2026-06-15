'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { href: '#problem', label: 'Váº¥n Äá»' },
  { href: '#solution', label: 'Giáº£i PhÃ¡p' },
  { href: '#features', label: 'TÃ­nh NÄƒng' },
  { href: '#results', label: 'Káº¿t Quáº£' },
  { href: '#pricing', label: 'Báº£ng GiÃ¡' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
      setScrolled(scrollTop > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        id="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#1C2139]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center gold-pulse">
                <Zap className="w-5 h-5 text-primary" fill="currentColor" />
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-none">AI</span>
                <span className="gold-text font-bold text-lg leading-none ml-1">Workflow</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => handleNavClick('#contact')}
                className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-gold to-gold-soft text-primary hover:shadow-gold hover:scale-105 transition-all duration-300"
              >
                Nháº­n Demo Ngay
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-400 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-[#1C2139]/98 backdrop-blur-xl border-t border-white/5 px-4 pb-6 pt-4">
            <div className="flex flex-col gap-1 mb-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 font-medium text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full py-3.5 text-sm font-bold rounded-xl bg-gradient-to-r from-gold to-gold-soft text-primary"
            >
              Nháº­n Demo Ngay
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
