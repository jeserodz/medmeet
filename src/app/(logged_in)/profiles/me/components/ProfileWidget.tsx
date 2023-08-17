'use client';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useUser } from '@/providers/UserProvider';
import { ChangeAvatarModal } from './ChangeAvatarModal';

export function ProfileWidget() {
  const router = useRouter();
  const { user } = useUser();

  async function handleLogout() {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();
    if (!error) router.push('/login');
  }

  return (
    <div className="bg-gradient-primary inner-profile text-white py-5 px-4 widget shadow rounded mb-4 text-center">
      <div
        style={{ position: 'relative', width: 'fit-content', margin: '0 auto' }}
      >
        <img
          className="img-profile rounded-circle"
          src={user?.avatar_url || '/img/s4.png'}
        />
        <ChangeAvatarModal />
      </div>
      <h5 className="mb-1 mt-3 mb-4">
        {user?.first_name} {user?.last_name}
      </h5>
      <button
        data-toggle="modal"
        data-target="#logoutModal"
        className="btn btn btn-light"
        onClick={handleLogout}
      >
        Sign out
      </button>
    </div>
  );
}
