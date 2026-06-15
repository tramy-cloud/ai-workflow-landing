'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Lightbulb, Search, FileText, Image, Mic, Video, Send, ChevronDown } from 'lucide-react'

const steps = [
  { icon: Lightbulb, label: 'Input Idea', desc: 'Nháº­p 1 Ã½ tÆ°á»Ÿng hoáº·c tá»« khÃ³a', color: '#D4AF37' },
  { icon: Search, label: 'AI Research', desc: 'AI tá»± Ä‘á»™ng nghiÃªn cá»©u thá»‹ trÆ°á»ng', color: '#9B8AC4' },
  { icon: FileText, label: 'AI Script Writing', desc: 'Ká»‹ch báº£n hoÃ n chá»‰nh Ä‘Æ°á»£c táº¡o ra', color: '#4FC3F7' },
  { icon: Image, label: 'AI Image Generation', desc: 'HÃ¬nh áº£nh cháº¥t lÆ°á»£ng cao tá»± Ä‘á»™ng', color: '#81C784' },
  { icon: Mic, label: 'AI Voice Generation', desc: 'Giá»ng Ä‘á»c tá»± nhiÃªn, chuyÃªn nghiá»‡p', color: '#FF8A65' },
  { icon: Video, label: 'AI Video Creation', desc: 'Video hoÃ n chá»‰nh Ä‘Æ°á»£c láº¯p ghÃ©p', color: '#E6C76A' },
  { icon: Send, label: 'Ready To Publish', desc: 'Xuáº¥t báº£n ngay trÃªn má»i ná»n táº£ng', color: '#4CAF50' },
]

export default function Solution() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="solution" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-gold mb-6">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-semibold">Giáº£i PhÃ¡p</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Workflow AI Hoáº¡t Äá»™ng NhÆ°{' '}
            <span className="gold-text">Má»™t NhÃ¢n ViÃªn ToÃ n Thá»i Gian</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            7 bÆ°á»›c tá»± Ä‘á»™ng hÃ³a hoÃ n toÃ n â€” tá»« Ã½ tÆ°á»Ÿng Ä‘áº¿n video sáºµn sÃ ng Ä‘Äƒng chá»‰ trong vÃ i phÃºt.
          </p>
        </motion.div>

        {/* Flow diagram */}
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-4 items-stretch">
            {/* Mobile: vertical */}
            <div className="flex flex-col gap-0 w-full">
              {steps.map((step, i) => {
                const Icon = step.icon
                const isLast = i === steps.length - 1
                return (
                  <div key={step.label} className="flex flex-col items-center">
                    <motion.div
                      initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: i * 0.12 }}
                      className="w-full flex items-center gap-4 glass-card rounded-2xl p-5 group hover:scale-[1.02] transition-all duration-300 cursor-default"
                      style={{ border: `1px solid ${step.color}25` }}
                    >
                      {/* Step number */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-primary"
                        style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}99)` }}
                      >
                        {i + 1}
                      </div>

                      {/* Icon */}
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{ background: `${step.color}18` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: step.color }} />
                      </div>

                      {/* Text */}
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-sm mb-0.5">{step.label}</h3>
                        <p className="text-white/50 text-xs">{step.desc}</p>
                      </div>

                      {/* Time badge */}
                      <div className="flex-shrink-0 text-right">
                        <span className="text-[10px] font-semibold px-2 py-1 rounded-lg"
                          style={{ background: `${step.color}18`, color: step.color }}>
                          {i === 0 ? '< 1 min' : `~${i * 2}s`}
                        </span>
                      </div>
                    </motion.div>

                    {/* Connector */}
                    {!isLast && (
                      <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={inView ? { opacity: 1, scaleY: 1 } : {}}
                        transition={{ duration: 0.4, delay: i * 0.12 + 0.3 }}
                        className="flex flex-col items-center py-1"
                        style={{ transformOrigin: 'top' }}
                      >
                        <div className="w-0.5 h-4 bg-gradient-to-b from-gold/40 to-transparent" />
                        <ChevronDown className="w-4 h-4 text-gold/50" />
                      </motion.div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Total time badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-8 flex justify-center"
          >
            <div className="glass-card-gold px-8 py-4 rounded-2xl flex items-center gap-4">
              <div className="text-3xl font-black gold-text">âš¡</div>
              <div>
                <div className="text-gold font-black text-lg">Tá»•ng thá»i gian: &lt; 10 phÃºt</div>
                <div className="text-white/60 text-sm">Thay tháº¿ 3â€“8 giá» lÃ m thá»§ cÃ´ng</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
