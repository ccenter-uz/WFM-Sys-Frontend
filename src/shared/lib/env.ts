import { ZodError, z } from "zod";

const envVariablesSchema = z.object({
  VITE_API_ENDPOINT: z.string().url(),
});

let env: z.infer<typeof envVariablesSchema>;

try {
  env = envVariablesSchema.parse(import.meta.env);
} catch (err) {
  console.error(
    'Env vars is invalid, check schema in the "@/shared/lib/env.ts"',
  );

  if (err instanceof ZodError) {
    console.error(err.errors);
  }

  throw err;
}

export { env };
