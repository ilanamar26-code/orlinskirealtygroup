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
    <div className="mx-auto max-w-[1200px] space-y-24 px-4 py-10 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8 max-w-none">
        <Hero />
      </div>

      {/* Icon Ledger */}
      <section
        aria-labelledby="icon-ledger-title"
        className="relative overflow-hidden rounded-3xl border border-black/10 bg-offwhite px-6 py-14 md:px-10 md:py-16 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.6)]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage: "url('/images/icon-ledger-facets.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'rotate(180deg)',
          }}
        />
        <div className="relative z-10 space-y-10">
          <div className="space-y-4 max-w-2xl">
            <p className="text-gold text-xs md:text-sm font-medium uppercase tracking-[0.2em]">
              The Icon Ledger
            </p>
            <h2
              id="icon-ledger-title"
              className="font-heading text-4xl md:text-5xl font-bold text-black"
            >
              We choreograph legacy through art-driven residences.
            </h2>
            <p className="text-graphite text-lg">
              Orlinski Realty Group merges sculpture, brand, and hospitality into collectible
              places designed to be lived, experienced, and remembered.
            </p>
            <p className="text-graphite text-base">
              For developers, the result is differentiation that drives premium pricing and demand.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="rounded-2xl border border-black/10 bg-white/90 p-8 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]">
              <div className="flex h-full flex-col space-y-6">
                <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-black/70">
                  <span className="h-px w-10 bg-black/20" />
                  Signature Statement
                </div>
                <p className="font-heading text-3xl md:text-4xl font-semibold text-black">
                  We don’t build real estate. We sculpt icons.
                </p>
                <p className="text-graphite text-base md:text-lg max-w-2xl">
                  From faceted geometry to immersive brand worlds, each residency is crafted as a
                  cultural artifact that elevates value and prestige.
                </p>
                <div className="mt-auto flex flex-wrap gap-3">
                  <span className="rounded-full border border-black/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                    Confidentiality
                  </span>
                  <span className="rounded-full border border-black/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                    Curated access
                  </span>
                  <span className="rounded-full border border-black/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                    Art-driven
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-black px-6 py-8 text-offwhite shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]">
                <p className="text-xs uppercase tracking-[0.3em] text-stone">Impact Numbers</p>
                <div className="mt-6 grid gap-4">
                  {[
                    { value: '1', label: 'Iconic artist' },
                    { value: '2', label: 'Visionary founders' },
                    { value: '3', label: 'Disciplines fused' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <span className="font-heading text-3xl text-offwhite">{item.value}</span>
                      <span className="text-sm text-stone">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-2xl border border-black/10 bg-white/90 p-6 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.5)]">
                <p className="text-xs uppercase tracking-[0.3em] text-black/70">
                  From Vision to Life
                </p>
                <div className="mt-6">
                  <div className="absolute left-8 top-16 h-[calc(100%-88px)] w-px bg-black/15" />
                  <ol className="space-y-6">
                    {[
                      {
                        title: 'Myth to Meaning',
                        description: 'Narrative and brand DNA that defines the icon.',
                      },
                      {
                        title: 'Sculpt to Space',
                        description: 'Art-led architecture and interior language.',
                      },
                      {
                        title: 'Residency as Artifact',
                        description: 'Collectible living experiences with lasting value.',
                      },
                    ].map((item) => (
                      <li key={item.title} className="relative pl-12">
                        <span className="absolute left-6 top-2 h-3 w-3 rounded-full bg-gold shadow-[0_0_0_6px_rgba(201,162,77,0.2)]" />
                        <h3 className="font-heading text-lg font-semibold text-black">
                          {item.title}
                        </h3>
                        <p className="text-sm text-graphite">{item.description}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Orlinski Realty Group Does */}
      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-6">
          <p className="text-gold text-xs md:text-sm font-medium uppercase tracking-[0.2em]">
            The Orlinski Method
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-black">
            Three disciplines. One collectible outcome.
          </h2>
          <p className="text-graphite text-lg max-w-2xl">
            Orlinski Realty Group operates like a private atelier: brand rights, art-led design, and narrative
            choreography engineered into a single, high-value residency ecosystem.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'Brand Equity', value: 'Licensing' },
              { label: 'Design Language', value: 'Integration' },
              { label: 'Market Prestige', value: 'Narrative' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-black/10 bg-offwhite/80 px-5 py-4 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.6)]"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-black/60">{item.label}</p>
                <p className="font-heading text-lg font-semibold text-black">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Brand Licensing',
              description:
                'We license the Orlinski brand universe to visionary developers creating branded residences and hospitality experiences.',
            },
            {
              title: 'Design Integration',
              description:
                "We integrate Orlinski's faceted geometry and artistic vision into architecture and interiors.",
            },
            {
              title: 'Marketing & Narrative',
              description:
                'We craft compelling narratives and market positioning that resonate with high-net-worth buyers and collectors.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-black/10 bg-offwhite/80 p-6 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]"
            >
              <h3 className="font-heading text-xl font-semibold text-black">{item.title}</h3>
              <p className="mt-4 text-graphite">{item.description}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-black/10 bg-black p-6 text-offwhite shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]">
            <p className="text-xs uppercase tracking-[0.25em] text-stone">Deliverable</p>
            <p className="mt-4 font-heading text-2xl font-semibold">
              Branded residences that behave like collectible art.
            </p>
            <p className="mt-4 text-sm text-stone">
              Confidentiality, curated access, and a bespoke creative process for select partners.
            </p>
          </div>
        </div>
      </section>

      {/* Be Inspired */}
      <section className="space-y-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="text-gold text-xs md:text-sm font-medium uppercase tracking-[0.2em]">
              The Orlinski Gallery
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-black">
              A universe of sculpture, hospitality, and brand collaborations.
            </h2>
            <p className="text-graphite text-lg max-w-2xl">
              Explore the artistic DNA that defines every Orlinski Realty Group residence. The experience moves from
              monumental sculpture to immersive brand worlds.
            </p>
          </div>
          <Link
            href="/brands"
            className="text-gold hover:text-black transition-colors text-sm font-medium inline-flex items-center gap-2"
          >
            Learn More About Richard Orlinski →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Sculpture',
              description: 'Monumental and collectible works in resin, bronze, and marble.',
              image: '/images/content/fonderie.jpg',
            },
            {
              title: 'Galleries',
              description: 'Installations and exhibitions in global cultural capitals.',
              image: '/images/content/miami.jpg',
            },
            {
              title: 'Collaboration',
              description: 'Limited edition collaborations with luxury brands.',
              image: '/images/content/collaboration.jpg',
            },
          ].map((item) => (
            <EditorialCard
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
              overlay
            />
          ))}
        </div>
      </section>

      {/* Featured Brands */}
      {brands.length > 0 && (
        <section className="space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <p className="text-gold text-xs md:text-sm font-medium uppercase tracking-[0.2em]">
                Featured Brands
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-black">Brands</h2>
              <p className="text-graphite text-lg max-w-2xl">
                Select collaborations that extend the Orlinski universe into hospitality, design,
                and branded living.
              </p>
            </div>
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

      {/* Signature Concepts */}
      {projects.length > 0 && (
        <section className="space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <p className="text-gold text-xs md:text-sm font-medium uppercase tracking-[0.2em]">
                Signature Concepts
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-black">
                A curated showroom of iconic concepts.
              </h2>
              <p className="text-graphite text-lg max-w-2xl">
                Each concept is a collectible address, designed to perform as both real estate and
                cultural artifact.
              </p>
            </div>
            <Link
              href="/projects"
              className="text-gold hover:text-black transition-colors text-sm font-medium"
            >
              View All →
            </Link>
          </div>
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <Link
            href={`/projects/${projects[0].slug}`}
            className="group rounded-3xl border border-black/10 bg-offwhite/80 p-6 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.7)]"
          >
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <EditorialCard
                title={projects[0].name}
                description={projects[0].description || ''}
                image={
                  projects[0].heroImage ? undefined : '/images/content/project-placeholder.jpg'
                }
                variant="bare"
              />
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-black/60">
                  Signature Showcase
                </p>
                  <p className="font-heading text-2xl font-semibold text-black">
                    Designed as a rare address, positioned for global demand.
                  </p>
                  <p className="text-sm text-graphite">
                    The Orlinski identity integrates into architecture, interiors, and brand
                    moments to deliver lasting value.
                  </p>
                  <span className="text-gold text-sm font-medium">Discover the concept →</span>
                </div>
              </div>
            </Link>
            <div className="grid gap-6">
              {projects.slice(1, 3).map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="rounded-2xl border border-black/10 bg-offwhite/80 p-5 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]"
                >
                  <EditorialCard
                    title={project.name}
                    description={project.description || ''}
                    image={project.heroImage ? undefined : '/images/content/project-placeholder.jpg'}
                    variant="bare"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-black text-offwhite py-6 px-6 rounded-2xl text-center shadow-[0_30px_80px_-60px_rgba(0,0,0,0.7)]">
        <div className="flex min-h-[200px] flex-col items-center justify-center gap-5 max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-offwhite">
            Start a Confidential Discussion
          </h2>
          <p className="text-stone text-base md:text-lg">
            Are you a developer, landowner, or investor interested in exploring a branded residence
            partnership? Let&apos;s discuss your vision.
          </p>
          <div className="pt-1">
            <CTAButton href="/contact" variant="light" className="px-8 py-3.5 text-base md:text-lg">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
