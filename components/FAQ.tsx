'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'AI Workflow lÃ  gÃ¬ vÃ  hoáº¡t Ä‘á»™ng nhÆ° tháº¿ nÃ o?',
    a: 'AI Workflow lÃ  há»‡ thá»‘ng tá»± Ä‘á»™ng hÃ³a sáº£n xuáº¥t ná»™i dung video sá»­ dá»¥ng trÃ­ tuá»‡ nhÃ¢n táº¡o. Báº¡n chá»‰ cáº§n nháº­p 1 Ã½ tÆ°á»Ÿng hoáº·c tá»« khÃ³a, há»‡ thá»‘ng sáº½ tá»± Ä‘á»™ng nghiÃªn cá»©u, viáº¿t ká»‹ch báº£n, táº¡o hÃ¬nh áº£nh, giá»ng Ä‘á»c vÃ  render video hoÃ n chá»‰nh trong vÃ i phÃºt.',
  },
  {
    q: 'TÃ´i khÃ´ng biáº¿t cÃ´ng nghá»‡, cÃ³ dÃ¹ng Ä‘Æ°á»£c khÃ´ng?',
    a: 'HoÃ n toÃ n cÃ³! AI Workflow Ä‘Æ°á»£c thiáº¿t káº¿ cho ngÆ°á»i khÃ´ng cÃ³ ká»¹ nÄƒng ká»¹ thuáº­t. Giao diá»‡n kÃ©o-tháº£ Ä‘Æ¡n giáº£n, cÃ³ video hÆ°á»›ng dáº«n tá»«ng bÆ°á»›c vÃ  Ä‘á»™i ngÅ© há»— trá»£ 24/7 qua Zalo.',
  },
  {
    q: 'Má»™t ngÃ y tÃ´i cÃ³ thá»ƒ táº¡o Ä‘Æ°á»£c bao nhiÃªu video?',
    a: 'TÃ¹y gÃ³i: Standard 20 video/ngÃ y, Pro 100 video/ngÃ y, Custom khÃ´ng giá»›i háº¡n. Má»™t khÃ¡ch hÃ ng cá»§a chÃºng tÃ´i Ä‘Ã£ táº¡o 200 video trong 1 ngÃ y Ä‘á»ƒ chuáº©n bá»‹ ná»™i dung cho cáº£ thÃ¡ng!',
  },
  {
    q: 'Video cháº¥t lÆ°á»£ng cÃ³ cao khÃ´ng? TikTok/YouTube cÃ³ cháº¥p nháº­n khÃ´ng?',
    a: 'Video xuáº¥t ra Ä‘áº¡t chuáº©n HD 1080p (Pro: 4K). ÄÃ£ Ä‘Æ°á»£c kiá»ƒm chá»©ng Ä‘Äƒng thÃ nh cÃ´ng trÃªn TikTok, YouTube, Facebook, Instagram. Nhiá»u khÃ¡ch hÃ ng Ä‘áº¡t triá»‡u view tá»« video AI cá»§a chÃºng tÃ´i.',
  },
  {
    q: 'TÃ´i cÃ³ thá»ƒ dÃ¹ng AI Workflow cho nhiá»u lÄ©nh vá»±c khÃ¡c nhau khÃ´ng?',
    a: 'CÃ³! Há»‡ thá»‘ng cÃ³ 380+ templates cho 7 lÄ©nh vá»±c: Thá»i trang, Affiliate, BÄS, áº¨m thá»±c, Du lá»‹ch, Tin tá»©c, GiÃ¡o dá»¥c. Báº¡n cÃ³ thá»ƒ dÃ¹ng cho nhiá»u lÄ©nh vá»±c cÃ¹ng lÃºc.',
  },
  {
    q: 'Giá»ng Ä‘á»c AI cÃ³ tá»± nhiÃªn khÃ´ng? CÃ³ giá»ng tiáº¿ng Viá»‡t khÃ´ng?',
    a: 'Há»‡ thá»‘ng tÃ­ch há»£p ElevenLabs vá»›i 50+ giá»ng Ä‘á»c tiáº¿ng Viá»‡t tá»± nhiÃªn, bao gá»“m giá»ng Nam, giá»ng Ná»¯, giá»ng tráº» em, phong cÃ¡ch tin tá»©c, friendly... Háº§u háº¿t ngÆ°á»i xem khÃ´ng nháº­n ra Ä‘Ã¢y lÃ  AI.',
  },
  {
    q: 'TÃ´i cÃ³ thá»ƒ tÃ¹y chá»‰nh workflow theo yÃªu cáº§u riÃªng khÃ´ng?',
    a: 'GÃ³i Pro cÃ³ thá»ƒ chá»‰nh sá»­a cÃ¡c template cÃ³ sáºµn. GÃ³i Custom cho phÃ©p xÃ¢y dá»±ng workflow hoÃ n toÃ n má»›i theo yÃªu cáº§u riÃªng cá»§a báº¡n, ká»ƒ cáº£ tÃ­ch há»£p vá»›i há»‡ thá»‘ng hiá»‡n cÃ³.',
  },
  {
    q: 'Thá»i gian onboarding vÃ  há»c máº¥t bao lÃ¢u?',
    a: 'Pháº§n lá»›n khÃ¡ch hÃ ng táº¡o Ä‘Æ°á»£c video Ä‘áº§u tiÃªn trong 30 phÃºt sau khi Ä‘Äƒng kÃ½. CÃ³ video tutorial Ä‘áº§y Ä‘á»§, tÃ i liá»‡u hÆ°á»›ng dáº«n, vÃ  session 1-on-1 vá»›i gÃ³i Pro Ä‘á»ƒ Ä‘áº£m báº£o báº¡n dÃ¹ng hiá»‡u quáº£ ngay.',
  },
  {
    q: 'Náº¿u khÃ´ng hÃ i lÃ²ng, tÃ´i cÃ³ Ä‘Æ°á»£c hoÃ n tiá»n khÃ´ng?',
    a: 'CÃ³! ChÃºng tÃ´i cam káº¿t hoÃ n tiá»n 100% trong vÃ²ng 7 ngÃ y náº¿u báº¡n khÃ´ng hÃ i lÃ²ng vá»›i sáº£n pháº©m, khÃ´ng cáº§n giáº£i thÃ­ch lÃ½ do. ChÃºng tÃ´i tá»± tin vÃ o cháº¥t lÆ°á»£ng sáº£n pháº©m.',
  },
  {
    q: 'TÃ´i cÃ³ thá»ƒ dÃ¹ng thá»­ miá»…n phÃ­ khÃ´ng?',
    a: 'CÃ³! ÄÄƒng kÃ½ Demo miá»…n phÃ­ Ä‘á»ƒ tráº£i nghiá»‡m há»‡ thá»‘ng trong 7 ngÃ y vá»›i Ä‘áº§y Ä‘á»§ tÃ­nh nÄƒng cá»§a gÃ³i Pro. KhÃ´ng cáº§n tháº» tÃ­n dá»¥ng. Sau Ä‘Ã³ má»›i quyáº¿t Ä‘á»‹nh cÃ³ nÃ¢ng cáº¥p hay khÃ´ng.',
  },
]

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-gold mb-6">
            <HelpCircle className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-semibold">CÃ¢u Há»i ThÆ°á»ng Gáº·p</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Báº¡n Äang Tháº¯c Máº¯c <span className="gold-text">Äiá»u GÃ¬?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Nhá»¯ng cÃ¢u há»i phá»• biáº¿n nháº¥t tá»« khÃ¡ch hÃ ng cá»§a chÃºng tÃ´i.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i ? 'border-gold/30' : 'border-white/5'
              } border`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 lg:p-6 text-left gap-4 hover:bg-white/2 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black"
                    style={{
                      background: open === i ? 'linear-gradient(135deg, #D4AF37, #E6C76A)' : 'rgba(255,255,255,0.06)',
                      color: open === i ? '#1C2139' : 'rgba(255,255,255,0.5)',
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className={`font-semibold text-sm lg:text-base ${open === i ? 'text-white' : 'text-white/80'}`}>
                    {faq.q}
                  </span>
                </div>
                <ChevronDown
                  className="w-5 h-5 flex-shrink-0 transition-transform duration-300 text-gold"
                  style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0)' }}
                />
              </button>

              <div className={`accordion-content ${open === i ? 'open' : ''}`}>
                <div className="px-5 lg:px-6 pb-5 pt-0">
                  <div className="ml-11 pl-0">
                    <p className="text-white/65 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-white/50 text-sm mb-4">Váº«n cÃ²n tháº¯c máº¯c?</p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card-gold text-gold font-semibold text-sm hover:shadow-gold transition-all hover:scale-105"
          >
            ðŸ’¬ Chat vá»›i tÆ° váº¥n viÃªn ngay
          </button>
        </motion.div>
      </div>
    </section>
  )
}
