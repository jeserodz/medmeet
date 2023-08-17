import { InferModel, relations } from 'drizzle-orm';
import { pgTable, uuid, text, boolean, timestamp } from 'drizzle-orm/pg-core';

// ========================
// TABLES
// ========================
export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  bio: text('bio'),
  is_doctor: boolean('is_doctor'),
  is_business: boolean('is_business'),
  first_name: text('first_name'),
  last_name: text('last_name'),
  avatar_url: text('avatar_url'),
  email: text('email').notNull(),
  phone: text('phone'),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

export const venues = pgTable('venues', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name'),
  google_maps_place_id: text('google_maps_place_id'),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

export const events = pgTable('events', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title'),
  description: text('description'),
  datetime: timestamp('datetime', { withTimezone: true }),
  author_id: uuid('author_id'),
  venue_id: uuid('venue_id'),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

export const eventRegistrations = pgTable('event_registrations', {
  id: uuid('id').defaultRandom().primaryKey(),
  event_id: uuid('event_id'),
  user_id: uuid('user_id'),
  is_accepted: boolean('is_accepted'),
  is_rejected: boolean('is_rejected'),
  is_canceled: boolean('is_canceled'),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

export const eventSpeakers = pgTable('event_speakers', {
  id: uuid('id').defaultRandom().primaryKey(),
  event_id: uuid('event_id'),
  user_id: uuid('user_id'),
  bio: text('bio'),
  image_url: text('image_url'),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

export const images = pgTable('images', {
  id: uuid('id').defaultRandom().primaryKey(),
  url: text('url'),
  venue_id: uuid('venue_id'),
  event_id: uuid('event_id'),
  is_poster: boolean('is_poster'),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

// ========================
// RELATIONS
// ========================
export const usersRelations = relations(users, ({ many }) => ({
  ownedEvents: many(events),
  joinedEvents: many(eventRegistrations),
  speakingEvents: many(eventSpeakers),
}));

export const venuesRelations = relations(venues, ({ many }) => ({
  events: many(events),
}));

export const eventsRelations = relations(events, ({ one, many }) => ({
  owner: one(users, { fields: [events.author_id], references: [users.id] }),
  venue: one(venues, { fields: [events.venue_id], references: [venues.id] }),
  registrations: many(eventRegistrations),
  speakers: many(eventSpeakers),
  images: many(images),
}));

export const eventRegistrationsRelations = relations(
  eventRegistrations,
  ({ one }) => ({
    event: one(events, {
      fields: [eventRegistrations.event_id],
      references: [events.id],
    }),
    user: one(users, {
      fields: [eventRegistrations.user_id],
      references: [users.id],
    }),
  })
);

export const eventSpeakersRelations = relations(eventSpeakers, ({ one }) => ({
  event: one(events, {
    fields: [eventSpeakers.event_id],
    references: [events.id],
  }),
  speaker: one(users, {
    fields: [eventSpeakers.user_id],
    references: [users.id],
  }),
}));

export const imagesRelations = relations(images, ({ one }) => ({
  event: one(events, { fields: [images.event_id], references: [events.id] }),
  venue: one(venues, { fields: [images.venue_id], references: [venues.id] }),
}));

// ========================
// TYPES
// ========================
export type User = InferModel<typeof users>;
export type NewUser = InferModel<typeof users, 'insert'>;

export type Event = InferModel<typeof events>;
export type NewEvent = InferModel<typeof events, 'insert'>;

export type EventRegistration = InferModel<typeof eventRegistrations>;
export type NewEventRegistration = InferModel<typeof eventRegistrations,'insert'>; // prettier-ignore

export type Image = InferModel<typeof images>;
export type NewImage = InferModel<typeof images, 'insert'>;
