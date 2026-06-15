'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { X, Check, ArrowRight } from 'lucide-react'

const transformations = [
  { before: 'Làm thủ công', after: 'Tự xây Workflow' },
  { before: 'Thiếu quy trình', after: 'Tự động hóa công việc' },
  { before: 'Mất thời gian', after: 'Tạo nội dung hàng loạt' },
  { before: 'Không biết AI', after: 'Làm chủ AI' },
]

const timeline = [
  { week: 'Tuần 1-2', label: 'Nền Tảng AI', desc: 'Hiểu tư duy AI workflow và prompt engineering cơ bản', color: '#3DA5FF' },
  { week: 'Tuần 3-4', label: 'Content & Media', desc: 'Tạo nội dung, hình ảnh, giọng đọc bằng AI', color: '#53D7FF' },
  { week: 'Tuần 5-6', label: 'Video & n8n', desc: 'Tự động hóa video và kết nối các hệ thống', color: '#A98EFF' },
  { week: 'Tuần 7-8', label: 'Business Scale', desc: 'Áp dụng workflow vào kinh doanh và tạo thu nhập', color: '#D4AF37' },
]

export default function Transformation() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="transformation"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A1022 0%, #0D1630 50%, #0A1022 100%)',
      }}
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(61,165,255,0.05) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto mb-4">
            <span>✨</span> Sự Thay Đổi
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
            Sau Khóa Học Bạn Sẽ{' '}
            <span className="hero-gradient-text">Đạt Được</span>
          </h2>
        </motion.div>

        {/* Before vs After */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-[1fr,auto,1fr] gap-0 md:gap-4 items-stretch mb-16"
        >
          {/* BEFORE */}
          <div
            className="rounded-[20px] p-6 sm:p-8"
            style={{
              background: 'rgba(255,107,107,0.04)',
              border: '1px solid rgba(255,107,107,0.2)',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-4 h-4 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-red-400">TRƯỚC KHI HỌC</h3>
            </div>
            <div className="space-y-3.5">
              {transformations.map((t) => (
                <div key={t.before} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  <span className="text-white/70 text-sm line-through decoration-red-400/50">{t.before}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow in middle */}
          <div className="flex items-center justify-center py-4 md:py-0">
            <motion.div
              initial={{ scale: 0 }}
              animate={visible ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #3DA5FF, #A98EFF)',
                boxShadow: '0 0 30px rgba(61,165,255,0.4)',
              }}
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </motion.div>
          </div>

          {/* AFTER */}
          <div
            className="rounded-[20px] p-6 sm:p-8"
            style={{
              background: 'rgba(61,165,255,0.04)',
              border: '1px solid rgba(61,165,255,0.25)',
              boxShadow: '0 0 30px rgba(61,165,255,0.06)',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-accent-blue/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-accent-blue" />
              </div>
              <h3 className="text-lg font-bold text-accent-blue">SAU KHI HỌC</h3>
            </div>
            <div className="space-y-3.5">
              {transformations.map((t, i) => (
                <motion.div
                  key={t.after}
                  initial={{ opacity: 0, x: 20 }}
                  animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-accent-cyan/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent-cyan" />
                  </div>
                  <span className="text-white text-sm font-medium">{t.after}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Visual Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-white text-center mb-10">
            Lộ Trình <span className="hero-gradient-text">4 Tuần</span> Đến Làm Chủ AI
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timeline.map((item, i) => (
              <motion.div
                key={item.week}
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.12 }}
                className="relative glass-card rounded-[20px] p-5 group hover:-translate-y-1 transition-all duration-300"
                style={{ border: `1px solid ${item.color}25` }}
              >
                {/* Connector line */}
                {i < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-4 h-0.5 z-10"
                    style={{ background: `linear-gradient(90deg, ${item.color}, ${timeline[i+1].color})` }}
                  />
                )}

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-sm font-bold"
                  style={{ background: `${item.color}20`, color: item.color }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: item.color }}>
                  {item.week}
                </div>
                <h4 className="text-white font-bold text-sm mb-2">{item.label}</h4>
                <p className="text-text-secondary text-xs leading-relaxed">{item.desc}</p>

                {/* Progress dot */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full animate-pulse"
                  style={{ background: item.color }} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
