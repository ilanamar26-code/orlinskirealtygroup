// Dropbox Images Configuration
// Dropbox folder: https://www.dropbox.com/scl/fo/lar92l05jxmzelx59u44y/AJtnVyS-NWEZQv3nFtbQ93I?rlkey=c2qqs6bpqyw690srcwcs0fapf&dl=0
// 
// To get direct image links:
// 1. Open the Dropbox folder link above
// 2. For each image, right-click → "Copy link" or "Share" → "Create a link"
// 3. The link will be: https://www.dropbox.com/s/[file_id]/[filename]?dl=0
// 4. Replace ?dl=0 with ?raw=1 to get direct image URL
// 5. Paste the link below

export const richardOrlinskiImages = {
  // Main portrait/hero image for biography section
  portrait: '', 
  
  // Images for "The Orlinski Universe" section
  sculpture: '', 
  architecture: '', 
  design: '', 
  collectibles: '', 
  
  // Additional gallery images (you can add multiple)
  gallery: [] as string[],
  
  // Exhibition/installation images
  exhibitions: [] as string[],
  
  // Artwork images
  artworks: [] as string[],
}

// Helper to get image or fallback
export function getImageUrl(url: string, fallback: string = ''): string {
  if (url && url.trim() !== '') {
    return url
  }
  return fallback
}

// Helper to get a random image from array or return fallback
export function getRandomImage(images: string[], fallback: string = ''): string {
  if (images && images.length > 0) {
    const validImages = images.filter(img => img && img.trim() !== '')
    if (validImages.length > 0) {
      return validImages[Math.floor(Math.random() * validImages.length)]
    }
  }
  return fallback
}
