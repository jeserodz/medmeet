import { NextResponse } from 'next/server';
import { db, users } from '../../../../../../db';
import { eq } from 'drizzle-orm';
import { getSessionForServer } from '../../../../../../service';

export async function GET() {
  const session = await getSessionForServer();

  if (!session) return NextResponse.json({ error: true }, { status: 401 });

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.id, session.user.id));

  return NextResponse.json(user);
}
