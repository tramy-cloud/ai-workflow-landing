'use client'

import { useState } from 'react'
import { Phone, MessageCircle, X } from 'lucide-react'

export default function FloatingButtons() {
  const [show, setShow] = useState(true)

  if (!show) return null

  return (
    <div className="fixed bottom-24 md:bottom-8 right-4 md:right-6 z-50 flex flex-col gap-3 items-end">
      {/* Close button */}
      <button
        onClick={() => setShow(false)}
        className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
      >
        <X className="w-3.5 h-3.5 text-white/60" />
      </button>

      {/* Zalo button */}
      <a
        href="https://zalo.me/0901234567"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3"
        aria-label="Chat Zalo"
      >
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#1C2139] border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
          Chat Zalo ngay
        </div>
        <div className="w-13 h-13 rounded-2xl shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
          style={{ background: 'linear-gradient(135deg, #0068FF, #0054FF)', width: '52px', height: '52px' }}>
          <MessageCircle className="w-6 h-6 text-white" fill="white" />
        </div>
      </a>

      {/* Phone button */}
      <a
        href="tel:0901234567"
        className="group flex items-center gap-3"
        aria-label="Gá»i Ä‘iá»‡n thoáº¡i"
      >
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#1C2139] border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
          0901 234 567
        </div>
        <div
          className="rounded-2xl shadow-xl flex items-center justify-center hover:scale-110 transition-transform gold-pulse"
          style={{ background: 'linear-gradient(135deg, #D4AF37, #E6C76A)', width: '52px', height: '52px' }}
        >
          <Phone className="w-6 h-6 text-primary" />
        </div>
      </a>
    </div>
  )
}
