import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { Formik } from 'formik';
import type { FC } from 'react';
import React from 'react';
import styles from '../scss/dashboard.module.scss';
import { InputField } from './InputField';

interface ResDialogProps {
  handleClose: () => void;
  open: boolean;
}
export const ResDialog: FC<ResDialogProps> = ({ handleClose, open }) => {
  return (
    <Dialog
      open={open}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
      className={styles.dialog}
    >
      <DialogTitle className={styles.dialog__title}>
        {'စားစရာအသစ်ထည့်ပါ'}
      </DialogTitle>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async ({ email, password }) => {}}
        // validationSchema={`loginSchema}
      >
        {({ errors, handleSubmit }) => {
          return (
            <>
              <DialogContent aria-label="dialog_content">
                <InputField label="Name" name="name" type="text" />
                <InputField label="Phone" name="phone" type="number" />
                <InputField label="Price" name="price" type="number" />
                <InputField label="Photo URL" name="photo__url" type="text" />
                <h3>OR</h3>
                <Button
                  variant="contained"
                  component="label"
                  aria-label="upload__button"
                >
                  Upload Photo
                  <input type="file" hidden />
                </Button>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="error" variant="contained">
                  Cancel
                </Button>
                <Button
                  onClick={handleClose}
                  color="primary"
                  variant="contained"
                >
                  Create
                </Button>
              </DialogActions>
            </>
          );
        }}
      </Formik>
    </Dialog>
  );
};
