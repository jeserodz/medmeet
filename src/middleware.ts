import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const session = await supabase.auth.getSession();

  const routesWithAuth = new RegExp(
    ['/profiles/me', '/events/create'].join('|')
  );
  const requiresAuth = routesWithAuth.test(req.nextUrl.pathname);

  if (session.error && requiresAuth) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return res;
}
