import GoogleIcon from '@mui/icons-material/Google';
import { Button, Divider, TextField } from '@mui/material';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../scss/login.module.scss';

interface LoginProps {}

export const Login: FC<LoginProps> = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.login}>
      <div className={styles.login__form}>
        <h1>အကောင့်သို့ဝင်ပါ</h1>
        <TextField
          label="Email"
          variant="outlined"
          margin="dense"
          sx={{ input: { color: 'white' } }}
          className={styles.input}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          margin="dense"
          sx={{
            input: { color: 'white' },
          }}
          className={styles.input}
          type="password"
        />
        <Button variant="contained" className={styles.button}>
          Login
        </Button>
        <Divider textAlign={'center'} light={true} className={styles.divider}>
          OR
        </Divider>
        <Button
          variant="contained"
          className={styles.google__button}
          startIcon={<GoogleIcon />}
        >
          Continue With Google
        </Button>
        <h3
          onClick={() => {
            navigate('/register');
          }}
        >
          ကောင့်မရှိဘူးလား?
        </h3>
      </div>
      ``
    </div>
  );
};
