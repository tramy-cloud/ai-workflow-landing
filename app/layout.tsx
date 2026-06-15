import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'AI Workflow Masterclass — Làm Chủ AI, Tự Động Hóa & Tạo Thu Nhập',
  description: 'Khóa học thực chiến giúp bạn xây dựng hệ thống AI tự động tạo nội dung, hình ảnh, giọng đọc, video và quy trình kinh doanh. Không cần biết lập trình.',
  keywords: 'AI workflow, automation, khóa học AI, tự động hóa, content creator, affiliate marketing, n8n, AI video, Vietnam',
  authors: [{ name: 'AI Workflow Masterclass' }],
  creator: 'AI Workflow Masterclass',
  publisher: 'AI Workflow Masterclass',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://ai-workflow-masterclass.com',
    siteName: 'AI Workflow Masterclass',
    title: 'AI Workflow Masterclass — Làm Chủ AI & Tạo Thu Nhập Với AI',
    description: 'Khóa học thực chiến giúp bạn xây dựng hệ thống AI tự động tạo nội dung, hình ảnh, giọng đọc và video. Không cần biết lập trình.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Workflow Masterclass',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workflow Masterclass — Làm Chủ AI & Tạo Thu Nhập Với AI',
    description: 'Khóa học thực chiến giúp bạn xây dựng hệ thống AI tự động hóa công việc và tạo thu nhập.',
    images: ['/og-image.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#0A1022',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'AI Workflow Masterclass',
  description: 'Khóa học thực chiến xây dựng hệ thống AI tự động hóa công việc và tạo thu nhập bằng AI',
  provider: {
    '@type': 'Organization',
    name: 'AI Workflow Masterclass',
    sameAs: 'https://ai-workflow-masterclass.com',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'VND',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '1000',
    bestRating: '5',
    worstRating: '1',
  },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'online',
    courseWorkload: 'PT40H',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://ai-workflow-masterclass.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-bg-primary text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
