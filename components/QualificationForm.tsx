'use client'

import { useState } from 'react'
import { trpc } from '@/lib/trpc/client'
import { CTAButton } from './CTAButton'

export function QualificationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    projectLocation: '',
    assetType: '',
    gdvRange: '',
    timeline: '',
    message: '',
    userType: 'developer' as 'developer' | 'landowner' | 'investor' | 'other',
    honeypot: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const mutation = trpc.submitQualification.useMutation({
    onSuccess: () => {
      setSubmitted(true)
    },
    onError: (err) => {
      setError(err.message)
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    mutation.mutate(formData)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-black/10 bg-offwhite/80 p-8 text-center space-y-4 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]">
        <h2 className="font-heading text-2xl font-bold text-black">Thank You</h2>
        <p className="text-graphite">
          We've received your inquiry and will be in touch shortly. All communications are
          confidential.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-red-800 text-sm">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-graphite mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-black/10 rounded-2xl bg-offwhite text-black focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-graphite mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-black/10 rounded-2xl bg-offwhite text-black focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-graphite mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 border border-black/10 rounded-2xl bg-offwhite text-black focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-graphite mb-2">
            Role
          </label>
          <input
            type="text"
            id="role"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-4 py-3 border border-black/10 rounded-2xl bg-offwhite text-black focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>
      </div>

      <div>
        <label htmlFor="userType" className="block text-sm font-medium text-graphite mb-2">
          I am a *
        </label>
        <select
          id="userType"
          required
          value={formData.userType}
          onChange={(e) =>
            setFormData({
              ...formData,
              userType: e.target.value as 'developer' | 'landowner' | 'investor' | 'other',
            })
          }
          className="w-full px-4 py-3 border border-black/10 rounded-2xl bg-offwhite text-black focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <option value="developer">Developer</option>
          <option value="landowner">Landowner</option>
          <option value="investor">Investor</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="projectLocation" className="block text-sm font-medium text-graphite mb-2">
          Concept Location
        </label>
        <input
          type="text"
          id="projectLocation"
          value={formData.projectLocation}
          onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
          className="w-full px-4 py-3 border border-black/10 rounded-2xl bg-offwhite text-black focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="assetType" className="block text-sm font-medium text-graphite mb-2">
            Asset Type
          </label>
          <input
            type="text"
            id="assetType"
            value={formData.assetType}
            onChange={(e) => setFormData({ ...formData, assetType: e.target.value })}
            className="w-full px-4 py-3 border border-black/10 rounded-2xl bg-offwhite text-black focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>

        <div>
          <label htmlFor="gdvRange" className="block text-sm font-medium text-graphite mb-2">
            Estimated GDV Range
          </label>
          <select
            id="gdvRange"
            value={formData.gdvRange}
            onChange={(e) => setFormData({ ...formData, gdvRange: e.target.value })}
            className="w-full px-4 py-3 border border-black/10 rounded-2xl bg-offwhite text-black focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <option value="">Select range</option>
            <option value="10-50">$10M - $50M</option>
            <option value="50-100">$50M - $100M</option>
            <option value="100-250">$100M - $250M</option>
            <option value="250+">$250M+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-graphite mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-black/10 rounded-2xl bg-offwhite text-black focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>

      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={mutation.isLoading}
        className="w-full px-8 py-4 bg-black text-offwhite rounded-2xl font-medium hover:bg-graphite transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {mutation.isLoading ? 'Submitting...' : 'Submit Inquiry'}
      </button>

      <p className="text-graphite text-xs text-center">
        All submissions are confidential and handled with discretion.
      </p>
    </form>
  )
}
