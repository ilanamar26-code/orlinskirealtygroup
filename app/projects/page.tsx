import Image from 'next/image'

export default async function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-12 px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-4 max-w-2xl">
        <p className="text-gold text-xs md:text-sm font-medium uppercase tracking-[0.2em]">
          The Wild Collection
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-black">Concepts</h1>
        <p className="text-graphite text-lg whitespace-nowrap">
          Signature concepts imagined through the art of Richard Orlinski. With love ❤️ & AI.
        </p>
        <p className="text-graphite text-lg whitespace-nowrap">
          We have imagined, alongside our artistic teams, how to adapt Richard Orlinski’s art to
          real estate.
        </p>
      </div>

      <section className="space-y-8">
        {[
          {
            title: 'Orlinski Hotels & Residences',
            logo: '/images/szr-logo-hero.jpg',
            video: '/videos/orlinski-hotels-residences.mp4',
            description:
              'In the heart of the city, Orlinski Hotels & Residences redefines urban luxury through warmth, elegance, and art. Crafted with rich woods, refined textures, and warm tones, every space radiates a sense of intimacy and sophistication.',
            gallery: [
              '/images/wild-collection/szr-entree.jpg',
              '/images/wild-collection/szr-living.jpg',
              '/images/wild-collection/szr-room.jpg',
              '/images/wild-collection/szr-pool.jpg',
              '/images/wild-collection/szr-indoor-pool.jpg',
            ],
          },
          {
            title: 'BEACHFRONT LIVING BY RICHARD ORLINSKI',
            logo: '/images/swat-logo1.jpg',
            video: '/videos/beachfront-living-by-ro.mp4',
            description:
              'Where the ocean becomes your horizon and art defines every detail. This visionary destination blends luxury hospitality with immersive artistry: hotel rooms, signature suites, private residences, a beach club, and a serene spa all set along the shore.',
            gallery: [
              '/images/wild-collection/wat-lobby.jpg',
              '/images/wild-collection/wat-living.jpg',
              '/images/wild-collection/wat-entrance.jpg',
              '/images/wild-collection/wat-spa.jpg',
              '/images/wild-collection/wat-room.jpg',
            ],
          },
          {
            title: "L’Ours Blanc by Richard Orlinski",
            logo: '/images/bear-logo1.jpg',
            video: '/videos/ours-blanc-by-ro.mp4',
            description:
              'Tucked away in the mountains, OURS BLANC by Richard Orlinski transforms alpine living into a world of warmth, elegance, and art. Wrapped in rich woods, soft textures, and glowing tones, every space feels intimate, inviting, and effortlessly sophisticated — a sanctuary where design meets pure mountain serenity.',
            gallery: [
              '/images/wild-collection/bear-living.jpg',
              '/images/wild-collection/bear-out.jpg',
              '/images/wild-collection/bear-pool.jpg',
              '/images/wild-collection/bear-room.jpg',
              '/images/wild-collection/bear-skiroom.jpg',
            ],
          },
        ].map((item) => (
          <div
            key={item.title}
            className="relative overflow-hidden rounded-3xl border border-black/10 bg-black shadow-[0_30px_80px_-60px_rgba(0,0,0,0.7)]"
          >
            <div className="relative aspect-[16/7]">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={item.video} type="video/mp4" />
              </video>
            </div>
            <div className="bg-offwhite px-6 py-6 border-t border-black/10">
              <div className="grid gap-6 md:grid-cols-[180px_1fr] items-center rounded-2xl border border-black/10 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]">
                <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-black/10 bg-offwhite">
                  <Image src={item.logo} alt={`${item.title} logo`} fill className="object-cover object-center" />
                </div>
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-black/60">{item.title}</p>
                  <p className="text-graphite text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 bg-offwhite px-6 pb-6 pt-2 md:grid-cols-6">
              {item.gallery.map((image, index) => (
                <div
                  key={image}
                  className={`rounded-2xl border border-black/10 bg-white shadow-[0_20px_50px_-40px_rgba(0,0,0,0.6)] overflow-hidden ${
                    index < 2 ? 'md:col-span-3' : 'md:col-span-2'
                  }`}
                >
                  <Image src={image} alt="" width={1600} height={1200} className="w-full h-auto rounded-2xl" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
