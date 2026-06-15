'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, BookOpen, Zap, Image, Mic, Video, GitMerge, Link2, ShoppingCart, Building2, TrendingUp } from 'lucide-react'

const modules = [
  {
    id: '01',
    icon: Zap,
    title: 'Tư Duy AI Workflow',
    color: '#3DA5FF',
    lessons: 6,
    desc: 'Hiểu cách tư duy hệ thống, cách AI hoạt động và tại sao workflow là chìa khóa để làm việc hiệu quả hơn 10 lần.',
    topics: ['AI mindset & hệ sinh thái AI 2024', 'Nguyên tắc thiết kế workflow hiệu quả', 'Công cụ AI cần thiết (miễn phí & trả phí)', 'Cách kết nối các AI tool thành pipeline'],
  },
  {
    id: '02',
    icon: BookOpen,
    title: 'Prompt Engineering',
    color: '#53D7FF',
    lessons: 8,
    desc: 'Làm chủ nghệ thuật viết prompt để AI tạo ra nội dung đúng ý, tiết kiệm thời gian và tối ưu kết quả.',
    topics: ['Cấu trúc prompt chuẩn cho từng loại AI', 'Prompt cho GPT-4, Claude, Gemini', 'Chain-of-thought prompting', 'Xây dựng thư viện prompt cá nhân'],
  },
  {
    id: '03',
    icon: BookOpen,
    title: 'AI Content Creation',
    color: '#A98EFF',
    lessons: 10,
    desc: 'Tự động tạo nội dung chất lượng cao cho blog, mạng xã hội, email marketing và quảng cáo bằng AI.',
    topics: ['Workflow tạo 30 bài viết/ngày với AI', 'Content repurposing tự động', 'SEO content với AI', 'Template hệ thống nội dung'],
  },
  {
    id: '04',
    icon: Image,
    title: 'AI Image Generation',
    color: '#FF9F43',
    lessons: 7,
    desc: 'Tạo hình ảnh chuyên nghiệp với Midjourney, DALL-E, Stable Diffusion và tích hợp vào workflow nội dung.',
    topics: ['Midjourney từ cơ bản đến nâng cao', 'Prompt hình ảnh chuyên nghiệp', 'Batch tạo hàng trăm ảnh tự động', 'Tích hợp AI image vào content pipeline'],
  },
  {
    id: '05',
    icon: Mic,
    title: 'AI Voice Generation',
    color: '#55EFC4',
    lessons: 6,
    desc: 'Tạo giọng đọc tự nhiên đa ngôn ngữ với ElevenLabs, Murf và các công cụ TTS hiện đại.',
    topics: ['Clone giọng đọc cá nhân', 'Tạo giọng đọc hàng loạt tự động', 'Tích hợp với workflow video', 'Tối ưu audio cho YouTube & TikTok'],
  },
  {
    id: '06',
    icon: Video,
    title: 'AI Video Automation',
    color: '#FF6B6B',
    lessons: 9,
    desc: 'Tạo video hoàn chỉnh tự động từ text đến publish sử dụng các công cụ AI video tiên tiến nhất.',
    topics: ['Sora, Runway, Kling AI tạo video', 'Workflow tạo 10 video/ngày tự động', 'Auto subtitle & chỉnh sửa video AI', 'Publish tự động lên đa nền tảng'],
  },
  {
    id: '07',
    icon: GitMerge,
    title: 'n8n Automation',
    color: '#FDCB6E',
    lessons: 12,
    desc: 'Xây dựng hệ thống tự động hoàn toàn với n8n - kết nối mọi ứng dụng và tạo workflow phức tạp không cần code.',
    topics: ['Cài đặt & triển khai n8n cloud/self-host', 'Kết nối 400+ ứng dụng với n8n', 'Workflow tự động đăng bài lên social', 'Error handling & monitoring'],
  },
  {
    id: '08',
    icon: Link2,
    title: 'Affiliate Workflow',
    color: '#6C5CE7',
    lessons: 8,
    desc: 'Xây dựng hệ thống affiliate marketing tự động từ content đến conversion và tracking thu nhập.',
    topics: ['Chọn sản phẩm & nền tảng affiliate', 'Workflow tạo nội dung review tự động', 'Funnel affiliate tự động hóa', 'Track & optimize thu nhập'],
  },
  {
    id: '09',
    icon: Building2,
    title: 'Business Automation',
    color: '#D4AF37',
    lessons: 10,
    desc: 'Tự động hóa toàn bộ quy trình kinh doanh từ lead generation đến chăm sóc khách hàng và bán hàng.',
    topics: ['CRM tự động với AI', 'Chatbot chăm sóc khách hàng 24/7', 'Email nurture sequence tự động', 'Báo cáo & phân tích kinh doanh AI'],
  },
  {
    id: '10',
    icon: TrendingUp,
    title: 'Scaling Systems',
    color: '#F0D878',
    lessons: 8,
    desc: 'Nhân rộng hệ thống, tối ưu chi phí và xây dựng thu nhập thụ động bền vững với AI automation.',
    topics: ['Từ 0 đến $1,000/tháng với AI workflow', 'Xây dựng agency AI automation', 'Monetize workflow của bạn', 'Lộ trình scale lên $10,000+/tháng'],
  },
]

