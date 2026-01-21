import Image from 'next/image'
import { cn } from '@/lib/utils'

interface EditorialCardProps {
  title: string
  description?: string
  image?: string
  className?: string
}

export function EditorialCard({ title, description, image, className }: EditorialCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-lg bg-stone/10 hover:bg-stone/20 transition-all duration-300',
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
        </div>
      )}
      <div className="p-6 space-y-2">
        <h3 className="font-heading text-xl font-semibold text-black">{title}</h3>
        {description && <p className="text-graphite text-sm">{description}</p>}
      </div>
    </div>
  )
}
