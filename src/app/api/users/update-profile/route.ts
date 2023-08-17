import { NextRequest, NextResponse } from 'next/server';
import { validationSchemas } from '../../../../util/constants';
import { getUserForServer } from '../../../../service';
import { db, users } from '../../../../db';
import { eq } from 'drizzle-orm';

export async function PATCH(req: NextRequest) {
  const user = await getUserForServer();

  if (!user) return NextResponse.json({}, { status: 401 });

  const data = await req.json();
  let parsed;

  try {
    parsed = await validationSchemas.myProfileForm.validate(data);
  } catch (e) {
    return NextResponse.json(e, { status: 422 });
  }

  const result = await db
    .update(users)
    .set(parsed)
    .where(eq(users.id, user.id))
    .returning();

  return NextResponse.json(result[0]);
}
