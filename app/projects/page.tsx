import Link from 'next/link'
import { EditorialCard } from '@/components/EditorialCard'
import { getAllProjects } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import { ProjectsFilters } from '@/components/ProjectsFilters'

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <div className="space-y-12 py-12">
      <div className="space-y-4">
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-black">Projects</h1>
        <p className="text-graphite text-lg max-w-2xl">
          Our portfolio of branded residence and hospitality projects around the world.
        </p>
      </div>

      <ProjectsFilters projects={projects} />
    </div>
  )
}
