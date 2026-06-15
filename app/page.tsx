import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Features from '@/components/Features'
import Demo from '@/components/Demo'
import Results from '@/components/Results'
import UseCases from '@/components/UseCases'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import StickyMobileCTA from '@/components/StickyMobileCTA'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Demo />
      <Results />
      <UseCases />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingButtons />
      <StickyMobileCTA />
    </main>
  )
}
