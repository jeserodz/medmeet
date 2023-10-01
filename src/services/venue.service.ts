import { eq } from 'drizzle-orm';
import { db, venues } from '../db';

export const VenueService = {
  create: async (data: any) => {
    const [venue] = await db.insert(venues).values(data).returning();
    return venue;
  },
  getAll: async () => {
    const data = await db.select().from(venues);
    return data;
  },
  get: async (id: string) => {
    const [venue] = await db.select().from(venues).where(eq(venues.id, id));
    return venue;
  },
  update: async (id: string, data: any) => {
    const { created_at, ...values } = data;
    const [venue] = await db
      .update(venues)
      .set(values)
      .where(eq(venues.id, id))
      .returning();
    return venue;
  },
  remove: async (id: string) => {
    const [venue] = await db
      .delete(venues)
      .where(eq(venues.id, id))
      .returning();
    return venue;
  },
};
