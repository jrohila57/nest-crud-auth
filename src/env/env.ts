import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  BASE_URL: z
    .string()
    .url({ message: 'BASE_URL must be a valid URL' })
    .min(1, { message: 'BASE_URL must be provided' }),
  PORT: z.coerce.number().min(1, { message: 'PORT must be provided' }),
  PGPORT: z.string().min(1, { message: 'PGPORT must be provided' }),
  PGHOST: z.string().min(1, { message: 'PGHOST must be provided' }),
  PGDATABASE: z.string().min(1, { message: 'PGDATABASE must be provided' }),
  PGUSER: z.string().min(1, { message: 'PGUSER must be provided' }),
  PGPASSWORD: z.string().min(1, { message: 'PGPASSWORD must be provided' }),
});
export type Env = z.infer<typeof envSchema>;
