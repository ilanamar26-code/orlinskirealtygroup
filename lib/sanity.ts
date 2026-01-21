import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2023-05-03'

let sanityClient: ReturnType<typeof createClient> | null = null

if (projectId) {
  sanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  })
}

const builder = imageUrlBuilder(sanityClient!)

export function urlFor(source: any) {
  if (!sanityClient) {
    return {
      width: () => ({ height: () => ({ url: () => '' }) }),
      height: () => ({ width: () => ({ url: () => '' }) }),
      url: () => '',
    }
  }
  return builder.image(source)
}

export async function getAllBrands() {
  if (!sanityClient) return []
  try {
    return await sanityClient.fetch(`*[_type == "brand"] | order(_createdAt desc)`)
  } catch (error) {
    console.error('Error fetching brands:', error)
    return []
  }
}

export async function getBrandBySlug(slug: string) {
  if (!sanityClient) return null
  try {
    const brands = await sanityClient.fetch(
      `*[_type == "brand" && slug.current == $slug][0]`,
      { slug },
    )
    return brands || null
  } catch (error) {
    console.error('Error fetching brand:', error)
    return null
  }
}

export async function getAllProjects() {
  if (!sanityClient) return []
  try {
    return await sanityClient.fetch(`*[_type == "project"] | order(_createdAt desc)`)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export async function getProjectBySlug(slug: string) {
  if (!sanityClient) return null
  try {
    const projects = await sanityClient.fetch(
      `*[_type == "project" && slug.current == $slug][0]`,
      { slug },
    )
    return projects || null
  } catch (error) {
    console.error('Error fetching project:', error)
    return null
  }
}

export async function getAllPressItems() {
  if (!sanityClient) return []
  try {
    return await sanityClient.fetch(`*[_type == "pressItem"] | order(publishedAt desc)`)
  } catch (error) {
    console.error('Error fetching press items:', error)
    return []
  }
}
