'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FileText, Image, Mic, Video, LayoutGrid, Share2 } from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Táº¡o Ká»‹ch Báº£n AI',
    desc: 'Tá»± Ä‘á»™ng viáº¿t ká»‹ch báº£n háº¥p dáº«n, tá»‘i Æ°u cho tá»«ng ná»n táº£ng â€” TikTok, YouTube, Reels.',
    color: '#D4AF37',
    tag: 'GPT-4 Powered',
  },
  {
    icon: Image,
    title: 'Táº¡o HÃ¬nh áº¢nh AI',
    desc: 'Sinh hÃ¬nh áº£nh cháº¥t lÆ°á»£ng cao, phÃ¹ há»£p ná»™i dung, khÃ´ng cáº§n Canva hay Photoshop.',
    color: '#81C784',
    tag: 'Midjourney / DALL-E',
  },
  {
    icon: Mic,
    title: 'Táº¡o Giá»ng Äá»c AI',
    desc: 'Giá»ng Ä‘á»c tá»± nhiÃªn, cáº£m xÃºc, hÆ¡n 50 giá»ng Viá»‡t Nam vÃ  quá»‘c táº¿.',
    color: '#FF8A65',
    tag: 'ElevenLabs',
  },
  {
    icon: Video,
    title: 'Táº¡o Video Tá»± Äá»™ng',
    desc: 'GhÃ©p hÃ¬nh, giá»ng Ä‘á»c, nháº¡c ná»n, phá»¥ Ä‘á» â€” video hoÃ n chá»‰nh khÃ´ng cáº§n chá»‰nh sá»­a.',
    color: '#4FC3F7',
    tag: 'AI Video Engine',
  },
  {
    icon: LayoutGrid,
    title: 'Xuáº¥t HÃ ng Loáº¡t',
    desc: 'Táº¡o 10, 20, 50 video cÃ¹ng lÃºc vá»›i má»™t láº§n nháº¥n. Scale ná»™i dung khÃ´ng giá»›i háº¡n.',
    color: '#9B8AC4',
    tag: 'Bulk Export',
  },
  {
    icon: Share2,
    title: 'ÄÄƒng Äa Ná»n Táº£ng',
    desc: 'Tá»± Ä‘á»™ng Ä‘Äƒng lÃªn TikTok, YouTube, Facebook, Instagram theo lá»‹ch Ä‘á»‹nh sáºµn.',
    color: '#E6C76A',
    tag: 'Auto Publish',
  },
]

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #1C2139 0%, #1a1f38 50%, #1C2139 100%)' }}
    >
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
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-semibold">6 TÃ­nh NÄƒng Cá»‘t LÃµi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Má»i CÃ´ng Cá»¥ Báº¡n Cáº§n,{' '}
            <span className="gold-text">TÃ­ch Há»£p Trong 1 Workflow</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            KhÃ´ng cáº§n 10 pháº§n má»m khÃ¡c nhau. Má»™t há»‡ thá»‘ng lÃ m táº¥t cáº£ má»i thá»©.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-7 group hover:scale-[1.03] hover:border-gold/30 transition-all duration-300 relative overflow-hidden"
                style={{ border: `1px solid ${feat.color}20` }}
              >
                {/* Top gradient */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${feat.color}, transparent)` }}
                />

                {/* Icon + tag row */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ background: `${feat.color}18` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: feat.color }} />
                  </div>
                  <span
                    className="text-[10px] font-bold px-2.5 py-1 rounded-lg"
                    style={{ background: `${feat.color}18`, color: feat.color }}
                  >
                    {feat.tag}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{feat.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{feat.desc}</p>

                {/* Hover arrow */}
                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: feat.color }}>
                  <span>KhÃ¡m phÃ¡</span>
                  <span>â†’</span>
                </div>

                {/* Background decoration */}
                <div
                  className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ background: feat.color }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
