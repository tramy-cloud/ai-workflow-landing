'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Brain, DollarSign, GitBranch, TrendingDown, Users } from 'lucide-react'

const painPoints = [
  {
    icon: Clock,
    title: 'Mất nhiều giờ tạo nội dung',
    desc: 'Mỗi video mất 4-8 giờ để lên ý tưởng, viết kịch bản, quay và edit thủ công.',
    color: '#FF6B6B',
  },
  {
    icon: Brain,
    title: 'Không biết tận dụng AI',
    desc: 'Biết AI tồn tại nhưng không biết cách kết nối các công cụ để tạo thành quy trình hiệu quả.',
    color: '#FF9F43',
  },
  {
    icon: DollarSign,
    title: 'Tốn chi phí nhân sự',
    desc: 'Phải thuê editor, copywriter, designer tốn hàng chục triệu mỗi tháng mà kết quả không ổn định.',
    color: '#FFC312',
  },
  {
    icon: GitBranch,
    title: 'Không có hệ thống tự động',
    desc: 'Mọi việc đều phụ thuộc vào bạn. Ngừng làm là ngừng thu nhập.',
    color: '#A29BFE',
  },
  {
    icon: TrendingDown,
    title: 'Khó mở rộng công việc',
    desc: 'Muốn scale nhưng không biết bắt đầu từ đâu và sợ mắc sai lầm tốn kém.',
    color: '#74B9FF',
  },
  {
    icon: Users,
    title: 'Phụ thuộc vào người khác',
    desc: 'Mỗi khi freelancer hay nhân viên nghỉ là toàn bộ hệ thống bị ảnh hưởng.',
    color: '#55EFC4',
  },
]

export default function Problem() {
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
      id="problem"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: '#0A1022' }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(255,107,107,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto mb-4">
            <span>⚠️</span> Vấn Đề Phổ Biến
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
            Bạn Đang Mắc Kẹt Trong{' '}
            <span className="text-[#FF6B6B]">Vòng Lặp</span>{' '}
            Làm Việc Thủ Công?
          </h2>
          <p className="mt-4 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Đây là những vấn đề mà 90% người làm nội dung và kinh doanh online đang gặp phải mỗi ngày.
          </p>
        </motion.div>

        {/* Pain Point Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children" data-visible={visible}>
          {painPoints.map((point, i) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group glass-card rounded-[20px] p-6 sm:p-7 transition-all duration-300 hover:scale-[1.02] cursor-default"
                style={{
                  border: `1px solid ${point.color}20`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${point.color}40`
                  ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${point.color}15`
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${point.color}20`
                  ;(e.currentTarget as HTMLElement).style.boxShadow = ''
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${point.color}18` }}
                >
                  <Icon className="w-6 h-6" style={{ color: point.color }} />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{point.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{point.desc}</p>

                {/* Decorative corner */}
                <div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-60"
                  style={{ background: point.color }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Bridge to solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-white/70">
            Nếu bạn nhận ra mình trong ít nhất <span className="text-white font-bold">1 vấn đề trên</span>,{' '}
            khóa học này chính là giải pháp bạn cần. 👇
          </p>
        </motion.div>
      </div>
    </section>
  )
}
