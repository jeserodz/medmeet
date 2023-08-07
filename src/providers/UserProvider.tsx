'use client';

import { createContext, useContext, useState } from 'react';
import { User } from '../db';

const UserContext = createContext({
  user: null as User | null,
  setUser: (user: User | null) => {},
});

export function UserProvider(props: {
  children: React.ReactNode;
  userFromServer: User | null;
}) {
  const [user, setUser] = useState(props.userFromServer || null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
