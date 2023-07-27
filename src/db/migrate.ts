import 'dotenv/config';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { db } from './client';

console.log('DB_CONNECTION: ', process.env.DB_CONNECTION);

migrate(db, { migrationsFolder: 'drizzle' }).then(() => {
  console.log('Migration complete!');
  process.exit(0);
});
