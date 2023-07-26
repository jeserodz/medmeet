'use client';

import { cookies } from 'next/headers';
import {
  createClientComponentClient,
  User,
} from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);

  async function getUsers() {
    const supabase = createClientComponentClient();
    const response = await supabase.auth.admin.listUsers();
    setUsers(response.data.users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return users.map((user) => (
    <p key={user.id}>
      {user.id} | {user.email}
    </p>
  ));
}
