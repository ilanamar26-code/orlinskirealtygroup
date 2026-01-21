'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'black' | 'white' | 'silver' | 'lace'
  className?: string
  width?: number
  height?: number
}

const logoMap = {
  black: '/logo/logo-black.svg',
  white: '/logo/logo-white.svg',
  silver: '/logo/logo-horizontal-silver.png',
  lace: '/logo/logo-lace.jpg',
}

export function Logo({ variant = 'silver', className, width, height }: LogoProps) {
  const src = logoMap[variant]
  const isSvg = variant === 'black' || variant === 'white' || false

  if (isSvg) {
    return (
      <img
        src={src}
        alt="Orlinski Realty Group"
        className={cn('h-8 w-auto', className)}
        style={width && height ? { width, height } : undefined}
      />
    )
  }

  return (
    <Image
      src={src}
      alt="Orlinski Realty Group"
      width={width || 140}
      height={height || 40}
      className={cn('h-8 w-auto', className)}
      priority={variant === 'silver'}
    />
  )
}
