import { Hero } from '@/components/site/hero'
import { ThreeSteps } from '@/components/site/three-steps'
import { Audiences } from '@/components/site/audiences'
import { FeatureSplit } from '@/components/site/feature-split'
import { LiveNetwork } from '@/components/site/live-network'
import { FrameworksGrid } from '@/components/site/frameworks-grid'
import { Testimonials } from '@/components/site/testimonials'
import { PricingTeaser } from '@/components/site/pricing-teaser'
import { FinalCta } from '@/components/site/final-cta'

export default function Home() {
  return (
    <>
      <Hero />
      <ThreeSteps />
      <Audiences />
      <FeatureSplit />
      <LiveNetwork />
      <FrameworksGrid />
      <Testimonials />
      <PricingTeaser />
      <FinalCta />
    </>
  )
}
