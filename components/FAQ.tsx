'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'Khóa học này phù hợp với ai?',
    a: 'Khóa học phù hợp với tất cả mọi người — từ người mới hoàn toàn không biết AI cho đến người đã có kinh nghiệm muốn nâng cao. Chúng tôi thiết kế nội dung theo từng cấp độ để ai cũng có thể theo kịp.',
  },
  {
    q: 'Tôi không biết lập trình có học được không?',
    a: 'Hoàn toàn có thể! Đây là điểm mạnh nhất của khóa học. Chúng tôi sử dụng các công cụ No-Code như n8n, drag-and-drop workflow. Bạn không cần viết một dòng code nào cả.',
  },
  {
    q: 'Mất bao lâu để thấy kết quả?',
    a: 'Nhiều học viên bắt đầu thấy kết quả ngay từ tuần đầu tiên khi áp dụng các workflow cơ bản. Sau 4-8 tuần học đầy đủ, bạn sẽ có một hệ thống tự động hoàn chỉnh đang hoạt động.',
  },
  {
    q: 'Chi phí công cụ AI có đắt không?',
    a: 'Chúng tôi dạy cả công cụ miễn phí và trả phí. Bạn có thể bắt đầu với ngân sách 0đ và dần dần đầu tư khi thu nhập tăng lên. Nhiều workflow trong khóa học chạy hoàn toàn miễn phí.',
  },
  {
    q: 'Tôi có thể học theo tốc độ của riêng mình không?',
    a: 'Có, bạn hoàn toàn chủ động thời gian học. Toàn bộ video bài giảng được lưu trên hệ thống, có thể xem đi xem lại bất cứ lúc nào. Không có deadline hay lịch học cố định.',
  },
  {
    q: 'Sau khóa học có được hỗ trợ tiếp không?',
    a: 'Có! Bạn sẽ được tham gia cộng đồng Private VIP với giảng viên và hàng ngàn thành viên. Chúng tôi hỗ trợ qua group chat, hỏi đáp trực tiếp và live session hàng tháng.',
  },
  {
    q: 'n8n là gì? Khó dùng không?',
    a: 'n8n là công cụ automation No-Code mạnh mẽ nhất hiện nay — tương tự Zapier nhưng mạnh hơn nhiều và có thể tự host. Trong khóa học chúng tôi hướng dẫn từ cài đặt đến xây workflow phức tạp theo từng bước.',
  },
  {
    q: 'Tôi có nhận được chứng chỉ hoàn thành không?',
    a: 'Có, sau khi hoàn thành toàn bộ khóa học bạn sẽ nhận được chứng chỉ AI Workflow Mastery từ chúng tôi — có thể sử dụng để portfolio hay LinkedIn.',
  },
  {
    q: 'Chính sách hoàn tiền như thế nào?',
    a: 'Chúng tôi cam kết hoàn tiền 100% trong 30 ngày đầu nếu bạn không hài lòng với nội dung. Không cần giải thích, không câu hỏi. Chúng tôi tin vào chất lượng sản phẩm của mình.',
  },
  {
    q: 'Tôi có thể kiếm được bao nhiêu sau khi học?',
    a: 'Thu nhập phụ thuộc vào nỗ lực và cách bạn áp dụng. Nhiều học viên kiếm 15-50 triệu/tháng sau 2-3 tháng. Có học viên đã scale lên 100+ triệu/tháng với agency model. Kết quả thực tế có thể khác nhau.',
  },
  {
    q: 'Khóa học có được cập nhật không?',
    a: 'Có! AI thay đổi rất nhanh nên chúng tôi cam kết cập nhật nội dung liên tục theo sự phát triển của công nghệ. Một lần mua là bạn được học mãi mãi với tất cả bản cập nhật trong tương lai.',
  },
  {
    q: 'Làm thế nào để bắt đầu sau khi đăng ký?',
    a: 'Sau khi thanh toán, bạn nhận email xác nhận và link truy cập trong vòng 15 phút. Từ đó bạn có thể vào học ngay lập tức. Chúng tôi cũng có onboarding session giúp bạn thiết lập mọi thứ trong 30 phút.',
  },
]

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="faq"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A1022 0%, #0D1630 60%, #0A1022 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(61,165,255,0.04) 0%, transparent 60%)' }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-label mx-auto mb-4">
            <HelpCircle className="w-4 h-4" /> Câu Hỏi Thường Gặp
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Bạn Có Thắc Mắc?{' '}
            <span className="hero-gradient-text">Chúng Tôi Giải Đáp</span>
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="glass-card rounded-[20px] overflow-hidden transition-all duration-300"
              style={{ border: `1px solid ${openIndex === i ? 'rgba(61,165,255,0.35)' : 'rgba(36,68,122,0.5)'}` }}
            >
              <button
                id={`faq-${i}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center gap-4 p-5 sm:p-6 text-left group"
                aria-expanded={openIndex === i}
              >
                <span className="text-xs font-extrabold w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: openIndex === i ? 'rgba(61,165,255,0.2)' : 'rgba(255,255,255,0.05)', color: openIndex === i ? '#3DA5FF' : '#AAB4D6' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={`flex-1 text-sm sm:text-base font-semibold text-left ${openIndex === i ? 'text-white' : 'text-white/80'}`}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5" style={{ color: openIndex === i ? '#3DA5FF' : '#AAB4D6' }} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    key="faq-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-accent-blue/10">
                      <p className="text-text-secondary text-sm sm:text-base leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12 glass-card-blue rounded-[20px] p-6"
        >
          <p className="text-white font-semibold mb-2">Còn câu hỏi khác?</p>
          <p className="text-text-secondary text-sm mb-4">Liên hệ trực tiếp với chúng tôi qua Zalo hoặc Facebook</p>
          <div className="flex justify-center gap-3">
            <a href="https://zalo.me/" target="_blank" rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl text-sm font-semibold text-accent-blue border border-accent-blue/30 hover:bg-accent-blue/10 transition-all">
              Zalo Support
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl text-sm font-semibold text-accent-cyan border border-accent-cyan/30 hover:bg-accent-cyan/10 transition-all">
              Facebook Group
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
