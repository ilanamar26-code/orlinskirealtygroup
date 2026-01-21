import Image from 'next/image'
import Link from 'next/link'
import { EditorialCard } from '@/components/EditorialCard'
import { CTAButton } from '@/components/CTAButton'
import { FullscreenImage } from '@/components/FullscreenImage'
import { richardOrlinskiImages, getImageUrl, getRandomImage } from '@/lib/richard-orlinski-images'

export default function RichardOrlinskiPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Image */}
      <section className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-160px)] py-12 lg:py-16">
        {/* Left Column: Content */}
        <div className="space-y-8 lg:space-y-10 order-2 lg:order-1">
          {/* Title */}
          <div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
              Richard Orlinski
            </h1>
            <p className="text-graphite text-lg md:text-xl leading-relaxed max-w-2xl">
              French contemporary artist, sculptor, and creator of the Orlinski artistic universe. 
              The most sold contemporary French artist in the world, with works exhibited globally 
              and collected by art enthusiasts worldwide.
            </p>
          </div>

          {/* Biography */}
          <div className="space-y-5 text-graphite text-base md:text-lg leading-relaxed max-w-2xl">
            <p>
              Born in 1966, Richard Orlinski is a self-taught French artist who has revolutionized 
              contemporary sculpture with his distinctive faceted geometry aesthetic. His work bridges 
              the gap between art and popular culture, making contemporary art accessible to a wider 
              audience.
            </p>
            <p>
              Orlinski's artistic philosophy centers on the concept of "Born Wild" - a celebration 
              of freedom, strength, and the untamed spirit. His sculptures, often featuring wild 
              animals and abstract forms, are characterized by their sharp, geometric facets that 
              create dynamic plays of light and shadow.
            </p>
            <p>
              His monumental sculptures have been exhibited in prestigious locations including the 
              Champs-Élysées in Paris, Times Square in New York, and major art fairs worldwide. 
              Orlinski's work transcends traditional art boundaries, appearing in galleries, 
              public spaces, and now, branded real estate developments.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-6 md:gap-8 pt-4 border-t border-stone/20">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">#1</div>
              <p className="text-graphite text-sm md:text-base leading-snug">Most sold contemporary French artist worldwide</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">500K+</div>
              <p className="text-graphite text-sm md:text-base leading-snug">Artworks sold globally</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">100+</div>
              <p className="text-graphite text-sm md:text-base leading-snug">Countries with Orlinski collections</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">20+</div>
              <p className="text-graphite text-sm md:text-base leading-snug">Years of artistic creation</p>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="order-1 lg:order-2 lg:sticky lg:top-24 lg:self-start">
          <div className="bg-offwhite rounded-2xl overflow-hidden border border-stone/20 shadow-xl">
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

      {/* Artistic Universe */}
      <section className="space-y-8">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-black">
          The Orlinski Universe
        </h2>
        <p className="text-graphite text-lg max-w-3xl">
          Richard Orlinski's artistic universe extends beyond sculpture to encompass architecture, 
          design, and lifestyle. His faceted geometry aesthetic creates a distinctive visual language 
          that transforms spaces into living works of art.
        </p>
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
      <section className="bg-black text-offwhite py-24 px-6 rounded-lg text-center space-y-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold">
          Bring the Orlinski Universe to Your Project
        </h2>
        <p className="text-stone text-lg max-w-2xl mx-auto">
          Partner with Orlinski Realty Group to create branded residences that transform real estate 
          into collectible art. Discover how Richard Orlinski's artistic vision can elevate your 
          development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/developers" variant="light">
            For Developers
          </CTAButton>
          <CTAButton href="/contact" variant="light">
            Contact Us
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
