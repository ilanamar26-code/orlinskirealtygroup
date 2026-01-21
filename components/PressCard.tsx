import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PressCardProps {
  title: string
  publisher: string
  date?: string
  url: string
  imageUrl?: string
}

export function PressCard({ title, publisher, date, url, imageUrl }: PressCardProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-offwhite border border-stone/30 hover:border-stone/60 rounded-lg overflow-hidden transition-all duration-300"
    >
      {imageUrl ? (
        <div className="relative aspect-video w-full overflow-hidden bg-stone/10">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="relative aspect-video w-full overflow-hidden bg-stone/10 flex items-center justify-center">
          <Image
            src="/logo/logo-horizontal-silver.png"
            alt={publisher}
            width={200}
            height={60}
            className="opacity-30"
          />
        </div>
      )}
      <div className="p-6 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 space-y-2">
            <p className="text-gold text-xs font-medium uppercase">{publisher}</p>
            {date && <p className="text-graphite text-xs">{date}</p>}
          </div>
          <ExternalLink size={16} className="text-graphite group-hover:text-black transition-colors flex-shrink-0 mt-1" />
        </div>
        <h3 className="font-heading text-lg font-semibold text-black line-clamp-2 group-hover:text-gold transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  )
}
