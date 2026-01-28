import { CTAButton } from '@/components/CTAButton'

interface PageHeroProps {
  label?: string
  title: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  align?: 'left' | 'center'
}

export function PageHero({
  label,
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  align = 'left',
}: PageHeroProps) {
  const isCentered = align === 'center'

  return (
    <section className={`space-y-6 ${isCentered ? 'text-center' : ''}`}>
      <div className={`space-y-4 ${isCentered ? 'mx-auto max-w-3xl' : 'max-w-2xl'}`}>
        {label && (
          <p className="text-gold text-xs md:text-sm font-medium uppercase tracking-[0.2em]">
            {label}
          </p>
        )}
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-black">{title}</h1>
        {subtitle && <p className="text-graphite text-lg">{subtitle}</p>}
      </div>
      {(ctaText || secondaryCtaText) && (
        <div
          className={`flex flex-col sm:flex-row gap-4 ${
            isCentered ? 'justify-center' : 'justify-start'
          }`}
        >
          {ctaText && ctaLink && (
            <CTAButton href={ctaLink} variant="dark">
              {ctaText}
            </CTAButton>
          )}
          {secondaryCtaText && secondaryCtaLink && (
            <CTAButton href={secondaryCtaLink} variant="light">
              {secondaryCtaText}
            </CTAButton>
          )}
        </div>
      )}
    </section>
  )
}
