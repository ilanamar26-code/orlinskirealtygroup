import { BentoGrid } from '@/components/BentoGrid'
import { CTAButton } from '@/components/CTAButton'
import { PageHero } from '@/components/PageHero'
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
    <div className="mx-auto max-w-[1200px] space-y-24 px-4 py-10 sm:px-6 lg:px-8">
      <PageHero
        label="Our World"
        title="A philosophy built on scarcity, authority, and narrative."
        subtitle="We curate partnerships that turn hospitality and real estate into immersive works of art."
      />

      <section className="space-y-10">
        <div className="max-w-3xl space-y-6 text-graphite text-lg leading-relaxed">
          <p>
            Born from the union of two visionary entrepreneurs, Ilan &amp; Michael, and the
            world-renowned artist Richard Orlinski, a new dream emerged between them: to turn
            hospitality and real estate into immersive works of art, where every residence becomes
            a masterpiece.
          </p>
          <p>
            It all began with a shared conviction: branded hotels &amp; residences need a soul. Our
            wish was to disrupt the conventional branded residence model, too often reduced to a
            logo on a building and a neutral, soulless aesthetic.
          </p>
          <p>
            We are curators of lifestyle, guardians of identity, and the future of branded
            residences. We don&apos;t design buildings. We are not developers. We sculpt icons.
          </p>
          <p>
            Our approach is institutional, our standards are uncompromising, and our partnerships
            are built for the long term. Every residence becomes a masterpiece.
          </p>
        </div>

        <BentoGrid items={values} />
      </section>

      <section className="rounded-2xl border border-black/10 bg-offwhite/80 p-8 text-center shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]">
        <CTAButton href="/contact?flow=discuss" variant="dark">
          Discuss a Concept
        </CTAButton>
      </section>
    </div>
  )
}
