'use client'

import { useSearchParams } from 'next/navigation'
import { CheckCircle } from 'lucide-react'
import { CTAButton } from '@/components/CTAButton'

export default function ThankYouPage() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')

  const messages: Record<string, { title: string; message: string }> = {
    nda: {
      title: 'NDA Request Received',
      message:
        'Thank you for your submission. We will review your project details and send the NDA documentation shortly. Our team will be in touch within 48 hours.',
    },
    access: {
      title: 'Access Request Received',
      message:
        'Thank you for your interest. We will review your investor profile and provide access to our private materials if there is a fit. Our team will be in touch within 48 hours.',
    },
    submitted: {
      title: 'Submission Received',
      message:
        'Thank you for your submission. Our team will review your project details and be in touch if there is a potential partnership opportunity.',
    },
  }

  const content = messages[type || 'submitted'] || messages.submitted

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
        <h1 className="font-heading text-4xl font-bold mb-6">{content.title}</h1>
        <p className="text-lg text-graphite mb-8 leading-relaxed">{content.message}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/" variant="dark">
            Return Home
          </CTAButton>
          <CTAButton href="/contact" variant="light">
            Submit Another
          </CTAButton>
        </div>
      </div>
    </div>
  )
}
