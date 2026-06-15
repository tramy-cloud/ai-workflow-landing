import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AI Workflow Automation â€” Táº¡o HÃ ng Chá»¥c Video Má»—i NgÃ y Báº±ng AI',
  description: 'Há»‡ thá»‘ng Workflow AI tá»± Ä‘á»™ng táº¡o ná»™i dung, hÃ¬nh áº£nh, giá»ng Ä‘á»c vÃ  video hoÃ n chá»‰nh chá»‰ trong vÃ i phÃºt. KhÃ´ng cáº§n quay video, khÃ´ng cáº§n thuÃª editor.',
  keywords: 'AI workflow, automation, táº¡o video AI, content creator, affiliate marketing, digital marketing Vietnam',
  authors: [{ name: 'AI Workflow Team' }],
  creator: 'AI Workflow',
  publisher: 'AI Workflow',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://ai-workflow-landing.vercel.app',
    siteName: 'AI Workflow',
    title: 'AI Workflow â€” Biáº¿n 1 Ã TÆ°á»Ÿng ThÃ nh HÃ ng Chá»¥c Video Má»—i NgÃ y',
    description: 'Há»‡ thá»‘ng Workflow AI tá»± Ä‘á»™ng táº¡o ná»™i dung, hÃ¬nh áº£nh, giá»ng Ä‘á»c vÃ  video hoÃ n chá»‰nh chá»‰ trong vÃ i phÃºt.',
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
    title: 'AI Workflow â€” Biáº¿n 1 Ã TÆ°á»Ÿng ThÃ nh HÃ ng Chá»¥c Video Má»—i NgÃ y',
    description: 'Há»‡ thá»‘ng Workflow AI tá»± Ä‘á»™ng táº¡o ná»™i dung, hÃ¬nh áº£nh, giá»ng Ä‘á»c vÃ  video hoÃ n chá»‰nh chá»‰ trong vÃ i phÃºt.',
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
  description: 'Há»‡ thá»‘ng Workflow AI tá»± Ä‘á»™ng táº¡o ná»™i dung, hÃ¬nh áº£nh, giá»ng Ä‘á»c vÃ  video hoÃ n chá»‰nh',
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
