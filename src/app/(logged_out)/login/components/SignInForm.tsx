'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

export function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignIn = async (e: any) => {
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    router.refresh();
  };

  return (
    <form className="user">
      <div className="form-group">
        <input
          type="email"
          className="form-control form-control-user"
          id="exampleInputEmail"
          aria-describedby="emailHelp"
          placeholder="Enter Email Address..."
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control form-control-user"
          id="exampleInputPassword"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div
        onClick={handleSignIn}
        className="btn btn-primary btn-user btn-block"
      >
        Login
      </div>
    </form>
  );
}
