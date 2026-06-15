'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Trần Minh Khoa',
    role: 'TikTok Creator',
    avatar: 'MK',
    avatarBg: '#3DA5FF',
    stars: 5,
    result: 'Tăng từ 0 lên 50 triệu/tháng',
    text: 'Trước khi học tôi không biết AI là gì. Sau 8 tuần với khóa học này, tôi đã xây được hệ thống TikTok tự động tạo 5-10 video/ngày. Thu nhập tháng đầu tiên đã đạt 20 triệu!',
  },
  {
    name: 'Nguyễn Thị Hương',
    role: 'Affiliate Marketer',
    avatar: 'NH',
    avatarBg: '#D4AF37',
    stars: 5,
    result: 'Thu nhập passive income ổn định',
    text: 'Hệ thống affiliate của tôi giờ chạy hoàn toàn tự động. Tôi chỉ cần check dashboard 30 phút mỗi ngày, còn lại AI lo hết. Tháng vừa rồi thu nhập đạt 35 triệu từ affiliate.',
  },
  {
    name: 'Lê Quang Vinh',
    role: 'Agency Owner',
    avatar: 'QV',
    avatarBg: '#A98EFF',
    stars: 5,
    result: 'Scale agency từ 3 lên 15 khách hàng',
    text: 'Nhờ n8n automation, agency của tôi giờ xử lý được gấp 5 lần lượng khách hàng với cùng số nhân viên. Chi phí vận hành giảm 40%, profit tăng 300%.',
  },
  {
    name: 'Phạm Thu Hà',
    role: 'Content Creator',
    avatar: 'TH',
    avatarBg: '#55EFC4',
    stars: 5,
    result: 'Từ 2 đến 50 bài/tuần tự động',
    text: 'Trước đây tôi mất cả ngày để viết 2-3 bài blog. Bây giờ với AI workflow, tôi tạo được 50+ bài/tuần mà chất lượng còn tốt hơn. Đây là bước ngoặt lớn nhất trong sự nghiệp của tôi.',
  },
  {
    name: 'Đỗ Văn Nam',
    role: 'YouTube Creator',
    avatar: 'VN',
    avatarBg: '#FF6B6B',
    stars: 5,
    result: 'Kênh faceless đạt 100K subscribers',
    text: 'Kênh YouTube faceless của tôi đạt 100K sub sau 6 tháng với quy trình hoàn toàn tự động. Không cần lộ mặt, không cần quay video. AI làm tất cả.',
  },
  {
    name: 'Hoàng Thị Lan',
    role: 'E-commerce Owner',
    avatar: 'HL',
    avatarBg: '#FDCB6E',
    stars: 5,
    result: 'Tiết kiệm 60% chi phí marketing',
    text: 'Tôi dùng AI workflow để tự động hóa toàn bộ marketing cho shop online. Từ content đến ads đến chăm sóc khách hàng — tất cả đều tự động. Chi phí marketing giảm 60%.',
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!autoPlay) return
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(t)
  }, [autoPlay])

  const prev = () => { setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); setAutoPlay(false) }
  const next = () => { setCurrent((c) => (c + 1) % testimonials.length); setAutoPlay(false) }

  const visibleCards = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ]

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A1022 0%, #0D1630 60%, #0A1022 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(61,165,255,0.04) 0%, transparent 65%)' }}
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
            <span>💬</span> Đánh Giá
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Học Viên <span className="hero-gradient-text">Nói Gì</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex text-yellow-400 text-xl">★★★★★</div>
            <span className="text-white font-bold">4.9/5.0</span>
            <span className="text-text-secondary text-sm">từ 1,000+ đánh giá</span>
          </div>
        </motion.div>

        {/* Carousel — desktop 3 cols, mobile 1 col */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Cards row */}
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            <AnimatePresence mode="wait">
              {visibleCards.map((t, i) => (
                <motion.div
                  key={`${t.name}-${current}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`glass-card rounded-[20px] p-6 relative transition-all duration-300 ${
                    i === 0 ? 'md:scale-105 card-glow' : 'opacity-85'
                  }`}
                  style={{ border: `1px solid ${i === 0 ? 'rgba(61,165,255,0.3)' : 'rgba(36,68,122,0.5)'}` }}
                >
                  {/* Quote icon */}
                  <Quote className="w-6 h-6 text-accent-blue/30 absolute top-5 right-5" />

                  {/* Stars */}
                  <div className="flex text-yellow-400 text-sm gap-0.5 mb-4">
                    {Array.from({ length: t.stars }).map((_, si) => <Star key={si} className="w-4 h-4 fill-yellow-400" />)}
                  </div>

                  {/* Result badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4 text-xs font-semibold"
                    style={{ background: 'rgba(61,165,255,0.12)', color: '#3DA5FF', border: '1px solid rgba(61,165,255,0.2)' }}>
                    ✓ {t.result}
                  </div>

                  {/* Text */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>

                  {/* Avatar + name */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-extrabold text-white flex-shrink-0"
                      style={{ background: t.avatarBg }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{t.name}</div>
                      <div className="text-text-secondary text-xs">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              id="testimonial-prev"
              onClick={prev}
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:border-accent-blue/40 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-text-secondary" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setAutoPlay(false) }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    background: i === current ? '#3DA5FF' : 'rgba(255,255,255,0.2)',
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              id="testimonial-next"
              onClick={next}
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:border-accent-blue/40 transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-text-secondary" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
