import Link from 'next/link';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { SignInForm } from './components/SignInForm';

export default async function TestPage() {
  const supabase = createServerComponentClient({ cookies });
  const session = await supabase.auth.getSession();

  if (session.data.session) {
    const user = session.data.session.user;
    await supabase.from('users').upsert({
      id: user.id,
      email: user.email,
      first_name: user.user_metadata.first_name,
      last_name: user.user_metadata.last_name,
    });
    redirect('/');
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center d-flex vh-100">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <SignInForm />
                    <hr />
                    <div className="text-center">
                      <Link className="small" href="forgot-password">
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link className="small" href="/register">
                        Create an Account!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
