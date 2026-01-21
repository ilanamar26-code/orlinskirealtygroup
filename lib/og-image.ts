/**
 * Fetches Open Graph image from a given URL
 * Tries og:image, twitter:image, or first large image found
 */
export async function getOgImage(url: string): Promise<string | null> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 8000) // 8 second timeout

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      return null
    }

    const html = await response.text()

    // Try og:image first
    const ogImageMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i)
    if (ogImageMatch && ogImageMatch[1]) {
      return convertToAbsoluteUrl(ogImageMatch[1], url)
    }

    // Try twitter:image
    const twitterImageMatch = html.match(
      /<meta\s+name=["']twitter:image["']\s+content=["']([^"']+)["']/i,
    )
    if (twitterImageMatch && twitterImageMatch[1]) {
      return convertToAbsoluteUrl(twitterImageMatch[1], url)
    }

    // Try to find first large image in the page
    const imgMatches = html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)
    for (const match of imgMatches) {
      if (match[1]) {
        const imgUrl = convertToAbsoluteUrl(match[1], url)
        // Check if image is likely to be a featured image (contains keywords or is large)
        if (
          imgUrl &&
          (imgUrl.includes('featured') ||
            imgUrl.includes('hero') ||
            imgUrl.includes('cover') ||
            imgUrl.includes('og') ||
            imgUrl.match(/\d{3,4}x\d{3,4}/)) // Dimensions in URL
        ) {
          return imgUrl
        }
      }
    }

    return null
  } catch (error) {
    console.error(`Error fetching OG image for ${url}:`, error)
    return null
  }
}

function convertToAbsoluteUrl(url: string, baseUrl: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }

  try {
    const base = new URL(baseUrl)
    if (url.startsWith('//')) {
      return `${base.protocol}${url}`
    }
    if (url.startsWith('/')) {
      return `${base.protocol}//${base.host}${url}`
    }
    return new URL(url, baseUrl).toString()
  } catch {
    return url
  }
}
