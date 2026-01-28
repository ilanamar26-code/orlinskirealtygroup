'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { CTAButton } from './CTAButton'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[82vh] px-4 pb-2 pt-1 sm:px-6 md:pb-4 md:pt-2 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="my-auto space-y-6 lg:pr-2 max-w-[620px]"
        >
          <p className="text-gold text-xs md:text-sm font-medium uppercase tracking-[0.3em]">
            Pioneering Art-Driven Branded Residences
          </p>
          <h1 className="font-heading text-[clamp(2.8rem,6vw,5.2rem)] font-bold text-black leading-[0.95] tracking-tight">
            Where real estate
            <span className="block text-gold">becomes art.</span>
          </h1>
          <p className="text-graphite text-lg md:text-xl max-w-[520px]">
            We lead the branded residences sector by fusing the artistic vision of Richard Orlinski
            with visionary real estate developers. Confidentiality and curated access for serious
            developers, landowners, and investors.
          </p>
          <p className="text-graphite text-base max-w-[520px]">
            For developers, this delivers premium positioning, pricing power, and faster demand
            absorption.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-start pt-1">
            <CTAButton href="/developers" variant="dark">
              For Developers
            </CTAButton>
            <CTAButton href="/about" variant="light">
              Discover Our Vision
            </CTAButton>
          </div>
        </motion.div>

        <motion.figure
          className="relative h-full min-h-[520px] w-full overflow-hidden rounded-3xl border border-black/10 bg-offwhite shadow-[0_30px_80px_-60px_rgba(0,0,0,0.7)] lg:min-h-[640px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -6, 0],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
        >
          <Image
            src="/images/anewtest.jpg"
            alt="Orlinski-inspired branded residence entrance"
            fill
            className="object-cover"
            priority
          />
        </motion.figure>
      </div>
    </section>
  )
}
