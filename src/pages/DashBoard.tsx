import { signOut } from 'firebase/auth';
import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/auth';
import { useUser } from '../hooks/useUser';

interface DashBoardProps {}
export const DashBoard: FC<DashBoardProps> = () => {
  const [user] = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) {
      navigate('/login');
    }
  }, [user]);
  return user ? (
    <>
      <h1>DashBoard</h1>
      <h3>{user.email}</h3>
      <button
        onClick={() => {
          signOut(auth);
        }}
      >
        Logout
      </button>
    </>
  ) : (
    <></>
  );
};
