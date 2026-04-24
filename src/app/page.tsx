import { Hero } from '@/components/site/hero'
import { ThreeSteps } from '@/components/site/three-steps'
import { FeatureSplit } from '@/components/site/feature-split'
import { FrameworksGrid } from '@/components/site/frameworks-grid'
import { Testimonials } from '@/components/site/testimonials'
import { FinalCta } from '@/components/site/final-cta'

export default function Home() {
  return (
    <>
      <Hero />
      <ThreeSteps />
      <FeatureSplit />
      <FrameworksGrid />
      <Testimonials />
      <FinalCta />
    </>
  )
}
