import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <div className="container">
      {/* Outer Row */}
      <div className="row justify-content-center align-items-center d-flex vh-100">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* Nested Row within Card Body */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-password-image" />
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-2">
                        Forgot Your Password?
                      </h1>
                      <p className="mb-4">
                        We get it, stuff happens. Just enter your email address
                        below and we&apos;ll send you a link to reset your
                        password!
                      </p>
                    </div>
                    <form className="user">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                        />
                      </div>
                      <div className="btn btn-primary btn-user btn-block">
                        Reset Password
                      </div>
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link className="small" href="register">
                        Create an Account!
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link className="small" href="login">
                        Already have an account? Login!
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
