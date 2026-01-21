import { Hero } from '@/components/Hero'
import { BentoGrid } from '@/components/BentoGrid'
import { CTAButton } from '@/components/CTAButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our World | Orlinski Realty Group',
  description: 'Discover the philosophy and approach behind Orlinski Realty Group.',
}

const values = [
  {
    title: 'Scarcity over Volume',
    description:
      'We curate partnerships, not transactions. Every project is selected for its potential to define culture and legacy.',
  },
  {
    title: 'Authority over Noise',
    description:
      'We build narrative-driven brands that stand the test of time, not flash-in-the-pan trends.',
  },
  {
    title: 'Narrative over Sales',
    description:
      'Every partnership begins with story. We craft brand identities that resonate deeply with their communities.',
  },
  {
    title: 'NDA-First, Curated Access',
    description:
      'Confidentiality and curation are fundamental. We work only with partners who share our vision.',
  },
]

export default function OurWorldPage() {
  return (
    <div>
      <Hero
        title="Our World"
        subtitle="A philosophy built on scarcity, authority, narrative, and curated access."
      />

      <section className="py-20">
        <div className="max-w-3xl mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Born from the union of two visionary entrepreneurs, Ilan & Michael, and the world-renowned 
            artist Richard Orlinski, a new dream emerged between them: to turn hospitality and real estate 
            into immersive works of art, where every residence becomes a masterpiece.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            It all began with a shared conviction: branded hotels & residences need a soul. Our wish was 
            to disrupt the conventional branded residence model, too often reduced to a logo on a building 
            and a neutral, soulless aesthetic.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We are curators of lifestyle, guardians of identity, and the future of branded residences. 
            We don't design buildings. We are not developers. We sculpt icons.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our approach is institutional, our standards are uncompromising, and our partnerships are 
            built for the long term. Every residence becomes a masterpiece.
          </p>
        </div>

        <BentoGrid items={values} />
      </section>

      <section className="py-20 border-t border-gray-200 text-center">
        <CTAButton text="Discuss a Project" href="/contact?flow=discuss" />
      </section>
    </div>
  )
}