function ModuleCard({ mod, index, isVisible }: { mod: typeof modules[0]; index: number; isVisible: boolean }) {
  const [open, setOpen] = useState(index === 0)
  const Icon = mod.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="glass-card rounded-[20px] overflow-hidden transition-all duration-300"
      style={{ border: `1px solid ${open ? mod.color + '40' : mod.color + '15'}` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 sm:p-6 text-left group"
        id={`module-${mod.id}-toggle`}
        aria-expanded={open}
      >
        {/* Module number */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-extrabold transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${mod.color}20`, color: mod.color }}
        >
          {mod.id}
        </div>

        {/* Title */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <Icon className="w-4 h-4 flex-shrink-0" style={{ color: mod.color }} />
            <span className="text-base font-bold text-white truncate">{mod.title}</span>
          </div>
          <span className="text-xs text-text-secondary">{mod.lessons} bài học</span>
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: open ? `${mod.color}20` : 'rgba(255,255,255,0.05)' }}
        >
          <ChevronDown className="w-4 h-4" style={{ color: open ? mod.color : '#AAB4D6' }} />
        </motion.div>
      </button>

      {/* Accordion content */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-5 sm:px-6 pb-6 border-t" style={{ borderColor: `${mod.color}20` }}>
              <p className="text-text-secondary text-sm leading-relaxed my-4">{mod.desc}</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {mod.topics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: mod.color }} />
                    <span className="text-white/80">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Curriculum() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const totalLessons = modules.reduce((a, m) => a + m.lessons, 0)

  return (
    <section id="curriculum" ref={ref} className="relative py-24 overflow-hidden" style={{ background: '#0A1022' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(61,165,255,0.05) 0%, transparent 60%)' }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <div className="section-label mx-auto mb-4">
            <span>📚</span> Nội Dung Khóa Học
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Lộ Trình Học <span className="hero-gradient-text">Từng Bước</span>
          </h2>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {[
            { val: `${modules.length} Module`, label: 'Chủ đề', color: '#3DA5FF' },
            { val: `${totalLessons}+ Bài`, label: 'Bài học', color: '#53D7FF' },
            { val: '40+ Giờ', label: 'Học liệu', color: '#A98EFF' },
            { val: 'Trọn Đời', label: 'Truy cập', color: '#D4AF37' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl font-bold" style={{ color: s.color }}>{s.val}</div>
              <div className="text-xs text-text-secondary">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Modules */}
        <div className="space-y-3">
          {modules.map((mod, i) => (
            <ModuleCard key={mod.id} mod={mod} index={i} isVisible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
