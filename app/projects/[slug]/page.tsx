import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getProjectBySlug, getAllProjects, urlFor } from '@/lib/sanity'

export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map((project: any) => ({
    slug: project.slug?.current || project.slug,
  }))
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const heroImageUrl =
    project.heroImage && typeof project.heroImage === 'object'
      ? urlFor(project.heroImage).width(1200).height(600).url()
      : null

  return (
    <div className="space-y-12 py-12">
      {heroImageUrl && (
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg">
          <Image src={heroImageUrl} alt={project.name} fill className="object-cover" />
        </div>
      )}

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-black">
            {project.name}
          </h1>
          {project.status && (
            <span className="px-4 py-2 bg-stone/20 rounded-full text-sm font-medium text-graphite">
              {project.status}
            </span>
          )}
        </div>
        {project.location && (
          <p className="text-gold text-lg font-medium">{project.location}</p>
        )}
        {project.description && (
          <p className="text-graphite text-lg max-w-3xl">{project.description}</p>
        )}
      </div>

      {project.content && (
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      )}
    </div>
  )
}
