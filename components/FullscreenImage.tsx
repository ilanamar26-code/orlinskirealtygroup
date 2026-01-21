'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, Maximize2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FullscreenImageProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: string
  showExpandButton?: boolean
  fit?: 'cover' | 'contain'
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right'
}

export function FullscreenImage({
  src,
  alt,
  className,
  aspectRatio = 'aspect-[21/9]',
  showExpandButton = true,
  fit = 'cover',
  position = 'center',
}: FullscreenImageProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const openFullscreen = useCallback(() => {
    setIsFullscreen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeFullscreen = useCallback(() => {
    setIsFullscreen(false)
    document.body.style.overflow = 'unset'
  }, [])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        closeFullscreen()
      }
    }

    if (isFullscreen) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isFullscreen, closeFullscreen])

  return (
    <>
      <div className={cn('relative cursor-pointer h-full', className)} onClick={openFullscreen}>
        <div className={cn('relative w-full h-full overflow-hidden', aspectRatio || '')}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-center"
          />
          {showExpandButton && (
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full p-2">
              <Maximize2 className="text-offwhite" size={20} />
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
          onClick={closeFullscreen}
        >
          {/* Close Button */}
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 md:top-8 md:right-8 z-10 text-offwhite hover:text-gold transition-colors p-2"
            aria-label="Close fullscreen"
          >
            <X size={32} />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full h-full max-w-[95vw] max-h-[95vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-offwhite/60 text-sm">
            Press ESC or click outside to close
          </div>
        </div>
      )}
    </>
  )
}
