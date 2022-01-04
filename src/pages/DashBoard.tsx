import type { FC } from 'react';
import React from 'react';
import { useUser } from '../hooks/useUser';

interface DashBoardProps {}
export const DashBoard: FC<DashBoardProps> = () => {
  const [user] = useUser();
  return user ? (
    <>
      <h1>DashBoard</h1>
      <h3>{user.email}</h3>
    </>
  ) : (
    <></>
  );
};
