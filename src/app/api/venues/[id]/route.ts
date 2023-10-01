import { NextRequest } from 'next/server';
import { db, venues } from '../../../../db';
import { eq } from 'drizzle-orm';
import { VenueService } from '../../../../services/venue.service';
import { APIRequestContext } from '../../../../types';

export async function POST(req: NextRequest, ctx: APIRequestContext) {
  const data = await req.json();
  const venue = await VenueService.update(ctx.params.id, data);
  return Response.json(venue);
}

export async function DELETE(req: NextRequest, ctx: APIRequestContext) {
  const venue = await VenueService.remove(ctx.params.id);
  return Response.json(venue);
}
