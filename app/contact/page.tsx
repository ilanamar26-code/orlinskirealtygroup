import { QualificationForm } from '@/components/QualificationForm'

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-12 px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-4 max-w-2xl">
        <p className="text-gold text-xs md:text-sm font-medium uppercase tracking-[0.2em]">
          Contact
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-black">Contact Us</h1>
        <p className="text-graphite text-lg">
          Start a confidential discussion about your project. All inquiries are handled with
          discretion and confidentiality.
        </p>
      </div>

      <div className="max-w-2xl">
        <QualificationForm />
      </div>
    </div>
  )
}
