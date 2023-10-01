import { NextRequest, NextResponse } from 'next/server';
import { EventService } from '@/services/event.service';

export async function GET() {
  const events = await EventService.getAll();
  return NextResponse.json(events);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const event = await EventService.create(data);
  return NextResponse.json(event);
}
