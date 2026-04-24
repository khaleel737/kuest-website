import { Hero } from '@/components/site/hero'
import { DockerSequence } from '@/components/site/docker-sequence'
import { Manifesto } from '@/components/site/manifesto'
import { Ecosystem } from '@/components/site/ecosystem'
import { ProtocolScroll } from '@/components/site/protocol-scroll'
import { BigNumbers } from '@/components/site/big-numbers'
import { Pricing } from '@/components/site/pricing'
import { FinalCta } from '@/components/site/final-cta'

export default function Home() {
  return (
    <>
      <Hero />
      <DockerSequence />
      <Manifesto />
      <Ecosystem />
      <ProtocolScroll />
      <BigNumbers />
      <Pricing />
      <FinalCta />
    </>
  )
}
