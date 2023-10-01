import { NextRequest, NextResponse } from 'next/server';
import { getUserForServer } from '../../../service';
import { db, venues } from '../../../db';

export async function POST(req: NextRequest) {
  const user = await getUserForServer();

  if (!user) return NextResponse.json({}, { status: 401 });

  const data = await req.json();

  const result = await db.insert(venues).values(data).returning();

  return NextResponse.json(result[0]);
}
