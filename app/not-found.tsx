import Link from 'next/link'
import { CTAButton } from '@/components/CTAButton'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center space-y-6">
      <div className="space-y-4">
        <h1 className="font-heading text-6xl md:text-8xl font-bold text-black">404</h1>
        <p className="text-graphite text-lg">Page not found</p>
        <CTAButton href="/" variant="dark">
          Return Home
        </CTAButton>
      </div>
    </div>
  )
}
