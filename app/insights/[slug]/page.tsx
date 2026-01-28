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
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      {imageUrl && (
        <div className="relative w-full h-[60vh] -mx-4 sm:-mx-6 lg:-mx-8 mb-12 overflow-hidden rounded-3xl border border-black/10 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.7)]">
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
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-black/70 mb-4">
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
