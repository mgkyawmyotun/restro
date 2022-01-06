import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import type { FC } from 'react';
import React from 'react';
import styles from '../scss/dashboard.module.scss';
import { ResDialog } from './ResDialog';
interface ResMenuProps {}
export const ResMenu: FC<ResMenuProps> = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.menu}>
      <h1>List Of Menu</h1>
      <Fab
        color="secondary"
        aria-label="add"
        className={styles.fab}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <ResDialog open={open} handleClose={handleClose} />
    </div>
  );
};
