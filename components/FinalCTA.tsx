'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, User, Phone, Mail, Loader2 } from 'lucide-react'

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.email) { setError('Vui lòng điền đầy đủ thông tin.'); return }
    if (!/\S+@\S+\.\S+/.test(form.email)) { setError('Email không hợp lệ.'); return }
    setError('')
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Gold gradient background */}
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0A1022 0%, #1a1200 30%, #1a0e00 50%, #0A1022 100%)',
        }}
      />

      {/* Gold radial glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center top, rgba(212,175,55,0.12) 0%, transparent 60%)', filter: 'blur(20px)' }}
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.08) 0%, transparent 70%)' }}
      />

      {/* Top gold line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.3)' }}
            >
              <span>🚀</span>
              <span className="text-gold text-sm font-bold uppercase tracking-wider">Bắt Đầu Ngay Hôm Nay</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
              <span className="text-white">Sẵn Sàng</span>{' '}
              <span className="gold-shimmer-text">Làm Chủ</span>
              <br />
              <span className="text-white">AI Workflow?</span>
            </h2>

            <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8">
              Tham Gia Ngay Hôm Nay Và Bắt Đầu Xây Dựng{' '}
              <strong className="text-white">Hệ Thống Tự Động Hóa Cho Riêng Bạn</strong>
            </p>

            {/* Quick benefits */}
            <div className="space-y-3">
              {[
                'Truy cập ngay sau khi đăng ký',
                'Hỗ trợ setup 1-1 trong 24h đầu',
                'Cộng đồng 1,000+ thành viên hỗ trợ',
                'Hoàn tiền 100% trong 30 ngày',
              ].map((b, i) => (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, x: -20 }}
                  animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm"
                >
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-white/80">{b}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="gold-border-card rounded-[24px] p-10 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-3">Đăng Ký Thành Công! 🎉</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ qua <strong className="text-white">{form.email}</strong> trong vòng 24 giờ để hướng dẫn các bước tiếp theo.
                </p>
                <div
                  className="inline-block text-xs font-bold px-4 py-2 rounded-full"
                  style={{ background: 'rgba(212,175,55,0.15)', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.3)' }}
                >
                  ✓ Kiểm tra email để nhận link truy cập
                </div>
              </motion.div>
            ) : (
              <div
                className="gold-border-card rounded-[24px] p-7 sm:p-8"
              >
                <h3 className="text-lg font-extrabold text-white mb-1">Nhận Ưu Đãi Đặc Biệt</h3>
                <p className="text-text-secondary text-sm mb-6">Điền thông tin để nhận link đăng ký với ưu đãi tốt nhất</p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name */}
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary/60" />
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Họ Và Tên *"
                      value={form.name}
                      onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl text-white text-sm placeholder-text-secondary/50 outline-none transition-all duration-200 focus:ring-1 focus:ring-accent-blue/50"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(36,68,122,0.7)',
                      }}
                      onFocus={(e) => (e.target.parentElement!.querySelector('input')!.style.borderColor = 'rgba(61,165,255,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(36,68,122,0.7)')}
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary/60" />
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="Số Điện Thoại *"
                      value={form.phone}
                      onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl text-white text-sm placeholder-text-secondary/50 outline-none transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(36,68,122,0.7)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(61,165,255,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(36,68,122,0.7)')}
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary/60" />
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="Địa Chỉ Email *"
                      value={form.email}
                      onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl text-white text-sm placeholder-text-secondary/50 outline-none transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(36,68,122,0.7)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(61,165,255,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(36,68,122,0.7)')}
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-xs">{error}</p>
                  )}

                  <button
                    id="final-cta-submit"
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-[16px] bg-gradient-to-r from-gold to-gold-light text-bg-primary font-extrabold text-base hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 shadow-gold disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Đang Xử Lý...
                      </>
                    ) : (
                      <>
                        NHẬN ƯU ĐÃI NGAY
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-center text-text-secondary/50 text-xs mt-4">
                  🔒 Thông tin của bạn được bảo mật tuyệt đối
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
