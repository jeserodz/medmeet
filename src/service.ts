import { cookies } from 'next/headers';
import { createServerComponentClient, Session, } from '@supabase/auth-helpers-nextjs'; // prettier-ignore
import { eq } from 'drizzle-orm';
import { db, User, users } from './db';
import dayjs from 'dayjs';

export async function getSessionForServer() {
  const supabase = createServerComponentClient({ cookies });
  const session = await supabase.auth.getSession();
  return session.data.session;
}

export async function getUserForServer() {
  const session = await getSessionForServer();
  const user = await getUserFromSession(session);
  return user;
}

export async function getUserFromSession(session: Session | null) {
  if (!session?.user) return null;

  const [user]: User[] = await db
    .select()
    .from(users)
    .where(eq(users.id, session.user.id));

  return user || null;
}

/**
 * Creates a user profile (public.users) from the user account (auth.users)
 **/
export async function createUserFromSession(session: Session) {
  await db
    .insert(users)
    .values({
      id: session.user.id,
      email: String(session.user.email),
      first_name: session.user.user_metadata.first_name,
      last_name: session.user.user_metadata.last_name,
    })
    .onConflictDoUpdate({
      target: users.id,
      set: {
        email: String(session.user.email),
        first_name: session.user.user_metadata.first_name,
        last_name: session.user.user_metadata.last_name,
      },
    });
}

export function getDateParts(date?: Date) {
  if (!date) return null;

  const d = dayjs(date);

  return {
    D: d.format('D'),
    DD: d.format('DD'),
    ddd: d.format('ddd'),
    M: d.format('M'),
    MM: d.format('MM'),
    MMM: d.format('MMM'),
    MMMM: d.format('MMMM'),
    h: d.format('h'),
    hh: d.format('hh'),
    s: d.format('s'),
    ss: d.format('ss'),
    A: d.format('A'),
    a: d.format('a'),
  };
}
