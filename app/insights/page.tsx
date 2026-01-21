import { getInsights } from '@/lib/sanity'
import { EditorialCard } from '@/components/EditorialCard'
import { Hero } from '@/components/Hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights | Orlinski Realty Group',
  description: 'Thought leadership on branded residences, hospitality trends, and strategic insights.',
}

export default async function InsightsPage() {
  const insights = await getInsights().catch(() => [])

  return (
    <div>
      <Hero
        title="Insights"
        subtitle="Thought leadership on branded residences, hospitality trends, and strategic insights."
      />

      {insights.length > 0 ? (
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight: any) => (
              <EditorialCard
                key={insight._id}
                title={insight.title}
                image={insight.featuredImage}
                slug={`/insights/${insight.slug?.current || insight._id}`}
                status={insight.category}
                geography={insight.publishedAt ? new Date(insight.publishedAt).toLocaleDateString() : undefined}
              />
            ))}
          </div>
        </section>
      ) : (
        <section className="py-20 text-center text-graphite">
          <p>No insights available at this time.</p>
        </section>
      )}
    </div>
  )
}
