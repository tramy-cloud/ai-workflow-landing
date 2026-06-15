'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Check, Zap, Users, RefreshCw, Layout, Gift, ArrowRight, Shield } from 'lucide-react'

const features = [
  { icon: Zap, text: 'Truy cập toàn bộ 10 Module & 84+ bài học' },
  { icon: RefreshCw, text: 'Cập nhật trọn đời — không mất phí thêm' },
  { icon: Users, text: 'Cộng đồng Private VIP' },
  { icon: Layout, text: '100+ Workflow Templates n8n' },
  { icon: Gift, text: 'Toàn bộ 6 bonus đặc biệt (trị giá 9tr)' },
  { icon: Shield, text: '30 ngày hoàn tiền — không câu hỏi' },
]

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    const update = () => {
      const diff = targetDate.getTime() - Date.now()
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    update()
    const t = setInterval(update, 1000)
    return () => clearInterval(t)
  }, [targetDate])
  return timeLeft
}

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  // Countdown to 3 days from render
  const target = useRef(new Date(Date.now() + 3 * 86400000))
  const countdown = useCountdown(target.current)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: '#0A1022' }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.07) 0%, transparent 60%)' }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span>💎</span>
            <span className="text-gold text-sm font-bold uppercase tracking-wider">Học Phí</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Đầu Tư Cho Kỹ Năng{' '}
            <span className="hero-gradient-text">Của Tương Lai</span>
          </h2>
          <p className="mt-4 text-text-secondary text-base max-w-xl mx-auto">
            Một lần đầu tư, sử dụng mãi mãi. Tiết kiệm hàng chục triệu chi phí và hàng nghìn giờ làm việc.
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center mb-10"
        >
          <p className="text-sm text-text-secondary mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            Ưu đãi kết thúc sau:
          </p>
          <div className="flex items-center gap-3">
            {[
              { val: pad(countdown.days), label: 'Ngày' },
              { val: pad(countdown.hours), label: 'Giờ' },
              { val: pad(countdown.minutes), label: 'Phút' },
              { val: pad(countdown.seconds), label: 'Giây' },
            ].map((unit, i) => (
              <div key={unit.label} className="flex items-center gap-3">
                <div className="countdown-digit">
                  <div className="text-2xl font-extrabold text-white tabular-nums">{unit.val}</div>
                  <div className="text-[10px] text-text-secondary">{unit.label}</div>
                </div>
                {i < 3 && <span className="text-accent-blue text-xl font-bold">:</span>}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative gold-border-card rounded-[24px] p-8 sm:p-10 overflow-hidden"
        >
          {/* Gold glow corners */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

          {/* Popular badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <div className="popular-badge">⭐ BEST VALUE — KHUYÊN DÙNG</div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-extrabold text-white mb-2">Khóa Học AI Workflow Mastery</h3>
            <p className="text-text-secondary text-sm">Trọn bộ khóa học + toàn bộ bonus</p>
          </div>

          {/* Price */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="text-center">
              <span className="text-text-secondary/60 text-lg line-through">3.999.000đ</span>
              <div className="flex items-baseline gap-1 justify-center">
                <span className="text-5xl sm:text-6xl font-extrabold gold-shimmer-text">1.499.000</span>
                <span className="text-gold text-xl font-bold">đ</span>
              </div>
              <div
                className="inline-block mt-2 text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: 'rgba(255,107,107,0.15)', color: '#FF6B6B', border: '1px solid rgba(255,107,107,0.3)' }}
              >
                TIẾT KIỆM 2.500.000đ — 63% OFF
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-accent-blue/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent-cyan" />
                  </div>
                  <span className="text-white/85 text-sm leading-snug">{f.text}</span>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <button
            id="pricing-cta"
            onClick={scrollToContact}
            className="w-full py-5 rounded-[20px] bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-extrabold text-lg hover:shadow-blue-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 shadow-blue"
          >
            ĐĂNG KÝ NGAY
            <ArrowRight className="w-6 h-6" />
          </button>

          {/* Guarantee */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <Shield className="w-4 h-4 text-green-400" />
            <p className="text-text-secondary text-xs text-center">
              Bảo đảm hoàn tiền 100% trong 30 ngày nếu không hài lòng
            </p>
          </div>

          {/* Payment note */}
          <p className="text-center text-text-secondary/50 text-xs mt-3">
            Thanh toán an toàn qua VNPay, Momo, Chuyển khoản, Thẻ tín dụng
          </p>
        </motion.div>

        {/* FAQ teaser */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-text-secondary text-sm mt-8"
        >
          Còn thắc mắc?{' '}
          <button
            onClick={() => document.querySelector('#faq')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-accent-blue hover:underline"
          >
            Xem câu hỏi thường gặp →
          </button>
        </motion.p>
      </div>
    </section>
  )
}
