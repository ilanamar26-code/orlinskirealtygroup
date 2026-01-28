import { PressCard } from '@/components/PressCard'
import { getAllPressItems } from '@/lib/sanity'
import { pressData, ONE_VILLAGE_IMAGE_URL } from '@/lib/press-data'
import { getOgImage } from '@/lib/og-image'

export default async function PressPage() {
  const sanityPressItems = await getAllPressItems()
  const pressItems = sanityPressItems.length > 0 ? sanityPressItems : pressData

  // Fetch OG images for items that don't have them
  const pressItemsWithImages = await Promise.all(
    pressItems.map(async (item: any) => {
      const url = item.url || item.link
      let imageUrl = item.featuredImage || item.ogImageUrl

      // If no image and we have a URL, try to fetch OG image
      if (!imageUrl && url) {
        try {
          imageUrl = await getOgImage(url)
        } catch (error) {
          console.error(`Error fetching OG image for ${url}:`, error)
        }
      }

      // Fallback to One Village News image if still no image
      if (!imageUrl) {
        imageUrl = ONE_VILLAGE_IMAGE_URL
      }

      return {
        ...item,
        imageUrl,
        title: item.title || item.headline,
        publisher: item.publisher || item.source,
        date: item.publishedAt || item.date,
        url,
      }
    }),
  )

  return (
    <div className="mx-auto max-w-[1200px] space-y-12 px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-4 max-w-2xl">
        <p className="text-gold text-xs md:text-sm font-medium uppercase tracking-[0.2em]">Press</p>
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-black">Press</h1>
        <p className="text-graphite text-lg whitespace-nowrap">
          Latest news, announcements, and coverage of Orlinski Realty Group and our branded residence projects.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pressItemsWithImages.map((item: any, index: number) => (
          <PressCard
            key={index}
            title={item.title}
            publisher={item.publisher}
            date={item.date}
            url={item.url}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}
