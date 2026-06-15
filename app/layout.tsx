import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'AI Workflow Automation — Tạo Hàng Chục Video Mỗi Ngày Bằng AI',
  description: 'Hệ thống Workflow AI tự động tạo nội dung, hình ảnh, giọng đọc và video hoàn chỉnh chỉ trong vài phút. Không cần quay video, không cần thuê editor.',
  keywords: 'AI workflow, automation, tạo video AI, content creator, affiliate marketing, digital marketing Vietnam',
  authors: [{ name: 'AI Workflow Team' }],
  creator: 'AI Workflow',
  publisher: 'AI Workflow',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://ai-workflow-landing.vercel.app',
    siteName: 'AI Workflow',
    title: 'AI Workflow — Biến 1 Ý Tưởng Thành Hàng Chục Video Mỗi Ngày',
    description: 'Hệ thống Workflow AI tự động tạo nội dung, hình ảnh, giọng đọc và video hoàn chỉnh chỉ trong vài phút.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Workflow Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workflow — Biến 1 Ý Tưởng Thành Hàng Chục Video Mỗi Ngày',
    description: 'Hệ thống Workflow AI tự động tạo nội dung, hình ảnh, giọng đọc và video hoàn chỉnh chỉ trong vài phút.',
    images: ['/og-image.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#1C2139',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AI Workflow Automation',
  description: 'Hệ thống Workflow AI tự động tạo nội dung, hình ảnh, giọng đọc và video hoàn chỉnh',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'VND',
    offerCount: 3,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
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
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href="https://ai-workflow-landing.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-primary text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
