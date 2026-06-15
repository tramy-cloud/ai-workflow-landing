'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Sparkles, CheckCircle, Phone, User, MessageSquare } from 'lucide-react'

const needs = [
  'Táº¡o video TikTok hÃ ng loáº¡t',
  'Affiliate Marketing',
  'Kinh doanh online',
  'Agency / Dá»‹ch vá»¥',
  'GiÃ¡o dá»¥c / ÄÃ o táº¡o',
  'Báº¥t Ä‘á»™ng sáº£n',
  'ThÆ°Æ¡ng máº¡i Ä‘iá»‡n tá»­',
  'KhÃ¡c',
]

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', phone: '', need: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative overflow-hidden"
      ref={ref}
    >
      {/* Gold gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 40%, transparent 70%), #1C2139',
        }}
      />

      {/* Gold border top */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)' }}
      />

      {/* Floating orbs */}
      <div className="glow-blob w-96 h-96 top-0 right-0 opacity-20 animate-float"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.6) 0%, transparent 70%)' }}
      />
      <div className="glow-blob w-64 h-64 bottom-0 left-0 opacity-15 animate-float-delay"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.5) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-gold mb-8">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-semibold">Báº¯t Äáº§u Miá»…n PhÃ­</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Sáºµn SÃ ng Äá»ƒ{' '}
              <span className="gold-shimmer-text">AI LÃ m Viá»‡c</span>{' '}
              Thay Báº¡n?
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Nháº­n Demo Workflow VÃ  TÆ° Váº¥n Miá»…n PhÃ­ Ngay HÃ´m Nay. Äá»™i ngÅ© chuyÃªn gia cá»§a chÃºng tÃ´i sáº½ tÆ° váº¥n giáº£i phÃ¡p phÃ¹ há»£p nháº¥t vá»›i nhu cáº§u cá»§a báº¡n.
            </p>

            {/* Benefits list */}
            <div className="flex flex-col gap-3 mb-10">
              {[
                'Demo thá»±c táº¿ 1-on-1 vá»›i chuyÃªn gia',
                'TÆ° váº¥n workflow phÃ¹ há»£p ngÃ nh cá»§a báº¡n',
                'Tráº£i nghiá»‡m miá»…n phÃ­ 7 ngÃ y',
                'KhÃ´ng cáº§n tháº» tÃ­n dá»¥ng',
              ].map(b => (
                <div key={b} className="flex items-center gap-3 text-white/80 text-sm">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  {b}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: '500+', desc: 'KhÃ¡ch hÃ ng' },
                { label: '< 10 min', desc: 'Báº¯t Ä‘áº§u ngay' },
                { label: '4.9â˜…', desc: 'ÄÃ¡nh giÃ¡' },
              ].map(s => (
                <div key={s.label} className="glass-card rounded-xl p-3 text-center">
                  <div className="gold-text font-black text-lg">{s.label}</div>
                  <div className="text-white/50 text-xs">{s.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="gold-border-card rounded-3xl p-8 lg:p-10 shadow-gold">
              {!submitted ? (
                <>
                  <h3 className="text-2xl font-black text-white mb-2">Nháº­n Demo Miá»…n PhÃ­</h3>
                  <p className="text-white/60 text-sm mb-8">Äiá»n thÃ´ng tin Ä‘á»ƒ Ä‘Æ°á»£c tÆ° váº¥n trong vÃ²ng 30 phÃºt</p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-white/80 text-sm font-semibold mb-2">
                        Há» VÃ  TÃªn *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder="Nguyá»…n VÄƒn A"
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl glass-card border border-white/10 focus:border-gold/50 focus:outline-none text-white placeholder:text-white/30 text-sm transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-white/80 text-sm font-semibold mb-2">
                        Sá»‘ Äiá»‡n Thoáº¡i *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          placeholder="0901 234 567"
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl glass-card border border-white/10 focus:border-gold/50 focus:outline-none text-white placeholder:text-white/30 text-sm transition-colors"
                        />
                      </div>
                    </div>

                    {/* Need */}
                    <div>
                      <label className="block text-white/80 text-sm font-semibold mb-2">
                        Nhu Cáº§u Cá»§a Báº¡n
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                        <select
                          id="contact-need"
                          value={form.need}
                          onChange={e => setForm({ ...form, need: e.target.value })}
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl glass-card border border-white/10 focus:border-gold/50 focus:outline-none text-white text-sm transition-colors appearance-none"
                          style={{ background: 'rgba(255,255,255,0.04)' }}
                        >
                          <option value="" style={{ background: '#1C2139' }}>Chá»n nhu cáº§u cá»§a báº¡n</option>
                          {needs.map(n => (
                            <option key={n} value={n} style={{ background: '#1C2139' }}>{n}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      id="contact-submit"
                      type="submit"
                      disabled={loading}
                      className="group w-full py-4 rounded-xl bg-gradient-to-r from-gold to-gold-soft text-primary font-black text-base hover:shadow-gold-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:scale-100 mt-2"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
                          Äang xá»­ lÃ½...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                          Nháº­n Workflow Ngay
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-white/30 text-xs">
                      ðŸ”’ ThÃ´ng tin cá»§a báº¡n Ä‘Æ°á»£c báº£o máº­t tuyá»‡t Ä‘á»‘i
                    </p>
                  </form>
                </>
              ) : (
                /* Success state */
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center mx-auto mb-6 gold-pulse">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">ÄÃ£ Nháº­n ThÃ´ng Tin!</h3>
                  <p className="text-white/70 text-base mb-6 leading-relaxed">
                    Cáº£m Æ¡n báº¡n <span className="text-gold font-bold">{form.name}</span>! TÆ° váº¥n viÃªn sáº½ liÃªn há»‡ sá»‘{' '}
                    <span className="text-gold font-bold">{form.phone}</span> trong vÃ²ng 30 phÃºt.
                  </p>
                  <div className="glass-card-gold rounded-2xl p-5">
                    <p className="text-gold font-semibold text-sm">âš¡ Trong khi chá», hÃ£y xem demo workflow â†’</p>
                    <button
                      onClick={() => document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' })}
                      className="mt-3 text-white/70 text-sm hover:text-white transition-colors"
                    >
                      Xem Demo Ngay
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
