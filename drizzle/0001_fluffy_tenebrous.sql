CREATE TABLE IF NOT EXISTS "venues" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text,
	"google_maps_place_id" text,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "images" ADD COLUMN "venue_id" uuid;