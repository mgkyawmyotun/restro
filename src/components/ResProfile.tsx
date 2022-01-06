import { DocumentData } from 'firebase/firestore';
import React, { FC, useEffect, useState } from 'react';
import { getRes } from '../firebase/db';
import { getImage } from '../firebase/storage';
import { useUser } from '../hooks/useUser';
import styles from '../scss/dashboard.module.scss';
import { CreateRestaurant } from './CreateRestaurant';

interface ResProfileProps {}
export const ResProfile: FC<ResProfileProps> = () => {
  const [imgPath, setImgPath] = useState<string>();
  const [user] = useUser();
  const [resData, setResData] = useState<DocumentData | null>();
  useEffect(() => {
    if (resData) {
      getImage(resData.photo__url).then((url) => setImgPath(url));
    }
  }, [resData]);
  useEffect(() => {
    if (user) {
      getRes(user?.uid).then((data) => {
        setResData(data);
      });
    }
  }, [user]);

  return (
    <div className={styles.res_profile}>
      {resData ? (
        <>
          <h1>{resData.name}</h1>
          <img src={imgPath} alt="" />
          <h2>Email - {user?.email}</h2>
          <h2>Address - {resData.address}</h2>
        </>
      ) : (
        <CreateRestaurant />
      )}
    </div>
  );
};
