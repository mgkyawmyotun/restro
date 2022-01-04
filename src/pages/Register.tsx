import GoogleIcon from '@mui/icons-material/Google';
import { Button, Divider } from '@mui/material';
import { Formik } from 'formik';
import type { FC } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { InputField } from '../components/InputField';
import { createUser } from '../firebase/auth';
import styles from '../scss/register.module.scss';
import { registerSchema } from '../utils/validation';
interface RegisterProps {}
export const Register: FC<RegisterProps> = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.register}>
      <div className={styles.register__form}>
        <h1>အကောင့်လုပ်ပါ</h1>
        <Formik
          initialValues={{ email: '', password: '', confirm_password: '' }}
          onSubmit={() => {
            console.log('submit');
            createUser('email.com', 'sdfasfd');
            // createUser('', '');
          }}
          validationSchema={registerSchema}
        >
          {({ errors, handleSubmit }) => {
            return (
              <>
                <InputField label="Email" name="email" type="text" />
                <InputField label="Password" name="password" type="password" />
                <InputField
                  label="Confirm Password"
                  name="confirm_password"
                  type="password"
                />
                <Button
                  variant="contained"
                  className={styles.button}
                  onClick={() => handleSubmit()}
                  disabled={
                    !!(
                      errors.email ||
                      errors.confirm_password ||
                      errors.password
                    )
                  }
                >
                  Register
                </Button>
                <Divider
                  textAlign={'center'}
                  light={true}
                  className={styles.divider}
                >
                  OR
                </Divider>
                <Button
                  variant="contained"
                  className={styles.google__button}
                  startIcon={<GoogleIcon />}
                >
                  Continue With Google
                </Button>
              </>
            );
          }}
        </Formik>
        <h3
          onClick={() => {
            navigate('/login');
          }}
        >
          အကောင့်ရှိပြီးသားလား?
        </h3>
      </div>
    </div>
  );
};
