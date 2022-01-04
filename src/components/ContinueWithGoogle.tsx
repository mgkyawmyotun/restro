import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material';
import type { FC } from 'react';
import React from 'react';
import { singInWithGoogle } from '../firebase/auth';
import styles from '../scss/button.module.scss';
interface ContinueWithGoogleProps {}

export const ContinueWithGoogle: FC<ContinueWithGoogleProps> = () => {
  return (
    <Button
      variant="contained"
      className={styles.google__button}
      startIcon={<GoogleIcon />}
      onClick={() => {
        singInWithGoogle();
      }}
    >
      Continue With Google
    </Button>
  );
};
