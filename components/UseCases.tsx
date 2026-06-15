'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shirt, TrendingUp, Building2, Utensils, Plane, Newspaper, GraduationCap } from 'lucide-react'

const categories = [
  {
    icon: Shirt,
    name: 'Thá»i Trang',
    desc: 'Video lookbook, review outfit, hÆ°á»›ng dáº«n phá»‘i Ä‘á»“ tá»± Ä‘á»™ng',
    count: '50+ templates',
    color: '#FF8A9B',
    bg: 'rgba(255,138,155,0.1)',
  },
  {
    icon: TrendingUp,
    name: 'Affiliate Marketing',
    desc: 'Video review sáº£n pháº©m, so sÃ¡nh, hÆ°á»›ng dáº«n mua hÃ ng tá»‘i Æ°u',
    count: '80+ templates',
    color: '#D4AF37',
    bg: 'rgba(212,175,55,0.1)',
  },
  {
    icon: Building2,
    name: 'Báº¥t Äá»™ng Sáº£n',
    desc: 'Video tour cÄƒn há»™, giá»›i thiá»‡u dá»± Ã¡n, phÃ¢n tÃ­ch thá»‹ trÆ°á»ng',
    count: '40+ templates',
    color: '#4FC3F7',
    bg: 'rgba(79,195,247,0.1)',
  },
  {
    icon: Utensils,
    name: 'Äá»“ Ä‚n',
    desc: 'Video recipe, review nhÃ  hÃ ng, food vlog chuyÃªn nghiá»‡p',
    count: '60+ templates',
    color: '#FF8A65',
    bg: 'rgba(255,138,101,0.1)',
  },
  {
    icon: Plane,
    name: 'Du Lá»‹ch',
    desc: 'Vlog du lá»‹ch, review Ä‘á»‹a Ä‘iá»ƒm, travel guide háº¥p dáº«n',
    count: '45+ templates',
    color: '#81C784',
    bg: 'rgba(129,199,132,0.1)',
  },
  {
    icon: Newspaper,
    name: 'Tin Tá»©c',
    desc: 'Báº£n tin tá»•ng há»£p, phÃ¢n tÃ­ch sá»± kiá»‡n, cáº­p nháº­t nhanh',
    count: '35+ templates',
    color: '#9B8AC4',
    bg: 'rgba(155,138,196,0.1)',
  },
  {
    icon: GraduationCap,
    name: 'GiÃ¡o Dá»¥c',
    desc: 'BÃ i giáº£ng, khÃ³a há»c online, ná»™i dung há»c táº­p chuyÃªn sÃ¢u',
    count: '70+ templates',
    color: '#E6C76A',
    bg: 'rgba(230,199,106,0.1)',
  },
]

export default function UseCases() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="usecases" className="py-24 lg:py-32 relative overflow-hidden">
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
            <span className="text-gold text-sm font-semibold">7 LÄ©nh Vá»±c</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            PhÃ¹ Há»£p Vá»›i{' '}
            <span className="gold-text">Má»i NgÃ nh Nghá»</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            HÆ¡n 380+ templates workflow sáºµn cÃ³. Chá»n ngÃ nh cá»§a báº¡n vÃ  báº¯t Ä‘áº§u ngay.
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {categories.map((cat, i) => {
            const Icon = cat.icon
            const isLast = i === categories.length - 1
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`glass-card rounded-2xl p-6 group hover:scale-[1.04] transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  isLast ? 'sm:col-span-2 lg:col-span-1 xl:col-span-2' : ''
                }`}
                style={{ border: `1px solid ${cat.color}20` }}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)` }}
                />

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: cat.bg }}
                >
                  <Icon className="w-7 h-7" style={{ color: cat.color }} />
                </div>

                <h3 className="text-white font-bold text-base mb-2">{cat.name}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4">{cat.desc}</p>

                <div
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-lg"
                  style={{ background: cat.bg, color: cat.color }}
                >
                  <span>ðŸ“¦</span>
                  {cat.count}
                </div>

                {/* Hover glow */}
                <div
                  className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                  style={{ background: cat.color }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
