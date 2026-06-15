'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Users, BookOpen, CheckCircle, Zap } from 'lucide-react'

const achievements = [
  { icon: Users, value: '1,000+', label: 'Học Viên Được Đào Tạo' },
  { icon: BookOpen, value: '5+ Năm', label: 'Kinh Nghiệm AI & Automation' },
  { icon: Award, value: '50+', label: 'Dự Án Tự Động Hóa' },
  { icon: Zap, value: '100+', label: 'Workflow Templates' },
]

const teachingApproach = [
  'Học qua thực hành — mỗi bài học có demo thực tế',
  'Cộng đồng hỗ trợ 24/7 — không bao giờ học một mình',
  'Cập nhật liên tục — luôn theo kịp AI mới nhất',
  'Hỗ trợ 1-1 khi cần — trực tiếp với giảng viên',
]

export default function Instructor() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="instructor"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A1022 0%, #0D1630 60%, #0A1022 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(61,165,255,0.06) 0%, transparent 60%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-label mx-auto mb-4">
            <span>👨‍💻</span> Giảng Viên
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Người Đồng Hành <span className="hero-gradient-text">Cùng Bạn</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Photo card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-[24px] animate-pulse"
                style={{
                  background: 'linear-gradient(135deg, rgba(61,165,255,0.3), rgba(169,142,255,0.2))',
                  filter: 'blur(20px)',
                  transform: 'scale(1.1)',
                }}
              />

              {/* Profile card */}
              <div
                className="relative glass-card rounded-[24px] p-8 text-center max-w-[320px]"
                style={{ border: '1px solid rgba(61,165,255,0.25)' }}
              >
                {/* Avatar */}
                <div className="relative mx-auto w-28 h-28 rounded-full mb-5 flex items-center justify-center text-3xl font-extrabold text-white"
                  style={{ background: 'linear-gradient(135deg, #3DA5FF, #A98EFF)' }}
                >
                  AI
                  {/* Online badge */}
                  <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-bg-primary" />
                </div>

                <h3 className="text-xl font-extrabold text-white mb-1">Nguyễn Anh Tuấn</h3>
                <p className="text-accent-blue text-sm font-semibold mb-4">AI Workflow Expert & Automation Specialist</p>

                <div className="flex justify-center gap-3 text-xs text-text-secondary">
                  <span className="glass-card-blue px-3 py-1 rounded-full">n8n Expert</span>
                  <span className="glass-card-blue px-3 py-1 rounded-full">AI Creator</span>
                </div>

                {/* Stars */}
                <div className="flex justify-center mt-4 text-yellow-400 text-sm gap-0.5">
                  {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <p className="text-text-secondary text-xs mt-1">4.9 / 5.0 — 1,000+ đánh giá</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              Với hơn <strong className="text-white">5 năm kinh nghiệm</strong> trong lĩnh vực AI automation và digital marketing, mình đã xây dựng hơn 50 hệ thống workflow tự động cho cá nhân, doanh nghiệp và agency tại Việt Nam.
            </p>
            <p className="text-text-secondary text-base leading-relaxed mb-8">
              Phương châm của mình: <strong className="text-white">&ldquo;Không dạy lý thuyết suông — chỉ dạy những gì tôi đang dùng để kiếm tiền.&rdquo;</strong> Mỗi bài học trong khóa này đều là kinh nghiệm thực chiến từ hàng trăm dự án thực tế.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {achievements.map((a, i) => {
                const Icon = a.icon
                return (
                  <motion.div
                    key={a.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={visible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="glass-card-blue rounded-xl p-3.5 flex items-start gap-3"
                  >
                    <Icon className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-bold text-sm">{a.value}</div>
                      <div className="text-text-secondary text-xs">{a.label}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Teaching approach */}
            <div className="glass-card rounded-xl p-5" style={{ border: '1px solid rgba(212,175,55,0.2)' }}>
              <h4 className="text-gold font-bold text-sm uppercase tracking-wider mb-3">Phương Pháp Giảng Dạy</h4>
              <div className="space-y-2.5">
                {teachingApproach.map((t, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <CheckCircle className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
