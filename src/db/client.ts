import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const queryClient = postgres(process.env.DB_CONNECTION!);
export const db: PostgresJsDatabase = drizzle(queryClient);
