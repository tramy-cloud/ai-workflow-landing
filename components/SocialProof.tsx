'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Layout, Clock, Zap } from 'lucide-react'

const stats = [
  { icon: Users, value: 1000, suffix: '+', label: 'Học Viên', color: '#3DA5FF' },
  { icon: Layout, value: 100, suffix: '+', label: 'Workflow Templates', color: '#53D7FF' },
  { icon: Clock, value: 5000, suffix: '+', label: 'Giờ Tiết Kiệm', color: '#A98EFF' },
  { icon: Zap, value: 24, suffix: '/7', label: 'Tự Động Hóa', color: '#D4AF37' },
]

function useCounter(target: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, target, duration])
  return count
}

function StatCard({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) {
  const Icon = stat.icon
  const count = useCounter(stat.value, isVisible)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-[20px] p-6 sm:p-8 flex flex-col items-center text-center card-glow-hover transition-all duration-300 group"
      style={{ border: `1px solid ${stat.color}20` }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
        style={{ background: `${stat.color}18`, border: `1px solid ${stat.color}30` }}
      >
        <Icon className="w-7 h-7" style={{ color: stat.color }} />
      </div>
      <div className="text-4xl sm:text-5xl font-extrabold mb-1.5 tabular-nums" style={{ color: stat.color }}>
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-text-secondary text-sm font-medium">{stat.label}</div>
    </motion.div>
  )
}

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="social-proof"
      ref={ref}
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A1022 0%, #0D1630 50%, #0A1022 100%)',
      }}
    >
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(61,165,255,0.4) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Hơn <span className="hero-gradient-text">1.000+ học viên</span> đã tham gia
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} isVisible={visible} />
          ))}
        </div>

        {/* Platform logos row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {['TikTok', 'YouTube', 'Facebook', 'Instagram', 'Affiliate', 'n8n'].map((platform) => (
            <div key={platform} className="flex items-center gap-2 text-text-secondary/60 text-sm font-medium hover:text-text-secondary transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-blue/50" />
              {platform}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
