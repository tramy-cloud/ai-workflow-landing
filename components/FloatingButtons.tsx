'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Phone, ChevronUp, X } from 'lucide-react'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      {/* Zalo / Phone button */}
      <motion.a
        href="https://zalo.me/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        className="fixed bottom-24 right-5 w-13 h-13 w-12 h-12 rounded-full flex items-center justify-center z-40 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:scale-110 transition-transform duration-300"
        style={{ background: 'linear-gradient(135deg, #0068FF, #00B8FF)' }}
        aria-label="Chat Zalo"
        id="floating-zalo"
      >
        <Phone className="w-5 h-5 text-white" />
      </motion.a>

      {/* Chat bubble button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.2, type: 'spring' }}
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-5 w-13 h-13 w-12 h-12 rounded-full flex items-center justify-center z-40 shadow-blue hover:scale-110 transition-all duration-300"
        style={{ background: 'linear-gradient(135deg, #3DA5FF, #53D7FF)' }}
        aria-label="Open chat"
        id="floating-chat"
      >
        {chatOpen ? <X className="w-5 h-5 text-white" /> : <MessageCircle className="w-5 h-5 text-white" />}
        {/* Ping indicator */}
        {!chatOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[9px] font-bold text-white">1</span>
        )}
      </motion.button>

      {/* Chat popup */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-5 w-72 z-50 glass-card rounded-[20px] p-5 shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
            style={{ border: '1px solid rgba(61,165,255,0.3)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center text-xs font-bold text-white">AI</div>
              <div>
                <p className="text-white text-sm font-semibold">AI Workflow Support</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-text-secondary text-xs">Online ngay bây giờ</span>
                </div>
              </div>
            </div>
            <div className="glass-card-blue rounded-xl p-3.5 mb-4">
              <p className="text-sm text-white/85 leading-relaxed">
                Xin chào! 👋 Bạn cần tư vấn về khóa học AI Workflow không? Mình sẵn sàng hỗ trợ bạn.
              </p>
            </div>
            <a
              href="https://zalo.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan text-white text-sm font-semibold text-center hover:opacity-90 transition-opacity"
            >
              Nhắn Tin Qua Zalo
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-5 w-10 h-10 rounded-xl glass-card flex items-center justify-center z-40 hover:border-accent-blue/40 transition-all duration-200"
            aria-label="Scroll to top"
            id="scroll-to-top"
          >
            <ChevronUp className="w-5 h-5 text-text-secondary" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
