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
  let logoUrl: string | null = null
  try {
    const normalizedUrl = url.startsWith('http') ? url : `https://${url}`
    const domain = new URL(normalizedUrl).hostname.replace(/^www\./, '')
    logoUrl = `https://www.google.com/s2/favicons?sz=64&domain=${domain}`
  } catch {
    logoUrl = null
  }

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-black/10 bg-offwhite/70 hover:bg-white shadow-[0_20px_50px_-40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300"
    >
      {imageUrl ? (
        <div className="relative aspect-video w-full overflow-hidden bg-offwhite/70">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="relative aspect-video w-full overflow-hidden bg-offwhite/70 flex items-center justify-center">
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
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {logoUrl && (
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-gradient-to-br from-white to-stone/10 shadow">
                <img
                  src={logoUrl}
                  alt={`${publisher} logo`}
                  className="h-6 w-6 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
            <div className="space-y-1">
              <p className="text-gold text-xs font-medium uppercase">{publisher}</p>
              {date && <p className="text-graphite text-xs">{date}</p>}
            </div>
          </div>
          <ExternalLink
            size={16}
            className="text-graphite group-hover:text-black transition-colors flex-shrink-0"
          />
        </div>
        <h3 className="font-heading text-lg font-semibold text-black line-clamp-2 group-hover:text-gold transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  )
}
