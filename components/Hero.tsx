'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, ChevronDown, Sparkles, Bot, Image, Mic, Video, GitMerge, Layers } from 'lucide-react'

const benefits = [
  'Không cần biết code',
  'Học từ cơ bản đến nâng cao',
  'Học một lần sử dụng lâu dài',
  'Áp dụng thực tế ngay lập tức',
  'Tiết kiệm hàng trăm giờ làm việc',
]

const workflowNodes = [
  { icon: Sparkles, label: 'AI Content', color: '#3DA5FF', delay: 0 },
  { icon: Image, label: 'AI Image', color: '#53D7FF', delay: 0.1 },
  { icon: Mic, label: 'AI Voice', color: '#A98EFF', delay: 0.2 },
  { icon: Video, label: 'AI Video', color: '#3DA5FF', delay: 0.3 },
  { icon: GitMerge, label: 'n8n Flow', color: '#53D7FF', delay: 0.4 },
  { icon: Layers, label: 'Automation', color: '#D4AF37', delay: 0.5 },
]

const floatingStats = [
  { value: '1,000+', label: 'Học Viên', color: '#3DA5FF' },
  { value: '5,000+', label: 'Giờ Tiết Kiệm', color: '#53D7FF' },
  { value: '100+', label: 'Templates', color: '#D4AF37' },
]

export default function Hero() {
  const blobRef1 = useRef<HTMLDivElement>(null)
  const blobRef2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const xPct = (clientX / window.innerWidth - 0.5) * 25
      const yPct = (clientY / window.innerHeight - 0.5) * 25
      if (blobRef1.current) blobRef1.current.style.transform = `translate(${xPct}px, ${yPct}px)`
      if (blobRef2.current) blobRef2.current.style.transform = `translate(${-xPct * 0.6}px, ${-yPct * 0.6}px)`
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: 'radial-gradient(ellipse at 15% 50%, rgba(61,165,255,0.09) 0%, transparent 50%), radial-gradient(ellipse at 85% 15%, rgba(169,142,255,0.07) 0%, transparent 50%), #0A1022',
      }}
    >
      {/* Background glow blobs */}
      <div
        ref={blobRef1}
        className="glow-blob w-[600px] h-[600px] -top-32 -left-32 opacity-20 transition-transform duration-[1200ms] ease-out"
        style={{ background: 'radial-gradient(circle, rgba(61,165,255,0.5) 0%, transparent 65%)' }}
      />
      <div
        ref={blobRef2}
        className="glow-blob w-[500px] h-[500px] bottom-0 -right-32 opacity-15 transition-transform duration-[1200ms] ease-out"
        style={{ background: 'radial-gradient(circle, rgba(169,142,255,0.4) 0%, transparent 65%)' }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-100" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Content ── */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass-card-blue"
            >
              <span className="text-lg">🔥</span>
              <span className="text-accent-blue text-sm font-bold tracking-wider uppercase">AI Workflow Masterclass</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight"
            >
              LÀM CHỦ{' '}
              <span className="hero-gradient-text">AI WORKFLOW</span>
              <br />
              TỰ ĐỘNG HÓA CÔNG VIỆC &
              <br />
              <span className="hero-gradient-text">TẠO THU NHẬP BẰNG AI</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Khóa học thực chiến giúp bạn xây dựng hệ thống AI tự động tạo nội dung, hình ảnh, giọng đọc, video và quy trình kinh doanh <strong className="text-white">mà không cần biết lập trình.</strong>
            </motion.p>

            {/* Benefits */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col gap-2.5 mb-10 max-w-sm mx-auto lg:mx-0"
            >
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm sm:text-base text-white/85">
                  <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0" />
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
                onClick={() => scrollTo('#pricing')}
                className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-[20px] bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-bold text-base hover:shadow-blue-lg hover:scale-105 transition-all duration-300 shadow-blue"
              >
                ĐĂNG KÝ NGAY
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                id="hero-cta-secondary"
                onClick={() => scrollTo('#curriculum')}
                className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-[20px] glass-card border border-card-border/60 text-white font-semibold text-base hover:border-accent-blue/40 hover:bg-accent-blue/5 transition-all duration-300"
              >
                XEM LỘ TRÌNH
                <ChevronDown className="w-5 h-5 text-accent-blue group-hover:translate-y-1 transition-transform" />
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
                {['T', 'M', 'H', 'L', 'A'].map((l, i) => (
                  <div
                    key={l}
                    className="w-8 h-8 rounded-full border-2 border-bg-primary flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: `hsl(${i * 50 + 200}, 70%, 50%)` }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                <span className="text-text-secondary text-xs">1,000+ học viên đã tham gia</span>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: AI Dashboard Mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="relative flex justify-center lg:justify-end animate-float"
          >
            <div className="relative w-full max-w-[480px]">

              {/* Main Dashboard Card */}
              <div
                className="rounded-[20px] p-6 card-glow relative overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(17,28,61,0.95) 0%, rgba(10,16,34,0.98) 100%)',
                  border: '1px solid rgba(61,165,255,0.2)',
                }}
              >
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-text-secondary font-medium">AI Workflow Dashboard</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400">Live</span>
                  </div>
                </div>

                {/* Workflow nodes */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {workflowNodes.map((node, i) => {
                    const Icon = node.icon
                    return (
                      <motion.div
                        key={node.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 + node.delay }}
                        className="rounded-xl p-3 flex flex-col items-center gap-2 group cursor-default card-glow-hover transition-all duration-300"
                        style={{
                          background: `${node.color}10`,
                          border: `1px solid ${node.color}25`,
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ background: `${node.color}20` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: node.color }} />
                        </div>
                        <span className="text-[10px] font-semibold text-white/75 text-center">{node.label}</span>
                        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: node.color }} />
                      </motion.div>
                    )
                  })}
                </div>

                {/* Progress bars */}
                <div className="space-y-2.5">
                  {[
                    { label: 'Content Generation', pct: 92, color: '#3DA5FF' },
                    { label: 'Video Rendering', pct: 75, color: '#53D7FF' },
                    { label: 'Publishing Queue', pct: 88, color: '#A98EFF' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-text-secondary">{item.label}</span>
                        <span className="text-xs font-semibold" style={{ color: item.color }}>{item.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.pct}%` }}
                          transition={{ duration: 1.2, delay: 1.2 }}
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}88)` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom status */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="mt-4 glass-card-blue rounded-xl px-4 py-2.5 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                    <span className="text-xs text-text-secondary">Workflow đang chạy tự động</span>
                  </div>
                  <span className="text-xs text-accent-cyan font-semibold">24/7</span>
                </motion.div>
              </div>

              {/* Floating stat cards */}
              {floatingStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.15 }}
                  className={`absolute glass-card rounded-xl px-3 py-2 text-center ${
                    i === 0 ? '-top-4 -left-8' :
                    i === 1 ? '-bottom-4 -left-4' :
                    '-top-2 -right-6'
                  }`}
                  style={{ border: `1px solid ${stat.color}30` }}
                >
                  <div className="text-base font-bold" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-[10px] text-text-secondary">{stat.label}</div>
                </motion.div>
              ))}

              {/* Orbit rings */}
              <div className="absolute -inset-8 rounded-full border border-accent-blue/5 animate-rotate-slow pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 cursor-pointer"
        onClick={() => scrollTo('#social-proof')}
      >
        <span className="text-xs uppercase tracking-widest">Cuộn xuống</span>
        <div className="w-px h-10 bg-gradient-to-b from-accent-blue/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}
