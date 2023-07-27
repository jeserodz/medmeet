import { cookies } from 'next/headers';
import { createServerComponentClient, Session, } from '@supabase/auth-helpers-nextjs'; // prettier-ignore
import { db, users } from './db';

export async function getSessionForServer() {
  const supabase = createServerComponentClient({ cookies });
  const session = await supabase.auth.getSession();
  return session.data.session;
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
