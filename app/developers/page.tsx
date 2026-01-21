import { CTAButton } from '@/components/CTAButton'
import { BentoGrid } from '@/components/BentoGrid'

const steps = [
  {
    title: 'Initial Discussion',
    description: 'We start with a confidential conversation to understand your vision, project scope, and alignment with the Orlinski brand.',
  },
  {
    title: 'Vision Fit Assessment',
    description: 'Our team evaluates the strategic fit, market positioning, and potential for creating a unique branded experience.',
  },
  {
    title: 'Concept Package',
    description: 'We develop a comprehensive concept package including design language, art integration, and marketing narrative.',
  },
  {
    title: 'Deal Structuring',
    description: 'We work with your team to structure a licensing agreement that protects the brand while enabling your success.',
  },
]

const benefits = [
  {
    title: 'Brand Equity',
    description: 'Access to the Orlinski brand and artistic universe, recognized globally for luxury and innovation.',
  },
  {
    title: 'Design Language',
    description: 'Integration of faceted geometry and sculptural elements into architecture and interiors.',
  },
  {
    title: 'Marketing Narrative',
    description: 'Compelling storytelling and brand positioning that resonates with high-net-worth buyers.',
  },
  {
    title: 'Art Integration',
    description: 'Curated selection of Orlinski sculptures and artworks to enhance the living experience.',
  },
]

export default function DevelopersPage() {
  return (
    <div className="space-y-24 py-12">
      {/* Hero */}
      <section className="space-y-6 text-center max-w-3xl mx-auto">
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-black">
          For Developers
        </h1>
        <p className="text-graphite text-lg">
          We partner with visionary developers to create branded residences and hospitality
          experiences that combine real estate excellence with artistic vision.
        </p>
      </section>

      {/* Who This Is For */}
      <section className="space-y-8">
        <h2 className="font-heading text-4xl font-bold text-black">Who This Is For</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 p-8 bg-stone/10 rounded-lg">
            <h3 className="font-heading text-xl font-semibold text-black">Serious Developers</h3>
            <p className="text-graphite">
              Established developers with a track record of delivering premium residential and
              hospitality projects. Projects typically have a GDV of $50M+.
            </p>
          </div>
          <div className="space-y-4 p-8 bg-stone/10 rounded-lg">
            <h3 className="font-heading text-xl font-semibold text-black">Vision Alignment</h3>
            <p className="text-graphite">
              Developers who understand the value of brand differentiation and are committed to
              creating unique, art-driven experiences for their buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="bg-black text-offwhite py-16 px-6 rounded-lg space-y-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-bold">Proven Track Record</h2>
          <p className="text-stone text-lg">
            Our branded residences have a demonstrable track record of securing premium values for
            developer clients while setting the bar for design, marketing, and service quality.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-2">
            <p className="font-heading text-3xl md:text-4xl font-bold text-gold">Premium Values</p>
            <p className="text-stone text-sm">
              Branded residences consistently achieve higher price points and faster sales velocity
              compared to non-branded properties.
            </p>
          </div>
          <div className="text-center space-y-2">
            <p className="font-heading text-3xl md:text-4xl font-bold text-gold">Design Excellence</p>
            <p className="text-stone text-sm">
              Integration of world-class artistic vision into architecture and interiors creates
              unique, differentiated properties.
            </p>
          </div>
          <div className="text-center space-y-2">
            <p className="font-heading text-3xl md:text-4xl font-bold text-gold">Brand Protection</p>
            <p className="text-stone text-sm">
              Selective partnerships ensure long-term brand integrity and exclusivity for all
              stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* What We Bring */}
      <section className="space-y-8">
        <h2 className="font-heading text-4xl font-bold text-black">What We Bring</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-4 p-6 bg-stone/10 rounded-lg">
              <h3 className="font-heading text-lg font-semibold text-black">{benefit.title}</h3>
              <p className="text-graphite text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="space-y-8">
        <h2 className="font-heading text-4xl font-bold text-black">How We Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black text-offwhite flex items-center justify-center font-heading font-bold">
                  {index + 1}
                </div>
                <h3 className="font-heading text-lg font-semibold text-black">{step.title}</h3>
              </div>
              <p className="text-graphite text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-offwhite py-16 px-6 rounded-lg text-center space-y-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold">
          Ready to Explore a Partnership?
        </h2>
        <p className="text-stone max-w-2xl mx-auto">
          Start a confidential discussion about your project and how we can work together.
        </p>
        <CTAButton href="/contact" variant="light">
          Contact Us
        </CTAButton>
      </section>
    </div>
  )
}
