'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../db';

type UserContextType = { user: User | null };

type UserProviderProps = {
  children: React.ReactNode;
  user: UserContextType['user'];
};

const UserContext = createContext<UserContextType>({ user: null });

export function UserProvider({ children, user }: UserProviderProps) {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
