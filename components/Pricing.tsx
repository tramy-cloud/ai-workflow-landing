'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Star, Zap, Crown, Settings } from 'lucide-react'

const plans = [
  {
    id: 'standard',
    icon: Zap,
    name: 'Workflow Standard',
    price: '1,990,000',
    period: '/thÃ¡ng',
    desc: 'PhÃ¹ há»£p cho cÃ¡ nhÃ¢n vÃ  creator má»›i báº¯t Ä‘áº§u',
    color: '#4FC3F7',
    features: [
      'Tá»‘i Ä‘a 20 video/ngÃ y',
      '3 workflow templates',
      'AI Script + Image + Voice',
      'Xuáº¥t video HD 1080p',
      '1 tÃ i khoáº£n máº¡ng xÃ£ há»™i',
      'Há»— trá»£ email 24/7',
      'Cáº­p nháº­t tÃ­nh nÄƒng má»›i',
    ],
    notIncluded: ['Bulk export', 'ÄÄƒng Ä‘a ná»n táº£ng', 'Custom workflow'],
    popular: false,
    cta: 'Báº¯t Äáº§u Ngay',
  },
  {
    id: 'pro',
    icon: Star,
    name: 'Workflow Pro',
    price: '3,990,000',
    period: '/thÃ¡ng',
    desc: 'Lá»±a chá»n tá»‘t nháº¥t cho marketer vÃ  doanh nghiá»‡p',
    color: '#D4AF37',
    features: [
      'Tá»‘i Ä‘a 100 video/ngÃ y',
      '50+ workflow templates',
      'AI Script + Image + Voice + Video',
      'Xuáº¥t video 4K Ultra HD',
      '10 tÃ i khoáº£n máº¡ng xÃ£ há»™i',
      'Bulk export khÃ´ng giá»›i háº¡n',
      'ÄÄƒng Ä‘a ná»n táº£ng tá»± Ä‘á»™ng',
      'Há»— trá»£ Zalo/Hotline Æ°u tiÃªn',
      'Training 1-on-1 (2h)',
    ],
    notIncluded: ['Custom workflow'],
    popular: true,
    cta: 'ÄÄƒng KÃ½ Pro',
  },
  {
    id: 'custom',
    icon: Crown,
    name: 'Workflow Custom',
    price: 'LiÃªn Há»‡',
    period: '',
    desc: 'Giáº£i phÃ¡p toÃ n diá»‡n cho agency vÃ  doanh nghiá»‡p lá»›n',
    color: '#9B8AC4',
    features: [
      'Video khÃ´ng giá»›i háº¡n',
      'Custom workflow theo yÃªu cáº§u',
      'TÃ­ch há»£p API riÃªng',
      'White-label solution',
      'Quáº£n lÃ½ Ä‘a tÃ i khoáº£n',
      'Dedicated account manager',
      'SLA 99.9% uptime',
      'Onboarding & training team',
      'BÃ¡o cÃ¡o analytics nÃ¢ng cao',
    ],
    notIncluded: [],
    popular: false,
    cta: 'TÆ° Váº¥n Ngay',
  },
]

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [billing] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.06) 0%, transparent 60%)' }}
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-gold mb-6">
            <Settings className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-semibold">Báº£ng GiÃ¡</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Chá»n GÃ³i PhÃ¹ Há»£p{' '}
            <span className="gold-text">Vá»›i Báº¡n</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            KhÃ´ng cÃ³ phÃ­ áº©n. Há»§y báº¥t ká»³ lÃºc nÃ o. HoÃ n tiá»n 100% trong 7 ngÃ y náº¿u khÃ´ng hÃ i lÃ²ng.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-3xl p-7 flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                  plan.popular
                    ? 'gold-border-card shadow-gold'
                    : 'glass-card border border-white/8'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="popular-badge flex items-center gap-1.5">
                      <Star className="w-3 h-3" fill="currentColor" />
                      Phá»• Biáº¿n Nháº¥t
                    </div>
                  </div>
                )}

                {/* Top line for popular */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl"
                    style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
                  />
                )}

                {/* Icon + Name */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${plan.color}18` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: plan.color }} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-base">{plan.name}</div>
                    <div className="text-white/50 text-xs">{plan.desc}</div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/8">
                  <div className="flex items-baseline gap-1">
                    {plan.price === 'LiÃªn Há»‡' ? (
                      <span className="text-3xl font-black" style={{ color: plan.color }}>LiÃªn Há»‡</span>
                    ) : (
                      <>
                        <span className="text-xs text-white/50 mr-1">â‚«</span>
                        <span className="text-4xl font-black" style={{ color: plan.color }}>{plan.price}</span>
                        <span className="text-white/50 text-sm">{plan.period}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: plan.color }} />
                      {f}
                    </li>
                  ))}
                  {plan.notIncluded.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/30 line-through">
                      <div className="w-4 h-4 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-2 h-0.5 bg-white/30 rounded" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-[1.03] ${
                    plan.popular
                      ? 'bg-gradient-to-r from-gold to-gold-soft text-primary hover:shadow-gold'
                      : 'glass-card border hover:border-opacity-50'
                  }`}
                  style={!plan.popular ? { borderColor: `${plan.color}40`, color: plan.color } : {}}
                >
                  {plan.cta}
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* Money back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-white/50 text-sm">
            ðŸ”’ Báº£o máº­t thanh toÃ¡n SSL Â· ðŸ’° HoÃ n tiá»n 100% trong 7 ngÃ y Â· ðŸ†“ Miá»…n phÃ­ onboarding
          </p>
        </motion.div>
      </div>
    </section>
  )
}
