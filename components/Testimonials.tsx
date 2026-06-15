'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Nguyá»…n Minh Tuáº¥n',
    business: 'TikTok Shop â€” Thá»i Trang',
    result: 'TÄƒng 400% doanh thu trong 45 ngÃ y',
    avatar: 'MT',
    avatarBg: '#D4AF37',
    review: 'TrÆ°á»›c Ä‘Ã¢y tÃ´i máº¥t 2 ngÃ y Ä‘á»ƒ lÃ m 1 video. Giá» vá»›i AI Workflow, tÃ´i lÃ m Ä‘Æ°á»£c 30-50 video má»—i ngÃ y. Doanh thu tá»« TikTok Shop cá»§a tÃ´i tÄƒng tá»« 20 triá»‡u lÃªn 80 triá»‡u/thÃ¡ng chá»‰ trong 45 ngÃ y!',
    rating: 5,
    platform: 'TikTok',
  },
  {
    name: 'Tráº§n Thu HÆ°Æ¡ng',
    business: 'Affiliate Marketing â€” Sá»©c Khá»e',
    result: 'Thu nháº­p passive $3,000/thÃ¡ng',
    avatar: 'TH',
    avatarBg: '#9B8AC4',
    review: 'AI Workflow giÃºp tÃ´i scale tá»« 1 channel lÃªn 5 channels cÃ¹ng lÃºc mÃ  khÃ´ng cáº§n thuÃª thÃªm nhÃ¢n viÃªn. Thu nháº­p affiliate cá»§a tÃ´i Ä‘Ã£ Ä‘áº¡t $3,000/thÃ¡ng sau 2 thÃ¡ng sá»­ dá»¥ng.',
    rating: 5,
    platform: 'YouTube',
  },
  {
    name: 'LÃª VÄƒn Nam',
    business: 'BÄS â€” Dá»± Ãn Cao Cáº¥p',
    result: 'Tiáº¿t kiá»‡m 150 triá»‡u chi phÃ­ sáº£n xuáº¥t',
    avatar: 'LN',
    avatarBg: '#4FC3F7',
    review: 'TrÆ°á»›c tÃ´i thuÃª agency sáº£n xuáº¥t video BÄS tá»‘n 15-20 triá»‡u/video. Vá»›i AI Workflow, tÃ´i tá»± táº¡o video chuyÃªn nghiá»‡p vá»›i chi phÃ­ gáº§n nhÆ° báº±ng 0. Tiáº¿t kiá»‡m Ä‘Æ°á»£c hÆ¡n 150 triá»‡u trong 6 thÃ¡ng.',
    rating: 5,
    platform: 'Facebook',
  },
  {
    name: 'Pháº¡m Thá»‹ Lan',
    business: 'Content Creator â€” áº¨m Thá»±c',
    result: 'KÃªnh YouTube 200K subscribers trong 3 thÃ¡ng',
    avatar: 'PL',
    avatarBg: '#FF8A65',
    review: 'TÃ´i lÃ  content creator nghiá»‡p dÆ°, khÃ´ng biáº¿t edit video. AI Workflow giÃºp tÃ´i táº¡o ra nhá»¯ng video áº©m thá»±c chuyÃªn nghiá»‡p. KÃªnh YouTube cá»§a tÃ´i tÄƒng tá»« 0 lÃªn 200K subscribers trong 3 thÃ¡ng!',
    rating: 5,
    platform: 'YouTube',
  },
  {
    name: 'HoÃ ng Äá»©c Thá»‹nh',
    business: 'Digital Marketing Agency',
    result: 'Phá»¥c vá»¥ 20 khÃ¡ch hÃ ng thay vÃ¬ 5',
    avatar: 'HT',
    avatarBg: '#81C784',
    review: 'Agency cá»§a tÃ´i cÃ³ thá»ƒ phá»¥c vá»¥ gáº¥p 4 láº§n sá»‘ khÃ¡ch hÃ ng vá»›i cÃ¹ng Ä‘á»™i ngÅ© nhá» AI Workflow. ChÃºng tÃ´i Ä‘Ã£ tiáº¿t kiá»‡m 80% thá»i gian sáº£n xuáº¥t ná»™i dung vÃ  tÄƒng margin lá»£i nhuáº­n lÃªn 300%.',
    rating: 5,
    platform: 'Multi-platform',
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(p => (p + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #1C2139 0%, #1a1f38 100%)' }}>
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.06) 0%, transparent 60%)',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-gold mb-6">
            <Star className="w-4 h-4 text-gold" fill="currentColor" />
            <span className="text-gold text-sm font-semibold">KhÃ¡ch HÃ ng NÃ³i GÃ¬</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Káº¿t Quáº£ Thá»±c Tá»«{' '}
            <span className="gold-text">KhÃ¡ch HÃ ng Thá»±c</span>
          </h2>
        </motion.div>

        {/* Main testimonial */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative gold-border-card rounded-3xl p-8 lg:p-12 mb-8"
          >
            {/* Quote icon */}
            <Quote className="absolute top-8 right-8 w-12 h-12 text-gold/10" />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold" fill="currentColor" />
              ))}
            </div>

            {/* Review text */}
            <blockquote className="text-white/85 text-lg lg:text-xl leading-relaxed mb-8 font-light italic">
              &ldquo;{t.review}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-primary font-black text-lg flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.avatarBg}, ${t.avatarBg}80)` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-bold text-base">{t.name}</div>
                  <div className="text-white/60 text-sm">{t.business}</div>
                </div>
              </div>
              <div className="glass-card-gold px-4 py-2 rounded-xl">
                <div className="text-gold font-bold text-sm">âœ“ {t.result}</div>
                <div className="text-white/50 text-xs">via {t.platform}</div>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass-card border border-white/10 flex items-center justify-center hover:border-gold/30 hover:text-gold transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    background: i === current ? '#D4AF37' : 'rgba(255,255,255,0.2)',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass-card border border-white/10 flex items-center justify-center hover:border-gold/30 hover:text-gold transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mini testimonial strip */}
          <div className="mt-10 grid grid-cols-5 gap-3">
            {testimonials.map((test, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`p-3 rounded-xl transition-all duration-300 flex flex-col items-center gap-2 ${
                  i === current ? 'glass-card-gold scale-105' : 'glass-card opacity-50 hover:opacity-80'
                }`}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-primary text-xs font-black"
                  style={{ background: test.avatarBg }}
                >
                  {test.avatar}
                </div>
                <span className="text-[10px] text-white/70 text-center hidden sm:block leading-tight">
                  {test.name.split(' ').slice(-1)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
