import Link from 'next/link';
import { SignUpForm } from './components/SignUpForm';

export default function RegisterPage() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center d-flex vh-100">
        <div className="card o-hidden border-0 shadow-lg col-9">
          <div className="card-body p-0">
            {/* Nested Row within Card Body */}
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image" />
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Create an Account!
                    </h1>
                  </div>
                  <SignUpForm />
                  <hr />
                  <div className="text-center">
                    <a className="small" href="forgot-password">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="text-center">
                    <a className="small" href="login">
                      Already have an account? Login!
                    </a>
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
