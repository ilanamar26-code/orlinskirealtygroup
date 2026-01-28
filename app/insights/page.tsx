import { getInsights } from '@/lib/sanity'
import Link from 'next/link'
import { EditorialCard } from '@/components/EditorialCard'
import { PageHero } from '@/components/PageHero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights | Orlinski Realty Group',
  description: 'Thought leadership on branded residences, hospitality trends, and strategic insights.',
}

export default async function InsightsPage() {
  const insights = await getInsights().catch(() => [])

  return (
    <div className="mx-auto max-w-[1200px] space-y-12 px-4 py-10 sm:px-6 lg:px-8">
      <PageHero
        label="Insights"
        title="Thought leadership on branded residences."
        subtitle="Strategic perspectives on hospitality, art-led real estate, and market positioning."
      />

      {insights.length > 0 ? (
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight: any) => (
              <Link key={insight._id} href={`/insights/${insight.slug?.current || insight._id}`}>
                <EditorialCard
                  title={insight.title}
                  description={insight.excerpt || ''}
                  image={insight.featuredImage}
                  overlay
                />
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <section className="text-center text-graphite">
          <p>No insights available at this time.</p>
        </section>
      )}
    </div>
  )
}
