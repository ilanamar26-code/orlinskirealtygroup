import { initTRPC } from '@trpc/server'
import superjson from 'superjson'
import { z } from 'zod'
import { supabase } from '../supabase'

const t = initTRPC.context().create({
  transformer: superjson,
})

export const router = t.router
export const publicProcedure = t.procedure

export const appRouter = router({
  submitQualification: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(),
        company: z.string().optional(),
        role: z.string().optional(),
        phone: z.string().optional(),
        projectLocation: z.string().optional(),
        assetType: z.string().optional(),
        gdvRange: z.string().optional(),
        timeline: z.string().optional(),
        message: z.string().optional(),
        userType: z.enum(['developer', 'landowner', 'investor', 'other']),
        honeypot: z.string().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      if (input.honeypot) {
        throw new Error('Spam detected')
      }

      if (!supabase) {
        throw new Error('Supabase not configured')
      }

      const { data, error } = await supabase.from('qualification_submissions').insert({
        name: input.name,
        email: input.email,
        company: input.company,
        role: input.role,
        phone: input.phone,
        project_location: input.projectLocation,
        asset_type: input.assetType,
        gdv_range: input.gdvRange,
        timeline: input.timeline,
        message: input.message,
        user_type: input.userType,
      })

      if (error) {
        throw new Error(error.message)
      }

      return { success: true, data }
    }),
})

export type AppRouter = typeof appRouter
