import Image from 'next/image'
import { cn } from '@/lib/utils'

interface EditorialCardProps {
  title: string
  description?: string
  image?: string
  className?: string
  overlay?: boolean
  variant?: 'default' | 'bare'
}

export function EditorialCard({
  title,
  description,
  image,
  className,
  overlay = false,
  variant = 'default',
}: EditorialCardProps) {
  return (
    <div
      className={cn(
        variant === 'default'
          ? 'group relative overflow-hidden rounded-2xl border border-black/10 bg-offwhite/70 hover:bg-white shadow-[0_20px_50px_-40px_rgba(0,0,0,0.6)] transition-all duration-300'
          : 'group relative overflow-hidden rounded-2xl',
        className,
      )}
    >
      {image && (
        <div className="relative aspect-[4/3]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {overlay && description && (
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="p-4 text-sm text-offwhite">{description}</p>
            </div>
          )}
        </div>
      )}
      <div className="p-6 space-y-2">
        <h3 className="font-heading text-xl font-semibold text-black">{title}</h3>
        {!overlay && description && <p className="text-graphite text-sm">{description}</p>}
      </div>
    </div>
  )
}
