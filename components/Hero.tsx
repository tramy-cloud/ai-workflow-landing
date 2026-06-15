'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle, Sparkles, Bot, Video, Image, Mic } from 'lucide-react'

const benefits = [
  'KhÃ´ng cáº§n quay video',
  'KhÃ´ng cáº§n thuÃª editor',
  'KhÃ´ng cáº§n biáº¿t thiáº¿t káº¿',
  'Xuáº¥t video hÃ ng loáº¡t',
]

const workflowNodes = [
  { icon: Sparkles, label: 'Ã TÆ°á»Ÿng', color: '#D4AF37' },
  { icon: Bot, label: 'AI Research', color: '#9B8AC4' },
  { icon: ArrowRight, label: 'AI Script', color: '#4FC3F7' },
  { icon: Image, label: 'AI Image', color: '#81C784' },
  { icon: Mic, label: 'AI Voice', color: '#FF8A65' },
  { icon: Video, label: 'AI Video', color: '#E6C76A' },
]

export default function Hero() {
  const blobRef1 = useRef<HTMLDivElement>(null)
  const blobRef2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const xPct = (clientX / innerWidth - 0.5) * 30
      const yPct = (clientY / innerHeight - 0.5) * 30
      if (blobRef1.current) {
        blobRef1.current.style.transform = `translate(${xPct}px, ${yPct}px)`
      }
      if (blobRef2.current) {
        blobRef2.current.style.transform = `translate(${-xPct * 0.7}px, ${-yPct * 0.7}px)`
      }
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToDemo = () => {
    document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: 'radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.07) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(212,175,55,0.05) 0%, transparent 50%), #1C2139',
      }}
    >
      {/* Background glow blobs */}
      <div
        ref={blobRef1}
        className="glow-blob w-[500px] h-[500px] top-[-100px] left-[-100px] opacity-20 transition-transform duration-1000 ease-out"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.5) 0%, transparent 70%)' }}
      />
      <div
        ref={blobRef2}
        className="glow-blob w-[400px] h-[400px] bottom-[-50px] right-[-50px] opacity-15 transition-transform duration-1000 ease-out"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)' }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass-card-gold"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-semibold">AI-Powered Workflow Automation</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight"
            >
              Biáº¿n <span className="gold-shimmer-text">1 Ã TÆ°á»Ÿng</span>{' '}
              ThÃ nh{' '}
              <span className="gold-text">HÃ ng Chá»¥c Video</span>{' '}
              Má»—i NgÃ y Báº±ng AI
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Há»‡ thá»‘ng Workflow AI tá»± Ä‘á»™ng táº¡o ná»™i dung, hÃ¬nh áº£nh, giá»ng Ä‘á»c vÃ  video hoÃ n chá»‰nh chá»‰ trong vÃ i phÃºt.
            </motion.p>

            {/* Benefits */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-2 gap-3 mb-10 max-w-md mx-auto lg:mx-0"
            >
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm text-white/80">
                  <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                id="hero-cta-primary"
                onClick={scrollToContact}
                className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-gold to-gold-soft text-primary font-bold text-base hover:shadow-gold-lg hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Nháº­n Demo Ngay
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                id="hero-cta-secondary"
                onClick={scrollToDemo}
                className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl glass-card border border-white/15 text-white font-semibold text-base hover:border-gold/30 hover:bg-white/5 transition-all duration-300"
              >
                <Play className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                Xem Workflow Hoáº¡t Äá»™ng
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {['A', 'B', 'C', 'D'].map((l, i) => (
                  <div
                    key={l}
                    className="w-8 h-8 rounded-full border-2 border-[#1C2139] flex items-center justify-center text-xs font-bold"
                    style={{ background: `hsl(${i * 60 + 30}, 70%, 50%)` }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-gold text-sm">â˜…â˜…â˜…â˜…â˜…</div>
                <span className="text-white/50 text-xs">500+ khÃ¡ch hÃ ng tin dÃ¹ng</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Workflow Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Central hub */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="w-48 h-48 rounded-full gold-pulse"
                  style={{
                    background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
                    border: '1px solid rgba(212,175,55,0.2)',
                  }}
                />
              </div>

              {/* Grid of nodes */}
              <div className="grid grid-cols-2 gap-4 p-6">
                {workflowNodes.map((node, i) => {
                  const Icon = node.icon
                  return (
                    <motion.div
                      key={node.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      className="glass-card rounded-2xl p-5 flex flex-col items-center gap-3 hover:scale-105 transition-all duration-300 cursor-default group"
                      style={{
                        border: `1px solid ${node.color}30`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{ background: `${node.color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: node.color }} />
                      </div>
                      <span className="text-xs font-semibold text-white/80 text-center">{node.label}</span>
                      {/* Animated dot */}
                      <div
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: node.color }}
                      />
                    </motion.div>
                  )
                })}
              </div>

              {/* Connector arrows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-gold to-gold-soft gold-pulse" />

              {/* Floating publish badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card-gold px-5 py-3 rounded-2xl flex items-center gap-3 whitespace-nowrap"
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-gold font-semibold text-sm">âœ“ Sáºµn sÃ ng Ä‘Äƒng lÃªn TikTok, YouTube, Facebook</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs uppercase tracking-widest">Cuá»™n xuá»‘ng</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}
