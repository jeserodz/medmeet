'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRef } from 'react';

const supabase = createClientComponentClient();

export function SignUpForm() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSignUp() {
    if (!formRef.current) return;
    const fields = formRef.current.elements as any;
    console.log(fields);
    supabase.auth.signUp({
      email: fields?.email.value,
      password: fields?.password.value,
      options: {
        data: {
          first_name: fields?.firstName.value,
          last_name: fields?.lastName.value,
        },
        emailRedirectTo: `${location.origin}/login`,
      },
      phone: '',
    });
  }

  return (
    <form className="user" ref={formRef}>
      <div className="form-group row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <input
            type="text"
            className="form-control form-control-user"
            name="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control form-control-user"
            name="lastName"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control form-control-user"
          name="email"
          placeholder="Email Address"
        />
      </div>
      <div className="form-group row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <input
            type="password"
            className="form-control form-control-user"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="col-sm-6">
          <input
            type="password"
            className="form-control form-control-user"
            name="repeatPassword"
            placeholder="Repeat Password"
          />
        </div>
      </div>
      <div
        className="btn btn-primary btn-user btn-block"
        onClick={handleSignUp}
      >
        Register Account
      </div>
    </form>
  );
}
