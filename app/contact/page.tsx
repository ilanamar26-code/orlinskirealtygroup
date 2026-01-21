import { QualificationForm } from '@/components/QualificationForm'

export default function ContactPage() {
  return (
    <div className="space-y-12 py-12 max-w-2xl mx-auto">
      <div className="space-y-4">
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-black">
          Contact Us
        </h1>
        <p className="text-graphite text-lg">
          Start a confidential discussion about your project. All inquiries are handled with
          discretion and confidentiality.
        </p>
      </div>

      <QualificationForm />
    </div>
  )
}
