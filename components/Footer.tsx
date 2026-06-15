'use client'

import { motion } from 'framer-motion'
import { Zap, Youtube, Facebook, MessageCircle } from 'lucide-react'

const footerLinks = {
  'Khóa Học': ['Lộ Trình', 'Nội Dung', 'Demo Workflow', 'Học Phí'],
  'Hỗ Trợ': ['FAQ', 'Liên Hệ', 'Cộng Đồng', 'Chính Sách'],
  'Kết Nối': ['TikTok', 'YouTube', 'Facebook Group', 'Zalo'],
}

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A1022 0%, #060D1A 100%)',
        borderTop: '1px solid rgba(36,68,122,0.4)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <div>
                <span className="text-white font-bold text-base leading-none block">AI Workflow</span>
                <span className="text-xs text-text-secondary">Masterclass</span>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-5">
              Khóa học thực chiến số 1 về AI Workflow Automation tại Việt Nam.
            </p>
            <div className="flex gap-3">
              {[Youtube, Facebook, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue/30 transition-all duration-200"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-text-secondary text-sm hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-card-border/50 to-transparent mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-secondary/50">
          <p>© 2025 AI Workflow Masterclass. Tất cả quyền được bảo lưu.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Điều Khoản</a>
            <a href="#" className="hover:text-white transition-colors">Bảo Mật</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
