import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  throw new Error('Invalid Environment Variables')
}

export const env = _env.data
