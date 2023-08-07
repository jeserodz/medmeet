'use client';
import { useUser } from '@/providers/UserProvider';
import { ChangeAvatarModal } from './ChangeAvatarModal';

export function ProfileWidget() {
  const { user } = useUser();

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
      <a
        href="#"
        data-toggle="modal"
        data-target="#logoutModal"
        className="btn btn btn-light"
      >
        Sign out
      </a>
    </div>
  );
}
