import type { FC } from 'react';
import React from 'react';
import styles from '../scss/dashboard.module.scss';
import { MenuTable } from './MenuTable';
interface ResMenuProps {}
export const ResMenu: FC<ResMenuProps> = () => {
  return (
    <div className={styles.menu}>
      <h1>List Of Menu</h1>
      <MenuTable />
    </div>
  );
};
