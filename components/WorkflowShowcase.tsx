'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Video, Youtube, Users, Share2, Target, MessageCircle, Home, Factory, ArrowRight } from 'lucide-react'

const workflows = [
  {
    icon: Video,
    title: 'TikTok Automation',
    desc: 'Tự động tạo và đăng video TikTok mỗi ngày không cần quay tay',
    tags: ['AI Script', 'AI Video', 'Auto Post'],
    color: '#FF6B6B',
    nodes: 5,
  },
  {
    icon: Youtube,
    title: 'YouTube Automation',
    desc: 'Kênh YouTube faceless tạo ra thu nhập thụ động 24/7',
    tags: ['Research', 'Voice', 'Thumbnail'],
    color: '#FF4444',
    nodes: 7,
  },
  {
    icon: Share2,
    title: 'Affiliate Automation',
    desc: 'Hệ thống affiliate tự động từ content đến chuyển đổi',
    tags: ['Content', 'Tracking', 'Scale'],
    color: '#D4AF37',
    nodes: 6,
  },
  {
    icon: Users,
    title: 'Facebook Automation',
    desc: 'Đăng bài, tương tác và xây dựng cộng đồng Facebook tự động',
    tags: ['Post', 'Engage', 'Grow'],
    color: '#3DA5FF',
    nodes: 5,
  },
  {
    icon: Target,
    title: 'Lead Generation',
    desc: 'Thu thập và nurture lead tự động với AI chatbot thông minh',
    tags: ['Capture', 'Nurture', 'Convert'],
    color: '#53D7FF',
    nodes: 8,
  },
  {
    icon: MessageCircle,
    title: 'Customer Support AI',
    desc: 'Chatbot AI xử lý 80% câu hỏi khách hàng không cần nhân viên',
    tags: ['24/7', 'AI Chat', 'CRM'],
    color: '#A98EFF',
    nodes: 4,
  },
  {
    icon: Home,
    title: 'Real Estate Automation',
    desc: 'Workflow tạo listing, hình ảnh và theo dõi khách hàng bất động sản',
    tags: ['Listings', 'Images', 'Leads'],
    color: '#FDCB6E',
    nodes: 6,
  },
  {
    icon: Factory,
    title: 'Content Factory System',
    desc: 'Hệ thống sản xuất nội dung công nghiệp — 100+ bài/tháng tự động',
    tags: ['Bulk', 'Multi-platform', 'SEO'],
    color: '#55EFC4',
    nodes: 9,
  },
]

export default function WorkflowShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="workflow"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A1022 0%, #0D1630 60%, #0A1022 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(169,142,255,0.05) 0%, transparent 60%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-label mx-auto mb-4">
            <span>⚡</span> Workflow Thực Chiến
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
            Những Workflow Bạn Sẽ{' '}
            <span className="hero-gradient-text">Tự Xây Dựng</span>
          </h2>
          <p className="mt-4 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Mỗi workflow là một hệ thống hoàn chỉnh sẵn sàng áp dụng ngay vào công việc thực tế của bạn.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {workflows.map((wf, i) => {
            const Icon = wf.icon
            return (
              <motion.div
                key={wf.title}
                initial={{ opacity: 0, y: 30 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group glass-card rounded-[20px] p-5 sm:p-6 cursor-default transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                style={{ border: `1px solid ${wf.color}20` }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = `${wf.color}45`
                  el.style.boxShadow = `0 0 30px ${wf.color}12, 0 20px 40px rgba(0,0,0,0.3)`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = `${wf.color}20`
                  el.style.boxShadow = ''
                }}
              >
                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 30% 30%, ${wf.color}08 0%, transparent 65%)` }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${wf.color}18` }}
                >
                  <Icon className="w-6 h-6" style={{ color: wf.color }} />
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-white mb-2">{wf.title}</h3>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4">{wf.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {wf.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: `${wf.color}18`, color: wf.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Nodes count */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-secondary">{wf.nodes} nodes</span>
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `${wf.color}20` }}
                  >
                    <ArrowRight className="w-3.5 h-3.5" style={{ color: wf.color }} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-text-secondary text-sm mb-4">
            + Hàng chục workflow khác sẽ được thêm liên tục theo thời gian
          </p>
          <button
            onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-semibold text-sm hover:shadow-blue hover:scale-105 transition-all duration-300"
          >
            Nhận Tất Cả Workflow Templates
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
