import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema.ts*',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: String(process.env.DB_CONNECTION),
  },
} satisfies Config;
