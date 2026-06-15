'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play, ChevronRight } from 'lucide-react'

const tabs = [
  {
    id: 'before',
    label: 'TrÆ°á»›c',
    emoji: 'ðŸ˜«',
    title: 'Quy trÃ¬nh thá»§ cÃ´ng cÅ©',
    desc: 'Má»—i video tá»‘n 5â€“8 giá» lÃ m thá»§ cÃ´ng: viáº¿t ká»‹ch báº£n â†’ tÃ¬m áº£nh â†’ thu Ã¢m â†’ edit â†’ render â†’ Ä‘Äƒng',
    items: ['âœ— 5â€“8 giá» má»—i video', 'âœ— Chi phÃ­ cao', 'âœ— KhÃ´ng Ä‘á»“ng Ä‘á»u cháº¥t lÆ°á»£ng', 'âœ— Burn out creator'],
    color: '#FF6B6B',
    bg: 'rgba(255,107,107,0.08)',
  },
  {
    id: 'process',
    label: 'Quy TrÃ¬nh AI',
    emoji: 'âš¡',
    title: 'AI Workflow xá»­ lÃ½ tá»± Ä‘á»™ng',
    desc: 'Chá»‰ cáº§n nháº­p 1 Ã½ tÆ°á»Ÿng â†’ AI tá»± Ä‘á»™ng hoÃ n thÃ nh toÃ n bá»™ quy trÃ¬nh sáº£n xuáº¥t ná»™i dung.',
    items: ['â†’ AI Research (10s)', 'â†’ AI Script (20s)', 'â†’ AI Images (30s)', 'â†’ AI Voice + Video (2 min)'],
    color: '#D4AF37',
    bg: 'rgba(212,175,55,0.08)',
  },
  {
    id: 'after',
    label: 'Sau',
    emoji: 'ðŸš€',
    title: 'Káº¿t quáº£ sau khi dÃ¹ng AI Workflow',
    desc: '50+ video má»—i ngÃ y, Ä‘Äƒng Ä‘á»u 3â€“5 ná»n táº£ng, tÄƒng trÆ°á»Ÿng reach x10 trong 30 ngÃ y Ä‘áº§u.',
    items: ['âœ“ < 10 phÃºt má»—i video', 'âœ“ 50+ videos/ngÃ y', 'âœ“ Doanh thu tÄƒng 300%', 'âœ“ Tá»± Ä‘á»™ng 24/7'],
    color: '#4CAF50',
    bg: 'rgba(76,175,80,0.08)',
  },
]

export default function Demo() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState('process')
  const [isPlaying, setIsPlaying] = useState(false)

  const active = tabs.find(t => t.id === activeTab)!

  return (
    <section id="demo" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 80% 50%, rgba(212,175,55,0.05) 0%, transparent 60%)',
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
            <Play className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-semibold">Demo Thá»±c Táº¿</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Xem Workflow Hoáº¡t Äá»™ng{' '}
            <span className="gold-text">Thá»±c Táº¿</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Tá»« 0 Ä‘áº¿n video hoÃ n chá»‰nh trong chÆ°a Ä‘áº§y 10 phÃºt â€” ngay trÆ°á»›c máº¯t báº¡n.
          </p>
        </motion.div>

        {/* Tab selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="flex gap-2 glass-card p-1.5 rounded-2xl">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-primary shadow-lg'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
                style={activeTab === tab.id ? {
                  background: `linear-gradient(135deg, ${active.color}, ${active.color}99)`
                } : {}}
              >
                <span>{tab.emoji}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Video Player + Info */}
        <div className="grid lg:grid-cols-5 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Video player */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="video-player aspect-video relative">
              {/* Simulated video screen */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: `radial-gradient(ellipse at center, ${active.bg}, rgba(0,0,0,0.7))` }}
              >
                {/* Play button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${active.color}, ${active.color}80)` }}
                >
                  {isPlaying ? (
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-8 rounded-sm bg-primary" />
                      <div className="w-2.5 h-8 rounded-sm bg-primary" />
                    </div>
                  ) : (
                    <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                  )}
                </button>

                {/* Floating labels */}
                <div className="absolute top-4 left-4 text-3xl">{active.emoji}</div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-primary"
                  style={{ background: active.color }}>
                  {isPlaying ? 'â— LIVE' : 'DEMO'}
                </div>

                {/* Bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1 rounded-full bg-white/20">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: isPlaying ? '65%' : '0%', background: active.color }}
                      />
                    </div>
                    <span className="text-white/60 text-xs">2:34 / 3:58</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls bar */}
            <div className="mt-3 flex items-center justify-between glass-card rounded-xl px-5 py-3">
              <span className="text-white/60 text-sm">{active.title}</span>
              <button className="flex items-center gap-1.5 text-gold text-sm font-semibold hover:text-gold-soft transition-colors">
                Xem Full <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Info panel */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="glass-card rounded-2xl p-6 flex-1"
              style={{ border: `1px solid ${active.color}25` }}>
              <div className="text-4xl mb-4">{active.emoji}</div>
              <h3 className="text-white font-bold text-lg mb-3">{active.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">{active.desc}</p>

              <ul className="flex flex-col gap-2.5">
                {active.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-medium"
                    style={{ color: active.color }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: active.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-4 rounded-xl font-bold text-sm text-primary transition-all hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${active.color}, ${active.color}99)` }}
            >
              DÃ¹ng Thá»­ Miá»…n PhÃ­ â†’
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
