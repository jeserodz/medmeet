import Link from 'next/link';
import { redirect } from 'next/navigation';
import { SignInForm } from './components/SignInForm';
import * as service from '../../../service';

export default async function TestPage() {
  const session = await service.getSessionForServer();

  if (session) {
    await service.createUserFromSession(session);
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
