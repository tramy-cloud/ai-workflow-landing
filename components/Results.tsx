'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 50, suffix: '+', label: 'Videos / Day', desc: 'Má»—i ngÃ y tá»± Ä‘á»™ng', color: '#D4AF37' },
  { value: 90, suffix: '%', label: 'Time Saved', desc: 'Tiáº¿t kiá»‡m thá»i gian', color: '#E6C76A' },
  { value: 24, suffix: '/7', label: 'Automation', desc: 'Hoáº¡t Ä‘á»™ng liÃªn tá»¥c', color: '#4FC3F7' },
  { value: 10, suffix: 'X', label: 'Content Output', desc: 'TÄƒng sáº£n lÆ°á»£ng', color: '#81C784' },
]

function CountUp({ target, suffix, duration = 2000, inView }: { target: number; suffix: string; duration?: number; inView: boolean }) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const startTime = performance.now()
    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return (
    <span>
      {count}{suffix}
    </span>
  )
}

export default function Results() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="results" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(212,175,55,0.08) 0%, transparent 60%)' }}
      />

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
            <span className="text-gold text-sm font-semibold">Káº¿t Quáº£ Thá»±c Táº¿</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Nhá»¯ng GÃ¬ Báº¡n <span className="gold-text">Nháº­n ÄÆ°á»£c</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Sá»‘ liá»‡u thá»±c táº¿ tá»« 500+ khÃ¡ch hÃ ng Ä‘ang sá»­ dá»¥ng AI Workflow má»—i ngÃ y.
          </p>
        </motion.div>

        {/* Stat Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative glass-card rounded-2xl p-8 text-center group hover:scale-[1.05] transition-all duration-300 overflow-hidden"
              style={{ border: `1px solid ${stat.color}25` }}
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at center, ${stat.color}10, transparent 70%)` }}
              />

              {/* Top line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
              />

              {/* Number */}
              <div
                className="text-5xl lg:text-6xl font-black mb-3 leading-none"
                style={{ color: stat.color }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>

              <div className="text-white font-bold text-lg mb-1">{stat.label}</div>
              <div className="text-white/50 text-sm">{stat.desc}</div>

              {/* Decorative ring */}
              <div
                className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full opacity-10"
                style={{ border: `2px solid ${stat.color}` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 grid sm:grid-cols-3 gap-4"
        >
          {[
            { label: '500+', desc: 'KhÃ¡ch hÃ ng tin dÃ¹ng' },
            { label: '1M+', desc: 'Videos Ä‘Ã£ Ä‘Æ°á»£c táº¡o' },
            { label: '4.9â˜…', desc: 'ÄÃ¡nh giÃ¡ trung bÃ¬nh' },
          ].map(item => (
            <div key={item.label} className="glass-card rounded-xl py-4 px-6 flex items-center justify-center gap-3 border border-white/5">
              <span className="text-gold font-black text-xl">{item.label}</span>
              <span className="text-white/60 text-sm">{item.desc}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
