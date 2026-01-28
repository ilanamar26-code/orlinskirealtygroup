import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { cn } from '@/lib/utils'

interface BentoItem {
  slug?: string | { current?: string }
  name?: string
  title?: string
  description?: string
  heroImage?: any
}

interface BentoGridProps {
  items: BentoItem[]
  linkBase?: string
}

export function BentoGrid({ items, linkBase = '/brands' }: BentoGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, index) => {
        const imageUrl = item.heroImage ? urlFor(item.heroImage).width(600).height(400).url() : null
        const itemSlug = typeof item.slug === 'object' ? item.slug.current : item.slug
        const title = item.name || item.title || ''

        return (
          {itemSlug && linkBase ? (
            <Link
              key={itemSlug || title || index}
              href={`${linkBase}/${itemSlug}`}
              className={cn(
                'group relative overflow-hidden rounded-2xl border border-black/10 bg-offwhite/70 hover:bg-white shadow-[0_20px_50px_-40px_rgba(0,0,0,0.6)] transition-all duration-300',
                index === 0 && 'md:col-span-2 md:row-span-2',
              )}
            >
              {imageUrl ? (
                <div className="relative aspect-square md:aspect-auto md:h-full">
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="relative aspect-square md:aspect-auto md:h-full bg-black/5" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-offwhite">
                <h3 className="font-heading text-xl font-semibold mb-2">{title}</h3>
                {item.description && (
                  <p className="text-sm text-stone line-clamp-2">{item.description}</p>
                )}
              </div>
            </Link>
          ) : (
            <div
              key={itemSlug || title || index}
              className={cn(
                'group relative overflow-hidden rounded-2xl border border-black/10 bg-offwhite/70 hover:bg-white shadow-[0_20px_50px_-40px_rgba(0,0,0,0.6)] transition-all duration-300',
                index === 0 && 'md:col-span-2 md:row-span-2',
              )}
            >
              {imageUrl ? (
                <div className="relative aspect-square md:aspect-auto md:h-full">
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="relative aspect-square md:aspect-auto md:h-full bg-black/5" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-offwhite">
                <h3 className="font-heading text-xl font-semibold mb-2">{title}</h3>
                {item.description && (
                  <p className="text-sm text-stone line-clamp-2">{item.description}</p>
                )}
              </div>
            </div>
          )}
        )
      })}
    </div>
  )
}
