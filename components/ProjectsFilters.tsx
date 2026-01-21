'use client'

import { useState } from 'react'
import Link from 'next/link'
import { EditorialCard } from './EditorialCard'
import { urlFor } from '@/lib/sanity'

const regions = [
  { id: 'all', label: 'All Regions' },
  { id: 'middle-east', label: 'Middle East' },
  { id: 'asia-pacific', label: 'Asia Pacific' },
  { id: 'europe', label: 'Europe' },
  { id: 'americas', label: 'Americas' },
]

interface ProjectsFiltersProps {
  projects: any[]
}

export function ProjectsFilters({ projects }: ProjectsFiltersProps) {
  const [selectedRegion, setSelectedRegion] = useState('all')

  // Filter projects by region
  const filteredProjects =
    selectedRegion === 'all'
      ? projects
      : projects.filter((project: any) => {
          const location = (project.location || '').toLowerCase()
          if (selectedRegion === 'middle-east') {
            return (
              location.includes('dubai') ||
              location.includes('uae') ||
              location.includes('qatar') ||
              location.includes('saudi')
            )
          }
          if (selectedRegion === 'asia-pacific') {
            return (
              location.includes('singapore') ||
              location.includes('hong kong') ||
              location.includes('india') ||
              location.includes('china')
            )
          }
          if (selectedRegion === 'europe') {
            return (
              location.includes('france') ||
              location.includes('uk') ||
              location.includes('spain') ||
              location.includes('portugal')
            )
          }
          if (selectedRegion === 'americas') {
            return (
              location.includes('usa') ||
              location.includes('united states') ||
              location.includes('canada') ||
              location.includes('brazil')
            )
          }
          return true
        })

  return (
    <>
      {/* Region Filters */}
      <div className="flex flex-wrap gap-3">
        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() => setSelectedRegion(region.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedRegion === region.id
                ? 'bg-black text-offwhite'
                : 'bg-stone/10 text-graphite hover:bg-stone/20'
            }`}
          >
            {region.label}
          </button>
        ))}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: any) => {
            const imageUrl =
              project.heroImage && typeof project.heroImage === 'object'
                ? urlFor(project.heroImage).width(600).height(400).url()
                : '/images/content/project-placeholder.jpg'

            return (
              <Link
                key={project.slug?.current || project.slug}
                href={`/projects/${project.slug?.current || project.slug}`}
              >
                <EditorialCard
                  title={project.name}
                  description={project.description || project.location}
                  image={imageUrl}
                />
              </Link>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-24">
          <p className="text-graphite">
            {projects.length === 0
              ? 'No projects available at this time.'
              : `No projects found in ${regions.find((r) => r.id === selectedRegion)?.label}.`}
          </p>
        </div>
      )}
    </>
  )
}
