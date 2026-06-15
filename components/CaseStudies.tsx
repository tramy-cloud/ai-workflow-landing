'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Clock, DollarSign, BarChart3 } from 'lucide-react'

const cases = [
  {
    name: 'Minh Tuấn',
    role: 'TikTok Creator',
    avatar: 'MT',
    avatarBg: '#3DA5FF',
    before: { views: '2K', income: '0đ', time: '8h/ngày' },
    after: { views: '500K', income: '15M+', time: '2h/ngày' },
    quote: 'Từ khi áp dụng AI Workflow, kênh TikTok của mình đã tăng từ 2K lên 500K views/tháng. Thu nhập tăng gấp 10 lần trong 2 tháng!',
    metric: '+2400% Views',
    metricColor: '#3DA5FF',
    workflow: 'TikTok Automation',
    period: '2 tháng',
  },
  {
    name: 'Hoa Nguyễn',
    role: 'Affiliate Marketer',
    avatar: 'HN',
    avatarBg: '#D4AF37',
    before: { views: '5K', income: '2M', time: '6h/ngày' },
    after: { views: '200K', income: '45M+', time: '3h/ngày' },
    quote: 'Hệ thống affiliate tự động chạy 24/7, mình chỉ cần theo dõi dashboard. Thu nhập tháng này vừa đạt 45 triệu!',
    metric: '+2150% Revenue',
    metricColor: '#D4AF37',
    workflow: 'Affiliate Automation',
    period: '3 tháng',
  },
  {
    name: 'Lê Văn Đức',
    role: 'Agency Owner',
    avatar: 'LĐ',
    avatarBg: '#A98EFF',
    before: { views: '-', income: '20M', time: '10h/ngày' },
    after: { views: '-', income: '150M+', time: '4h/ngày' },
    quote: 'Agency của mình giờ phục vụ được 3x số khách hàng với cùng số nhân viên. AI automation là chìa khóa.',
    metric: '+650% Revenue',
    metricColor: '#A98EFF',
    workflow: 'Business Automation',
    period: '4 tháng',
  },
]

function CaseCard({ c, i, visible }: { c: typeof cases[0]; i: number; visible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.15 }}
      className="glass-card rounded-[20px] p-6 sm:p-7 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
      style={{ border: `1px solid ${c.metricColor}20` }}
    >
      {/* Top metric badge */}
      <div
        className="absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full"
        style={{ background: `${c.metricColor}20`, color: c.metricColor }}
      >
        {c.metric}
      </div>

      {/* Avatar + name */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-extrabold text-white flex-shrink-0"
          style={{ background: c.avatarBg }}
        >
          {c.avatar}
        </div>
        <div>
          <div className="text-white font-bold text-base">{c.name}</div>
          <div className="text-text-secondary text-xs">{c.role}</div>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-text-secondary text-sm leading-relaxed mb-5 italic">
        &ldquo;{c.quote}&rdquo;
      </blockquote>

      {/* Before / After metrics */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="rounded-xl p-3" style={{ background: 'rgba(255,107,107,0.06)', border: '1px solid rgba(255,107,107,0.15)' }}>
          <div className="text-[10px] uppercase text-red-400/70 font-semibold mb-2">Trước</div>
          <div className="space-y-1">
            {c.before.views !== '-' && (
              <div className="flex items-center gap-1.5 text-xs text-white/60">
                <BarChart3 className="w-3 h-3 text-red-400/60" /> {c.before.views} views
              </div>
            )}
            <div className="flex items-center gap-1.5 text-xs text-white/60">
              <DollarSign className="w-3 h-3 text-red-400/60" /> {c.before.income}/tháng
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/60">
              <Clock className="w-3 h-3 text-red-400/60" /> {c.before.time}
            </div>
          </div>
        </div>
        <div
          className="rounded-xl p-3"
          style={{ background: `${c.metricColor}08`, border: `1px solid ${c.metricColor}20` }}
        >
          <div className="text-[10px] uppercase font-semibold mb-2" style={{ color: c.metricColor }}>Sau</div>
          <div className="space-y-1">
            {c.after.views !== '-' && (
              <div className="flex items-center gap-1.5 text-xs text-white font-medium">
                <BarChart3 className="w-3 h-3" style={{ color: c.metricColor }} /> {c.after.views} views
              </div>
            )}
            <div className="flex items-center gap-1.5 text-xs text-white font-medium">
              <DollarSign className="w-3 h-3" style={{ color: c.metricColor }} /> {c.after.income}/tháng
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white font-medium">
              <Clock className="w-3 h-3" style={{ color: c.metricColor }} /> {c.after.time}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom info */}
      <div className="flex items-center justify-between text-xs text-text-secondary pt-3 border-t border-white/5">
        <span className="flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5" style={{ color: c.metricColor }} />
          {c.workflow}
        </span>
        <span>{c.period}</span>
      </div>
    </motion.div>
  )
}

export default function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="case-studies" ref={ref} className="relative py-24 overflow-hidden" style={{ background: '#0A1022' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.04) 0%, transparent 60%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-label mx-auto mb-4">
            <span>📊</span> Case Study Thực Tế
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Kết Quả{' '}
            <span className="hero-gradient-text">Thực Tế</span>{' '}
            Từ Học Viên
          </h2>
          <p className="mt-4 text-text-secondary text-base max-w-2xl mx-auto">
            Những con số này không phải hứa hẹn — đây là kết quả thực tế của học viên sau khi áp dụng AI Workflow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <CaseCard key={c.name} c={c} i={i} visible={visible} />
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-text-secondary/50 text-xs mt-8"
        >
          * Kết quả có thể khác nhau tùy thuộc vào nỗ lực và hoàn cảnh của từng người.
        </motion.p>
      </div>
    </section>
  )
}
