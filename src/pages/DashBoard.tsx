import { signOut } from 'firebase/auth';
import { DocumentData } from 'firebase/firestore';
import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/auth';
import { getMenus } from '../firebase/db';
import { useUser } from '../hooks/useUser';

interface DashBoardProps {}
export const DashBoard: FC<DashBoardProps> = () => {
  const [user] = useUser();
  const [menu, setMenu] = useState<DocumentData[]>();
  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) {
      navigate('/login');
    }
  }, [user]);

  useEffect(() => {
    getMenus().then((docs) => {
      setMenu(docs);
    });
  }, []);
  return user ? (
    <>
      <h1>DashBoard</h1>
      <h3>{user.email}</h3>
      {menu?.map((data: any, index) => (
        <div key={index}>{JSON.stringify(data)}</div>
      ))}
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
