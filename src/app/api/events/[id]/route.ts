import { NextRequest } from 'next/server';
import { EventService } from '@/services/event.service';
import { APIRequestContext } from '../../../../types';

export async function GET(req: NextRequest, ctx: APIRequestContext) {
  const id = ctx.params.id;

  if (id) {
    const event = await EventService.get(id);
    console.log(event);
    return Response.json(event);
  }
}

export async function POST(req: NextRequest, ctx: APIRequestContext) {
  const id = ctx.params.id;

  if (id) {
    const data = await req.json();
    const event = await EventService.update(id, data);
    console.log(event);
    return Response.json(event);
  }
}

export async function DELETE(req: NextRequest, ctx: APIRequestContext) {
  const id = ctx.params.id;

  if (!id) {
    return Response.json({ error: 'id is required' }, { status: 400 });
  }

  const event = await EventService.remove(id);
  return Response.json(event);
}
