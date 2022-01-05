import React, { FC, useEffect, useState } from 'react';
import { getResImg } from '../firebase/storage';
import { useUser } from '../hooks/useUser';
import styles from '../scss/dashboard.module.scss';

interface ResProfileProps {}
export const ResProfile: FC<ResProfileProps> = () => {
  const [imgPath, setImgPath] = useState<string>();
  const [user] = useUser();
  useEffect(() => {
    getResImg().then((url) => setImgPath(url));
  }, []);
  return (
    <div className={styles.res_profile}>
      <h1>ရွှေကရဝိတ်</h1>
      <img src={imgPath} alt="" />
      <h2>Email - {user?.email}</h2>
      <h2>Address - {'73street 48x49 street Mandalay'}</h2>
    </div>
  );
};
