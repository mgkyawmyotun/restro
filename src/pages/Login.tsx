import { Button, Divider } from '@mui/material';
import { Formik } from 'formik';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContinueWithGoogle } from '../components/ContinueWithGoogle';
import { InputField } from '../components/InputField';
import { loginUser } from '../firebase/auth';
import { useIsLogin } from '../hooks/useIsLogin';
import styles from '../scss/login.module.scss';
import { loginSchema } from '../utils/validation';

interface LoginProps {}

export const Login: FC<LoginProps> = () => {
  const navigate = useNavigate();
  const [loading] = useIsLogin();

  return !loading ? (
    <div className={styles.login}>
      <div className={styles.login__form}>
        <h1>အကောင့်သို့ဝင်ပါ</h1>

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={async ({ email, password }) => {
            await loginUser(email, password);
          }}
          validationSchema={loginSchema}
        >
          {({ errors, handleSubmit }) => {
            return (
              <>
                <InputField label="Email" name="email" type="text" />
                <InputField label="Password" name="password" type="password" />
                <Button
                  variant="contained"
                  className={styles.button}
                  onClick={() => handleSubmit()}
                  disabled={!!(errors.email || errors.password)}
                >
                  Login
                </Button>
                <Divider
                  textAlign={'center'}
                  light={true}
                  className={styles.divider}
                >
                  OR
                </Divider>
                <ContinueWithGoogle />
                <h3
                  onClick={() => {
                    navigate('/register');
                  }}
                >
                  ကောင့်မရှိဘူးလား?
                </h3>
              </>
            );
          }}
        </Formik>
      </div>
    </div>
  ) : (
    <></>
  );
};
