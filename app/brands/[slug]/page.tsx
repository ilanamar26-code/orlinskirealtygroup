import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getBrandBySlug, getAllBrands, urlFor } from '@/lib/sanity'

export async function generateStaticParams() {
  const brands = await getAllBrands()
  return brands.map((brand: any) => ({
    slug: brand.slug?.current || brand.slug,
  }))
}

export default async function BrandPage({ params }: { params: { slug: string } }) {
  const brand = await getBrandBySlug(params.slug)

  if (!brand) {
    notFound()
  }

  const heroImageUrl =
    brand.heroImage && typeof brand.heroImage === 'object'
      ? urlFor(brand.heroImage).width(1200).height(600).url()
      : null

  return (
    <div className="space-y-12 py-12">
      {heroImageUrl && (
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg">
          <Image src={heroImageUrl} alt={brand.name} fill className="object-cover" />
        </div>
      )}

      <div className="space-y-6">
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-black">{brand.name}</h1>
        {brand.description && (
          <p className="text-graphite text-lg max-w-3xl">{brand.description}</p>
        )}
      </div>

      {brand.content && (
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: brand.content }}
        />
      )}
    </div>
  )
}
