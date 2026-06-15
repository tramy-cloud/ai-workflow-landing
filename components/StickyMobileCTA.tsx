'use client'

import { Sparkles, Phone } from 'lucide-react'

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div
        className="px-4 py-3 flex gap-3 border-t"
        style={{
          background: 'rgba(28, 33, 57, 0.97)',
          backdropFilter: 'blur(20px)',
          borderColor: 'rgba(212,175,55,0.2)',
        }}
      >
        <a
          href="tel:0901234567"
          className="flex items-center justify-center gap-2 flex-1 py-3 rounded-xl glass-card border border-gold/30 text-gold font-semibold text-sm"
        >
          <Phone className="w-4 h-4" />
          Gá»i Ngay
        </a>
        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center justify-center gap-2 flex-[2] py-3 rounded-xl bg-gradient-to-r from-gold to-gold-soft text-primary font-bold text-sm"
        >
          <Sparkles className="w-4 h-4" />
          Nháº­n Demo Ngay
        </button>
      </div>
    </div>
  )
}
