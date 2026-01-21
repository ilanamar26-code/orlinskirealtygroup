'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CTAButton } from './CTAButton'

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8 max-w-4xl mx-auto px-6"
      >
        <div className="space-y-4">
          <p className="text-gold text-sm md:text-base font-medium uppercase tracking-wider">
            Pioneering Art-Driven Branded Residences
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-tight">
            Where real estate becomes art.
          </h1>
        </div>
        <p className="text-graphite text-lg md:text-xl max-w-2xl mx-auto">
          We are leading the branded residences sector by bringing together the artistic vision of
          Richard Orlinski with visionary real estate developers. NDA-first, curated access for
          serious developers, landowners, and investors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton href="/developers" variant="dark">
            For Developers
          </CTAButton>
          <CTAButton href="/about" variant="light">
            Discover Our Vision
          </CTAButton>
        </div>
      </motion.div>
    </section>
  )
}
