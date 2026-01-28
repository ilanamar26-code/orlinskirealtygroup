import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Providers } from './providers'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Orlinski Realty Group | Branded Residences & Hospitality',
  description:
    'Curating branded residences and hospitality partnerships. Confidentiality and curated access for visionary developers, landowners, and investors.',
  keywords: [
    'branded residences',
    'hospitality partnerships',
    'luxury real estate',
    'real estate development',
    'Orlinski Realty Group',
  ],
  authors: [{ name: 'Orlinski Realty Group' }],
  openGraph: {
    title: 'Orlinski Realty Group | Branded Residences & Hospitality',
    description: 'Curating branded residences and hospitality partnerships. Confidentiality and curated access.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orlinski Realty Group',
    description: 'Curating branded residences and hospitality partnerships.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-offwhite text-graphite min-h-screen flex flex-col">
        <Providers>
          <Navigation />
          <main className="flex-1 max-w-screen-2xl mx-auto px-6 lg:px-12">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
