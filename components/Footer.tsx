import { Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" fill="currentColor" />
            </div>
            <div>
              <span className="text-white font-bold text-lg">AI</span>
              <span className="gold-text font-bold text-lg ml-1">Workflow</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 justify-center">
            {['Vá» chÃºng tÃ´i', 'ChÃ­nh sÃ¡ch báº£o máº­t', 'Äiá»u khoáº£n dá»‹ch vá»¥', 'LiÃªn há»‡'].map(link => (
              <a key={link} href="#" className="text-white/50 text-sm hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-white/30 text-sm text-center md:text-right">
            Â© 2026 AI Workflow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
