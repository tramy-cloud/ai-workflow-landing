import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import Problem from '@/components/Problem'
import Transformation from '@/components/Transformation'
import Curriculum from '@/components/Curriculum'
import WorkflowShowcase from '@/components/WorkflowShowcase'
import CaseStudies from '@/components/CaseStudies'
import Instructor from '@/components/Instructor'
import Bonus from '@/components/Bonus'
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
      {/* Sticky navigation */}
      <Navbar />

      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Social Proof / Stats */}
      <SocialProof />

      {/* Section 3: Problem */}
      <Problem />

      {/* Section 4: Transformation Before/After */}
      <Transformation />

      {/* Section 5: Course Curriculum */}
      <Curriculum />

      {/* Section 6: Workflow Showcase */}
      <WorkflowShowcase />

      {/* Section 7: Case Studies */}
      <CaseStudies />

      {/* Section 8: Instructor */}
      <Instructor />

      {/* Section 9: Bonus */}
      <Bonus />

      {/* Section 10: Testimonials */}
      <Testimonials />

      {/* Section 11: Pricing */}
      <Pricing />

      {/* Section 12: FAQ */}
      <FAQ />

      {/* Section 13: Final CTA + Lead Form */}
      <FinalCTA />

      {/* Footer */}
      <Footer />

      {/* UX Utilities */}
      <FloatingButtons />
      <StickyMobileCTA />
    </main>
  )
}
