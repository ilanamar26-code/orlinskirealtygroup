'use client'

import { useEffect } from 'react'
import { CTAButton } from '@/components/CTAButton'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center space-y-6">
      <div className="space-y-4">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-black">
          Something went wrong
        </h1>
        <p className="text-graphite">An error occurred. Please try again.</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-black text-offwhite rounded-lg font-medium hover:bg-graphite transition-colors"
          >
            Try Again
          </button>
          <CTAButton href="/" variant="dark">
            Return Home
          </CTAButton>
        </div>
      </div>
    </div>
  )
}
