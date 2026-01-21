import { getInsightBySlug, getInsights } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'

export async function generateStaticParams() {
  const insights = await getInsights().catch(() => [])
  return insights.map((insight: any) => ({
    slug: insight.slug?.current || insight._id,
  }))
}

export default async function InsightPage({ params }: { params: { slug: string } }) {
  const insight = await getInsightBySlug(params.slug).catch(() => null)

  if (!insight) {
    notFound()
  }

  const imageUrl = insight.featuredImage
    ? urlFor(insight.featuredImage).width(1200).height(600).url()
    : null

  return (
    <div>
      {imageUrl && (
        <div className="relative w-full h-[60vh] -mx-6 lg:-mx-12 mb-12">
          <Image
            src={imageUrl}
            alt={insight.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      )}

      <div className="max-w-4xl">
        <div className="mb-6">
          {insight.category && (
            <span className="inline-block text-xs uppercase tracking-wider text-graphite mb-4">
              {insight.category}
            </span>
          )}
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">{insight.title}</h1>
          {insight.publishedAt && (
            <p className="text-sm text-graphite">
              {new Date(insight.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
        </div>

        {insight.content && (
          <div className="prose prose-lg max-w-none">
            <PortableText value={insight.content} />
          </div>
        )}
      </div>
    </div>
  )
}
