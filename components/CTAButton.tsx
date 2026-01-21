import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CTAButtonProps {
  href: string
  variant?: 'dark' | 'light'
  children: React.ReactNode
  className?: string
}

export function CTAButton({ href, variant = 'dark', children, className }: CTAButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-lg font-medium text-sm transition-all duration-200'
  const variants = {
    dark: 'bg-black text-offwhite hover:bg-graphite',
    light: 'bg-offwhite text-black border-2 border-black hover:bg-stone',
  }

  return (
    <Link href={href} className={cn(baseStyles, variants[variant], className)}>
      {children}
    </Link>
  )
}
