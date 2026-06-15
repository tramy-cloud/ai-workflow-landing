'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, Brain, DollarSign, Calendar } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    title: 'Máº¥t nhiá»u giá» dá»±ng video',
    desc: 'Má»—i video tá»‘n 3â€“8 giá» Ä‘á»ƒ quay, edit, render. KhÃ´ng Ä‘á»§ thá»i gian lÃ m nhiá»u ná»™i dung.',
    color: '#FF6B6B',
  },
  {
    icon: Brain,
    title: 'Thiáº¿u Ã½ tÆ°á»Ÿng liÃªn tá»¥c',
    desc: 'Má»—i ngÃ y pháº£i nghÄ© ra ná»™i dung má»›i. Bá»‹ "writer\'s block" lÃ m cháº­m tiáº¿n Ä‘á»™ Ä‘Äƒng bÃ i.',
    color: '#9B8AC4',
  },
  {
    icon: DollarSign,
    title: 'Chi phÃ­ thuÃª nhÃ¢n sá»± cao',
    desc: 'Editor, copywriter, designer... tá»‘n hÃ ng chá»¥c triá»‡u má»—i thÃ¡ng mÃ  cháº¥t lÆ°á»£ng khÃ´ng Ä‘á»“ng Ä‘á»u.',
    color: '#FF8A65',
  },
  {
    icon: Calendar,
    title: 'KhÃ´ng Ä‘Äƒng Ä‘á»u ná»™i dung',
    desc: 'Lá»‹ch Ä‘Äƒng bÃ i tháº¥t thÆ°á»ng, thuáº­t toÃ¡n pháº¡t, tÃ i khoáº£n giáº£m reach, doanh thu sá»¥t giáº£m.',
    color: '#4FC3F7',
  },
]

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="problem" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,107,107,0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-red-500/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            <span className="text-red-400 text-sm font-semibold">Váº¥n Äá» Phá»• Biáº¿n</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Táº¡i Sao Äa Sá»‘ NgÆ°á»i LÃ m Ná»™i Dung{' '}
            <span className="text-red-400">Äá»u Bá»‹ QuÃ¡ Táº£i?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Báº¡n khÃ´ng Ä‘Æ¡n Ä‘á»™c. ÄÃ¢y lÃ  nhá»¯ng váº¥n Ä‘á» mÃ  95% content creator gáº·p pháº£i má»—i ngÃ y.
          </p>
        </motion.div>

        {/* Pain Point Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-7 group hover:scale-[1.03] transition-all duration-300 relative overflow-hidden"
                style={{ border: `1px solid ${p.color}20` }}
              >
                {/* Background glow */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ background: `radial-gradient(circle, ${p.color}, transparent)`, transform: 'translate(30%, -30%)' }}
                />

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: `${p.color}18` }}
                >
                  <Icon className="w-7 h-7" style={{ color: p.color }} />
                </div>

                <h3 className="text-white font-bold text-base mb-3 leading-snug">{p.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>

                {/* Decorative corner */}
                <div
                  className="absolute bottom-4 right-4 text-3xl opacity-10 font-black"
                  style={{ color: p.color }}
                >
                  âœ•
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-white/50 text-base">
            Tin vui lÃ  â€” <span className="text-gold font-semibold">táº¥t cáº£ nhá»¯ng váº¥n Ä‘á» nÃ y Ä‘á»u cÃ³ thá»ƒ giáº£i quyáº¿t</span> báº±ng AI Workflow.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
