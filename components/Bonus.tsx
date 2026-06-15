'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { BookMarked, FileCode2, Users, RefreshCw, Map, Library, ArrowRight } from 'lucide-react'

const bonuses = [
  {
    icon: BookMarked,
    title: 'Prompt Library',
    value: '2,000+ Prompts',
    desc: 'Thư viện hơn 2,000 prompt được tối ưu cho từng loại công việc — content, image, voice, code và hơn thế nữa.',
    color: '#3DA5FF',
    badge: 'Trị Giá 2.000.000đ',
  },
  {
    icon: FileCode2,
    title: 'Workflow Templates',
    value: '100+ Templates',
    desc: 'Bộ sưu tập 100+ workflow templates n8n sẵn sàng import và chạy ngay — tiết kiệm hàng trăm giờ thiết lập.',
    color: '#53D7FF',
    badge: 'Trị Giá 3.000.000đ',
  },
  {
    icon: Users,
    title: 'Private Community',
    value: 'Cộng Đồng VIP',
    desc: 'Tham gia cộng đồng riêng tư với hàng ngàn thành viên — chia sẻ workflow, hỏi đáp và networking.',
    color: '#A98EFF',
    badge: 'Trị Giá 1.000.000đ',
  },
  {
    icon: RefreshCw,
    title: 'Future Updates',
    value: 'Cập Nhật Trọn Đời',
    desc: 'Khóa học liên tục được cập nhật với các AI tool mới nhất. Một lần mua, học mãi mãi.',
    color: '#D4AF37',
    badge: 'Vô Giá',
  },
  {
    icon: Map,
    title: 'Automation Blueprint',
    value: '20+ Blueprints',
    desc: 'Sơ đồ chi tiết cho 20+ hệ thống tự động hóa — từ đơn giản đến phức tạp, sẵn sàng triển khai.',
    color: '#FDCB6E',
    badge: 'Trị Giá 1.500.000đ',
  },
  {
    icon: Library,
    title: 'AI Resource Vault',
    value: '500+ Tài Nguyên',
    desc: 'Kho tài nguyên AI khổng lồ — tool, ebook, case study, video hướng dẫn và tài liệu tham khảo.',
    color: '#55EFC4',
    badge: 'Trị Giá 1.500.000đ',
  },
]

export default function Bonus() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const totalValue = '9.000.000đ'

  return (
    <section id="bonus" ref={ref} className="relative py-24 overflow-hidden" style={{ background: '#0A1022' }}>
      {/* Golden glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.06) 0%, transparent 60%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.3)' }}
          >
            <span className="text-lg">🎁</span>
            <span className="text-gold text-sm font-bold uppercase tracking-wider">Bonus Đặc Biệt</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
            Đăng Ký Hôm Nay Nhận Thêm{' '}
            <span className="gold-shimmer-text">Bonus Khủng</span>
          </h2>
          <div
            className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full"
            style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)' }}
          >
            <span className="text-text-secondary text-sm">Tổng giá trị bonus:</span>
            <span className="text-gold font-extrabold text-lg">{totalValue}</span>
            <span className="text-text-secondary text-sm">— MIỄN PHÍ 100%</span>
          </div>
        </motion.div>

        {/* Bonus grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {bonuses.map((bonus, i) => {
            const Icon = bonus.icon
            return (
              <motion.div
                key={bonus.title}
                initial={{ opacity: 0, y: 30 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative glass-card rounded-[20px] p-6 group hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                style={{ border: `1px solid ${bonus.color}20` }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = `${bonus.color}45`
                  el.style.boxShadow = `0 0 25px ${bonus.color}12`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = `${bonus.color}20`
                  el.style.boxShadow = ''
                }}
              >
                {/* Bonus number */}
                <div className="absolute top-4 right-4 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full"
                  style={{ background: `${bonus.color}18`, color: bonus.color }}>
                  BONUS {String(i + 1).padStart(2, '0')}
                </div>

                <div
                  className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${bonus.color}18` }}
                >
                  <Icon className="w-6 h-6" style={{ color: bonus.color }} />
                </div>

                <h3 className="text-base font-bold text-white mb-1">{bonus.title}</h3>
                <div className="text-sm font-semibold mb-3" style={{ color: bonus.color }}>{bonus.value}</div>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4">{bonus.desc}</p>

                {/* Value badge (gold highlight) */}
                <div
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(212,175,55,0.12)', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.25)' }}
                >
                  <span>✨</span>
                  <span className="line-through text-text-secondary/70 mr-1">{bonus.badge}</span>
                  MIỄN PHÍ
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Final nudge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-text-secondary mb-5">
            🔥 Tất cả bonus trên chỉ dành cho những ai đăng ký <strong className="text-white">trong đợt này</strong>
          </p>
          <button
            onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-[20px] bg-gradient-to-r from-gold to-gold-light text-bg-primary font-bold text-base hover:scale-105 transition-all duration-300 shadow-gold"
          >
            Nhận Ngay Toàn Bộ Bonus
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
