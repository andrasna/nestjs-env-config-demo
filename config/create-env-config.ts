import { z } from 'zod'

const envSchema = z.object({
  foo: z.string(),
  bar: z.string(),
});

// type EnvType = z.infer<typeof envSchema>

const createEnvConfig = () => {
  const env = {
    foo: process.env.FOO,
    bar: process.env.BAR,
  }

  const parsedEnv = envSchema.parse(env);
  
  return parsedEnv
}

export { createEnvConfig }
// export type { EnvType }