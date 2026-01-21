import { Hero } from '@/components/Hero'
import { BentoGrid } from '@/components/BentoGrid'
import { CTAButton } from '@/components/CTAButton'
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
    <div>
      <Hero
        title="For Investors"
        subtitle="Private access to curated branded residences and hospitality opportunities."
        ctaText="Request Private Access"
        ctaLink="/contact?flow=investor"
      />

      <section className="py-20">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12">Why Invest with ORG</h2>
        <BentoGrid items={benefits} />
      </section>

      <section className="py-20 border-t border-stone/20">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Investment Approach</h2>
        <div className="max-w-3xl">
          <p className="text-lg text-graphite leading-relaxed mb-6">
            We work with investors who understand that branded real estate is more than an asset
            class—it's a cultural statement. Our projects combine commercial rigor with artistic
            vision, creating value that extends beyond financial returns.
          </p>
          <p className="text-graphite leading-relaxed">
            All investment discussions are confidential and conducted under NDA. Access is curated
            and limited to qualified investors aligned with our philosophy.
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-stone/20 text-center">
        <p className="text-xl text-graphite mb-8 max-w-2xl mx-auto">
          Interested in private access? Submit your investor profile for review.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton text="Request Private Access" href="/contact?flow=investor" />
          <CTAButton text="Request NDA" href="/contact?flow=nda" variant="outline" />
        </div>
      </section>
    </div>
  )
}
