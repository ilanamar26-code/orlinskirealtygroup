import { BentoGrid } from '@/components/BentoGrid'
import { CTAButton } from '@/components/CTAButton'
import { PageHero } from '@/components/PageHero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Investors | Orlinski Realty Group',
  description:
    'Private access for investors interested in branded residences and hospitality opportunities.',
}

const benefits = [
  {
    title: 'Exclusive Pipeline',
    description:
      'Access to curated projects and opportunities before they reach the public market.',
  },
  {
    title: 'Premium Positioning',
    description:
      'Investments in projects with proven brand narratives and commercial premium strategies.',
  },
  {
    title: 'Long-term Value',
    description:
      'Partnerships designed for sustained appreciation and cultural impact, not quick exits.',
  },
  {
    title: 'Strategic Network',
    description:
      'Connection to a network of developers, brands, and cultural institutions shaping the future.',
  },
]

export default function InvestorsPage() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-24 px-4 py-10 sm:px-6 lg:px-8">
      <PageHero
        label="For Investors"
        title="Private access to curated branded residences."
        subtitle="Confidentiality and curated access for investors aligned with art-driven, high-value real estate."
        ctaText="Request Private Access"
        ctaLink="/contact?flow=investor"
        secondaryCtaText="Request NDA"
        secondaryCtaLink="/contact?flow=nda"
      />

      <section className="space-y-8">
        <div className="space-y-4 max-w-2xl">
          <p className="text-gold text-xs md:text-sm font-medium uppercase tracking-[0.2em]">
            Why Invest with Orlinski Realty Group
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-black">
            A strategic portfolio anchored in cultural value.
          </h2>
        </div>
        <BentoGrid items={benefits} />
      </section>

      <section className="space-y-6 border-t border-black/10 pt-10">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-black">
          Investment Approach
        </h2>
        <div className="max-w-3xl space-y-4 text-graphite text-lg leading-relaxed">
          <p>
            We work with investors who understand that branded real estate is more than an asset
            class—it&apos;s a cultural statement. Our projects combine commercial rigor with artistic
            vision, creating value that extends beyond financial returns.
          </p>
          <p className="text-base">
            All investment discussions are confidential and conducted under NDA. Access is curated
            and limited to qualified investors aligned with our philosophy.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-black/10 bg-offwhite/80 p-8 text-center shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]">
        <p className="text-xl text-graphite mb-6 max-w-2xl mx-auto">
          Interested in private access? Submit your investor profile for review.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/contact?flow=investor" variant="dark">
            Request Private Access
          </CTAButton>
          <CTAButton href="/contact?flow=nda" variant="light">
            Request NDA
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
