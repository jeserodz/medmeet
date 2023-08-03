ALTER TABLE "users" ADD COLUMN "avatar_url" text;--> statement-breakpoint
ALTER TABLE "images" DROP COLUMN IF EXISTS "user_id";