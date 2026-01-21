import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { BentoGrid } from '@/components/BentoGrid'
import { EditorialCard } from '@/components/EditorialCard'
import { CTAButton } from '@/components/CTAButton'
import { getAllBrands } from '@/lib/sanity'
import { getAllProjects } from '@/lib/sanity'

export default async function HomePage() {
  const brands = await getAllBrands()
  const projects = await getAllProjects()

  return (
    <div className="space-y-24 py-12">
      {/* Hero Section */}
      <Hero />

      {/* What ORG Does */}
      <section className="space-y-8">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-black">
          What We Do
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-semibold text-black">Brand Licensing</h3>
            <p className="text-graphite">
              We license the Orlinski brand and artistic universe to visionary developers creating
              branded residences and hospitality experiences.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-semibold text-black">Design Integration</h3>
            <p className="text-graphite">
              Our team works closely with developers to integrate Orlinski's faceted geometry and
              artistic vision into architectural and interior design.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-semibold text-black">Marketing & Narrative</h3>
            <p className="text-graphite">
              We develop compelling marketing narratives and brand experiences that resonate with
              high-net-worth buyers and collectors.
            </p>
          </div>
        </div>
      </section>

      {/* Be Inspired */}
      <section className="space-y-8">
        <div className="space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-black">
            Be Inspired by Richard Orlinski
          </h2>
          <p className="text-graphite text-lg max-w-3xl">
            Discover the artistic universe that defines our branded residences. From monumental
            sculptures to faceted geometry, Richard Orlinski's vision transforms real estate into
            collectible art.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <EditorialCard
            title="Sculpture"
            description="Monumental art pieces that define spaces"
            image="/images/content/sculpture.jpg"
          />
          <EditorialCard
            title="Architecture"
            description="Faceted geometry meets structural design"
            image="/images/content/architecture.jpg"
          />
          <EditorialCard
            title="Lifestyle"
            description="Curated experiences and programming"
            image="/images/content/lifestyle.jpg"
          />
          <EditorialCard
            title="Experience"
            description="Immersive branded environments"
            image="/images/content/experience.jpg"
          />
        </div>
        <div className="pt-8">
          <Link
            href="/brands"
            className="text-gold hover:text-black transition-colors text-sm font-medium inline-flex items-center gap-2"
          >
            Learn More About Richard Orlinski →
          </Link>
        </div>
      </section>

      {/* Featured Brands */}
      {brands.length > 0 && (
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-black">Brands</h2>
            <Link
              href="/brands"
              className="text-gold hover:text-black transition-colors text-sm font-medium"
            >
              View All →
            </Link>
          </div>
          <BentoGrid items={brands.slice(0, 4)} />
        </section>
      )}

      {/* Featured Projects */}
      {projects.length > 0 && (
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-black">Projects</h2>
            <Link
              href="/projects"
              className="text-gold hover:text-black transition-colors text-sm font-medium"
            >
              View All →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <EditorialCard
                  title={project.name}
                  description={project.description || ''}
                  image={project.heroImage ? undefined : '/images/content/project-placeholder.jpg'}
                />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-black text-offwhite py-24 px-6 rounded-lg text-center space-y-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold">
          Start a Confidential Discussion
        </h2>
        <p className="text-stone max-w-2xl mx-auto">
          Are you a developer, landowner, or investor interested in exploring a branded residence
          partnership? Let's discuss your vision.
        </p>
        <CTAButton href="/contact" variant="light">
          Contact Us
        </CTAButton>
      </section>
    </div>
  )
}
