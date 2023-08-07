import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { Area } from 'react-easy-crop';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import sharp from 'sharp';
import { db, users } from '../../../../../../db';
import { eq } from 'drizzle-orm';

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies });
  const session = await supabase.auth.getSession();

  if (session.error) {
    return NextResponse.json({ error: session.error }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get('file') as File;
  let croppedArea = formData.get('croppedArea');

  if (!file || !croppedArea) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 422 });
  }

  const area = JSON.parse(croppedArea as string) as Area;
  const arrayBuffer = await file.arrayBuffer();

  const image = await sharp(arrayBuffer)
    .extract({
      top: area.y,
      left: area.x,
      width: area.width,
      height: area.height,
    })
    .toBuffer();

  const path = `avatars/${session.data.session?.user.id}`;

  await supabase.storage
    .from('uploads')
    .upload(path, image, { contentType: file.type, upsert: true });

  const url = supabase.storage.from('uploads').getPublicUrl(path);
  const avatar_url = url.data.publicUrl.concat(`?v=${new Date().getTime()}`);

  const [updatedUser] = await db
    .update(users)
    .set({ avatar_url })
    .where(eq(users.id, session.data.session?.user.id!))
    .returning();

  return NextResponse.json(updatedUser);
}
