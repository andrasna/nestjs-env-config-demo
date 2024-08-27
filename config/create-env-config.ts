import { z } from 'zod'

const envSchema = z.object({
  foo: z.string(),
  bar: z.string(),
});

const createEnvConfig = () => {
  const env = {
    foo: process.env.FOO,
    bar: process.env.BAR,
  }

  const parsedEnv = envSchema.parse(env);
  
  return parsedEnv
}

export { createEnvConfig }