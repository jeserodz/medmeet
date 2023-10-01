import { eq } from 'drizzle-orm';
import { db, events } from '@/db';

export const EventService = {
  create: async (data: any) => {
    const [event] = await db.insert(events).values(data).returning();
    return event;
  },
  getAll: async () => {
    // const data = await db.select().from(events).orderBy(events.created_at);
    const data = await db.query.events.findMany({ with: { venue: true } });
    return data;
  },
  get: async (id: string) => {
    // const [event] = await db.select().from(events).where(eq(events.id, id));
    const event = await db.query.events.findFirst({
      where: eq(events.id, id),
      with: { venue: true },
    });

    // if (event?.datetime) {
    //   event.datetime = new Date(event.datetime).toISOString();
    // }

    return event || null;
  },
  update: async (id: string, data: any) => {
    const { created_at, ...values } = data;
    const [event] = await db
      .update(events)
      .set(values)
      .where(eq(events.id, id))
      .returning();
    return event || null;
  },
  remove: async (id: string) => {
    const [event] = await db
      .delete(events)
      .where(eq(events.id, id))
      .returning();
    return event || null;
  },
};
