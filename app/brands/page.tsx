import Image from 'next/image'
import Link from 'next/link'
import { EditorialCard } from '@/components/EditorialCard'
import { CTAButton } from '@/components/CTAButton'
import { FullscreenImage } from '@/components/FullscreenImage'
import { richardOrlinskiImages, getImageUrl, getRandomImage } from '@/lib/richard-orlinski-images'

export default function RichardOrlinskiPage() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-24 px-4 py-10 sm:px-6 lg:px-8">
      {/* Hero Section with Image */}
      <section className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center min-h-[70vh]">
        {/* Left Column: Content */}
        <div className="space-y-8 lg:space-y-10 order-2 lg:order-1">
          {/* Title */}
          <div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
              Richard Orlinski
            </h1>
            <p className="text-graphite text-lg md:text-xl leading-relaxed max-w-2xl">
              Contemporary French artist and sculptor behind the Orlinski universe. A global
              best‑seller known for faceted geometry, monumental scale, and accessible luxury.
            </p>
          </div>

          {/* Biography */}
          <div className="space-y-4 text-graphite text-base md:text-lg leading-relaxed max-w-2xl">
            <p>
              Self‑taught and globally exhibited, his signature “Born Wild” sculptures celebrate
              freedom, power, and the untamed spirit through sharp, light‑catching facets.
            </p>
            <p>
              His work lives at the intersection of art, culture, and luxury — now translated into
              branded residences and hospitality environments.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '#1', label: 'Most sold contemporary French artist' },
              { value: '500K+', label: 'Artworks sold globally' },
              { value: '100+', label: 'Countries with collections' },
              { value: '20+', label: 'Years of creation' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-black/10 bg-white p-4 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.6)]"
              >
                <div className="text-3xl md:text-4xl font-bold text-gold">{stat.value}</div>
                <p className="text-xs md:text-sm text-graphite leading-snug mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Key Principles */}
          <div className="grid gap-4 sm:grid-cols-2 pt-4 border-t border-black/10">
            {[
              { title: 'Born Wild', text: 'Freedom, strength, and raw emotion.' },
              { title: 'Faceted Geometry', text: 'Light, shadow, and sculptural identity.' },
              { title: 'Monumental Scale', text: 'Icons that define place and memory.' },
              { title: 'Collectible Living', text: 'Art translated into experience.' },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-offwhite/80 p-4 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.6)]"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-black/60">{item.title}</p>
                <p className="mt-2 text-sm text-graphite">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="order-1 lg:order-2 lg:sticky lg:top-24 lg:self-start">
          <div className="bg-offwhite rounded-3xl overflow-hidden border border-black/10 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.7)]">
            <FullscreenImage
              src="/images/content/richard-orlinski-portrait.jpg"
              alt="Richard Orlinski"
              aspectRatio="aspect-[3/4]"
              showExpandButton={false}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Global Influence */}
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.7)]">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/global-influence.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="rounded-3xl border border-black/10 bg-offwhite/80 p-8 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.7)]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-black/60">Global Influence</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-black">
              A cultural reach that shapes markets.
            </h2>
            <p className="text-graphite text-lg">
              Richard Orlinski’s global audience and brand visibility translate into real-world
              demand for art‑led destinations.
            </p>
          </div>
          <div className="mt-8 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.6)]">
                <p className="text-xs uppercase tracking-[0.25em] text-black/60">Followers</p>
                <p className="mt-2 font-heading text-4xl text-black">9.1M</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.6)]">
                <p className="text-xs uppercase tracking-[0.25em] text-black/60">Audience</p>
                <div className="mt-3 grid gap-3 text-sm text-graphite">
                  <div className="flex items-center justify-between gap-6">
                    <span>Men</span>
                    <span className="text-black">56%</span>
                  </div>
                  <div className="h-px bg-black/10" />
                  <div className="flex items-center justify-between gap-6">
                    <span>Women</span>
                    <span className="text-black">44%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: '25–34 years', value: '22%' },
                { label: '35–44 years', value: '36%' },
                { label: '45+ years', value: '18%' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.6)]"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-black/60">{item.label}</p>
                  <p className="mt-2 font-heading text-3xl text-black">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artistic Universe */}
      <section className="space-y-8">
        <div className="space-y-4 max-w-2xl">
          <p className="text-gold text-xs md:text-sm font-medium uppercase tracking-[0.2em]">
            The Orlinski Universe
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-black">
            The Orlinski Universe
          </h2>
          <p className="text-graphite text-lg">
            A visual language spanning sculpture, architecture, hospitality, and lifestyle — crafted
            to turn space into a collectible experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EditorialCard
            title="Sculpture"
            description="Monumental and collectible sculptures in resin, bronze, and marble"
            image="/images/content/fonderie.jpg"
          />
          <EditorialCard
            title="Galleries"
            description="Exhibitions and installations in prestigious locations worldwide"
            image="/images/content/miami.jpg"
          />
          <EditorialCard
            title="Le Café"
            description="Culinary experiences that embody the Orlinski aesthetic"
            image="/images/content/le-cafe.jpg"
          />
          <EditorialCard
            title="Collaboration"
            description="Limited edition collaborations with luxury brands"
            image="/images/content/collaboration.jpg"
          />
          <EditorialCard
            title="Branded Residences"
            description="With the creation of Orlinski Realty Group, we develop a global brand"
            image="/images/content/branded-residences.jpg"
          />
          <EditorialCard
            title="Influence"
            description="Connected with celebrities and influential figures worldwide"
            image="/images/content/influence.jpg"
          />
          <EditorialCard
            title="Hospitality"
            description="The first suite at Cavatagoo in Mykonos, embodying the Orlinski aesthetic"
            image="/images/content/hospitality.jpg"
          />
          <EditorialCard
            title="Exhibitions"
            description="Major art fairs and prestigious public installations"
            image="/images/content/exhibitions.jpg"
          />
          <EditorialCard
            title="Entertainment"
            description="DJ and showman, bringing the Orlinski universe to life through music and performance"
            image="/images/content/entertainment.jpg"
          />
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-black text-offwhite py-8 px-6 rounded-2xl text-center shadow-[0_30px_80px_-60px_rgba(0,0,0,0.7)]">
        <div className="flex min-h-[200px] flex-col items-center justify-center gap-5 max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-offwhite">
            Bring the Orlinski Universe to Your Concept
          </h2>
          <p className="text-stone text-lg md:text-xl">
            Partner with Orlinski Realty Group to create branded residences that transform real estate
            into collectible art. Discover how Richard Orlinski's artistic vision can elevate your
            concept.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/developers" variant="light">
              For Developers
            </CTAButton>
            <CTAButton href="/contact" variant="light">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
